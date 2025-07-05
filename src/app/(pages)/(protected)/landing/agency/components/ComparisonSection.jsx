'use client'
import { useEffect, useRef, useState } from 'react';

const ComparisonSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeRow, setActiveRow] = useState(null);

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

  const comparisonData = [
    {
      category: "Development Focus",
      others: "Build demos or PoCs",
      othersIcon: "🎭",
      quantlabs: "Build privacy-compliant, secure systems",
      quantlabsIcon: "🔐",
      highlight: "enterprise"
    },
    {
      category: "Technology Stack",
      others: "Only focus on GenAI or LLMs",
      othersIcon: "🗣",
      quantlabs: "ML, DL, multi-modal + agentic systems",
      quantlabsIcon: "🧠",
      highlight: "technical"
    },
    {
      category: "Scalability",
      others: "Ignore scale",
      othersIcon: "🚫",
      quantlabs: "Architect for millions of users & data points",
      quantlabsIcon: "⚡",
      highlight: "performance"
    },
    {
      category: "Data Integration",
      others: "Skip messy data problems",
      othersIcon: "🚧",
      quantlabs: "Integrate & clean your enterprise data",
      quantlabsIcon: "🧬",
      highlight: "data"
    },
    {
      category: "Privacy & Security",
      others: "Basic security measures",
      othersIcon: "🔒",
      quantlabs: "Trusted Execution Environments (TEE)",
      quantlabsIcon: "🛡️",
      highlight: "security"
    },
    {
      category: "Enterprise Readiness",
      others: "One-size-fits-all solutions",
      othersIcon: "📦",
      quantlabs: "Custom enterprise-grade architecture",
      quantlabsIcon: "🏢",
      highlight: "enterprise"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`comparison-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-badge">
            <span className="badge-icon">🔬</span>
            <span className="badge-text">Competitive Analysis</span>
          </div>
          <h2 className="section-title">How we stack up</h2>
          <p className="section-subtitle">
            Most AI agencies build demos. We engineer production-ready systems.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="comparison-container">
          <div className="comparison-table">
            {/* Table Headers */}
            <div className="table-headers">
              <div className="header-cell category-header">
                <span className="header-text">Capability</span>
              </div>
              <div className="header-cell others-header">
                <span className="header-text">Most AI Agencies</span>
                <div className="header-indicator others-indicator" />
              </div>
              <div className="header-cell quantlabs-header">
                <span className="header-text">QuantLabs</span>
                <div className="header-indicator quantlabs-indicator" />
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="table-body">
              {comparisonData.map((row, index) => (
                <div 
                  key={index}
                  className={`comparison-row ${activeRow === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveRow(index)}
                  onMouseLeave={() => setActiveRow(null)}
                  style={{ '--row-index': index }}
                >
                  <div className="row-category">
                    <span className="category-text">{row.category}</span>
                    <div className={`category-accent ${row.highlight}`} />
                  </div>
                  
                  <div className="row-others">
                    <div className="cell-content">
                      <span className="cell-icon">{row.othersIcon}</span>
                      <span className="cell-text">{row.others}</span>
                    </div>
                    <div className="cell-status negative">
                      <svg className="status-icon" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
                        <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="row-quantlabs">
                    <div className="cell-content">
                      <span className="cell-icon">{row.quantlabsIcon}</span>
                      <span className="cell-text">{row.quantlabs}</span>
                    </div>
                    <div className="cell-status positive">
                      <svg className="status-icon" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Visual Elements */}
          <div className="table-enhancements">
            <div className="competitive-edge">
              <div className="edge-content">
                <span className="edge-icon">⚡</span>
                <span className="edge-text">Production-Ready Advantage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="section-cta">
          <p className="cta-text">
            Ready to move beyond prototypes to production-grade AI systems?
          </p>
          <button className="cta-button">
            <span className="button-text">Discuss Your Architecture</span>
            <svg className="button-icon" viewBox="0 0 24 24" fill="none">
              <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .comparison-section {
          position: relative;
          padding: 120px 0;
          background: linear-gradient(180deg, #0f1419 0%, #1a1f2e 50%, #151b26 100%);
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .comparison-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .comparison-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
          animation: borderGlow 3s ease-in-out infinite;
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
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50px;
          margin-bottom: 24px;
          font-size: 14px;
          color: #93c5fd;
          font-weight: 600;
          animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3);
            border-color: rgba(59, 130, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
            border-color: rgba(59, 130, 246, 0.6);
          }
        }

        .badge-icon {
          font-size: 16px;
          animation: iconRotate 4s linear infinite;
        }

        @keyframes iconRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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

        /* Comparison Table */
        .comparison-container {
          position: relative;
          margin-bottom: 80px;
        }

        .comparison-table {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .table-headers {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          background: rgba(30, 41, 59, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-cell {
          position: relative;
          padding: 24px;
          text-align: center;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-cell:last-child {
          border-right: none;
        }

        .header-text {
          font-size: 16px;
          font-weight: 700;
          color: #e2e8f0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .header-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
        }

        .others-indicator {
          background: linear-gradient(90deg, #ef4444, #dc2626);
        }

        .quantlabs-indicator {
          background: linear-gradient(90deg, #10b981, #059669);
          animation: quantlabsGlow 2s ease-in-out infinite;
        }

        @keyframes quantlabsGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.6); }
        }

        /* Comparison Rows */
        .table-body {
          animation: rowsReveal 1.2s ease-out 0.6s both;
        }

        @keyframes rowsReveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          animation: rowSlideIn 0.8s ease-out calc(var(--row-index) * 0.1s) both;
        }

        @keyframes rowSlideIn {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .comparison-row:hover {
          background: rgba(255, 255, 255, 0.02);
          transform: scale(1.01);
        }

        .comparison-row.active {
          background: rgba(59, 130, 246, 0.05);
          border-color: rgba(59, 130, 246, 0.2);
        }

        .comparison-row:last-child {
          border-bottom: none;
        }

        .row-category,
        .row-others,
        .row-quantlabs {
          position: relative;
          padding: 28px 24px;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .row-category:last-child,
        .row-others:last-child,
        .row-quantlabs:last-child {
          border-right: none;
        }

        .row-category {
          background: rgba(51, 65, 85, 0.3);
        }

        .category-text {
          font-size: 15px;
          font-weight: 600;
          color: #cbd5e1;
          letter-spacing: 0.02em;
        }

        .category-accent {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          border-radius: 0 2px 2px 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .comparison-row:hover .category-accent {
          opacity: 1;
        }

        .category-accent.enterprise { background: linear-gradient(180deg, #3b82f6, #1d4ed8); }
        .category-accent.technical { background: linear-gradient(180deg, #8b5cf6, #7c3aed); }
        .category-accent.performance { background: linear-gradient(180deg, #10b981, #059669); }
        .category-accent.data { background: linear-gradient(180deg, #f59e0b, #d97706); }
        .category-accent.security { background: linear-gradient(180deg, #ef4444, #dc2626); }

        .cell-content {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        .cell-icon {
          font-size: 20px;
          flex-shrink: 0;
          animation: iconBounce 2s ease-in-out infinite;
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        .cell-text {
          font-size: 14px;
          font-weight: 500;
          line-height: 1.5;
        }

        .row-others .cell-text {
          color: #94a3b8;
        }

        .row-quantlabs .cell-text {
          color: #e2e8f0;
          font-weight: 600;
        }

        .cell-status {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .cell-status.negative {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
        }

        .cell-status.positive {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #6ee7b7;
          animation: checkPulse 2s ease-in-out infinite;
        }

        @keyframes checkPulse {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.3);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
            transform: scale(1.05);
          }
        }

        .status-icon {
          width: 16px;
          height: 16px;
        }

        /* Enhanced Visual Elements */
        .table-enhancements {
          position: absolute;
          top: -20px;
          right: -20px;
          pointer-events: none;
        }

        .competitive-edge {
          position: relative;
          transform: rotate(12deg);
        }

        .edge-content {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, #10b981, #059669);
          border-radius: 20px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
          animation: edgeBounce 3s ease-in-out infinite;
        }

        @keyframes edgeBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.05); }
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

        .cta-text {
          font-size: 18px;
          color: #94a3b8;
          margin-bottom: 24px;
          font-weight: 500;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border: none;
          border-radius: 12px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
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
          box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
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
          
          .comparison-table {
            border-radius: 16px;
          }
        }

        @media (max-width: 768px) {
          .comparison-section {
            padding: 80px 0;
          }
          
          .section-container {
            padding: 0 20px;
          }
          
          .section-header {
            margin-bottom: 60px;
          }
          
          .table-headers,
          .comparison-row {
            grid-template-columns: 1fr;
          }
          
          .header-cell,
          .row-category,
          .row-others,
          .row-quantlabs {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding: 20px;
          }
          
          .header-cell:last-child,
          .row-category:last-child,
          .row-others:last-child,
          .row-quantlabs:last-child {
            border-bottom: none;
          }
          
          .cell-text {
            font-size: 13px;
          }
          
          .table-enhancements {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.5rem;
          }
          
          .header-cell,
          .row-category,
          .row-others,
          .row-quantlabs {
            padding: 16px;
          }
          
          .cell-icon {
            font-size: 18px;
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

export default ComparisonSection;