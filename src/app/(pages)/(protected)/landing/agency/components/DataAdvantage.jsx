'use client'
import { useEffect, useRef, useState } from 'react';

const DataAdvantage = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      id: 'engineering',
      icon: (
        <svg viewBox="0 0 64 64" className="feature-icon-svg">
          <defs>
            <linearGradient id="engGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          {/* Terminal/Code Editor */}
          <rect x="8" y="12" width="48" height="32" rx="4" fill="url(#engGrad)" filter="url(#shadow)"/>
          <rect x="10" y="16" width="44" height="24" rx="2" fill="#0F172A"/>
          {/* Terminal header */}
          <circle cx="14" cy="20" r="1.5" fill="#EF4444"/>
          <circle cx="18" cy="20" r="1.5" fill="#F59E0B"/>
          <circle cx="22" cy="20" r="1.5" fill="#10B981"/>
          {/* Code lines */}
          <rect x="14" y="25" width="16" height="1.5" rx="0.75" fill="#3B82F6"/>
          <rect x="14" y="28" width="22" height="1.5" rx="0.75" fill="#10B981"/>
          <rect x="14" y="31" width="12" height="1.5" rx="0.75" fill="#F59E0B"/>
          <rect x="14" y="34" width="18" height="1.5" rx="0.75" fill="#8B5CF6"/>
          <rect x="14" y="37" width="14" height="1.5" rx="0.75" fill="#EC4899"/>
          {/* CPU/Chip */}
          <rect x="20" y="48" width="24" height="12" rx="2" fill="url(#engGrad)" filter="url(#shadow)"/>
          <rect x="22" y="50" width="20" height="8" rx="1" fill="#0F172A"/>
          <rect x="24" y="52" width="4" height="1" fill="#3B82F6"/>
          <rect x="30" y="52" width="4" height="1" fill="#3B82F6"/>
          <rect x="36" y="52" width="4" height="1" fill="#3B82F6"/>
          <rect x="24" y="55" width="4" height="1" fill="#10B981"/>
          <rect x="30" y="55" width="4" height="1" fill="#10B981"/>
          <rect x="36" y="55" width="4" height="1" fill="#10B981"/>
        </svg>
      ),
      title: 'Engineering Excellence',
      subtitle: 'Built by ML Scientists & Deep Learning Architects',
      description: 'Industry-leading expertise in mathematical foundations and enterprise-scale AI architectures.',
      points: [
        '<span className="keyword-highlight">Machine Learning Scientists</span> & <span className="keyword-highlight">Deep Learning Architects</span> at our core',
        'Systems designed from <span className="keyword-highlight">first principles</span> — not prompt engineering or chain assemblies',
        '<span className="keyword-highlight">Advanced ML/DL pipelines</span>: time-series, multi-modal, transformer architectures',
        'Rigorous <span className="keyword-highlight">scientific methodology</span> applied to every implementation'
      ],
      metrics: { value: '15+', label: 'Years Combined ML Experience' }
    },
    {
      id: 'security',
      icon: (
        <svg viewBox="0 0 64 64" className="feature-icon-svg">
          <defs>
            <linearGradient id="secGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          {/* Shield */}
          <path d="M32 8 L48 16 L48 36 Q48 44 32 52 Q16 44 16 36 L16 16 Z" fill="url(#secGrad)" filter="url(#shadow)"/>
          <path d="M32 12 L44 18 L44 36 Q44 42 32 48 Q20 42 20 36 L20 18 Z" fill="#0F172A"/>
          {/* Lock */}
          <rect x="28" y="28" width="8" height="8" rx="1" fill="url(#secGrad)"/>
          <path d="M30 28 L30 25 Q30 23 32 23 Q34 23 34 25 L34 28" fill="none" stroke="url(#secGrad)" strokeWidth="1.5"/>
          <circle cx="32" cy="31" r="1" fill="#0F172A"/>
          <rect x="31.5" y="32" width="1" height="2" fill="#0F172A"/>
          {/* Security badges */}
          <rect x="22" y="22" width="6" height="1" rx="0.5" fill="#10B981"/>
          <rect x="36" y="22" width="6" height="1" rx="0.5" fill="#10B981"/>
          <rect x="22" y="38" width="6" height="1" rx="0.5" fill="#3B82F6"/>
          <rect x="36" y="38" width="6" height="1" rx="0.5" fill="#3B82F6"/>
          {/* Encryption lines */}
          <circle cx="26" cy="32" r="1" fill="#10B981" opacity="0.6"/>
          <circle cx="38" cy="32" r="1" fill="#10B981" opacity="0.6"/>
        </svg>
      ),
      title: 'Enterprise Security',
      subtitle: 'Zero-Compromise Privacy & Compliance',
      description: 'Military-grade security architecture designed for the most demanding enterprise environments.',
      points: [
        '<span className="keyword-highlight">End-to-end encryption</span> with secure data flows and zero-trust architecture',
        '<span className="keyword-highlight">Enterprise IAM</span>, comprehensive audit trails, and granular access controls',
        'Full compliance with <span className="keyword-highlight">GDPR, DPDP, HIPAA, SOC2</span> and custom governance frameworks',
        '<span className="keyword-highlight">Security-first design</span> ensures your AI systems are audit-ready from day one'
      ],
      highlight: 'Your AI isn\'t just intelligent — it\'s <span className="keyword-highlight">transparent, defensible, and enterprise-safe</span>.',
      metrics: { value: '100%', label: 'Audit Success Rate' }
    },
    {
      id: 'scale',
      icon: (
        <svg viewBox="0 0 64 64" className="feature-icon-svg">
          <defs>
            <linearGradient id="scaleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          {/* Central core */}
          <circle cx="32" cy="32" r="8" fill="url(#scaleGrad)" filter="url(#shadow)"/>
          <circle cx="32" cy="32" r="5" fill="#0F172A"/>
          <circle cx="32" cy="32" r="2" fill="#8B5CF6"/>
          {/* Orbital rings */}
          <circle cx="32" cy="32" r="16" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.4"/>
          <circle cx="32" cy="32" r="24" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.3"/>
          {/* Nodes */}
          <circle cx="48" cy="32" r="3" fill="url(#scaleGrad)"/>
          <circle cx="16" cy="32" r="3" fill="url(#scaleGrad)"/>
          <circle cx="32" cy="8" r="3" fill="url(#scaleGrad)"/>
          <circle cx="32" cy="56" r="3" fill="url(#scaleGrad)"/>
          <circle cx="43" cy="21" r="2" fill="#3B82F6"/>
          <circle cx="21" cy="43" r="2" fill="#3B82F6"/>
          <circle cx="43" cy="43" r="2" fill="#3B82F6"/>
          <circle cx="21" cy="21" r="2" fill="#3B82F6"/>
          {/* Connection lines */}
          <line x1="32" y1="24" x2="32" y2="16" stroke="#8B5CF6" strokeWidth="1" opacity="0.6"/>
          <line x1="32" y1="40" x2="32" y2="48" stroke="#8B5CF6" strokeWidth="1" opacity="0.6"/>
          <line x1="24" y1="32" x2="16" y2="32" stroke="#8B5CF6" strokeWidth="1" opacity="0.6"/>
          <line x1="40" y1="32" x2="48" y2="32" stroke="#8B5CF6" strokeWidth="1" opacity="0.6"/>
          {/* Performance indicators */}
          <rect x="8" y="8" width="4" height="1" rx="0.5" fill="#10B981"/>
          <rect x="52" y="8" width="4" height="1" rx="0.5" fill="#10B981"/>
          <rect x="8" y="55" width="4" height="1" rx="0.5" fill="#10B981"/>
          <rect x="52" y="55" width="4" height="1" rx="0.5" fill="#10B981"/>
        </svg>
      ),
      title: 'Infinite Scale',
      subtitle: 'From Pilot to Global Enterprise',
      description: 'Cloud-native architectures engineered to scale seamlessly from prototype to planetary deployment.',
      points: [
        'Architectures supporting <span className="keyword-highlight">millions of concurrent users</span> and <span className="keyword-highlight">petabyte-scale data</span>',
        '<span className="keyword-highlight">Dynamic GPU/TPU orchestration</span> with intelligent resource allocation',
        '<span className="keyword-highlight">Auto-scaling infrastructure</span>: caching, sharding, and zero-downtime failover',
        '<span className="keyword-highlight">Performance guarantees</span> maintained across all scale thresholds'
      ],
      metrics: { value: '99.99%', label: 'Uptime SLA' }
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`enterprise-section ${isVisible ? 'visible' : ''}`}
    >
      {/* Professional Background */}
      <div className="enterprise-background">
        <div className="grid-overlay"></div>
        <div className="gradient-mesh"></div>
        <div className="floating-elements">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="floating-dot"
              style={{
                '--delay': `${i * 2}s`,
                '--x': `${10 + i * 12}%`,
                '--y': `${20 + (i % 3) * 30}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        {/* Professional Header */}
        <div className="section-header">
          <div className="header-badge">
            <span className="badge-text">Enterprise AI Solutions</span>
          </div>
          <h2 className="section-title">
            Why Industry Leaders Choose QuantLabs
          </h2>
          <p className="section-subtitle">
            Delivering production-ready AI systems with enterprise-grade security, 
            infinite scalability, and uncompromising performance standards.
          </p>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="enterprise-cards-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`enterprise-card ${hoveredCard === feature.id ? 'hovered' : ''}`}
              style={{ '--index': index }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background Effects */}
              <div className="card-background">
                <div className="card-gradient"></div>
                <div className="card-pattern"></div>
                <div className="card-glow"></div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                {/* Header with Icon */}
                <div className="card-header">
                  <div className="icon-container">
                    <div className="icon-glow"></div>
                    {feature.icon}
                  </div>
                  <div className="header-text">
                    <h3 className="card-title">{feature.title}</h3>
                    <p className="card-subtitle">{feature.subtitle}</p>
                  </div>
                  <div className="metrics-badge">
                    <div className="metric-value">{feature.metrics.value}</div>
                    <div className="metric-label">{feature.metrics.label}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="card-description">{feature.description}</p>

                {/* Feature Points */}
                <ul className="feature-list">
                  {feature.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex} 
                      className="feature-item"
                      style={{ '--point-delay': `${pointIndex * 0.1}s` }}
                    >
                      <div className="feature-bullet">
                        <div className="bullet-glow"></div>
                      </div>
                      <span dangerouslySetInnerHTML={{ __html: point }} />
                    </li>
                  ))}
                </ul>

                {/* Highlight Box */}
                {feature.highlight && (
                  <div className="highlight-box">
                    <div className="highlight-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: feature.highlight }} />
                  </div>
                )}

                {/* Card Footer */}
                <div className="card-footer">
                  <div className="tech-stack">
                    <span className="tech-item">ML/DL</span>
                    <span className="tech-item">Cloud Native</span>
                    <span className="tech-item">Enterprise Ready</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional CTA Section */}
        <div className="cta-section">
          <div className="cta-container">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Transform Your Enterprise with AI?</h3>
              <p className="cta-description">
                Join industry leaders who trust QuantLabs to deliver 
                <span className="keyword-highlight"> secure, scalable, and production-ready AI solutions</span>.
              </p>
            </div>
            <div className="cta-actions">
              <button className="primary-cta">
                <span>Schedule Executive Briefing</span>
                <svg className="cta-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="secondary-cta">
                <span>Download Case Studies</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .enterprise-section {
          position: relative;
          padding: 120px 0 100px;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%);
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.8s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .enterprise-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Professional Background */
        .enterprise-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridShift 20s ease-in-out infinite;
        }

        @keyframes gridShift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }

        .gradient-mesh {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(139, 92, 246, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.04) 0%, transparent 50%);
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .floating-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          left: var(--x);
          top: var(--y);
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          border-radius: 50%;
          animation: floatDot 8s ease-in-out infinite;
          animation-delay: var(--delay);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }

        @keyframes floatDot {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-30px) scale(1.2);
            opacity: 1;
          }
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 10;
        }

        /* Professional Header */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          animation: headerSlideIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }

        @keyframes headerSlideIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .header-badge {
          display: inline-flex;
          padding: 8px 20px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 50px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .badge-text {
          font-size: 0.875rem;
          font-weight: 600;
          color: #3B82F6;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          color: #94A3B8;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 400;
        }

        /* Enhanced Cards Grid */
        .enterprise-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }

        .enterprise-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          animation: cardSlideIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: calc(var(--index) * 0.15s + 0.6s);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
        }

        @keyframes cardSlideIn {
          0% { 
            opacity: 0; 
            transform: translateY(40px) rotateX(10deg); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) rotateX(0deg); 
          }
        }

        .enterprise-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .card-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 24px;
          overflow: hidden;
        }

        .card-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(30, 41, 59, 0.95) 0%, 
            rgba(51, 65, 85, 0.9) 50%, 
            rgba(30, 41, 59, 0.95) 100%);
          backdrop-filter: blur(20px);
        }

        .card-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%);
        }

        .card-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.1), 
            rgba(139, 92, 246, 0.1), 
            rgba(16, 185, 129, 0.1));
          border-radius: 26px;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .enterprise-card.hovered .card-glow {
          opacity: 1;
        }

        .card-content {
          position: relative;
          padding: 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
        }

        /* Card Header */
        .card-header {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 24px;
        }

        .icon-container {
          position: relative;
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(59, 130, 246, 0.2);
          backdrop-filter: blur(10px);
          flex-shrink: 0;
        }

        .icon-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .enterprise-card.hovered .icon-glow {
          opacity: 1;
        }

        .feature-icon-svg {
          width: 40px;
          height: 40px;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        }

        .header-text {
          flex: 1;
          min-width: 0;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 6px 0;
          letter-spacing: -0.01em;
        }

        .card-subtitle {
          font-size: 0.95rem;
          color: #3B82F6;
          margin: 0;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .metrics-badge {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1));
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 12px;
          padding: 12px 16px;
          text-align: center;
          min-width: 100px;
          backdrop-filter: blur(10px);
        }

        .metric-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #10B981;
          line-height: 1;
        }

        .metric-label {
          font-size: 0.75rem;
          color: #64748B;
          margin-top: 2px;
          font-weight: 500;
        }

        /* Card Description */
        .card-description {
          font-size: 1.05rem;
          color: #CBD5E1;
          line-height: 1.6;
          margin: 0 0 28px 0;
          font-weight: 400;
        }

        /* Feature List */
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 28px 0;
          flex: 1;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
          font-size: 1rem;
          line-height: 1.6;
          color: #E2E8F0;
          animation: itemSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: calc(var(--index) * 0.2s + var(--point-delay) + 1s);
        }

        @keyframes itemSlideIn {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .feature-bullet {
          position: relative;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .bullet-glow {
          position: absolute;
          top: -4px;
          left: -4px;
          width: 16px;
          height: 16px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          animation: bulletPulse 2s ease-in-out infinite;
        }

        @keyframes bulletPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        /* Keyword Highlighting */
        .keyword-highlight {
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
          position: relative;
        }

        .keyword-highlight::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3));
          border-radius: 1px;
          animation: underlineGlow 3s ease-in-out infinite;
        }

        @keyframes underlineGlow {
          0%, 100% { opacity: 0.3; transform: scaleX(1); }
          50% { opacity: 0.8; transform: scaleX(1.05); }
        }

        /* Highlight Box */
        .highlight-box {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 24px;
          background: linear-gradient(135deg, 
            rgba(16, 185, 129, 0.08) 0%, 
            rgba(34, 197, 94, 0.05) 100%);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 16px;
          margin-bottom: 24px;
          font-size: 1.05rem;
          line-height: 1.6;
          color: #F1F5F9;
          position: relative;
          overflow: hidden;
        }

        .highlight-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, 
            rgba(16, 185, 129, 0.1) 0%, 
            transparent 50%, 
            rgba(34, 197, 94, 0.1) 100%);
          animation: highlightShimmer 4s ease-in-out infinite;
        }

        @keyframes highlightShimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        .highlight-icon {
          width: 24px;
          height: 24px;
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
          position: relative;
          z-index: 2;
        }

        /* Card Footer */
        .card-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tech-stack {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tech-item {
          padding: 6px 12px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 20px;
          font-size: 0.8rem;
          color: #3B82F6;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        /* Professional CTA Section */
        .cta-section {
          margin-top: 60px;
          animation: ctaSlideIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.5s both;
        }

        @keyframes ctaSlideIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .cta-container {
          background: linear-gradient(135deg, 
            rgba(30, 41, 59, 0.8) 0%, 
            rgba(51, 65, 85, 0.6) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 48px;
          backdrop-filter: blur(20px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(59, 130, 246, 0.03) 0%, 
            rgba(139, 92, 246, 0.02) 100%);
          animation: ctaGlow 6s ease-in-out infinite;
        }

        @keyframes ctaGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .cta-content {
          position: relative;
          z-index: 2;
          margin-bottom: 32px;
        }

        .cta-title {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 16px 0;
          letter-spacing: -0.01em;
        }

        .cta-description {
          font-size: 1.2rem;
          color: #CBD5E1;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }

        .primary-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
          border: none;
          border-radius: 12px;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
        }

        .primary-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.2), 
            transparent);
          transition: left 0.6s ease;
        }

        .primary-cta:hover::before {
          left: 100%;
        }

        .primary-cta:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 12px 40px rgba(59, 130, 246, 0.4);
        }

        .cta-arrow {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .primary-cta:hover .cta-arrow {
          transform: translateX(4px);
        }

        .secondary-cta {
          display: inline-flex;
          align-items: center;
          padding: 16px 32px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(10px);
        }

        .secondary-cta:hover {
          border-color: rgba(59, 130, 246, 0.4);
          background: rgba(59, 130, 246, 0.1);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .enterprise-cards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
          
          .enterprise-section {
            padding: 80px 0 60px;
          }
          
          .section-header {
            margin-bottom: 60px;
          }
          
          .card-content {
            padding: 32px 24px;
          }
          
          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          
          .metrics-badge {
            align-self: flex-start;
          }
          
          .cta-container {
            padding: 32px 24px;
          }
          
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .primary-cta,
          .secondary-cta {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .enterprise-cards-grid {
            grid-template-columns: 1fr;
          }
          
          .card-header {
            gap: 12px;
          }
          
          .icon-container {
            width: 60px;
            height: 60px;
          }
          
          .feature-icon-svg {
            width: 32px;
            height: 32px;
          }
          
          .card-title {
            font-size: 1.3rem;
          }
          
          .feature-item {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DataAdvantage;