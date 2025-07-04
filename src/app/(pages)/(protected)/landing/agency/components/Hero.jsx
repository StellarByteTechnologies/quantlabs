'use client'
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`enterprise-hero ${isLoaded ? 'loaded' : ''}`}
    >
      {/* Sophisticated Background Elements */}
      <div className="background-architecture">
        {/* Subtle Grid Pattern */}
        <div className="enterprise-grid">
          <svg className="grid-svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
              </pattern>
              <linearGradient id="subtleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Data Nodes */}
        <div className="data-visualization">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="data-node"
              style={{
                '--x': `${20 + i * 12}%`,
                '--y': `${25 + (i % 3) * 25}%`,
                '--delay': `${i * 1.2}s`,
                '--size': i % 2 === 0 ? '8px' : '6px'
              }}
            />
          ))}
          
          {/* Connection Lines */}
          <svg className="connection-network" width="100%" height="100%">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={i}
                x1={`${20 + i * 12}%`}
                y1={`${25 + (i % 3) * 25}%`}
                x2={`${32 + i * 12}%`}
                y2={`${25 + ((i + 1) % 3) * 25}%`}
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                className="connection-line"
                style={{ '--delay': `${i * 0.8}s` }}
              />
            ))}
          </svg>
        </div>

        {/* Ambient Light Effect */}
        <div 
          className="ambient-light"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="content-container">
          
          {/* Primary Headline */}
          <h1 className="primary-headline">
  <span className="headline-prefix">We help engineer the</span>
  <span className="headline-emphasis">
    architecture of tomorrow&apos;s intelligence.
  </span>
