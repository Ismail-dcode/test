import React from 'react';

const LOGOS = [
  { name: 'STRIPE', icon: '💳' },
  { name: 'VERCEL', icon: '▲' },
  { name: 'SUPABASE', icon: '⚡' },
  { name: 'OPENAI', icon: '🤖' },
  { name: 'LINEAR', icon: '📐' },
  { name: 'DATADOG', icon: '📊' }
];

const METRICS = [
  { value: '10B+', label: 'Monthly Swarm Requests', change: '+142% MoM' },
  { value: '99.999%', label: 'Enterprise Uptime SLA', change: 'Zero Downtime' },
  { value: '45ms', label: 'Median Edge Latency', change: 'Global Anycast' },
  { value: '150k+', label: 'Active Engineers', change: 'Community Driven' }
];

export default function ClientLogos() {
  return (
    <section className="logos-section">
      <div className="container">
        <p className="logos-title">TRUSTED BY INNOVATIVE ENGINEERING TEAMS WORLDWIDE</p>
        
        <div className="logos-grid">
          {LOGOS.map((company, index) => (
            <div key={index} className="logo-card">
              <span className="logo-symbol">{company.icon}</span>
              <span className="logo-name">{company.name}</span>
            </div>
          ))}
        </div>

        {/* Metrics Bar */}
        <div className="glass-card metrics-bar">
          {METRICS.map((item, idx) => (
            <div key={idx} className="metric-item">
              <div className="metric-header">
                <span className="metric-number gradient-text-accent">{item.value}</span>
                <span className="metric-badge">{item.change}</span>
              </div>
              <span className="metric-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logos-section {
          padding: 40px 0 80px 0;
          position: relative;
        }

        .logos-title {
          text-align: center;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--text-dim);
          margin-bottom: 30px;
        }

        .logos-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 60px;
        }

        .logo-card {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 10px 22px;
          border-radius: var(--radius-sm);
          opacity: 0.7;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .logo-card:hover {
          opacity: 1;
          border-color: rgba(99, 102, 241, 0.4);
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
        }

        .logo-symbol {
          font-size: 1.1rem;
        }

        .logo-name {
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 1px;
          color: var(--text-muted);
        }

        .metrics-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 30px 40px;
          gap: 20px;
          border-color: rgba(99, 102, 241, 0.2);
        }

        .metric-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          padding-right: 20px;
        }

        .metric-item:last-child {
          border-right: none;
          padding-right: 0;
        }

        .metric-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .metric-number {
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .metric-badge {
          font-size: 0.72rem;
          padding: 2px 8px;
          border-radius: 12px;
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-emerald);
          font-weight: 600;
        }

        .metric-label {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .metrics-bar {
            grid-template-columns: repeat(2, 1fr);
          }
          .metric-item:nth-child(2) {
            border-right: none;
          }
        }

        @media (max-width: 550px) {
          .metrics-bar {
            grid-template-columns: 1fr;
          }
          .metric-item {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            padding-bottom: 16px;
            padding-right: 0;
          }
          .metric-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
