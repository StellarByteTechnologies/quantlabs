'use client'
import { useEffect, useRef, useState } from 'react';

const NumbersSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start number animations
          setTimeout(() => animateNumbers(), 800);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const targets = [
      { key: 'systems', target: 10, suffix: '+' },
      { key: 'data', target: 10, suffix: '+ TB' },
      { key: 'uptime', target: 99.99, suffix: '%', decimals: 2 },
      { key: 'compliance', target: 100, suffix: '%' }
    ];

    targets.forEach(({ key, target, suffix, decimals = 0 }) => {
      let current = 0;
      const increment = target / 60; // 60 frames for smooth animation
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({
          ...prev,
          [key]: current.toFixed(decimals) + suffix
        }));
      }, 50);
    });
  };

  const metricsData = [
    {
      id: 'systems',
      icon: '🏗️',
      number: animatedNumbers.systems || '0+',
      title: 'Bespoke ML & AI Systems',
      description: 'Delivered across regulated industries',
      accent: 'blue',
      highlight: 'production'
    },
    {
      id: 'data',
      icon: '🌊',
      number: animatedNumbers.data || '0+ TB',
      title: 'Enterprise Data Transformed',
      description: 'From fragmented to structured ML pipelines',
      accent: 'purple',
      highlight: 'data'
    },
    {
      id: 'uptime',
      icon: '⚡',
      number: animatedNumbers.uptime || '0%',
      title: 'Uptime AI Infrastructures',
      description: 'Built for billions of data points',
      accent: 'green',
      highlight: 'performance'
    },
    {
      id: 'compliance',
      icon: '🛡️',
      number: animatedNumbers.compliance || '0%',
      title: 'Compliance Audit Pass Rate',
      description: 'On all deployments',
      accent: 'red',
      highlight: 'security'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`numbers-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-badge">
            <span className="badge-icon">📊</span>
            <span className="badge-text">Performance Metrics</span>
          </div>
          <h2 className="section-title">Numbers</h2>
          <p className="section-subtitle">
            What sets us apart in scale & expertise
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="metrics-grid">
          {metricsData.map((metric, index) => (
            <div 
              key={metric.id}
              className={`metric-card ${metric.accent} ${isVisible ? 'animate' : ''}`}
              style={{ '--card-index': index }}
            >
              <div className="card-background">
                <div className={`card-accent ${metric.accent}`} />
                <div className="card-glow" />
              </div>

              <div className="card-content">
                <div className="metric-icon-container">
                  <span className="metric-icon">{metric.icon}</span>
                  <div className={`icon-ring ${metric.accent}`} />
                </div>

                <div className="metric-number">
                  <span className="number-value">{metric.number}</span>
                  <div className={`number-highlight ${metric.highlight}`} />
                </div>

                <div className="metric-details">
                  <h3 className="metric-title">{metric.title}</h3>
                  <p className="metric-description">{metric.description}</p>
                </div>

                <div className="metric-status">
                  <div className={`status-indicator ${metric.accent}`}>
                    <div className="status-pulse" />
                  </div>
                  <span className="status-text">Active</span>
                </div>
              </div>

              <div className="card-effects">
                <div className="shimmer-effect" />
                <div className="hover-gradient" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="bottom-statement">
          <div className="statement-content">
            <div className="statement-icon">🚀</div>
            <div className="statement-text">
              <p className="statement-main">
                Beyond experimentation and PoC. We have built production-grade ML and AI solutions for our partners at scale.
              </p>
              <div className="statement-emphasis">
                <span className="emphasis-text">Production-Grade</span>
                <span className="emphasis-separator">•</span>
                <span className="emphasis-text">Enterprise-Scale</span>
                <span className="emphasis-separator">•</span>
                <span className="emphasis-text">Battle-Tested</span>
              </div>
            </div>
          </div>
          
          <div className="statement-decoration">
            <div className="decoration-line" />
            <div className="decoration-orb" />
            <div className="decoration-line" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .numbers-section {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(180deg, #151b26 0%, #0f1419 50%, #1a1f2e 100%);
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .numbers-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5), transparent);
          animation: borderGlow 3s ease-in-out infinite;
        }

        .numbers-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes borderGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          animation: headerReveal 1s ease-out 0.3s both;
        }

        @keyframes headerReveal {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 24px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 50px;
          margin-bottom: 24px;
          font-size: 14px;
          color: #6ee7b7;
          font-weight: 600;
          animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.3);
            border-color: rgba(16, 185, 129, 0.3);
          }
          50% { 
            box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
            border-color: rgba(16, 185, 129, 0.6);
          }
        }

        .badge-icon {
          font-size: 16px;
          animation: iconPulse 2s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .section-title {
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: titleShimmer 3s ease-in-out infinite;
        }

        @keyframes titleShimmer {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }

        .section-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          color: #94a3b8;
          font-weight: 500;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Metrics Grid */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .metric-card {
          position: relative;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 32px;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          transform: translateY(40px);
        }

        .metric-card.animate {
          animation: cardReveal 0.8s ease-out calc(var(--card-index) * 0.15s) both;
        }

        @keyframes cardReveal {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .metric-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 25px 60px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .card-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          border-radius: 20px 20px 0 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .metric-card:hover .card-accent {
          opacity: 1;
        }

        .card-accent.blue { background: linear-gradient(90deg, #3b82f6, #1d4ed8); }
        .card-accent.purple { background: linear-gradient(90deg, #8b5cf6, #7c3aed); }
        .card-accent.green { background: linear-gradient(90deg, #10b981, #059669); }
        .card-accent.red { background: linear-gradient(90deg, #ef4444, #dc2626); }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.01) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .metric-card:hover .card-glow {
          opacity: 1;
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .metric-icon-container {
          position: relative;
          width: 64px;
          height: 64px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metric-icon {
          font-size: 32px;
          z-index: 2;
          position: relative;
          animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .icon-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 64px;
          height: 64px;
          border: 2px solid;
          border-radius: 50%;
          opacity: 0.3;
          animation: ringPulse 2s ease-in-out infinite;
        }

        .icon-ring.blue { border-color: #3b82f6; }
        .icon-ring.purple { border-color: #8b5cf6; }
        .icon-ring.green { border-color: #10b981; }
        .icon-ring.red { border-color: #ef4444; }

        @keyframes ringPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        .metric-number {
          position: relative;
          margin-bottom: 20px;
        }

        .number-value {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          display: block;
          line-height: 1;
        }

        .number-highlight {
          position: absolute;
          bottom: -8px;
          left: 0;
          height: 4px;
          width: 60%;
          border-radius: 2px;
          opacity: 0;
          animation: highlightReveal 0.8s ease-out 1.2s both;
        }

        @keyframes highlightReveal {
          0% { width: 0; opacity: 0; }
          100% { width: 60%; opacity: 1; }
        }

        .number-highlight.production { background: linear-gradient(90deg, #3b82f6, #1d4ed8); }
        .number-highlight.data { background: linear-gradient(90deg, #8b5cf6, #7c3aed); }
        .number-highlight.performance { background: linear-gradient(90deg, #10b981, #059669); }
        .number-highlight.security { background: linear-gradient(90deg, #ef4444, #dc2626); }

        .metric-details {
          margin-bottom: 24px;
        }

        .metric-title {
          font-size: 18px;
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .metric-description {
          font-size: 14px;
          color: #94a3b8;
          line-height: 1.5;
          margin: 0;
        }

        .metric-status {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-indicator {
          position: relative;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid;
        }

        .status-indicator.blue { border-color: #3b82f6; background: rgba(59, 130, 246, 0.2); }
        .status-indicator.purple { border-color: #8b5cf6; background: rgba(139, 92, 246, 0.2); }
        .status-indicator.green { border-color: #10b981; background: rgba(16, 185, 129, 0.2); }
        .status-indicator.red { border-color: #ef4444; background: rgba(239, 68, 68, 0.2); }

        .status-pulse {
          position: absolute;
          top: -2px;
          left: -2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2px solid;
          animation: statusPulse 2s ease-in-out infinite;
        }

        .status-indicator.blue .status-pulse { border-color: #3b82f6; }
        .status-indicator.purple .status-pulse { border-color: #8b5cf6; }
        .status-indicator.green .status-pulse { border-color: #10b981; }
        .status-indicator.red .status-pulse { border-color: #ef4444; }

        @keyframes statusPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .status-text {
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-effects {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .shimmer-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          opacity: 0;
          transition: all 0.6s ease;
        }

        .metric-card:hover .shimmer-effect {
          left: 100%;
          opacity: 1;
        }

        .hover-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .metric-card:hover .hover-gradient {
          opacity: 1;
        }

        /* Bottom Statement */
        .bottom-statement {
          text-align: center;
          animation: statementReveal 1s ease-out 1.2s both;
        }

        @keyframes statementReveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .statement-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-bottom: 32px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .statement-icon {
          font-size: 48px;
          animation: iconSpin 4s linear infinite;
        }

        @keyframes iconSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .statement-text {
          flex: 1;
          text-align: left;
        }

        .statement-main {
          font-size: clamp(1.1rem, 2.2vw, 1.4rem);
          color: #e2e8f0;
          font-weight: 600;
          line-height: 1.6;
          margin: 0 0 16px 0;
        }

        .statement-emphasis {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .emphasis-text {
          font-size: 14px;
          color: #10b981;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          animation: emphasisGlow 3s ease-in-out infinite;
        }

        @keyframes emphasisGlow {
          0%, 100% { 
            color: #10b981;
            text-shadow: 0 0 0 transparent;
          }
          50% { 
            color: #6ee7b7;
            text-shadow: 0 0 8px rgba(16, 185, 129, 0.3);
          }
        }

        .emphasis-separator {
          color: #475569;
          font-weight: 300;
        }

        .statement-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .decoration-line {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #475569, transparent);
          animation: lineGlow 2s ease-in-out infinite;
        }

        @keyframes lineGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        .decoration-orb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981, #059669);
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
          animation: orbPulse 2s ease-in-out infinite;
        }

        @keyframes orbPulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
          }
          50% { 
            transform: scale(1.2);
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.6);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .section-container {
            padding: 0 30px;
          }
          
          .metrics-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
          }
        }

        @media (max-width: 768px) {
          .numbers-section {
            padding: 80px 0;
          }
          
          .section-container {
            padding: 0 20px;
          }
          
          .section-header {
            margin-bottom: 60px;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .metric-card {
            padding: 24px;
          }
          
          .statement-content {
            flex-direction: column;
            gap: 16px;
          }
          
          .statement-text {
            text-align: center;
          }
          
          .statement-emphasis {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.5rem;
          }
          
          .metric-card {
            padding: 20px;
          }
          
          .metric-icon {
            font-size: 28px;
          }
          
          .number-value {
            font-size: 2.5rem;
          }
          
          .statement-icon {
            font-size: 36px;
          }
          
          .decoration-line {
            width: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default NumbersSection;