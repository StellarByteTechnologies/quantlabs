'use client'
import React, { useState, useEffect } from 'react';
import HealthSection from './HealthSection';

const Hero = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [recordCount, setRecordCount] = useState(0);
  const [activeRecord, setActiveRecord] = useState(null);
  
  const steps = [
    { title: "Collecting records", icon: "📥", color: "#3b82f6" },
    { title: "Organizing data", icon: "📊", color: "#06b6d4" },
    { title: "Ready to share", icon: "🔗", color: "#10b981" }
  ];

  // Animate record count
  useEffect(() => {
    const interval = setInterval(() => {
      setRecordCount(prev => prev < 247 ? prev + 3 : 247);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };

  return (
    <div className="hero">
      <div className="container">
        {/* Header section */}
        <div className="hero-header">
          <div className="header-content">
            <div className="status-pill">
              <span className="pulse-dot"></span>
              <span>Live Demo</span>
            </div>
            
            <h1 className="main-title">
              Watch Picnic Health
              <br />
              <span className="gradient-text">organize your records</span>
            </h1>
            
            <p className="main-subtitle">
              See how we automatically collect, organize, and prepare your medical 
              records for sharing with any healthcare provider. No manual work required.
            </p>
            
            <button onClick={handleGetStarted} className="primary-cta">
              <span>Try it with my records</span>
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>

        {/* Dashboard preview - now smaller and more interactive */}
        <div className="dashboard-preview">
          <div className="dashboard-container">
            {/* Compact progress indicator */}
            <div className="progress-section">
              <div className="progress-content">
                <div className="step-info">
                  <span className="step-icon">{steps[currentStep].icon}</span>
                  <div className="step-details">
                    <span className="step-title">{steps[currentStep].title}</span>
                    <span className="records-count">{recordCount} records found</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${((currentStep + 1) / steps.length) * 100}%`,
                      background: steps[currentStep].color 
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Compact records preview */}
            <div className="records-preview">
              <div className="preview-header">
                <span>Recent Records</span>
                <button 
                  className="view-toggle"
                  onClick={() => setCurrentStep((currentStep + 1) % steps.length)}
                >
                  ↻ Refresh
                </button>
              </div>
              
              <div className="mini-records">
                <div 
                  className="mini-record"
                  onClick={() => setActiveRecord(0)}
                  style={{ background: currentStep === 0 ? '#eff6ff' : 'white' }}
                >
                  <span className="mini-icon">🏥</span>
                  <div className="mini-details">
                    <span className="mini-title">Annual Physical</span>
                    <span className="mini-date">Dec 15</span>
                  </div>
                  <span className={`mini-status ${currentStep >= 0 ? 'active' : ''}`}>
                    {currentStep >= 0 ? '✓' : '⏳'}
                  </span>
                </div>
                
                <div 
                  className="mini-record"
                  onClick={() => setActiveRecord(1)}
                  style={{ background: currentStep === 1 ? '#f0f9ff' : 'white' }}
                >
                  <span className="mini-icon">🧪</span>
                  <div className="mini-details">
                    <span className="mini-title">Lab Results</span>
                    <span className="mini-date">Dec 12</span>
                  </div>
                  <span className={`mini-status ${currentStep >= 1 ? 'active' : ''}`}>
                    {currentStep >= 1 ? '✓' : '⏳'}
                  </span>
                </div>
                
                <div 
                  className="mini-record"
                  onClick={() => setActiveRecord(2)}
                  style={{ background: currentStep === 2 ? '#f0fdf4' : 'white' }}
                >
                  <span className="mini-icon">💊</span>
                  <div className="mini-details">
                    <span className="mini-title">Prescription</span>
                    <span className="mini-date">Dec 10</span>
                  </div>
                  <span className={`mini-status ${currentStep >= 2 ? 'active' : ''}`}>
                    {currentStep >= 2 ? '✓' : '⏳'}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick action panel */}
            <div className="quick-actions">
              <button 
                className="action-btn primary"
                onClick={() => {
                  setCurrentStep(2);
                  setRecordCount(247);
                }}
              >
                <span>📤</span>
                <span>Share Records</span>
              </button>
              <button 
                className="action-btn secondary"
                onClick={() => setCurrentStep(0)}
              >
                <span>👁️</span>
                <span>Preview</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="stats-section">
          <div className="stat-group">
            <div className="stat-item">
              <div className="stat-number">50M+</div>
              <div className="stat-label">Records processed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Patients served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Accuracy rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support available</div>
            </div>
          </div>
        </div>

        {/* Healthcare Service Cards */}
        <div className="service-cards-section">
          <div className="service-cards-grid">
            <div className="service-card patients-card">
              <div className="card-content">
                <div className="card-header">
                  <div className="card-logo">
                    <span className="logo-p">p</span>
                  </div>
                  <div className="card-status">
                    <div className="status-indicator"></div>
                    <span>Active Platform</span>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="card-category">For Healthcare Providers</div>
                  <h3 className="card-title">Patient Record Unification</h3>
                  <p className="card-description">
                    Comprehensive patient data aggregation from multiple sources, 
                    enabling informed clinical decisions and improved patient outcomes.
                  </p>
                  
                  <div className="metrics-row">
                    <div className="metric">
                      <span className="metric-value">247</span>
                      <span className="metric-label">Avg Records/Patient</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">99.9%</span>
                      <span className="metric-label">Data Accuracy</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">85%</span>
                      <span className="metric-label">Time Saved</span>
                    </div>
                  </div>
                </div>
                
                <div className="card-footer">
                  <div className="action-group">
                    <button className="primary-action" onClick={handleGetStarted}>
                      <span>Request Integration</span>
                      <div className="action-icon">→</div>
                    </button>
                    <button className="secondary-action">
                      <span>View Case Studies</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="card-gradient patients-gradient"></div>
              <div className="data-visualization">
                <div className="data-point point-1"></div>
                <div className="data-point point-2"></div>
                <div className="data-point point-3"></div>
                <div className="connecting-line line-1"></div>
                <div className="connecting-line line-2"></div>
              </div>
            </div>
            
            <div className="service-card research-card">
              <div className="card-content">
                <div className="card-header">
                  <div className="card-logo">
                    <span className="logo-p">p</span>
                  </div>
                  <div className="card-status research-status">
                    <div className="status-indicator"></div>
                    <span>Research Ready</span>
                  </div>
                </div>
                
                <div className="card-body">
                  <div className="card-category">For Life Sciences</div>
                  <h3 className="card-title">Real-World Evidence Platform</h3>
                  <p className="card-description">
                    Accelerate clinical research with structured, longitudinal health data 
                    from diverse patient populations for robust observational studies.
                  </p>
                  
                  <div className="metrics-row">
                    <div className="metric">
                      <span className="metric-value">50M+</span>
                      <span className="metric-label">Patient Records</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">12K+</span>
                      <span className="metric-label">Healthcare Sites</span>
                    </div>
                    <div className="metric">
                      <span className="metric-value">76%</span>
                      <span className="metric-label">Faster Studies</span>
                    </div>
                  </div>
                </div>
                
                <div className="card-footer">
                  <div className="action-group">
                    <button className="primary-action research-primary" onClick={handleGetStarted}>
                      <span>Schedule Consultation</span>
                      <div className="action-icon">→</div>
                    </button>
                    <button className="secondary-action">
                      <span>Platform Demo</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="card-gradient research-gradient"></div>
              <div className="data-visualization">
                <div className="data-point point-1"></div>
                <div className="data-point point-2"></div>
                <div className="data-point point-3"></div>
                <div className="connecting-line line-1"></div>
                <div className="connecting-line line-2"></div>
              </div>
            </div>
          </div>
        </div>
        <HealthSection/>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 3rem 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }
        
        /* Header Section */
        .hero-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .header-content {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #065f46;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .main-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: #0f172a;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .main-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #64748b;
          margin-bottom: 2.5rem;
        }
        
        .primary-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #0f172a;
          color: white;
          border: none;
          padding: 1.2rem 2.5rem;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.3);
        }
        
        .primary-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(15, 23, 42, 0.4);
        }
        
        .cta-arrow {
          font-size: 1.3rem;
          transition: transform 0.3s ease;
        }
        
        .primary-cta:hover .cta-arrow {
          transform: translateX(4px);
        }
        
        /* Dashboard Preview - Now much smaller */
        .dashboard-preview {
          background: white;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          margin-bottom: 3rem;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .dashboard-container {
          display: grid;
          gap: 1rem;
        }
        
        /* Compact Progress Section */
        .progress-section {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1rem;
          border: 1px solid #e2e8f0;
        }
        
        .progress-content {
          display: grid;
          gap: 0.75rem;
        }
        
        .step-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .step-icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        
        .step-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .step-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #0f172a;
        }
        
        .records-count {
          font-size: 0.8rem;
          color: #059669;
          font-weight: 600;
        }
        
        .progress-bar {
          width: 100%;
          height: 6px;
          background: #e5e7eb;
          border-radius: 3px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          border-radius: 3px;
          transition: all 0.5s ease;
        }
        
        /* Compact Records Preview */
        .records-preview {
          background: #fafafa;
          border-radius: 12px;
          padding: 1rem;
          border: 1px solid #e5e7eb;
        }
        
        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: #0f172a;
        }
        
        .view-toggle {
          background: none;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 0.25rem 0.5rem;
          font-size: 0.8rem;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .view-toggle:hover {
          background: white;
          color: #374151;
        }
        
        .mini-records {
          display: grid;
          gap: 0.5rem;
        }
        
        .mini-record {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: white;
          padding: 0.75rem;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .mini-record:hover {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transform: translateY(-1px);
        }
        
        .mini-icon {
          font-size: 1.2rem;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          border-radius: 6px;
        }
        
        .mini-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }
        
        .mini-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #0f172a;
        }
        
        .mini-date {
          font-size: 0.75rem;
          color: #64748b;
        }
        
        .mini-status {
          font-size: 0.9rem;
          color: #e5e7eb;
          transition: all 0.3s ease;
        }
        
        .mini-status.active {
          color: #10b981;
        }
        
        /* Quick Actions */
        .quick-actions {
          display: flex;
          gap: 0.75rem;
        }
        
        .action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .action-btn.primary {
          background: #3b82f6;
          color: white;
        }
        
        .action-btn.primary:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }
        
        .action-btn.secondary {
          background: white;
          color: #374151;
          border: 1px solid #d1d5db;
        }
        
        .action-btn.secondary:hover {
          background: #f9fafb;
          transform: translateY(-1px);
        }
        
        /* Professional Healthcare Service Cards */
        .service-cards-section {
          margin-top: 4rem;
        }
        
        .service-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .service-card {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          padding: 0;
          min-height: 420px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          border: 1px solid rgba(226, 232, 240, 0.8);
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
        }
        
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          border-color: rgba(59, 130, 246, 0.2);
        }
        
        .card-content {
          position: relative;
          z-index: 10;
          height: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        
        .card-logo {
          width: 48px;
          height: 48px;
          background: rgba(15, 23, 42, 0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(15, 23, 42, 0.1);
          transition: all 0.3s ease;
        }
        
        .service-card:hover .card-logo {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.2);
        }
        
        .logo-p {
          font-size: 1.4rem;
          font-weight: 900;
          color: #0f172a;
        }
        
        .card-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: statusPulse 2s ease-in-out infinite;
        }
        
        .research-status .status-indicator {
          background: #06b6d4;
        }
        
        .card-category {
          font-size: 0.75rem;
          font-weight: 700;
          color: #3b82f6;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        
        .research-card .card-category {
          color: #06b6d4;
        }
        
        .card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }
        
        .card-description {
          font-size: 0.95rem;
          color: #475569;
          margin: 0 0 2rem 0;
          line-height: 1.6;
          flex: 1;
        }
        
        .metrics-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: rgba(248, 250, 252, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(226, 232, 240, 0.6);
        }
        
        .metric {
          text-align: center;
        }
        
        .metric-value {
          display: block;
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }
        
        .metric-label {
          font-size: 0.7rem;
          color: #64748b;
          font-weight: 500;
          line-height: 1.2;
        }
        
        .card-footer {
          margin-top: auto;
        }
        
        .action-group {
          display: flex;
          gap: 0.75rem;
        }
        
        .primary-action {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #0f172a;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.85rem 1.25rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .primary-action:hover {
          background: #1e293b;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.3);
        }
        
        .research-primary {
          background: #0891b2;
        }
        
        .research-primary:hover {
          background: #0e7490;
          box-shadow: 0 4px 20px rgba(8, 145, 178, 0.3);
        }
        
        .action-icon {
          font-size: 1rem;
          transition: transform 0.3s ease;
        }
        
        .primary-action:hover .action-icon {
          transform: translateX(3px);
        }
        
        .secondary-action {
          background: transparent;
          color: #64748b;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 0.85rem 1.25rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .secondary-action:hover {
          background: #f8fafc;
          color: #374151;
          border-color: #cbd5e1;
          transform: translateY(-1px);
        }
        
        /* Subtle Card Gradients */
        .card-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          border-radius: 16px;
          opacity: 0.6;
          transition: opacity 0.4s ease;
        }
        
        .patients-gradient {
          background: 
            linear-gradient(135deg, 
              rgba(168, 162, 255, 0.02) 0%, 
              rgba(196, 181, 253, 0.03) 50%,
              rgba(251, 207, 232, 0.02) 100%);
        }
        
        .research-gradient {
          background: 
            linear-gradient(135deg, 
              rgba(165, 243, 252, 0.02) 0%, 
              rgba(103, 232, 249, 0.03) 50%,
              rgba(34, 197, 94, 0.02) 100%);
        }
        
        .service-card:hover .card-gradient {
          opacity: 1;
        }
        
        /* Subtle Data Visualization */
        .data-visualization {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 80px;
          height: 60px;
          pointer-events: none;
          z-index: 5;
          opacity: 0.1;
          transition: opacity 0.4s ease;
        }
        
        .service-card:hover .data-visualization {
          opacity: 0.2;
        }
        
        .data-point {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #3b82f6;
          border-radius: 50%;
          animation: dataFlow 3s ease-in-out infinite;
        }
        
        .point-1 {
          top: 10px;
          left: 10px;
          animation-delay: 0s;
        }
        
        .point-2 {
          top: 30px;
          left: 40px;
          animation-delay: 1s;
        }
        
        .point-3 {
          top: 15px;
          right: 10px;
          animation-delay: 2s;
        }
        
        .research-card .data-point {
          background: #06b6d4;
        }
        
        .connecting-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          animation: lineFlow 4s ease-in-out infinite;
        }
        
        .line-1 {
          top: 20px;
          left: 15px;
          width: 30px;
          animation-delay: 0.5s;
        }
        
        .line-2 {
          top: 35px;
          left: 45px;
          width: 25px;
          animation-delay: 1.5s;
        }
        
        .research-card .connecting-line {
          background: linear-gradient(90deg, transparent, #06b6d4, transparent);
        }
        
        /* Professional Animations */
        @keyframes statusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @keyframes dataFlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes lineFlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }, 181, 253, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(251, 207, 232, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, rgba(168, 162, 255, 0.1) 0%, rgba(252, 211, 164, 0.1) 100%);
        }
        
        .research-gradient {
          background: 
            radial-gradient(circle at 20% 80%, rgba(165, 243, 252, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(103, 232, 249, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, rgba(165, 243, 252, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%);
        }
        
        .service-card:hover .patients-gradient {
          background: 
            radial-gradient(circle at 20% 80%, rgba(168, 162, 255, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(196, 181, 253, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(251, 207, 232, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, rgba(168, 162, 255, 0.15) 0%, rgba(252, 211, 164, 0.15) 100%);
        }
        
        .service-card:hover .research-gradient {
          background: 
            radial-gradient(circle at 20% 80%, rgba(165, 243, 252, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(103, 232, 249, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, rgba(165, 243, 252, 0.15) 0%, rgba(34, 197, 94, 0.15) 100%);
        }
        
        /* Floating Elements */
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }
        
        .floating-icon {
          position: absolute;
          font-size: 1.5rem;
          opacity: 0.15;
          animation: floatIcon 8s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        
        .icon-1 {
          top: 15%;
          right: 15%;
          animation-delay: 0s;
        }
        
        .icon-2 {
          top: 45%;
          right: 8%;
          animation-delay: 2s;
        }
        
        .icon-3 {
          bottom: 25%;
          right: 20%;
          animation-delay: 4s;
        }
        
        .service-card:hover .floating-icon {
          opacity: 0.3;
          transform: scale(1.2);
        }
        
        /* Animations */
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }
        
        @keyframes badgeGlow {
          0% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.2); }
          100% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.4); }
        }
        
        @keyframes featureSlide {
          from { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        .stat-group {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .main-title {
            font-size: 3rem;
          }
          
          .share-options {
            flex-direction: column;
          }
          
          .stat-group {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
          
          .main-title {
            font-size: 2.5rem;
          }
          
          .dashboard-preview {
            padding: 1.5rem;
          }
          
          .progress-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          
          .grid-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          
          .record-meta {
            flex-direction: column;
            gap: 0.25rem;
          }
          
          .share-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          
          .stat-group {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;