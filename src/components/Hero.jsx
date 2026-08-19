import React, { useState, useEffect } from 'react';

const LOG_STEPS = [
  { text: "$ aether deploy --cluster prod-us-east --mode swarm", type: "cmd" },
  { text: "[00:01] 🚀 Initializing multi-agent topology: 4 Workers + 1 Orchestrator...", type: "info" },
  { text: "[00:02] 🔒 Sandboxing edge sandbox: Isolated Micro-VM initialized", type: "success" },
  { text: "[00:03] ⚡ Router assigned: Ensemble model strategy active (Claude 3.5 + GPT-4o)", type: "info" },
  { text: "[00:04] 🔄 Executing concurrent task: Autonomous Codebase Audit & Optimization", type: "stream" },
  { text: "[00:05] ✔ Task completed in 42ms | Rate: 340 tokens/sec | 0 Vulnerabilities", type: "success" },
  { text: "[00:06] 🟢 Swarm standby: Listening for real-time webhooks...", type: "ready" }
];

export default function Hero() {
  const [displayedLogs, setDisplayedLogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentIndex < LOG_STEPS.length) {
        setDisplayedLogs(prev => [...prev, LOG_STEPS[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Loop back after delay
        setTimeout(() => {
          setDisplayedLogs([]);
          setCurrentIndex(0);
        }, 3000);
      }
    }, 900);

    return () => clearTimeout(timer);
  }, [currentIndex, isPlaying]);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx create-aether-agent@latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero-section">
      <div className="bg-glow-container">
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
      </div>

      <div className="container hero-container">
        {/* Badge */}
        <div className="badge hero-badge">
          <span className="status-dot"></span>
          <span>Announcing Aether 2.0 with Real-Time Swarm Workflows</span>
          <span className="badge-arrow">→</span>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title gradient-text">
          Orchestrate Autonomous AI Swarms at <span className="gradient-text-accent">Production Scale</span>
        </h1>

        {/* Subheading */}
        <p className="hero-description">
          Build, run, and scale self-healing multi-agent clusters with sub-50ms latency, zero-trust edge sandboxing, and real-time observability for modern engineering teams.
        </p>

        {/* Hero CTA Group */}
        <div className="hero-cta-group">
          <a href="#playground" className="btn-primary hero-btn-main">
            <span>Start Building Free</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#features" className="btn-secondary hero-btn-sub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Book Live Demo</span>
          </a>
        </div>

        {/* Quick Command Bar */}
        <div className="command-pill-bar">
          <span className="command-label">$</span>
          <code className="command-code">npx create-aether-agent@latest</code>
          <button className="command-copy-btn" onClick={copyCommand} title="Copy CLI Command">
            {copied ? (
              <span className="copy-success">Copied! ✔</span>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            )}
          </button>
        </div>

        {/* Terminal / Live Code Simulation Window */}
        <div className="hero-terminal-wrapper">
          <div className="terminal-window hero-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot dot-red"></div>
                <div className="terminal-dot dot-yellow"></div>
                <div className="terminal-dot dot-green"></div>
              </div>
              <div className="terminal-title">
                <span className="terminal-icon">⚡</span> aether-agent-swarm v2.4.0 (us-east-1)
              </div>
              <div className="terminal-actions">
                <button 
                  className="terminal-play-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? "Pause Stream" : "Play Stream"}
                >
                  {isPlaying ? "Pause ⏸" : "Resume ▶"}
                </button>
              </div>
            </div>

            <div className="terminal-body">
              {displayedLogs.map((log, i) => (
                <div key={i} className={`terminal-line line-${log.type}`}>
                  {log.text}
                </div>
              ))}
              {isPlaying && (
                <div className="terminal-cursor-line">
                  <span className="terminal-cursor"></span>
                </div>
              )}
            </div>

            {/* Floating Live Metric Cards */}
            <div className="floating-metric metric-left">
              <div className="metric-icon">⚡</div>
              <div className="metric-info">
                <span className="metric-val">12ms</span>
                <span className="metric-lbl">Avg Latency</span>
              </div>
            </div>

            <div className="floating-metric metric-right">
              <div className="metric-icon">🛡️</div>
              <div className="metric-info">
                <span className="metric-val">100%</span>
                <span className="metric-lbl">SOC2 Isolated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 140px;
          padding-bottom: 80px;
          overflow: hidden;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge {
          margin-bottom: 24px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .hero-badge:hover {
          transform: translateY(-2px);
          border-color: rgba(99, 102, 241, 0.6);
        }

        .badge-arrow {
          font-weight: 700;
          color: var(--accent-indigo);
        }

        .hero-title {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1.5px;
          max-width: 950px;
          margin-bottom: 20px;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 720px;
          margin-bottom: 36px;
          line-height: 1.6;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .hero-btn-main {
          padding: 14px 32px;
          font-size: 1rem;
        }

        .hero-btn-sub {
          padding: 14px 28px;
          font-size: 1rem;
        }

        .command-pill-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-subtle);
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.88rem;
          margin-bottom: 50px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .command-label {
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .command-code {
          color: #e2e8f0;
        }

        .command-copy-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 4px;
          transition: color 0.2s;
        }

        .command-copy-btn:hover {
          color: #ffffff;
        }

        .copy-success {
          color: var(--accent-emerald);
          font-weight: 600;
          font-size: 0.8rem;
        }

        .hero-terminal-wrapper {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin-top: 10px;
        }

        .hero-terminal {
          text-align: left;
          min-height: 280px;
          border: 1px solid rgba(99, 102, 241, 0.25);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(99, 102, 241, 0.15);
        }

        .terminal-title {
          font-size: 0.82rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .terminal-play-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          font-size: 0.75rem;
          padding: 3px 10px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .terminal-play-btn:hover {
          background: rgba(255, 255, 255, 0.18);
          color: #fff;
        }

        .terminal-line {
          margin-bottom: 6px;
          word-break: break-all;
        }

        .line-cmd { color: #38bdf8; font-weight: 600; }
        .line-info { color: #94a3b8; }
        .line-success { color: #34d399; font-weight: 500; }
        .line-stream { color: #c084fc; }
        .line-ready { color: #a5b4fc; }

        .terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 15px;
          background: var(--accent-cyan);
          margin-top: 4px;
          animation: blinkCursor 1s infinite;
        }

        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .floating-metric {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          padding: 10px 18px;
          border-radius: var(--radius-md);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          z-index: 10;
        }

        .metric-left {
          bottom: -20px;
          left: -30px;
        }

        .metric-right {
          top: 60px;
          right: -30px;
        }

        .metric-icon {
          font-size: 1.2rem;
        }

        .metric-info {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .metric-val {
          font-weight: 700;
          font-size: 0.95rem;
          color: #ffffff;
        }

        .metric-lbl {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.4rem;
          }
          .hero-description {
            font-size: 1rem;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn-main, .hero-btn-sub {
            width: 100%;
          }
          .floating-metric {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
