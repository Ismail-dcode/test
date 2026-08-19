import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" width="22" height="22" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="logo-text">Aether<span className="logo-accent">AI</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links">
          <a href="#features" className="nav-item">Features</a>
          <a href="#playground" className="nav-item">Live Demo</a>
          <a href="#testimonials" className="nav-item">Customers</a>
          <a href="#pricing" className="nav-item">Pricing</a>
          <a href="#faq" className="nav-item">FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <a href="#pricing" className="btn-secondary nav-btn-login">Sign In</a>
          <a href="#playground" className="btn-primary nav-btn-cta">
            <span>Launch Console</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#playground" onClick={() => setMobileMenuOpen(false)}>Live Demo</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Customers</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <div className="mobile-drawer-buttons">
            <a href="#pricing" className="btn-secondary" onClick={() => setMobileMenuOpen(false)}>Sign In</a>
            <a href="#playground" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Launch Console</a>
          </div>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 0;
          transition: all 0.3s ease;
        }

        .navbar-header.scrolled {
          padding: 12px 0;
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .logo-accent {
          color: var(--accent-cyan);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-item {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .nav-item:hover {
          color: #ffffff;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .nav-btn-login {
          padding: 8px 18px;
          font-size: 0.88rem;
        }

        .nav-btn-cta {
          padding: 8px 18px;
          font-size: 0.88rem;
        }

        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
          padding: 4px;
        }

        .mobile-drawer {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-subtle);
        }

        .mobile-drawer a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 500;
        }

        .mobile-drawer-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
        }

        @media (max-width: 868px) {
          .nav-links, .nav-btn-login, .nav-btn-cta {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