</h1>

          {/* Value Proposition */}
          <div className="value-proposition">
            <p className="proposition-text">
              From <strong>deep learning architectures</strong> to <strong>billion-parameter foundation models</strong> to <strong>goal-driven agentic systems</strong>, we help you engineer the <strong>core technologies</strong> of modern AI, not just the interfaces.
            </p>
          </div>



          {/* Professional CTA */}
          <div className="cta-section">
            <button className="enterprise-cta">
              <div className="cta-content">
                <svg className="cta-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M8 2v3m8-3v3m-9 8h10M5 12h14M5 12v8a2 2 0 002 2h10a2 2 0 002-2v-8M5 12V8a2 2 0 012-2h10a2 2 0 012 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="cta-text">Schedule Strategic Consultation</span>
              </div>
              <div className="cta-indicator" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="indicator-item">
              <svg className="indicator-icon" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Enterprise Security</span>
            </div>
            <div className="indicator-item">
              <svg className="indicator-icon" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>High Performance</span>
            </div>
            <div className="indicator-item">
              <svg className="indicator-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Scalable Architecture</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .enterprise-hero {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0f1419 0%, #1a1f29 50%, #0f1419 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          opacity: 0;
          transition: opacity 1.5s ease;
        }

        .enterprise-hero.loaded {
          opacity: 1;
        }

        /* Background Architecture */
        .background-architecture {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .enterprise-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.6;
        }

        .grid-svg {
          width: 100%;
          height: 100%;
        }

        /* Data Visualization */
        .data-visualization {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .data-node {
          position: absolute;
          width: var(--size);
          height: var(--size);
          left: var(--x);
          top: var(--y);
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 100%);
          border-radius: 50%;
          animation: nodeGlow 4s ease-in-out infinite;
          animation-delay: var(--delay);
          box-shadow: 0 0 20px rgba(255,255,255,0.3);
        }

        @keyframes nodeGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        .connection-network {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .connection-line {
          animation: connectionPulse 6s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes connectionPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }

        .ambient-light {
          position: absolute;
          top: 30%;
          left: 40%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(100px);
          transition: transform 0.3s ease;
        }

        /* Content Styling */
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 1200px;
          width: 100%;
          margin-top: 80px;
        }

        .content-container {
          animation: contentFadeIn 2s ease-out 0.5s both;
        }

        @keyframes contentFadeIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Animated Section Elements */
        .primary-headline {
          margin-bottom: 2.5rem;
          line-height: 1.2;
          animation: headlineSlideIn 1.5s ease-out 0.8s both;
        }

        @keyframes headlineSlideIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .value-proposition {
          max-width: 800px;
          margin: 0 auto 3rem auto;
          animation: propositionFadeIn 1.5s ease-out 1.2s both;
        }

        @keyframes propositionFadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .cta-section {
          margin-bottom: 3rem;
          animation: ctaSlideUp 1.5s ease-out 1.6s both;
        }

        @keyframes ctaSlideUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .trust-indicators {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 2rem;
          animation: indicatorsReveal 1.5s ease-out 2s both;
        }

        @keyframes indicatorsReveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Typography */
        .headline-prefix {
          display: block;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: #e2e8f0;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
          animation: prefixGlow 3s ease-in-out infinite alternate;
        }

        @keyframes prefixGlow {
          0% { text-shadow: 0 0 5px rgba(255,255,255,0.1); }
          100% { text-shadow: 0 0 15px rgba(255,255,255,0.2); }
        }

        .headline-emphasis {
          display: block;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          animation: emphasisShimmer 4s ease-in-out infinite;
        }

        @keyframes emphasisShimmer {
          0%, 100% { 
            color: #ffffff;
            text-shadow: 0 0 10px rgba(255,255,255,0.2);
          }
          50% { 
            color: #f8fafc;
            text-shadow: 0 0 15px rgba(255,255,255,0.3);
          }
        }

        .value-proposition {
          max-width: 800px;
          margin: 0 auto 3rem auto;
        }

        .proposition-text {
          font-size: clamp(1.1rem, 2.2vw, 1.4rem);
          line-height: 1.7;
          color: #94a3b8;
          font-weight: 400;
          margin: 0;
        }

        .proposition-text strong {
          color: #f1f5f9;
          font-weight: 600;
          position: relative;
          animation: strongPulse 3s ease-in-out infinite;
        }

        @keyframes strongPulse {
          0%, 100% { 
            color: #f1f5f9;
            text-shadow: none;
          }
          50% { 
            color: #ffffff;
            text-shadow: 0 0 8px rgba(255,255,255,0.3);
          }
        }

        /* Remove the old enterprise-metrics styles */

        /* Professional CTA */
        .cta-section {
          margin-bottom: 3rem;
        }

        .enterprise-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 18px 36px;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 8px;
          color: #ffffff;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .cta-content {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .cta-icon {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .cta-text {
          letter-spacing: 0.02em;
        }

        .cta-indicator {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s ease;
        }

        .enterprise-cta:hover {
          background: linear-gradient(135deg, #334155 0%, #475569 100%);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
        }

        .enterprise-cta:hover .cta-indicator {
          left: 100%;
        }

        .enterprise-cta:hover .cta-icon {
          transform: scale(1.1);
        }

        /* Trust Indicators */
        .trust-indicators {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 2rem;
        }

        .indicator-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #64748b;
          font-size: 0.9rem;
          font-weight: 500;
          animation: indicatorFloat 4s ease-in-out infinite;
        }

        .indicator-item:nth-child(1) { animation-delay: 0s; }
        .indicator-item:nth-child(2) { animation-delay: 1.3s; }
        .indicator-item:nth-child(3) { animation-delay: 2.6s; }

        @keyframes indicatorFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.7; }
          50% { transform: translateY(-3px); opacity: 1; }
        }

        .indicator-icon {
          width: 18px;
          height: 18px;
          color: #94a3b8;
          animation: iconGlow 3s ease-in-out infinite;
        }

        @keyframes iconGlow {
          0%, 100% { 
            color: #94a3b8;
            filter: drop-shadow(0 0 0 transparent);
          }
          50% { 
            color: #cbd5e1;
            filter: drop-shadow(0 0 4px rgba(203, 213, 225, 0.3));
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .trust-indicators {
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .enterprise-hero {
            padding: 0 20px;
            margin-top: 40px;
          }
          
          .trust-indicators {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
          
          .cta-text {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .headline-prefix {
            font-size: 2rem;
          }
          
          .headline-emphasis {
            font-size: 2.5rem;
          }
          
          .proposition-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;