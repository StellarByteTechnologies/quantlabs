'use client'
import { useEffect, useRef, useState } from 'react';

const DataMasterySection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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

    // Auto-progress through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const dataSteps = [
    {
      id: 'connect',
      number: '01',
      title: 'Connect Anything',
      subtitle: 'Universal Data Ingestion',
      description: 'CRMs, ERPs, PDFs, handwritten logs, emails, IoT streams — we pull it all in, no matter the format.',
      metrics: ['50+ Sources', '99.9% Uptime', 'Real-time'],
      icon: '🔗',
      color: '#06D6A0'
    },
    {
      id: 'clean',
      number: '02',
      title: 'Clean & Standardize',
      subtitle: 'Intelligent Data Transformation',
      description: 'Deduplication, conflict resolution, mapping to your ontologies (ICD, SNOMED, IFRS) — for truly structured pipelines.',
      metrics: ['99.9% Clean', 'Auto-mapping', 'Schema Sync'],
      icon: '✨',
      color: '#3B82F6'
    },
    {
      id: 'features',
      number: '03',
      title: 'Build ML Features',
      subtitle: 'Advanced Feature Engineering',
      description: 'We engineer datasets optimized for models to learn from — extracting time-series signals, NLP features, or multi-modal embeddings.',
      metrics: ['100+ Features', 'Auto-scaling', 'ML-ready'],
      icon: '🧠',
      color: '#8B5CF6'
    },
    {
      id: 'compliance',
      number: '04',
      title: 'Compliance-Ready',
      subtitle: 'Enterprise Security & Governance',
      description: 'Data retention, masking, audit trails — so your pipelines are safe under GDPR, DPDP, HIPAA.',
      metrics: ['SOC2 Ready', 'GDPR', 'Audit Trails'],
      icon: '🛡️',
      color: '#F59E0B'
    },
    {
      id: 'automated',
      number: '05',
      title: 'Automated & Fresh',
      subtitle: 'Continuous Intelligence Pipeline',
      description: 'ETL & orchestration that keeps your data continuously learning-ready, not static snapshots.',
      metrics: ['24/7 Active', 'Zero Downtime', 'Auto-healing'],
      icon: '⚡',
      color: '#EC4899'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`data-mastery-section ${isVisible ? 'visible' : ''}`}
    >
      {/* Minimalist Background */}
      <div className="minimalist-bg">
        <div className="gradient-layers">
          <div className="layer layer-1"></div>
          <div className="layer layer-2"></div>
          <div className="layer layer-3"></div>
        </div>
        <div className="geometric-pattern">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="geo-element"
              style={{
                '--delay': `${i * 0.2}s`,
                '--x': `${(i % 5) * 25}%`,
                '--y': `${Math.floor(i / 5) * 25}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        {/* Clean Header */}
        <div className="header-section">
          <div className="header-label">
            <span className="label-icon">🧬</span>
            <span>Data Engineering Excellence</span>
          </div>
          <h2 className="main-heading">
            Data Mastery is Our <br />
            <span className="heading-accent">Competitive Edge</span>
          </h2>
          <p className="header-description">
            Transforming enterprise data chaos into AI&apos;s strongest foundation through 
            systematic engineering and enterprise-grade infrastructure.
          </p>
        </div>

        {/* Progressive Steps Layout */}
        <div className="steps-container">
          {/* Timeline Navigation */}
          <div className="timeline-nav">
            <div className="timeline-line">
              <div 
                className="timeline-progress"
                style={{ height: `${(activeStep + 1) * 20}%` }}
              />
            </div>
            {dataSteps.map((step, index) => (
              <button
                key={step.id}
                className={`timeline-step ${activeStep === index ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
                onClick={() => setActiveStep(index)}
                style={{ '--step-color': step.color }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-label">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="content-display">
            <div className="display-card">
              <div className="card-header">
                <div 
                  className="step-icon"
                  style={{ '--icon-color': dataSteps[activeStep].color }}
                >
                  {dataSteps[activeStep].icon}
                </div>
                <div className="header-text">
                  <div className="step-number-large">{dataSteps[activeStep].number}</div>
                  <h3 className="step-title">{dataSteps[activeStep].title}</h3>
                  <p className="step-subtitle">{dataSteps[activeStep].subtitle}</p>
                </div>
              </div>
              
              <div className="card-body">
                <p className="step-description">
                  <span className="description-highlight">
                    {dataSteps[activeStep].title}.
                  </span>{' '}
                  {dataSteps[activeStep].description}
                </p>
                
                <div className="metrics-grid">
                  {dataSteps[activeStep].metrics.map((metric, metricIndex) => (
                    <div 
                      key={metricIndex}
                      className="metric-card"
                      style={{ '--metric-delay': `${metricIndex * 0.1}s` }}
                    >
                      <div className="metric-value">{metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="progress-indicators">
              {dataSteps.map((_, index) => (
                <button
                  key={index}
                  className={`progress-dot ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="impact-statement">
          <div className="statement-container">
            <div className="statement-icon">
              <svg viewBox="0 0 24 24" fill="none" className="bulb-icon">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="statement-content">
              <blockquote className="statement-quote">
                Real intelligence doesn&apos;t come from off-the-shelf datasets. It comes from mastering{' '}
                <span className="quote-emphasis">your</span> data — so your AI learns patterns that move the needle.
              </blockquote>
              <div className="outcome-stats">
                <div className="stat">
                  <div className="stat-number">10x</div>
                  <div className="stat-label">Faster Time-to-Insight</div>
                </div>
                <div className="stat">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Reduction in Data Prep Time</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Compliance Adherence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .data-mastery-section {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%);
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          transition: all 2s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .data-mastery-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Minimalist Background */
        .minimalist-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .gradient-layers {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .layer {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.4;
        }

        .layer-1 {
          background: radial-gradient(ellipse at 20% 20%, rgba(6, 214, 160, 0.08) 0%, transparent 50%);
          animation: layerShift1 15s ease-in-out infinite;
        }

        .layer-2 {
          background: radial-gradient(ellipse at 80% 80%, rgba(59, 130, 246, 0.06) 0%, transparent 50%);
          animation: layerShift2 20s ease-in-out infinite reverse;
        }

        .layer-3 {
          background: radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.04) 0%, transparent 50%);
          animation: layerShift3 25s ease-in-out infinite;
        }

        @keyframes layerShift1 {
          0%, 100% { transform: translateX(0%) translateY(0%); }
          50% { transform: translateX(10%) translateY(-5%); }
        }

        @keyframes layerShift2 {
          0%, 100% { transform: translateX(0%) translateY(0%); }
          50% { transform: translateX(-8%) translateY(8%); }
        }

        @keyframes layerShift3 {
          0%, 100% { transform: translateX(0%) translateY(0%); }
          50% { transform: translateX(5%) translateY(-10%); }
        }

        .geometric-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .geo-element {
          position: absolute;
          left: var(--x);
          top: var(--y);
          width: 2px;
          height: 2px;
          background: rgba(6, 214, 160, 0.3);
          border-radius: 50%;
          animation: geoFloat 8s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        @keyframes geoFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) scale(1.5);
            opacity: 0.8;
          }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 10;
        }

        /* Clean Header */
        .header-section {
          text-align: center;
          margin-bottom: 80px;
          animation: headerFadeIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }

        @keyframes headerFadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .header-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: linear-gradient(135deg, rgba(6, 214, 160, 0.1), rgba(59, 130, 246, 0.1));
          border: 1px solid rgba(6, 214, 160, 0.2);
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #06D6A0;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .label-icon {
          font-size: 1.1rem;
        }

        .main-heading {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #FFFFFF;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .heading-accent {
          background: linear-gradient(135deg, #06D6A0 0%, #3B82F6 50%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .header-description {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          color: #94A3B8;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 400;
        }

        /* Progressive Steps Layout */
        .steps-container {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 60px;
          margin-bottom: 80px;
          animation: stepsSlideIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
        }

        @keyframes stepsSlideIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Timeline Navigation */
        .timeline-nav {
          position: relative;
          padding: 20px 0;
        }

        .timeline-line {
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1px;
        }

        .timeline-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(180deg, #06D6A0 0%, #3B82F6 50%, #8B5CF6 100%);
          border-radius: 1px;
          transition: height 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-step {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 16px 0;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
        }

        .timeline-step:hover {
          transform: translateX(8px);
        }

        .step-number {
          position: relative;
          z-index: 2;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(15, 23, 42, 0.8);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          font-size: 0.875rem;
          font-weight: 700;
          color: #64748B;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .timeline-step.active .step-number,
        .timeline-step.completed .step-number {
          border-color: var(--step-color);
          color: var(--step-color);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 20px rgba(6, 214, 160, 0.3);
        }

        .step-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #94A3B8;
          transition: color 0.3s ease;
        }

        .timeline-step.active .step-label {
          color: #FFFFFF;
        }

        /* Content Display */
        .content-display {
          position: relative;
        }

        .display-card {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 48px;
          backdrop-filter: blur(20px);
          transition: all 0.5s ease;
          animation: cardSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes cardSlideIn {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 32px;
        }

        .step-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          border: 2px solid var(--icon-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          animation: iconPulse 3s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 20px var(--icon-color);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 0 30px var(--icon-color);
          }
        }

        .header-text {
          flex: 1;
        }

        .step-number-large {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, #06D6A0 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 8px;
        }

        .step-title {
          font-size: 2rem;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 8px 0;
          letter-spacing: -0.01em;
        }

        .step-subtitle {
          font-size: 1.1rem;
          color: #3B82F6;
          margin: 0;
          font-weight: 500;
        }

        .card-body {
          position: relative;
        }

        .step-description {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #CBD5E1;
          margin: 0 0 32px 0;
        }

        .description-highlight {
          background: linear-gradient(135deg, #06D6A0 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 16px;
        }

        .metric-card {
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          text-align: center;
          backdrop-filter: blur(10px);
          animation: metricSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: var(--metric-delay);
        }

        @keyframes metricSlideIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .metric-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: #06D6A0;
          letter-spacing: 0.5px;
        }

        .progress-indicators {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }

        .progress-dot {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .progress-dot.active {
          background: #06D6A0;
          transform: scale(1.5);
          box-shadow: 0 0 15px rgba(6, 214, 160, 0.5);
        }

        /* Impact Statement */
        .impact-statement {
          animation: impactSlideIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.5s both;
        }

        @keyframes impactSlideIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .statement-container {
          display: flex;
          align-items: center;
          gap: 48px;
          padding: 48px;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
        }

        .statement-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(6, 214, 160, 0.1), rgba(59, 130, 246, 0.1));
          border: 2px solid rgba(6, 214, 160, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bulb-icon {
          width: 40px;
          height: 40px;
          color: #06D6A0;
        }

        .statement-content {
          flex: 1;
        }

        .statement-quote {
          font-size: clamp(1.3rem, 2.2vw, 1.6rem);
          line-height: 1.6;
          color: #F1F5F9;
          margin: 0 0 32px 0;
          font-style: italic;
          font-weight: 500;
        }

        .quote-emphasis {
          background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          font-style: normal;
        }

        .outcome-stats {
          display: flex;
          gap: 40px;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #06D6A0;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #64748B;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .steps-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .timeline-nav {
            display: flex;
            overflow-x: auto;
            padding: 0;
          }

          .timeline-line {
            display: none;
          }

          .timeline-step {
            flex-direction: column;
            min-width: 120px;
            padding: 16px;
            text-align: center;
          }

          .statement-container {
            flex-direction: column;
            text-align: center;
            gap: 32px;
          }

          .outcome-stats {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
          
          .data-mastery-section {
            padding: 80px 0;
          }
          
          .header-section {
            margin-bottom: 60px;
          }
          
          .steps-container {
            margin-bottom: 60px;
          }
          
          .display-card {
            padding: 32px 24px;
          }
          
          .statement-container {
            padding: 32px 24px;
          }
          
          .outcome-stats {
            flex-direction: column;
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .card-header {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          
          .step-icon {
            width: 64px;
            height: 64px;
            font-size: 1.5rem;
          }
          
          .statement-icon {
            width: 64px;
            height: 64px;
          }
          
          .bulb-icon {
            width: 32px;
            height: 32px;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default DataMasterySection;