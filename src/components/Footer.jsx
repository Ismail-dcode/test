import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#" className="brand-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="logo-text">Aether<span className="logo-accent">AI</span></span>
            </a>
            <p className="footer-tagline">
              Autonomous AI agent orchestration platform for modern engineering teams. Zero-trust sandboxing with sub-50ms edge execution.
            </p>
            
            <div className="system-status-card">
              <span className="status-dot"></span>
              <span className="status-text">All Systems Operational (99.999% SLA)</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-columns">
            <div className="footer-col">
              <h4 className="col-title">PRODUCT</h4>
              <a href="#features">Swarm Consensus</a>
              <a href="#playground">Live Demo</a>
              <a href="#features">Wasm Sandboxes</a>
              <a href="#pricing">Pricing</a>
              <a href="#features">OpenTelemetry Traces</a>
            </div>

            <div className="footer-col">
              <h4 className="col-title">DEVELOPERS</h4>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">CLI Reference</a>
              <a href="#">GitHub SDKs</a>
              <a href="#">System Architecture</a>
            </div>

            <div className="footer-col">
              <h4 className="col-title">SOLUTIONS</h4>
              <a href="#">Autonomous Refactoring</a>
              <a href="#">Kubernetes Ops</a>
              <a href="#">Financial Telemetry</a>
              <a href="#">Customer Support Swarms</a>
              <a href="#">Enterprise Security</a>
            </div>

            <div className="footer-col">
              <h4 className="col-title">COMPANY</h4>
              <a href="#">About Us</a>
              <a href="#">Careers <span className="hiring-badge">HIRING</span></a>
              <a href="#">Blog & Research</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} AetherAI Inc. All rights reserved. Built with React & Vite.
          </p>

          <div className="social-links">
            <a href="#" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="Discord">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.893.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: #04060a;
          border-top: 1px solid var(--border-subtle);
          padding-top: 80px;
          padding-bottom: 40px;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-tagline {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .system-status-card {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 14px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: var(--radius-sm);
          font-size: 0.82rem;
          color: var(--accent-emerald);
          font-weight: 600;
          width: fit-content;
        }

        .footer-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .col-title {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .footer-col a {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-col a:hover {
          color: #ffffff;
        }

        .hiring-badge {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 1px 6px;
          border-radius: 8px;
          background: var(--accent-indigo);
          color: #fff;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .copyright-text {
          font-size: 0.85rem;
          color: var(--text-dim);
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .social-links a {
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .social-links a:hover {
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
          .footer-columns {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
          .footer-columns {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
