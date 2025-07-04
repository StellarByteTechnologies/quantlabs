'use client'
import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';

// Feature Card Component - Modern black and white design
const FeatureCard = ({
  description,
  icon,
  title
}) => {
  return (
    <Card className="modern-card">
      <CardBody className="p-4">
        <div className="d-flex text-align-start">
          <div className="icon-container me-4 flex-shrink-0 d-flex align-items-start pt-2">
            {icon}
          </div>
          <div className="flex-grow-1 content-wrapper pt-2">
            <h5 className="mt-0 fw-bold text-dark">{title}</h5>
            <h4 className="mt-2 mb-3 fw-bold">{description.heading || description}</h4>
            <p className="mb-0 text-dark">{description.text || ""}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const RegulatedGradeData = () => {
  // Modern black and white 3D icons
  const qualityAssuranceIcon = (
    <svg viewBox="0 0 200 200" width="100" height="100">
      <defs>
        <filter id="shadow-1" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2"/>
        </filter>
      </defs>
      <circle cx="100" cy="100" r="85" fill="white" filter="url(#shadow-1)" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="#333" strokeWidth="6" />
      <path d="M75,100 L90,115 L125,80" fill="none" stroke="#333" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const hipaaIcon = (
    <svg viewBox="0 0 200 200" width="100" height="100">
      <defs>
        <filter id="shadow-2" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2"/>
        </filter>
      </defs>
      <circle cx="100" cy="100" r="85" fill="white" filter="url(#shadow-2)" />
      <path d="M100,40 L150,60 L150,110 C150,140 130,160 100,180 C70,160 50,140 50,110 L50,60 L100,40" fill="none" stroke="#333" strokeWidth="6" />
      <text x="100" y="110" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#333" textAnchor="middle">HIPAA</text>
      <text x="100" y="130" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#333" textAnchor="middle">GDPR</text>
    </svg>
  );

  const consentIcon = (
    <svg viewBox="0 0 200 200" width="100" height="100">
      <defs>
        <filter id="shadow-3" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2"/>
        </filter>
      </defs>
      <circle cx="100" cy="100" r="85" fill="white" filter="url(#shadow-3)" />
      <rect x="60" y="50" width="80" height="100" rx="4" fill="none" stroke="#333" strokeWidth="6" />
      <line x1="75" y1="80" x2="125" y2="80" stroke="#333" strokeWidth="4" strokeLinecap="round" />
      <line x1="75" y1="100" x2="125" y2="100" stroke="#333" strokeWidth="4" strokeLinecap="round" />
      <line x1="75" y1="120" x2="105" y2="120" stroke="#333" strokeWidth="4" strokeLinecap="round" />
      <circle cx="115" cy="120" r="8" fill="#333" />
      <path d="M110,120 L115,125 L122,118" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const anonymizationIcon = (
    <svg viewBox="0 0 200 200" width="100" height="100">
      <defs>
        <filter id="shadow-4" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2"/>
        </filter>
      </defs>
      <circle cx="100" cy="100" r="85" fill="white" filter="url(#shadow-4)" />
      <circle cx="100" cy="85" r="20" fill="none" stroke="#333" strokeWidth="6" />
      <path d="M65,150 C65,125 80,115 100,115 C120,115 135,125 135,150" fill="none" stroke="#333" strokeWidth="6" />
      <line x1="150" y1="50" x2="50" y2="150" stroke="#333" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );

  // Features with enhanced content structure (keeping original data)
  const features = [
    {
      icon: qualityAssuranceIcon,
      title: "Quality Assurance",
      description: {
        heading: "OMOP Common Data Model",
        text: "We standardize data through the Observational Medical Outcomes Partnership (OMOP) Common Data Model (CDM) framework. Clients can request random samples from the data to be verified by both clinical professionals and data science experts before each data access request."
      }
    },
    {
      icon: hipaaIcon,
      title: "HIPAA and GDPR Compliance",
      description: {
        heading: "Global Regulatory Standards",
        text: "HIPAA and GDPR compliant process. Collaborations with HIPAA and GDPR specialists across the United States, Europe, and Asia, from whom an audit and certification can be obtained upon request."
      }
    },
    {
      icon: consentIcon,
      title: "Patient Consent",
      description: {
        heading: "Digital Audit Trail",
        text: "We create a digital audit trail for consent (either taken on paper OR digital), ensuring complete transparency and regulatory compliance throughout the entire data collection process."
      }
    },
    {
      icon: anonymizationIcon,
      title: "Anonymization & De-identification",
      description: {
        heading: "Patent-Pending Technology",
        text: "Patent-pending software for anonymization and de-identification designed to precisely identify and anonymize personal data in compliance with HIPAA, GDPR, and local/country-specific laws."
      }
    }
  ];

  return (
    <section className="py-2 position-relative" data-aos="fade-up">
      <div className="divider d-none" />
      
      {/* Animated Background Patterns */}
      <div className="animated-background">
        <div className="pattern-grid"></div>
        <div className="pattern-dots"></div>
        <div className="pattern-waves"></div>
        <div className="floating-particles">
          {Array.from({length: 12}).map((_, i) => (
            <div key={i} className={`particle particle-${i % 4}`} style={{
              left: `${10 + (i * 7)}%`,
              top: `${10 + ((i * 13) % 70)}%`,
              animationDelay: `${i * 0.5}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <Container className="pt-1 pb-1">
        <Row>
          <Col className="text-center">
            <span className="badge rounded-pill badge-soft-orange px-2 py-1">Validated
</span>
            <h1 className="display-5 fw-semibold text-dark mt-1 mb-2">Regulated-Grade and Quality Data</h1>
          </Col>
        </Row>
        
        <Row className="mt-3 mb-2">
          {features.map((feature, index) => (
            <Col lg={{ span: 10, offset: 1 }} xl={{ span: 12, offset: 0 }} className={index < features.length - 1 ? "mb-3" : ""} key={index}>
              <FeatureCard {...feature} />
            </Col>
          ))}
        </Row>
      </Container>
      
      <style jsx>{`
        section {
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        
        /* Animated Background Patterns */
        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
          background: #ffffff;
        }
        
        .pattern-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(210, 210, 210, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(210, 210, 210, 0.2) 1px, transparent 1px);
          background-size: 25px 25px;
          animation: moveGrid 40s linear infinite;
        }
        
        .pattern-dots {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(200, 200, 200, 0.3) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: moveDots 50s linear infinite;
        }
        
        .pattern-waves {
          position: absolute;
          top: 10%;
          left: 0;
          width: 200%;
          height: 80%;
          background-image: 
            repeating-linear-gradient(
              45deg,
              rgba(240, 240, 240, 0.6),
              rgba(240, 240, 240, 0.6) 5px,
              rgba(255, 255, 255, 0) 5px,
              rgba(255, 255, 255, 0) 20px
            );
          animation: moveWaves 60s linear infinite;
        }
        
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(230, 230, 230, 0.6);
          animation: floatParticle 25s ease-in-out infinite;
        }
        
        .particle-0 {
          width: 15px;
          height: 15px;
          opacity: 0.4;
        }
        
        .particle-1 {
          width: 8px;
          height: 8px;
          opacity: 0.3;
          background-color: rgba(220, 220, 220, 0.7);
        }
        
        .particle-2 {
          width: 12px;
          height: 12px;
          opacity: 0.5;
        }
        
        .particle-3 {
          width: 10px;
          height: 10px;
          opacity: 0.4;
          background-color: rgba(210, 210, 210, 0.7);
        }
        
        @keyframes moveGrid {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(25px) translateY(25px); }
        }
        
        @keyframes moveDots {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-20px) translateY(20px); }
        }
        
        @keyframes moveWaves {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes floatParticle {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(20px, 20px); }
          50% { transform: translate(0px, 40px); }
          75% { transform: translate(-20px, 20px); }
        }
        
        .modern-card {
          border: none;
          border-radius: 8px;
          box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.06),
            0 2px 6px rgba(0, 0, 0, 0.04);
          overflow: hidden;
          transform-style: preserve-3d;
          perspective: 1000px;
          transition: all 0.4s ease;
          background: white;
        }
        
        .modern-card:hover {
          transform: translateY(-5px);
          box-shadow: 
            0 15px 30px rgba(0, 0, 0, 0.08),
            0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .content-wrapper {
          position: relative;
          z-index: 1;
        }
        
        .badge-soft-orange {
          background-color: rgba(51, 51, 51, 0.1);
          color: #333;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
};

export default RegulatedGradeData;