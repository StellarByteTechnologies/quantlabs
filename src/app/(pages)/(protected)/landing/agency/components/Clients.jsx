'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const Clients = () => {
  // Array of clients with correct public directory paths
  const clients = [
    { id: 1, name: "Neuberg Diagnostics", logo: "/images/logos/neuberg.webp" },
    { id: 2, name: "MAX Healthcare", logo: "/images/logos/Max-Healthcare-Logo.png" },
    { id: 3, name: "4baseCare", logo: "/images/logos/4baseCare.png" },
    { id: 4, name: "Briya", logo: "/images/logos/briya.jpeg" },
    { id: 5, name: "AIG Hospitals", logo: "/images/logos/logo.png" },
    { id: 6, name: "Core Diagnostics", logo: "/images/logos/Core-Diagnostics.png" },
    { id: 7, name: "PSRI Hospital", logo: "/images/logos/PSRI.webp" },
    { id: 8, name: "Protege", logo: "/images/logos/Protege_Logo.jpg" },
    { id: 9, name: "MSD", logo: "/images/logos/msd.png" },
    { id: 10, name: "TAQADAM", logo: "/images/logos/taqadam.webp" },
    { id: 11, name: "ADNEXUS", logo: "/images/logos/adnexus.png" },
    { id: 12, name: "Yenepoya University", logo: "/images/logos/yenepoya.png" },
    { id: 13, name: "World Health Organization", logo: "/images/logos/World_Health_Organization_Logo.svg.png" },
    { id: 14, name: "Aster Hospital", logo: "/images/logos/Aster.png" }
  ];

  return (
    <section 
      className="client-section position-relative py-6" 
      style={{ 
        background: "linear-gradient(to right, #182b6c, #192c69, #1a2e66)",
        overflow: "hidden",
        padding: "3rem 0" 
      }}
    >
      <Container className="position-relative">
        <Row className="justify-content-center mb-5">
          <Col md={8} lg={6} className="text-center">
            <div className="label-container mb-3">
              <span className="badge px-3 py-2 rounded-pill" style={{ 
                background: "rgba(59, 130, 246, 0.15)",
                color: "#fff",
                fontSize: "0.85rem",
                letterSpacing: "0.5px"
              }}>PARTNERS</span>
            </div>
            
            <h2 className="display-5 fw-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
              Our Trusted Partners
            </h2>
            
            <p className="text-white-50 mb-0" style={{ fontSize: "1.1rem" }}>
            Trusted by leading life sciences and healthcare organizations worldwide
            </p>
          </Col>
        </Row>
        
        {/* Two logo strips with marquee animation */}
        <div className="logo-strips-container mb-4">
          {/* First strip - top row */}
          <div className="logo-strip position-relative mb-4" style={{ overflow: "hidden" }}>
            {/* Left gradient fade */}
            <div className="position-absolute top-0 start-0 h-100 d-none d-md-block" style={{
              width: "100px",
              background: "linear-gradient(to right, #182b6c, transparent)",
              zIndex: 3
            }}></div>
            
            {/* Right gradient fade */}
            <div className="position-absolute top-0 end-0 h-100 d-none d-md-block" style={{
              width: "100px",
              background: "linear-gradient(to left, #1a2e66, transparent)",
              zIndex: 3
            }}></div>
            
            <div className="marquee-track">
              <div className="inner-track track-1">
                {/* First half of clients */}
                {clients.slice(0, 7).map((client, idx) => (
                  <div key={idx} className="logo-item mx-3">
                    <div 
                      className="logo-card" 
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "16px",
                        padding: "1.5rem 2rem",
                        boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
                        minWidth: "180px",
                        height: "90px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      {/* Replace the src attribute with your actual import variable */}
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={140}
                        height={60}
                        style={{
                          objectFit: 'contain',
                          maxWidth: '100%',
                          maxHeight: '60px'
                        }}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                ))}
                
                {/* Duplicate for seamless loop */}
                {clients.slice(0, 7).map((client, idx) => (
                  <div key={`dup-${idx}`} className="logo-item mx-3">
                    <div 
                      className="logo-card" 
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "16px",
                        padding: "1.5rem 2rem",
                        boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
                        minWidth: "180px",
                        height: "90px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      {/* Replace the src attribute with your actual import variable */}
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={140}
                        height={60}
                        style={{
                          objectFit: 'contain',
                          maxWidth: '100%',
                          maxHeight: '60px'
                        }}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Second strip - bottom row */}
          <div className="logo-strip position-relative" style={{ overflow: "hidden" }}>
            {/* Left gradient fade */}
            <div className="position-absolute top-0 start-0 h-100 d-none d-md-block" style={{
              width: "100px",
              background: "linear-gradient(to right, #182b6c, transparent)",
              zIndex: 3
            }}></div>
            
            {/* Right gradient fade */}
            <div className="position-absolute top-0 end-0 h-100 d-none d-md-block" style={{
              width: "100px",
              background: "linear-gradient(to left, #1a2e66, transparent)",
              zIndex: 3
            }}></div>
            
            <div className="marquee-track">
              <div className="inner-track track-2">
                {/* Second half of clients */}
                {clients.slice(7).map((client, idx) => (
                  <div key={idx} className="logo-item mx-3">
                    <div 
                      className="logo-card" 
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "16px",
                        padding: "1.5rem 2rem",
                        boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
                        minWidth: "180px",
                        height: "90px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      {/* Replace the src attribute with your actual import variable */}
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={140}
                        height={60}
                        style={{
                          objectFit: 'contain',
                          maxWidth: '100%',
                          maxHeight: '60px'
                        }}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                ))}
                
                {/* Duplicate for seamless loop */}
                {clients.slice(7).map((client, idx) => (
                  <div key={`dup-${idx}`} className="logo-item mx-3">
                    <div 
                      className="logo-card" 
                      style={{
                        background: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "16px",
                        padding: "1.5rem 2rem",
                        boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
                        minWidth: "180px",
                        height: "90px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      {/* Replace the src attribute with your actual import variable */}
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={140}
                        height={60}
                        style={{
                          objectFit: 'contain',
                          maxWidth: '100%',
                          maxHeight: '60px'
                        }}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* CSS for animation */}
      <style jsx>{`
        .marquee-track {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        
        .inner-track {
          display: flex;
          flex-wrap: nowrap;
          white-space: nowrap;
        }
        
        .track-1 {
          animation: scroll-left 30s linear infinite;
        }
        
        .track-2 {
          animation: scroll-right 30s linear infinite;
        }
        
        .logo-item {
          flex: 0 0 auto;
          padding: 10px;
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .track-1, .track-2 {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Clients;