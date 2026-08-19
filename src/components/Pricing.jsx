import React, { useState } from 'react';

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(true);

  const PLANS = [
    {
      name: 'Developer',
      tagline: 'Ideal for experimenting and building MVP agent workflows.',
      priceMonthly: 0,
      priceAnnual: 0,
      features: [
        'Up to 100,000 swarm execution steps/mo',
        '2 Concurrent Agent Worker Nodes',
        'Sub-100ms Edge Anycast routing',
        'Community Discord Support',
        '7-day Telemetry Log retention'
      ],
      buttonText: 'Start Free Forever',
      popular: false
    },
    {
      name: 'Pro Swarm',
      tagline: 'For scaling tech startups requiring high speed & zero-trust sandboxes.',
      priceMonthly: 49,
      priceAnnual: 39,
      features: [
        'Up to 5,000,000 swarm execution steps/mo',
        '25 Concurrent Agent Worker Nodes',
        'Sub-50ms Global Anycast routing',
        'Zero-Trust Wasm Micro-VM Sandboxing',
        'OpenTelemetry Datadog integration',
        'Priority Email & Slack Channel'
      ],
      buttonText: 'Start 14-Day Free Trial',
      popular: true
    },
    {
      name: 'Enterprise Cluster',
      tagline: 'Dedicated cloud isolation, custom SLAs, and custom LLM model fine-tuning.',
      priceMonthly: 299,
      priceAnnual: 239,
      features: [
        'Unlimited swarm execution steps',
        'Dedicated Private VPC / On-Prem Kubernetes',
        'Custom Fine-Tuned Model Routers',
        '99.999% Guaranteed SLA Uptime',
        'SOC2 Type II & HIPAA Compliance',
        '24/7 Dedicated Solutions Engineer'
      ],
      buttonText: 'Contact Enterprise Team',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section-padding pricing-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <span className="status-dot"></span>
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="section-title gradient-text">
            Simple Plans for <span className="gradient-text-accent">Teams of Any Size</span>
          </h2>
          <p className="section-subtitle">
            Scale seamlessly from side project to enterprise scale. Pay only for the swarm execution steps you consume.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="billing-toggle-container">
            <span className={`toggle-label ${!annualBilling ? 'active' : ''}`}>Monthly Billing</span>
            <button 
              className={`toggle-switch ${annualBilling ? 'on' : ''}`}
              onClick={() => setAnnualBilling(!annualBilling)}
              aria-label="Toggle annual billing"
            >
              <span className="toggle-handle"></span>
            </button>
            <span className={`toggle-label ${annualBilling ? 'active' : ''}`}>
              Annual Billing <span className="discount-pill">SAVE 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-grid">
          {PLANS.map((plan, i) => {
            const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div 
                key={i} 
                className={`glass-card plan-card ${plan.popular ? 'popular-card' : ''}`}
              >
                {plan.popular && (
                  <div className="popular-ribbon">MOST POPULAR</div>
                )}

                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-tagline">{plan.tagline}</p>
                </div>

                <div className="plan-price-row">
                  <span className="currency">$</span>
                  <span className="price-amount">{price}</span>
                  <span className="price-period">/ month</span>
                </div>
                {annualBilling && price > 0 && (
                  <span className="billed-annually-note">Billed annually (${price * 12}/yr)</span>
                )}

                <a 
                  href="#playground" 
                  className={plan.popular ? 'btn-primary plan-btn' : 'btn-secondary plan-btn'}
                >
                  {plan.buttonText}
                </a>

                <div className="plan-features">
                  <span className="features-title">WHAT'S INCLUDED:</span>
                  {plan.features.map((feat, f) => (
                    <div key={f} className="feature-check-item">
                      <span className="check-icon">✔</span>
                      <span className="feature-text">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .pricing-section {
          position: relative;
        }

        .billing-toggle-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 32px;
        }

        .toggle-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .toggle-label.active {
          color: #ffffff;
        }

        .discount-pill {
          font-size: 0.72rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 12px;
          background: rgba(16, 185, 129, 0.2);
          color: var(--accent-emerald);
          border: 1px solid rgba(16, 185, 129, 0.4);
        }

        .toggle-switch {
          width: 52px;
          height: 28px;
          border-radius: 14px;
          background: #1e293b;
          border: 1px solid var(--border-subtle);
          cursor: pointer;
          position: relative;
          transition: background 0.3s ease;
        }

        .toggle-switch.on {
          background: var(--accent-indigo);
        }

        .toggle-handle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #ffffff;
          position: absolute;
          top: 2px;
          left: 2px;
          transition: transform 0.3s ease;
        }

        .toggle-switch.on .toggle-handle {
          transform: translateX(24px);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 50px;
          align-items: stretch;
        }

        .plan-card {
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .popular-card {
          border-color: var(--border-glow);
          box-shadow: 0 0 35px rgba(99, 102, 241, 0.25);
          background: rgba(17, 24, 39, 0.85);
          transform: translateY(-8px);
        }

        .popular-card:hover {
          transform: translateY(-12px);
        }

        .popular-ribbon {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 4px 16px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.5);
        }

        .plan-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .plan-tagline {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.4;
          min-height: 40px;
          margin-bottom: 24px;
        }

        .plan-price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 4px;
        }

        .currency {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .price-amount {
          font-size: 3.2rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -1px;
          line-height: 1;
        }

        .price-period {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .billed-annually-note {
          font-size: 0.78rem;
          color: var(--accent-emerald);
          margin-bottom: 24px;
        }

        .plan-btn {
          width: 100%;
          padding: 14px;
          margin-top: 24px;
          margin-bottom: 32px;
        }

        .plan-features {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
        }

        .features-title {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--text-dim);
          margin-bottom: 4px;
        }

        .feature-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
          color: #cbd5e1;
        }

        .check-icon {
          color: var(--accent-emerald);
          font-weight: 800;
        }

        @media (max-width: 960px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }
          .popular-card {
            transform: none;
          }
          .popular-card:hover {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </section>
  );
}
