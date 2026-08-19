import React, { useState } from 'react';

const WORKFLOW_PRESETS = [
  {
    id: 'code-refactor',
    title: 'Code Refactor & Audit',
    icon: '🛠️',
    description: 'Scan codebase for vulnerabilities, update outdated dependencies, and generate GitHub PR.',
    output: [
      { text: '[00:00.12] 🔎 AST Parsing 142 files in /src...', status: 'done' },
      { text: '[00:00.34] ⚠️ Security Warning: Unsanitized query string on line 84 in auth.controller.ts', status: 'warn' },
      { text: '[00:00.55] 🤖 Agent Swarm spawned: Applying Parameterized SQL binding...', status: 'agent' },
      { text: '[00:00.89] ✔ Created PR #412: "Fix SQL injection & bump react to v18.3.1"', status: 'success' }
    ],
    stats: { time: '890ms', tokens: '1,420', cost: '$0.0028', agents: 3 }
  },
  {
    id: 'k8s-deploy',
    title: 'Kubernetes Multi-Region Deploy',
    icon: '☁️',
    description: 'Provision AWS EKS cluster, setup ingress SSL certificates, and configure auto-scaling.',
    output: [
      { text: '[00:00.08] 📦 Terraform state verified (prod-us-east-1)', status: 'done' },
      { text: '[00:00.22] 🔐 Let\'s Encrypt TLS certificate generated for *.aether.io', status: 'done' },
      { text: '[00:00.41] 🔄 Rolling update: 12 pod replicas updated with zero downtime', status: 'agent' },
      { text: '[00:00.67] ✔ Healthcheck passed 100% on 3 availability zones', status: 'success' }
    ],
    stats: { time: '670ms', tokens: '980', cost: '$0.0019', agents: 4 }
  },
  {
    id: 'data-pipeline',
    title: 'Real-Time Financial Telemetry',
    icon: '📊',
    description: 'Stream tick data from WebSocket feed, compute VaR risk metrics, and trigger Slack alerts.',
    output: [
      { text: '[00:00.05] 📡 Subscribed to NASDAQ WebSocket feed (5,000 events/sec)', status: 'done' },
      { text: '[00:00.18] 🧮 Monte Carlo simulation running across 10,000 iterations...', status: 'agent' },
      { text: '[00:00.32] 📈 Portfolio Risk Index calculated: 0.14 (Safe Threshold)', status: 'done' },
      { text: '[00:00.45] ✔ Posted executive telemetry report to #engineering-alerts', status: 'success' }
    ],
    stats: { time: '450ms', tokens: '2,100', cost: '$0.0041', agents: 5 }
  }
];

