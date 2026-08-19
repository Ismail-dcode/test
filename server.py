import mimetypes
import os
import socket


class BrowserRequest():

    def __init__(self, data: bytes):
        lines = [d.strip() for d in data.decode(errors='ignore').split("\n") if d.strip()]
        if not lines:
            self.method, self.path, self.http_version = "GET", "/", "HTTP/1.1"
            self.info = {}
            return

        # First line takes the form of: GET /file/path/ HTTP/1.1
        first_line = lines.pop(0).split(" ")
        self.method = first_line[0] if len(first_line) > 0 else "GET"
        self.path = first_line[1] if len(first_line) > 1 else "/"
        self.http_version = first_line[2] if len(first_line) > 2 else "HTTP/1.1"

        self.info = {}
        for l in lines:
            if ': ' in l:
                k, v = l.split(': ', 1)
                self.info[k] = v

    def __repr__(self) -> str:
        return "<BrowserRequest {method} {path} {http_version}>".format(
            method=self.method, path=self.path, http_version=self.http_version)

    def __getattr__(self, name: str):
        key = "-".join([n.capitalize() for n in name.split('_')])
        return self.info.get(key, "Unknown")


class ServerSocket():
    """Simplified interface for interacting with a web server socket"""

    def __init__(self, host='', port=8000, buffer_size=1024, max_queued_connections=5):
        self._connection = None
        self._socket = None
        self.host = host
        self.port = port
        self.buffer_size = buffer_size
        self.max_queued_connections = max_queued_connections

    def __repr__(self) -> str:
        status = 'closed' if self._socket is None else 'open'
        return "<{status} ServerSocket {host}:{port}>".format(
            status=status, host=self.host, port=self.port)

    def __enter__(self):
        self.open()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.close()

    def open(self):
        if self._socket is not None:
            return
        self._socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self._socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            self._socket.bind((self.host, self.port))
        except Exception:
            self.close()
            raise

    def close(self):
        if self._connection:
            try:
                self._connection.close()
            except Exception:
                pass
            self._connection = None
        if self._socket:
            try:
                self._socket.close()
            except Exception:
                pass
            self._socket = None

    def listen(self) -> BrowserRequest:
        assert self._socket is not None, "ServerSocket must be open to listen for data"
        self._socket.listen(self.max_queued_connections)
        self._connection, _ = self._socket.accept()
        data = self._connection.recv(self.buffer_size)
        return BrowserRequest(data)

    def respond(self, data: bytes):
        assert self._socket is not None, "ServerSocket must be open to respond"
        if self._connection:
            self._connection.send(data)
            self._connection.close()
            self._connection = None


class SimpleServer():
    """A Simple webserver implemented in Python. NOT FOR PRODUCTION USE"""

    STATUSES = {
        200: 'OK',
        404: 'File Not Found',
    }
    response_404 = '<html><body><h1>404 File Not Found</h1></body></html>'
    log_format = "{status_code} - {method} {path} ({user_agent})"

    def __init__(self, port=8000, homedir=os.path.curdir, page404=None):
        """
        Initialize a webserver

        port    -- port to serve requests from
        homedir -- path to serve files out of
        page404 -- optional path to HTML file for 404 errors
        """
        self.socket = ServerSocket(port=port)
        self.homedir = os.path.abspath(homedir)
        if page404 and os.path.exists(page404):
            with open(page404, 'r', encoding='utf-8') as f:
                self.response_404 = f.read()

    def log(self, msg: str):
        print(msg)

    def serve(self):
        self.socket.open()
        self.log('Opening socket connection {}:{} in {}'.format(
            self.socket.host or 'localhost', self.socket.port, self.homedir))
        try:
            while True:
                self.serve_request()
        except KeyboardInterrupt:
            self.log('\nStopping server...')
        finally:
            self.stop()

    def stop(self):
        self.socket.close()

    def serve_request(self):
        try:
            request = self.socket.listen()
        except Exception:
            return

        path = request.path
        target_path = os.path.join(self.homedir, path.lstrip('/'))

        if os.path.isdir(target_path):
            path = os.path.join(path, 'index.html')

        body, status_code = self.load_file(path)
        header = self.get_header(status_code, path)
        try:
            self.socket.respond((header + body).encode('utf-8'))
        except Exception:
            pass

        self.log(self.log_format.format(status_code=status_code,
                                        method=request.method,
                                        path=request.path,
                                        user_agent=getattr(request, 'user_agent', 'Unknown')))

    def get_header(self, status_code: int, path: str):
        _, file_ext = os.path.splitext(path)
        content_type = mimetypes.types_map.get(file_ext.lower(), 'text/html; charset=utf-8')
        return "\r\n".join([
            "HTTP/1.1 {} {}".format(status_code, self.STATUSES.get(status_code, 'OK')),
            "Content-Type: {}".format(content_type),
            "Server: SimplePython Server",
            "Connection: close",
            "",
            ""
        ])

    def load_file(self, path):
        full_path = os.path.join(self.homedir, path.lstrip('/'))
        try:
            if os.path.isfile(full_path):
                with open(full_path, 'r', encoding='utf-8') as f:
                    return f.read(), 200
            else:
                return self.response_404, 404
        except Exception:
            return self.response_404, 404


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description='Runs a simple Python server. Not for production')
    parser.add_argument('port', type=int, nargs='?', default=8000, help='port to run the server on (default: 8000)')
    args = parser.parse_args()
    server = SimpleServer(args.port)
    server.serve()

