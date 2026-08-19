import React from 'react';

const FEATURES = [
  {
    size: 'large',
    tag: 'CORE ENGINE',
    title: 'Autonomous Swarm Consensus',
    description: 'Dispatch complex tasks across multi-agent clusters. Orchestrators automatically split work, delegate sub-tasks to specialized models, and verify outputs via cryptographic consensus.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
    previewType: 'nodes'
  },
  {
    size: 'medium',
    tag: 'LATENCY ENGINE',
    title: 'Sub-50ms Edge Anycast',
    description: 'Execute agent workflows within 300+ global edge locations. Minimal network hops with streaming token serialization.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    previewType: 'speed'
  },
  {
    size: 'medium',
    tag: 'SECURITY & GOVERNANCE',
    title: 'Zero-Trust Wasm Sandboxes',
    description: 'Every LLM tool call runs inside isolated WebAssembly containers with memory limits, permission boundaries, and audit logging.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    previewType: 'shield'
  },
  {
    size: 'large',
    tag: 'OBSERVABILITY',
    title: 'OpenTelemetry Spans & Real-Time Tracing',
    description: 'Trace step-by-step reasoning chains, token costs, tool calls, and model latency with zero setup. Integrates with Datadog & Jaeger.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    previewType: 'traces'
  }
];

export default function BentoFeatures() {
  return (
    <section id="features" className="section-padding bento-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <span className="status-dot"></span>
            <span>NEXT-GEN ARCHITECTURE</span>
          </div>
          <h2 className="section-title gradient-text">
            Engineered for <span className="gradient-text-accent">Mission-Critical AI Swarms</span>
          </h2>
          <p className="section-subtitle">
            Built from the ground up for resilience, safety, and insane speed. Stop managing fragile scripts and upgrade to enterprise agent infrastructure.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {FEATURES.map((item, i) => (
            <div key={i} className={`glass-card bento-card bento-${item.size}`}>
              <div className="card-top">
                <div className="feature-icon">{item.icon}</div>
                <span className="feature-tag">{item.tag}</span>
              </div>

              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.description}</p>

              {/* Dynamic Visual Mockup inside card */}
              <div className="card-visual-container">
                {item.previewType === 'nodes' && (
                  <div className="visual-nodes-preview">
                    <div className="node node-main">Orchestrator</div>
                    <div className="node-line"></div>
                    <div className="nodes-children">
                      <div className="node node-sub">Code Agent</div>
                      <div className="node node-sub">Security Bot</div>
                      <div className="node node-sub">QA Tester</div>
                    </div>
                  </div>
                )}

                {item.previewType === 'speed' && (
                  <div className="visual-speed-preview">
                    <div className="speed-bar">
                      <div className="speed-fill"></div>
                    </div>
                    <div className="speed-labels">
                      <span>Response Time</span>
                      <span className="speed-highlight">18ms TTFT</span>
                    </div>
                  </div>
                )}

                {item.previewType === 'shield' && (
                  <div className="visual-shield-preview">
                    <span className="shield-status">✔ Wasm Memory Isolated</span>
                    <span className="shield-badge">SOC2 Type II</span>
                  </div>
                )}

                {item.previewType === 'traces' && (
                  <div className="visual-traces-preview">
                    <div className="trace-row">
                      <span className="trace-label">llm_prompt_call</span>
                      <div className="trace-bar bar-1">12ms</div>
                    </div>
                    <div className="trace-row">
                      <span className="trace-label">wasm_tool_exec</span>
                      <div className="trace-bar bar-2">8ms</div>
                    </div>
                    <div className="trace-row">
                      <span className="trace-label">consensus_verify</span>
                      <div className="trace-bar bar-3">4ms</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bento-section {
          position: relative;
        }

        .section-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 60px auto;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: -1px;
          margin: 16px 0;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }

        .bento-card {
          padding: 36px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .bento-large {
          grid-column: span 7;
        }

        .bento-medium {
          grid-column: span 5;
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-indigo);
        }

        .feature-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--accent-cyan);
        }

        .feature-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .feature-desc {
          font-size: 0.98rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .card-visual-container {
          margin-top: auto;
          background: rgba(9, 13, 22, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-sm);
          padding: 18px;
        }

        /* Node visual preview */
        .visual-nodes-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .node {
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: var(--font-mono);
        }

        .node-main {
          background: rgba(99, 102, 241, 0.25);
          border: 1px solid var(--accent-indigo);
          color: #fff;
        }

        .node-line {
          width: 2px;
          height: 12px;
          background: var(--accent-indigo);
        }

        .nodes-children {
          display: flex;
          gap: 10px;
        }

        .node-sub {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
        }

        /* Speed visual preview */
        .visual-speed-preview {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .speed-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .speed-fill {
          width: 85%;
          height: 100%;
          background: linear-gradient(90deg, var(--accent-indigo), var(--accent-cyan));
        }

        .speed-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .speed-highlight {
          color: var(--accent-cyan);
          font-weight: 700;
        }

        /* Shield visual preview */
        .visual-shield-preview {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .shield-status {
          color: var(--accent-emerald);
          font-weight: 600;
        }

        .shield-badge {
          background: rgba(168, 85, 247, 0.15);
          border: 1px solid rgba(168, 85, 247, 0.3);
          color: #d8b4fe;
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        /* Traces visual preview */
        .visual-traces-preview {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
        }

        .trace-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .trace-label {
          color: var(--text-muted);
          width: 140px;
        }

        .trace-bar {
          padding: 2px 8px;
          border-radius: 4px;
          color: #fff;
          font-size: 0.72rem;
        }

        .bar-1 { background: rgba(99, 102, 241, 0.4); width: 60%; }
        .bar-2 { background: rgba(6, 182, 212, 0.4); width: 40%; }
        .bar-3 { background: rgba(16, 185, 129, 0.4); width: 25%; }

        @media (max-width: 992px) {
          .bento-large, .bento-medium {
            grid-column: span 12;
          }
        }
      `}</style>
    </section>
  );
}