export default function InteractivePlayground() {
  const [selectedPreset, setSelectedPreset] = useState(WORKFLOW_PRESETS[0]);
  const [topology, setTopology] = useState('Fast Ensemble');
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setHasRun(false);
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 1200);
  };

  return (
    <section id="playground" className="section-padding playground-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge badge-emerald">
            <span className="status-dot"></span>
            <span>LIVE INTERACTIVE PLAYGROUND</span>
          </div>
          <h2 className="section-title gradient-text">
            Test Drive <span className="gradient-text-purple">Aether Swarm Engine</span>
          </h2>
          <p className="section-subtitle">
            Select a sample workflow below, configure agent parameters, and observe real-time multi-agent execution telemetry.
          </p>
        </div>

        {/* Playground Container */}
        <div className="glass-card playground-box">
          {/* Left Column: Preset Selector & Controls */}
          <div className="playground-controls">
            <h3 className="controls-heading">Select Workflow Preset</h3>
            
            <div className="presets-list">
              {WORKFLOW_PRESETS.map((preset) => (
                <div
                  key={preset.id}
                  className={`preset-card ${selectedPreset.id === preset.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedPreset(preset);
                    setHasRun(false);
                  }}
                >
                  <span className="preset-icon">{preset.icon}</span>
                  <div className="preset-text">
                    <span className="preset-title">{preset.title}</span>
                    <span className="preset-desc">{preset.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Config Controls */}
            <div className="config-group">
              <label className="config-label">Model Ensemble Strategy</label>
              <select 
                className="config-select"
                value={topology}
                onChange={(e) => setTopology(e.target.value)}
              >
                <option value="Fast Ensemble">⚡ Fast Ensemble (Sub-50ms)</option>
                <option value="High Accuracy">🧠 High Accuracy (Reasoning Heavy)</option>
                <option value="Strict Sandbox">🛡️ Zero-Trust Strict Sandbox</option>
              </select>
            </div>

            {/* Run Button */}
            <button 
              className="btn-primary run-btn"
              onClick={handleRun}
              disabled={isRunning}
            >
              {isRunning ? (
                <>
                  <span className="spinner"></span>
                  <span>Executing Swarm...</span>
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  <span>Run Workflow Swarm</span>
                </>
              )}
            </button>
          </div>

          {/* Right Column: Execution Output View */}
          <div className="playground-output">
            <div className="output-header">
              <div className="output-status">
                <span className={`status-pill ${isRunning ? 'running' : 'ready'}`}>
                  {isRunning ? 'EXECUTING SWARM...' : 'READY TO RUN'}
                </span>
                <span className="topology-badge">{topology}</span>
              </div>
              <div className="output-meta">
                <span>Agents: {selectedPreset.stats.agents}</span>
              </div>
            </div>

            {/* Terminal Log Console */}
            <div className="output-console">
              {isRunning ? (
                <div className="console-loading">
                  <div className="loader-orbit"></div>
                  <p>Orchestrating agent swarm nodes...</p>
                </div>
              ) : (
                <div className="console-logs">
                  {selectedPreset.output.map((line, idx) => (
                    <div key={idx} className={`console-line line-${line.status}`}>
                      {line.text}
                    </div>
                  ))}
                  {hasRun && (
                    <div className="console-done-banner">
                      ✔ Swarm execution finished cleanly with zero errors.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Execution Stats Footer */}
            <div className="output-stats-footer">
              <div className="stat-pill">
                <span className="stat-name">Latency</span>
                <span className="stat-value">{selectedPreset.stats.time}</span>
              </div>
              <div className="stat-pill">
                <span className="stat-name">Tokens</span>
                <span className="stat-value">{selectedPreset.stats.tokens}</span>
              </div>
              <div className="stat-pill">
                <span className="stat-name">Est. Cost</span>
                <span className="stat-value">{selectedPreset.stats.cost}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .playground-section {
          position: relative;
        }

        .playground-box {
          display: grid;
          grid-template-columns: 420px 1fr;
          padding: 0;
          overflow: hidden;
          border-color: rgba(99, 102, 241, 0.25);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .playground-controls {
          padding: 32px;
          border-right: 1px solid var(--border-subtle);
          background: rgba(11, 15, 25, 0.6);
        }

        .controls-heading {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .presets-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .preset-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .preset-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(99, 102, 241, 0.4);
        }

        .preset-card.active {
          background: rgba(99, 102, 241, 0.12);
          border-color: var(--accent-indigo);
        }

        .preset-icon {
          font-size: 1.4rem;
        }

        .preset-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .preset-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: #ffffff;
        }

        .preset-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .config-group {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .config-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .config-select {
          background: #0f172a;
          border: 1px solid var(--border-subtle);
          color: #ffffff;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          cursor: pointer;
          outline: none;
        }
        .config-select:focus {
          border-color: var(--accent-indigo);
        }

        .run-btn {
          width: 100%;
          padding: 14px;
          font-size: 0.95rem;
        }

        /* Right column output */
        .playground-output {
          display: flex;
          flex-direction: column;
          background: #080c14;
        }

        .output-header {
          padding: 20px 24px;
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #0d121f;
        }

        .output-status {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-pill {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 4px 10px;
          border-radius: 12px;
        }

        .status-pill.ready {
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-emerald);
        }

        .status-pill.running {
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
        }

        .topology-badge {
          font-size: 0.78rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 3px 10px;
          border-radius: 6px;
        }

        .output-meta {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .output-console {
          flex: 1;
          padding: 28px;
          font-family: var(--font-mono);
          font-size: 0.88rem;
          min-height: 280px;
          overflow-y: auto;
        }

        .console-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 16px;
          color: var(--text-muted);
        }

        .loader-orbit {
          width: 36px;
          height: 36px;
          border: 3px solid rgba(99, 102, 241, 0.2);
          border-top-color: var(--accent-indigo);
          border-radius: 50%;
          animation: spin 0.8s infinite linear;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .console-logs {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .console-line {
          line-height: 1.5;
        }

        .line-done { color: var(--text-muted); }
        .line-warn { color: #fbbf24; font-weight: 500; }
        .line-agent { color: #c084fc; font-weight: 600; }
        .line-success { color: #34d399; font-weight: 600; }

        .console-done-banner {
          margin-top: 16px;
          padding: 10px 14px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 6px;
          color: #34d399;
          font-size: 0.85rem;
        }

        .output-stats-footer {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 16px 24px;
          background: #0b0f19;
          border-top: 1px solid var(--border-subtle);
        }

        .stat-pill {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat-name {
          font-size: 0.72rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-value {
          font-weight: 700;
          font-size: 0.95rem;
          color: #ffffff;
          font-family: var(--font-mono);
        }

        .spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s infinite linear;
        }

        @media (max-width: 900px) {
          .playground-box {
            grid-template-columns: 1fr;
          }
          .playground-controls {
            border-right: none;
            border-bottom: 1px solid var(--border-subtle);
          }
        }
      `}</style>
    </section>
  );
}
