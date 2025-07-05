'use client'
import { useEffect, useRef, useState } from 'react';

const CaseStudiesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate case studies
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveCase(prev => (prev + 1) % caseStudies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const caseStudies = [
    {
      id: 'healthcare',
      industry: 'Healthcare',
      icon: '🏥',
      title: 'HIPAA-Compliant Agentic System',
      challenge: 'Manual patient intake processes consuming excessive staff hours',
      solution: 'Built a secure, HIPAA-compliant agentic system that automates patient intake and synthesizes research data',
      result: '90% reduction in manual hours',
      metrics: [
        { label: 'Time Savings', value: '90%', icon: '⏱️' },
        { label: 'HIPAA Compliance', value: '100%', icon: '🔒' },
        { label: 'Data Processing', value: '24/7', icon: '🔄' }
      ],
      technologies: ['ML Pipelines', 'NLP', 'Secure TEE', 'FHIR APIs'],
      accent: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'fintech',
      industry: 'Fintech',
      icon: '🏦',
      title: 'Real-Time Fraud Detection Engine',
      challenge: 'High false positive rates and slow transaction processing',
      solution: 'Engineered a multi-modal ML system combining behavioral analytics, graph networks, and real-time scoring',
      result: '99.7% accuracy with 3ms response time',
      metrics: [
        { label: 'Accuracy Rate', value: '99.7%', icon: '🎯' },
        { label: 'Response Time', value: '3ms', icon: '⚡' },
        { label: 'False Positives', value: '-85%', icon: '📉' }
      ],
      technologies: ['Graph Neural Networks', 'Real-time ML', 'Edge Computing', 'Kafka Streams'],
      accent: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'esg',
      industry: 'ESG',
      icon: '🏭',
      title: 'Carbon Footprint Intelligence Platform',
      challenge: 'Complex supply chain emissions tracking across global operations',
      solution: 'Developed an AI-powered platform that aggregates IoT data, satellite imagery, and operational metrics for precise carbon accounting',
      result: '40% reduction in reporting time, 15% improvement in sustainability metrics',
      metrics: [
        { label: 'Reporting Efficiency', value: '40%', icon: '📊' },
        { label: 'Sustainability Gain', value: '15%', icon: '🌱' },
        { label: 'Data Sources', value: '500+', icon: '🛰️' }
      ],
      technologies: ['Computer Vision', 'IoT Analytics', 'Satellite ML', 'Carbon APIs'],
      accent: 'purple',
      gradient: 'from-purple-500 to-violet-500'
    }
  ];

  const handleCaseSelect = (index) => {
    setActiveCase(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section 
      ref={sectionRef}
      className={`case-studies-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-badge">
            <span className="badge-icon">📈</span>
            <span className="badge-text">Success Stories</span>
          </div>
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            How we turn complex challenges into engineered intelligence
          </p>
        </div>

        {/* Case Studies Interface */}
        <div className="case-studies-interface">
          {/* Industry Tabs */}
          <div className="industry-tabs">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                className={`industry-tab ${activeCase === index ? 'active' : ''} ${study.accent}`}
                onClick={() => handleCaseSelect(index)}
              >
                <div className="tab-content">
                  <span className="tab-icon">{study.icon}</span>
                  <span className="tab-label">{study.industry}</span>
                </div>
                <div className="tab-indicator" />
                {activeCase === index && (
                  <div className="tab-progress">
                    <div className="progress-bar" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Active Case Study */}
          <div className="case-study-display">
            <div className="case-background">
              <div className={`case-gradient ${caseStudies[activeCase].accent}`} />
              <div className="case-pattern" />
            </div>

            <div className="case-content">
              {/* Case Header */}
              <div className="case-header">
                <div className="case-industry">
                  <span className="industry-icon">{caseStudies[activeCase].icon}</span>
                  <span className="industry-name">{caseStudies[activeCase].industry}</span>
                </div>
                <h3 className="case-title">{caseStudies[activeCase].title}</h3>
              </div>

              {/* Case Details */}
              <div className="case-details">
                <div className="detail-section">
                  <div className="detail-label">Challenge</div>
                  <p className="detail-text challenge">{caseStudies[activeCase].challenge}</p>
                </div>

                <div className="detail-section">
                  <div className="detail-label">Solution</div>
                  <p className="detail-text solution">{caseStudies[activeCase].solution}</p>
                </div>

                <div className="detail-section">
                  <div className="detail-label">Result</div>
                  <p className="detail-text result">{caseStudies[activeCase].result}</p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="metrics-grid">
                {caseStudies[activeCase].metrics.map((metric, index) => (
                  <div key={index} className="metric-item">
                    <div className="metric-icon">{metric.icon}</div>
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="technologies-section">
                <div className="tech-label">Technologies Used</div>
                <div className="tech-tags">
                  {caseStudies[activeCase].technologies.map((tech, index) => (
                    <span key={index} className={`tech-tag ${caseStudies[activeCase].accent}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Navigation */}
            <div className="case-navigation">
              <div className="nav-dots">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    className={`nav-dot ${activeCase === index ? 'active' : ''}`}
                    onClick={() => handleCaseSelect(index)}
                  />
                ))}
              </div>
              
              <div className="nav-controls">
                <button 
                  className="nav-control prev"
                  onClick={() => handleCaseSelect((activeCase - 1 + caseStudies.length) % caseStudies.length)}
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  className="nav-control next"
                  onClick={() => handleCaseSelect((activeCase + 1) % caseStudies.length)}
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="section-cta">
          <div className="cta-content">
            <h4 className="cta-title">Ready to engineer your next breakthrough?</h4>
            <p className="cta-text">Let us discuss how we can transform your complex challenges into intelligent solutions.</p>
            <button className="cta-button">
              <span className="button-text">Start Your Case Study</span>
              <svg className="button-icon" viewBox="0 0 24 24" fill="none">
                <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .case-studies-section {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(180deg, #1a1f2e 0%, #0f1419 50%, #151b26 100%);
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .case-studies-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent);
          animation: borderGlow 3s ease-in-out infinite;
        }

        .case-studies-section.visible {
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
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 50px;
          margin-bottom: 24px;
          font-size: 14px;
          color: #c4b5fd;
          font-weight: 600;
          animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.3);
            border-color: rgba(139, 92, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 0 8px rgba(139, 92, 246, 0);
            border-color: rgba(139, 92, 246, 0.6);
          }
        }

        .badge-icon {
          font-size: 16px;
          animation: iconTrend 2s ease-in-out infinite;
        }

        @keyframes iconTrend {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-2px) rotate(5deg); }
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

        /* Case Studies Interface */
        .case-studies-interface {
          margin-bottom: 80px;
          animation: interfaceReveal 1s ease-out 0.6s both;
        }

        @keyframes interfaceReveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* Industry Tabs */
        .industry-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 40px;
          padding: 8px;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }

        .industry-tab {
          position: relative;
          background: transparent;
          border: none;
          padding: 16px 24px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .industry-tab:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .industry-tab.active {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .tab-content {
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 2;
        }

        .tab-icon {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .industry-tab:hover .tab-icon,
        .industry-tab.active .tab-icon {
          transform: scale(1.1);
        }

        .tab-label {
          font-size: 14px;
          font-weight: 600;
          color: #e2e8f0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .tab-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: transparent;
          transition: all 0.3s ease;
        }

        .industry-tab.active.blue .tab-indicator { background: linear-gradient(90deg, #3b82f6, #1d4ed8); }
        .industry-tab.active.green .tab-indicator { background: linear-gradient(90deg, #10b981, #059669); }
        .industry-tab.active.purple .tab-indicator { background: linear-gradient(90deg, #8b5cf6, #7c3aed); }

        .tab-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          overflow: hidden;
        }

        .progress-bar {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #1d4ed8);
          transform: translateX(-100%);
          animation: progressAnimation 5s linear infinite;
        }

        @keyframes progressAnimation {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }

        /* Case Study Display */
        .case-study-display {
          position: relative;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          min-height: 600px;
          animation: displayReveal 0.8s ease-out;
        }

        @keyframes displayReveal {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        .case-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .case-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 200px;
          opacity: 0.1;
          transition: all 0.5s ease;
        }

        .case-gradient.blue { background: linear-gradient(135deg, #3b82f6, #1d4ed8); }
        .case-gradient.green { background: linear-gradient(135deg, #10b981, #059669); }
        .case-gradient.purple { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }

        .case-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
        }

        .case-content {
          position: relative;
          z-index: 2;
          padding: 40px;
        }

        /* Case Header */
        .case-header {
          margin-bottom: 32px;
        }

        .case-industry {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .industry-icon {
          font-size: 24px;
          animation: iconBounce 2s ease-in-out infinite;
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        .industry-name {
          font-size: 14px;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .case-title {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          margin: 0;
        }

        /* Case Details */
        .case-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }

        .detail-section {
          animation: sectionSlideIn 0.6s ease-out 0.2s both;
        }

        @keyframes sectionSlideIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .detail-label {
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .detail-text {
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
        }

        .detail-text.challenge { color: #fca5a5; }
        .detail-text.solution { color: #a7f3d0; }
        .detail-text.result { color: #fbbf24; }

        /* Metrics Grid */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
          padding: 24px;
          background: rgba(30, 41, 59, 0.5);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .metric-item {
          text-align: center;
          animation: metricReveal 0.6s ease-out 0.4s both;
        }

        @keyframes metricReveal {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        .metric-icon {
          font-size: 24px;
          margin-bottom: 8px;
          display: block;
        }

        .metric-value {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 4px;
          display: block;
        }

        .metric-label {
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Technologies */
        .technologies-section {
          animation: techReveal 0.6s ease-out 0.6s both;
        }

        @keyframes techReveal {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .tech-label {
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          padding: 6px 12px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 20px;
          border: 1px solid;
          transition: all 0.3s ease;
        }

        .tech-tag.blue {
          color: #60a5fa;
          border-color: rgba(59, 130, 246, 0.3);
          background: rgba(59, 130, 246, 0.1);
        }

        .tech-tag.green {
          color: #6ee7b7;
          border-color: rgba(16, 185, 129, 0.3);
          background: rgba(16, 185, 129, 0.1);
        }

        .tech-tag.purple {
          color: #c4b5fd;
          border-color: rgba(139, 92, 246, 0.3);
          background: rgba(139, 92, 246, 0.1);
        }

        .tech-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* Case Navigation */
        .case-navigation {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-dots {
          display: flex;
          gap: 8px;
        }

        .nav-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dot.active {
          background: #ffffff;
          transform: scale(1.2);
        }

        .nav-controls {
          display: flex;
          gap: 4px;
        }

        .nav-control {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .nav-control:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .nav-control svg {
          width: 16px;
          height: 16px;
        }

        /* Section CTA */
        .section-cta {
          text-align: center;
          animation: ctaReveal 1s ease-out 1s both;
        }

        @keyframes ctaReveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .cta-text {
          font-size: 16px;
          color: #94a3b8;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border: none;
          border-radius: 12px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(139, 92, 246, 0.4);
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .button-text {
          position: relative;
          z-index: 2;
        }

        .button-icon {
          width: 18px;
          height: 18px;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-icon {
          transform: translateX(4px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .section-container {
            padding: 0 30px;
          }
          
          .industry-tabs {
            flex-wrap: wrap;
          }
          
          .case-content {
            padding: 32px;
          }
        }

        @media (max-width: 768px) {
          .case-studies-section {
            padding: 80px 0;
          }
          
          .section-container {
            padding: 0 20px;
          }
          
          .section-header {
            margin-bottom: 60px;
          }
          
          .industry-tabs {
            flex-direction: column;
            gap: 4px;
          }
          
          .case-content {
            padding: 24px;
          }
          
          .case-details {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .metrics-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 16px;
            padding: 20px;
          }
          
          .case-navigation {
            position: static;
            justify-content: center;
            margin-top: 24px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.5rem;
          }
          
          .industry-tab {
            padding: 12px 16px;
          }
          
          .tab-icon {
            font-size: 18px;
          }
          
          .tab-label {
            font-size: 12px;
          }
          
          .case-content {
            padding: 20px;
          }
          
          .case-title {
            font-size: 1.3rem;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            padding: 16px;
          }
          
          .metric-value {
            font-size: 1.3rem;
          }
          
          .tech-tags {
            gap: 6px;
          }
          
          .tech-tag {
            font-size: 11px;
            padding: 4px 8px;
          }
          
          .cta-button {
            padding: 14px 28px;
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection;