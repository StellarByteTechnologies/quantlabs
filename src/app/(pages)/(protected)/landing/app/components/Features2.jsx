'use client';

import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Feature data with healthcare and AI focus
const features = [
  {
    title: "No Scale Issues",
    description: "A rare disease is uncommon in a single nation, but aggregating data from larger populations delivers meaningful insights at scale.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3" stroke="#FF7050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 15V17M11.5 11V17M16 7V17" stroke="#FF7050" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Early Market Access",
    description: "Capitalize on early insights into emerging healthcare markets.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#FF7050" strokeWidth="2"/>
        <path d="M12 12C14.5 9.5 18 9 20 10" stroke="#FF7050" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12C9.5 9.5 6 9 4 10" stroke="#FF7050" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12C12 8.5 10.5 5.5 9 4" stroke="#FF7050" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12C15 14.5 16 18.5 14.5 20" stroke="#FF7050" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Abundant High-Quality Data",
    description: "Rich, diverse datasets essential for AI training, drug discovery, and clinical research.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#FF7050" strokeWidth="2"/>
        <path d="M6 8H18" stroke="#FF7050" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 12H18" stroke="#FF7050" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 16H18" stroke="#FF7050" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Genetic Diversity",
    description: "Enhanced genetic diversity in data contributes significantly to robust and universally applicable healthcare solutions.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3V21" stroke="#FF7050" strokeWidth="2" strokeLinecap="round"/>
        <path d="M5 4H9.5C10.8807 4 12 5.11929 12 6.5C12 7.88071 10.8807 9 9.5 9H5" stroke="#FF7050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 9H11C12.3807 9 13.5 10.1193 13.5 11.5C13.5 12.8807 12.3807 14 11 14H5" stroke="#FF7050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 14H12.5C13.8807 14 15 15.1193 15 16.5C15 17.8807 13.8807 19 12.5 19H5" stroke="#FF7050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 3L19 21" stroke="#FF7050" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }
];

// Feature card component with hover effect
const FeatureCard = ({ feature }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="h-100 p-4 rounded-4 bg-white"
      style={{
        boxShadow: isHovered ? '0 15px 35px rgba(0,0,0,0.1)' : '0 10px 30px rgba(0,0,0,0.05)',
        border: '1px solid rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        {feature.icon}
      </div>
      <h3 className="fs-4 fw-bold mb-2">{feature.title}</h3>
      <p className="text-muted mb-0">{feature.description}</p>
    </div>
  );
};

const Features2 = () => {
  return (
    <section className="py-5 position-relative" id="advantages">
      {/* Subtle gradient background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ 
        background: 'linear-gradient(rgba(255, 120, 75, 0.05) 0%, rgba(255, 120, 75, 0.07) 100%) no-repeat left center',
        zIndex: 0 
      }}></div>
      
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="justify-content-center mb-5">
          <Col lg={9} className="text-center">
            <h2 className="display-5 fw-bold mt-3 mb-3">Advantage of Data from India, Africa, and the Middle East</h2>
            <p className="text-muted fs-5 mb-0">
              Leveraging data from <span className="text-primary fw-bold">diverse and populous</span> regions unlocks unique benefits for healthcare AI advancement
            </p>
          </Col>
        </Row>

        {/* CSS Grid layout for better control of the design */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gap: '30px',
          '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
          },
          '@media (min-width: 1200px)': {
            gridTemplateColumns: 'repeat(4, 1fr)'
          }
        }}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </Container>

      <style jsx>{`
        @media (min-width: 768px) {
          div[style] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (min-width: 1200px) {
          div[style] {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Features2;