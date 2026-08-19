import React, { useState } from 'react';

const FAQS = [
  {
    q: 'How does AetherAI ensure zero-trust agent sandboxing?',
    a: 'Every agent tool call and untrusted code execution takes place in an ephemeral WebAssembly (Wasm) Micro-VM sandbox. Sandboxes are provisioned in milliseconds, strictly isolated at the kernel level, and enforcing strict CPU, memory, and network permissions.'
  },
  {
    q: 'What LLM models and providers are supported out of the box?',
    a: 'AetherAI natively supports Anthropic (Claude 3.5 Sonnet, Haiku), OpenAI (GPT-4o, o1-preview), Google Gemini (1.5 Pro, Flash), Mistral, and self-hosted open models via vLLM / Ollama. You can also define custom fallback routing policies.'
  },
  {
    q: 'Can we self-host AetherAI on our own private AWS or GCP cloud?',
    a: 'Yes! Our Enterprise plan includes Helm charts and Terraform modules to deploy the entire Aether orchestration control plane into your private VPC, Kubernetes cluster, or on-premise hardware.'
  },
  {
    q: 'What happens if a primary model provider goes down or throttles rate limits?',
    a: 'AetherAI features automated multi-provider failover. If Claude or GPT-4 encounters a 5xx rate limit or spike in latency, the router instantly reroutes pending swarm execution tasks to an active backup model with identical capability ratings.'
  },
  {
    q: 'Is AetherAI SOC2 Type II and HIPAA compliant?',
    a: 'Yes. All data in transit is encrypted with TLS 1.3, and data at rest uses AES-256 encryption. Zero telemetry data is ever used to train public models. We sign standard BAAs for HIPAA compliance on Enterprise accounts.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    item => item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge">
            <span className="status-dot"></span>
            <span>GOT QUESTIONS?</span>
          </div>
          <h2 className="section-title gradient-text">
            Frequently Asked <span className="gradient-text-accent">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about setting up resilient autonomous agent infrastructure.
          </p>

          {/* FAQ Search Bar */}
          <div className="faq-search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search questions (e.g. sandboxing, self-host, LLMs)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`glass-card faq-card ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="faq-question-row">
                    <h3 className="faq-question">{faq.q}</h3>
                    <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && (
                    <div className="faq-answer-row">
                      <p className="faq-answer">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="faq-empty">
              No matching questions found for "{searchQuery}".
            </div>
          )}
        </div>
      </div>

      <style>{`
        .faq-section {
          position: relative;
        }

        .faq-search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 500px;
          margin: 24px auto 0 auto;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-subtle);
          padding: 10px 18px;
          border-radius: var(--radius-full);
          color: var(--text-muted);
        }

        .faq-search-box input {
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          font-family: var(--font-sans);
          font-size: 0.92rem;
          width: 100%;
        }

        .faq-list {
          max-width: 840px;
          margin: 40px auto 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-card {
          padding: 24px 30px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .faq-card:hover {
          border-color: rgba(99, 102, 241, 0.35);
        }

        .faq-card.open {
          border-color: var(--accent-indigo);
          background: rgba(17, 24, 39, 0.8);
        }

        .faq-question-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .faq-question {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .faq-toggle-icon {
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--accent-indigo);
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .faq-answer-row {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .faq-answer {
          font-size: 0.98rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .faq-empty {
          text-align: center;
          color: var(--text-muted);
          padding: 40px;
        }
      `}</style>
    </section>
  );
}
