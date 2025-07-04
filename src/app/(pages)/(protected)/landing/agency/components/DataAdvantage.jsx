'use client'
import { useEffect, useRef, useState } from 'react';

const DataAdvantage = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

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

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 'engineering',
      icon: '💻',
      title: 'Strong engineering DNA',
      description: 'At QuantLabs, we\'re machine learning scientists and engineers at our core, experts in the mathematics, data structures, and compute architectures that underpin modern AI.',
      points: [
        'We don\'t cobble together prompts or prebuilt chains; we architect systems from first principles.',
        'We select precisely the right blend of classical ML, deep learning, and GenAI agentic approaches, tailored to your data and business objectives.',
        'From time-series forecasting and multi-modal vision-language pipelines to advanced transformer-based models, we bring rigorous, scientific problem-solving, not just API glue.'
      ]
    },
    {
      id: 'security',
      icon: '🔐',
      title: 'Trust, privacy & compliance engineered in',
      description: 'Most agencies can deliver a flashy demo, right up until the security audit. At QuantLabs, privacy and compliance are non-negotiable pillars of our builds.',
      points: [
        'We design secure data flows, with encryption both in transit and at rest.',
        'Implement enterprise-grade IAM, detailed audit trails, and granular access controls.',
        'And build systems that align with GDPR, DPDP, HIPAA, SOC2, or any industry-specific governance standard you require.'
      ],
      highlight: 'So your AI isn\'t just clever, it\'s transparent, defensible, and safe for the enterprise to trust.'
    },
    {
      id: 'scale',
      icon: '⚡',
      title: 'Designed to scale from pilot to planet',
      description: 'True impact means building AI that performs under real-world scale, not just in a sandbox.',
      points: [
        'Architectures ready for thousands of concurrent users and billions of data points.',
        'Dynamic GPU/TPU scaling, advanced caching, intelligent sharding, and low-latency failover mechanisms that keep performance smooth as you grow.'
      ]
    },
    {
      id: 'data',
      icon: '🧬',
      title: 'Data mastery: the foundation of all meaningful AI',
      description: 'Here\'s the reality: AI is only as strong as the data that feeds it. Most enterprises are buried under spreadsheets, legacy CRMs, ERP fragments, PDFs, even handwritten records – messy, inconsistent, incomplete.',
      subtitle: 'QuantLabs turns this complexity into competitive advantage:',
      points: [
        'We integrate diverse data sources, deduplicate, normalize, and map to your industry standards.',
        'Build robust, automated ETL pipelines that continually prepare data for learning, not for guesswork.'
      ],
      highlight: 'So your models capture real, actionable patterns, delivering intelligence rooted in signal, not noise.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`why-quantlabs ${isVisible ? 'visible' : ''}`}
    >
      {/* Background Effects */}
      <div className="section-background">
        <div className="gradient-overlay" />
        <div className="particle-field">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                '--x': `${15 + i * 8}%`,
                '--y': `${20 + (i % 4) * 20}%`,
                '--delay': `${i * 0.8}s`,
                '--duration': `${8 + i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon">🧬</span>
            <span className="title-text">Why QuantLabs</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-card ${activeCard === feature.id ? 'active' : ''}`}
              style={{ '--index': index }}
              onMouseEnter={() => setActiveCard(feature.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-glow" />
              
              <div className="card-header">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
              </div>

              <div className="card-content">
                <p className="feature-description">{feature.description}</p>
                
                {feature.subtitle && (
                  <p className="feature-subtitle">{feature.subtitle}</p>
                )}

                <ul className="feature-points">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="feature-point">
                      <svg className="point-icon" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </li>
                  ))}
                </ul>

                {feature.highlight && (
                  <div className="feature-highlight">
                    <span dangerouslySetInnerHTML={{ __html: feature.highlight.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="section-summary">
          <div className="summary-content">
          <p className="summary-text">
+              QuantLabs doesn&apos;t just build AI features. We engineer <strong>secure, scalable, data-grounded intelligence</strong>, leveraging the deepest ML and DL expertise, so your business is powered by systems that truly learn, adapt, and drive outcomes.
+            </p>
            
            <div className="summary-cta">
              <button className="contact-cta">
                <div className="cta-content">
                  <svg className="cta-icon" viewBox="0 0 24 24" fill="none">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="cta-text">Contact Us</span>
                </div>
                <div className="cta-shimmer" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-quantlabs {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(180deg, #0f1419 0%, #1a2332 50%, #0f1419 100%);
          overflow: hidden;
          opacity: 0;
          transform: translateY(60px);
          transition: all 1.5s ease;
        }

        .why-quantlabs.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%);
        }

        .particle-field {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .floating-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          left: var(--x);
          top: var(--y);
          background: rgba(255,255,255,0.3);
          border-radius: 50%;
          animation: particleFloat var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(0.8);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) scale(1.2);
            opacity: 0.7;
          }
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 10;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
          animation: headerSlideIn 1.5s ease-out 0.3s both;
        }

        @keyframes headerSlideIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .section-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin: 0;
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .title-icon {
          font-size: clamp(2rem, 3vw, 2.5rem);
          animation: iconPulse 3s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .title-text {
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        .feature-card {
          position: relative;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(51, 65, 85, 0.4) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 40px;
          backdrop-filter: blur(10px);
          transition: all 0.5s ease;
          animation: cardSlideIn 1.2s ease-out both;
          animation-delay: calc(var(--index) * 0.2s + 0.6s);
          overflow: hidden;
        }

        @keyframes cardSlideIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .feature-card.active .card-glow {
          opacity: 1;
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .feature-icon {
          font-size: 2rem;
          animation: iconBounce 2s ease-in-out infinite;
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-2px); }
        }

        .feature-title {
          font-size: clamp(1.3rem, 2vw, 1.6rem);
          font-weight: 600;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        .feature-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 0 0 20px 0;
        }

        .feature-subtitle {
          font-size: 1.05rem;
          font-weight: 500;
          color: #e2e8f0;
          margin: 0 0 16px 0;
        }

        .feature-points {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
        }

        .feature-point {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 1rem;
          line-height: 1.6;
          color: #94a3b8;
          animation: pointFadeIn 0.8s ease-out both;
          animation-delay: calc(var(--index) * 0.1s + 1.2s);
        }

        @keyframes pointFadeIn {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .point-icon {
          width: 18px;
          height: 18px;
          color: #22c55e;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .feature-point strong {
          color: #f1f5f9;
          font-weight: 600;
        }

        .feature-highlight {
          padding: 20px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 12px;
          margin-top: 24px;
          font-size: 1.05rem;
          line-height: 1.6;
          color: #e2e8f0;
          animation: highlightGlow 3s ease-in-out infinite;
        }

        @keyframes highlightGlow {
          0%, 100% { 
            border-color: rgba(34, 197, 94, 0.2);
            box-shadow: 0 0 0 rgba(34, 197, 94, 0.1);
          }
          50% { 
            border-color: rgba(34, 197, 94, 0.3);
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.1);
          }
        }

        .feature-highlight strong {
          color: #22c55e;
          font-weight: 600;
        }

        .section-summary {
          text-align: center;
          animation: summarySlideIn 1.5s ease-out 1.8s both;
        }

        @keyframes summarySlideIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .summary-content {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 0;
        }

        .summary-text {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          line-height: 1.7;
          color: #cbd5e1;
          margin: 0 0 40px 0;
        }

        .summary-text strong {
          color: #ffffff;
          font-weight: 600;
          animation: textShimmer 4s ease-in-out infinite;
        }

        @keyframes textShimmer {
          0%, 100% { 
            color: #ffffff;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
          }
          50% { 
            color: #f8fafc;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
          }
        }

        .summary-cta {
          margin-top: 40px;
        }

        .contact-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 20px 40px;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
          border: none;
          border-radius: 12px;
          color: #ffffff;
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
        }

        .cta-content {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .cta-icon {
          width: 22px;
          height: 22px;
          transition: transform 0.3s ease;
        }

        .cta-text {
          letter-spacing: 0.02em;
        }

        .cta-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .contact-cta:hover {
          background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(34, 197, 94, 0.4);
        }

        .contact-cta:hover .cta-shimmer {
          left: 100%;
        }

        .contact-cta:hover .cta-icon {
          transform: scale(1.1);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
          
          .why-quantlabs {
            padding: 80px 0;
          }
          
          .section-header {
            margin-bottom: 60px;
          }
          
          .feature-card {
            padding: 30px;
          }
          
          .features-grid {
            gap: 30px;
            margin-bottom: 60px;
          }
          
          .summary-content {
            padding: 40px 0;
          }
        }

        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .feature-card {
            padding: 24px;
          }
          
          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          
          .feature-icon {
            font-size: 1.5rem;
          }
          
          .contact-cta {
            padding: 16px 32px;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DataAdvantage;