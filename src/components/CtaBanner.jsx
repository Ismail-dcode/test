import React, { useState } from 'react';

export default function CtaBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section className="section-padding cta-section">
      <div className="container">
        <div className="glass-card cta-box">
          <div className="cta-glow"></div>

          <div className="cta-content">
            <h2 className="cta-title gradient-text">
              Ready to Upgrade to Autonomous AI Infrastructure?
            </h2>
            <p className="cta-subtitle">
              Join 150,000+ developers building resilient multi-agent swarms. Spin up your first production agent cluster in under 3 minutes.
            </p>

            <form className="cta-form" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Enter your work email..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary cta-submit-btn">
                {submitted ? 'Access Granted! ✔' : 'Start Free Trial →'}
              </button>
            </form>

            <div className="cta-trust-row">
              <span>⚡ Free 14-day Pro Trial</span>
              <span>🔒 SOC2 Type II Certified</span>
              <span>💳 No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          position: relative;
        }

        .cta-box {
          position: relative;
          padding: 70px 40px;
          border-radius: var(--radius-lg);
          border-color: rgba(99, 102, 241, 0.3);
          background: linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        }

        .cta-glow {
          position: absolute;
          top: -50%;
          left: 20%;
          width: 60%;
          height: 200%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 60%);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-title {
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: -1px;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .cta-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 36px;
          line-height: 1.6;
        }

        .cta-form {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 520px;
          margin-bottom: 24px;
        }

        .cta-form input {
          flex: 1;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid var(--border-subtle);
          color: #ffffff;
          padding: 14px 20px;
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
        }

        .cta-form input:focus {
          border-color: var(--accent-indigo);
        }

        .cta-submit-btn {
          padding: 14px 24px;
          white-space: nowrap;
        }

        .cta-trust-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          font-size: 0.85rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        @media (max-width: 650px) {
          .cta-form {
            flex-direction: column;
          }
          .cta-form input, .cta-submit-btn {
            width: 100%;
          }
          .cta-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
