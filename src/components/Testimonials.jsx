import React from 'react';

const REVIEWS = [
  {
    name: 'Elena Rostova',
    role: 'VP of Platform Engineering',
    company: 'FinTech Global',
    avatar: 'ER',
    stars: 5,
    quote: 'AetherAI replaced 14 fragile custom Python scripts with a single resilient multi-agent topology. Our edge latency dropped from 400ms to 38ms overnight.',
    tag: 'Verified Customer'
  },
  {
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'ScaleX Data',
    avatar: 'MV',
    stars: 5,
    quote: 'The zero-trust Wasm sandbox gives our security team total peace of mind. Running LLM tool invocations isolated at the edge is game-changing.',
    tag: 'Verified Customer'
  },
  {
    name: 'Sarah Chen',
    role: 'Principal AI Architect',
    company: 'CloudCloud Inc.',
    avatar: 'SC',
    stars: 5,
    quote: 'The real-time OpenTelemetry tracing allowed us to pinpoint agent bottleneck steps in seconds. We saved $12,000/month in LLM token costs.',
    tag: 'Verified Customer'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <span className="status-dot"></span>
            <span>PROVEN IN PRODUCTION</span>
          </div>
          <h2 className="section-title gradient-text">
            Loved by <span className="gradient-text-accent">Platform & AI Teams</span>
          </h2>
          <p className="section-subtitle">
            See how high-growth tech companies rely on AetherAI to orchestrate autonomous workflows safely at scale.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {REVIEWS.map((review, i) => (
            <div key={i} className="glass-card review-card">
              {/* Top rating & tag */}
              <div className="review-top">
                <div className="stars-row">
                  {[...Array(review.stars)].map((_, s) => (
                    <span key={s} className="star-icon">★</span>
                  ))}
                </div>
                <span className="verified-tag">{review.tag}</span>
              </div>

              {/* Quote */}
              <p className="review-quote">"{review.quote}"</p>

              {/* User Bio */}
              <div className="review-bio">
                <div className="avatar-circle">{review.avatar}</div>
                <div className="bio-text">
                  <span className="bio-name">{review.name}</span>
                  <span className="bio-role">{review.role} · <strong className="bio-company">{review.company}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          position: relative;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .review-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .review-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .stars-row {
          color: #fbbf24;
          font-size: 1.1rem;
          letter-spacing: 2px;
        }

        .verified-tag {
          font-size: 0.72rem;
          padding: 3px 10px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.12);
          color: #a5b4fc;
          font-weight: 600;
        }

        .review-quote {
          font-size: 1.02rem;
          color: #e2e8f0;
          line-height: 1.6;
          margin-bottom: 30px;
          font-style: italic;
        }

        .review-bio {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .avatar-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .bio-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .bio-name {
          font-weight: 700;
          font-size: 0.98rem;
          color: #ffffff;
        }

        .bio-role {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .bio-company {
          color: var(--accent-cyan);
        }

        @media (max-width: 900px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
