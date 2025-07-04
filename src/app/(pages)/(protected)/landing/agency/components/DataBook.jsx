'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DataBook = () => {
  // Animation states
  const [animate, setAnimate] = useState(false);
  const [sectionsInView, setSectionsInView] = useState({
    therapeutic: false
  });
  
  // References for scroll detection
  const therapeuticRef = useRef(null);
  
  // Set animation after component mount and handle scroll animations
  useEffect(() => {
    setAnimate(true);
    
    // Initialize Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
    
    // Observer callback
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'therapeutic-section') {
            setSectionsInView(prev => ({...prev, therapeutic: true}));
            
            // Animate each progress bar
            const progressBars = document.querySelectorAll('.therapeutic-progress');
            progressBars.forEach(bar => {
              setTimeout(() => {
                bar.style.width = bar.getAttribute('data-value');
              }, 300);
            });
          }
        }
      });
    };
    
    // Create observer
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe sections
    if (therapeuticRef.current) observer.observe(therapeuticRef.current);
    
    // Cleanup
    return () => {
      if (therapeuticRef.current) observer.unobserve(therapeuticRef.current);
    };
  }, []);

  // Interactive state for stats
  const [hoveredStat, setHoveredStat] = useState(null);

  // NEW STATS DATA
  const stats = [
    {
      value: "350k+",
      description: "Biospecimen samples (tissue, blood, CSF, saliva etc)"
    },
    {
      value: "1M+",
      description: "Stained IHC slides"
    },
    {
      value: "1M+",
      description: "DICOM images (MRIs, PET-CTs, etc)"
    },
    {
      value: "200k+",
      description: ".BAM/FASTQ files from genomic, proteomic, and transcriptomic data sets"
    }
  ];

  // Therapeutic area data
  const therapeuticData = [
    { name: 'Oncology', records: 12, color: '#3182CE' },
    { name: 'Cardiology', records: 9, color: '#E53E3E' },
    { name: 'Neurology', records: 7, color: '#805AD5' },
    { name: 'Rare Diseases', records: 4, color: '#38A169' },
    { name: 'Metabolic Disorders', records: 5, color: '#DD6B20' }
  ];
  
  // State for interactive therapeutic area hover
  const [hoveredArea, setHoveredArea] = useState(null);

  // Reusable Calendly function - copy this into any component
const openCalendly = (calendlyUrl = 'https://calendly.com/sumit-omicsbank/30min') => {
  console.log('Opening Calendly native popup');
  
  // Check if Calendly widget is loaded
  if (window.Calendly && window.Calendly.initPopupWidget) {
    console.log('✅ Using Calendly native popup widget');
    window.Calendly.initPopupWidget({ url: calendlyUrl });
  } else {
    console.log('⚠️ Calendly widget not loaded, loading it now...');
    
    // Load Calendly script if not already loaded
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.onload = () => {
      console.log('✅ Calendly script loaded, opening popup');
      window.Calendly.initPopupWidget({ url: calendlyUrl });
    };
    script.onerror = () => {
      console.error('❌ Failed to load Calendly script');
      alert('Failed to load Calendly. Please check your internet connection and try again.');
    };
    document.head.appendChild(script);
  }
};
  
  return (
    <section className="my-lg-5 py-5 py-sm-7 bg-gradient5 position-relative" data-aos="fade-up">
      <div className="divider top d-none d-sm-block" />
      <Container>
        {/* Header Section */}
        <Row className={`mb-5 text-center ${animate ? 'animate__animated animate__fadeIn' : ''}`}>
          <Col>
            <span className="badge rounded-pill badge-soft-orange px-3 py-2 mb-3">Data Book</span>
            <h1 className="display-5 fw-semibold">Explore Our Datasets</h1>
            <div className="mx-auto bg-primary" 
              style={{
                width: '100px', 
                height: '4px', 
                marginTop: '20px',
                transition: 'width 0.5s ease-in-out',
                width: animate ? '100px' : '0px'
              }}></div>
          </Col>
        </Row>

        {/* Main Data Banner with Asian Map + Genomics Layer */}
        <Row className={`mb-5 ${animate ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''}`}>
          <Col>
            <div className="bg-white rounded-lg shadow overflow-hidden border border-light">
              {/* Main Banner with Asia Map and Genomics Visualization */}
              <div className="position-relative overflow-hidden" style={{ height: "400px" }}>
                {/* Gradient background */}
                <div className="position-absolute w-100 h-100" style={{
                  background: "linear-gradient(135deg, #3182CE 0%, #4299E1 35%, #63B3ED 100%)",
                  zIndex: 1
                }}></div>
                
                {/* Asia Map SVG with improved styling */}
                <div className="position-absolute w-100 h-100" style={{ zIndex: 2, opacity: 0.15 }}>
                  <svg width="100%" height="100%" viewBox="0 0 900 450" preserveAspectRatio="xMidYMid slice">
                    {/* India */}
                    <path d="M400,280 Q410,250 430,240 T470,220 T480,180 Q470,150 450,140 Q440,135 430,140 Q400,150 390,170 Q380,190 370,240 Q380,260 400,280Z" 
                      fill="#ffffff" opacity="0.2" stroke="#ffffff" strokeWidth="1"/>
                    
                    {/* Southeast Asia */}
                    <path d="M500,260 Q520,240 530,220 Q540,200 550,190 Q560,180 570,190 Q580,210 575,240 Q570,270 540,290 Q520,300 500,280 Q490,270 500,260Z" 
                      fill="#ffffff" opacity="0.2" stroke="#ffffff" strokeWidth="1"/>
                    
                    {/* China */}
                    <path d="M480,180 Q500,160 530,150 Q550,145 580,150 Q600,160 620,180 Q630,200 620,220 Q600,240 570,240 Q540,230 520,210 Q500,200 480,180Z" 
                      fill="#ffffff" opacity="0.2" stroke="#ffffff" strokeWidth="1"/>
                    
                    {/* Japan */}
                    <path d="M650,160 Q660,150 670,160 Q680,170 675,190 Q670,210 650,220 Q640,215 635,200 Q630,180 650,160Z" 
                      fill="#ffffff" opacity="0.2" stroke="#ffffff" strokeWidth="1"/>
                    
                    {/* Connection network */}
                    <g>
                      {/* Data node clusters */}
                      <g>
                        {/* China cluster */}
                        <circle cx="550" cy="170" r="8" fill="#ffffff" opacity="0.7" />
                        <circle cx="530" cy="160" r="5" fill="#ffffff" opacity="0.6" />
                        <circle cx="570" cy="180" r="6" fill="#ffffff" opacity="0.6" />
                        
                        {/* India cluster */}
                        <circle cx="420" cy="200" r="7" fill="#ffffff" opacity="0.7" />
                        <circle cx="430" cy="180" r="5" fill="#ffffff" opacity="0.6" />
                        <circle cx="410" cy="210" r="4" fill="#ffffff" opacity="0.5" />
                        
                        {/* Southeast Asia cluster */}
                        <circle cx="530" cy="250" r="6" fill="#ffffff" opacity="0.7" />
                        <circle cx="510" cy="260" r="4" fill="#ffffff" opacity="0.5" />
                        
                        {/* Japan cluster */}
                        <circle cx="660" cy="180" r="5" fill="#ffffff" opacity="0.7" />
                      </g>
                      
                      {/* Connection lines */}
                      <g stroke="#ffffff" strokeOpacity="0.3">
                        {/* Main connections */}
                        <line x1="550" y1="170" x2="420" y2="200" strokeWidth="2" />
                        <line x1="550" y1="170" x2="530" y2="250" strokeWidth="2" />
                        <line x1="550" y1="170" x2="660" y2="180" strokeWidth="2" />
                        <line x1="420" y1="200" x2="530" y2="250" strokeWidth="1.5" />
                        
                        {/* Cluster internal connections */}
                        <line x1="550" y1="170" x2="530" y2="160" strokeWidth="1" />
                        <line x1="550" y1="170" x2="570" y2="180" strokeWidth="1" />
                        <line x1="420" y1="200" x2="430" y2="180" strokeWidth="1" />
                        <line x1="420" y1="200" x2="410" y2="210" strokeWidth="1" />
                        <line x1="530" y1="250" x2="510" y2="260" strokeWidth="1" />
                      </g>
                      
                      {/* Genomic data flow animations */}
                      <g className="data-flow-particles">
                        {[...Array(8)].map((_, i) => (
                          <circle 
                            key={i}
                            className="data-particle"
                            cx="0" cy="0" r="3" 
                            fill="#ffffff"
                            style={{
                              animationDelay: `${i * 0.8}s`
                            }}
                          />
                        ))}
                      </g>
                    </g>
                  </svg>
                </div>
                
                {/* DNA helix pattern overlay */}
                <div className="position-absolute w-100 h-100" style={{ zIndex: 3, opacity: 0.1 }}>
                  <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <pattern id="dnaPattern" patternUnits="userSpaceOnUse" width="400" height="200" patternTransform="rotate(30)">
                        <path d="M0,20 Q100,100 200,20 T400,20" fill="none" stroke="#ffffff" strokeWidth="10" opacity="0.3" />
                        <path d="M0,60 Q100,140 200,60 T400,60" fill="none" stroke="#ffffff" strokeWidth="10" opacity="0.3" />
                        <path d="M0,100 Q100,20 200,100 T400,100" fill="none" stroke="#ffffff" strokeWidth="10" opacity="0.3" />
                        <path d="M0,140 Q100,60 200,140 T400,140" fill="none" stroke="#ffffff" strokeWidth="10" opacity="0.3" />
                        <path d="M0,180 Q100,100 200,180 T400,180" fill="none" stroke="#ffffff" strokeWidth="10" opacity="0.3" />
                        
                        {/* Connecting lines */}
                        {[...Array(10)].map((_, i) => (
                          <line key={i} x1={40 * i} y1="20" x2={40 * i} y2="180" stroke="#ffffff" strokeWidth="4" opacity="0.3" />
                        ))}
                      </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#dnaPattern)" />
                  </svg>
                </div>
                
                {/* Content Container */}
                <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center px-4" style={{ zIndex: 4 }}>
                  <h1 className="display-4 fw-bold text-white mb-4" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
                  Asia&nbsp;&apos;s Largest Federated Data Network
                  </h1>
                  
                  <div className="mb-4 d-flex justify-content-center">
                    <span className="display-1 fw-bold text-white" 
                      style={{ 
                        textShadow: "0 0 30px rgba(255,255,255,0.5)",
                        letterSpacing: "-2px"
                      }}>
                      5 million + 
                    </span>
                  </div>
                  
                  <p className="lead text-white mb-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)", maxWidth: "600px" }}>
                    Patient, health, and multi-omic datasets for research,
                    drug development, and clinical trials
                  </p>
                  
                  <button className="btn btn-light btn-lg px-4 shadow-sm" onClick={() => openCalendly()}>
                    Access Sample Data
                  </button>
                </div>
                
                {/* Floating data particles */}
                <div className="position-absolute w-100 h-100" style={{ zIndex: 3 }}>
                  {[...Array(25)].map((_, i) => (
                    <div 
                      key={i}
                      className="position-absolute rounded-circle genomic-particle" 
                      style={{
                        backgroundColor: "rgba(255,255,255,0.4)",
                        width: `${4 + Math.random() * 6}px`,
                        height: `${4 + Math.random() * 6}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        boxShadow: "0 0 8px rgba(255,255,255,0.5)",
                        animationDuration: `${5 + Math.random() * 10}s`,
                        animationDelay: `${Math.random() * 5}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Stats Cards Section with NEW DATA */}
        <Row className={`mt-5 mb-5 ${animate ? 'animate__animated animate__fadeInUp animate__delay-2s' : ''}`}>
          <Col>
            <div 
              className="rounded-lg overflow-hidden shadow-lg bg-blue-600 position-relative"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%235d80b6'/%3E%3Cstop offset='1' stop-color='%23395685'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0.3'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.15'%3E%3Ccircle fill='%23ffffff' cx='267.5' cy='61' r='5'/%3E%3Ccircle fill='%23ffffff' cx='429.8' cy='200.5' r='6'/%3E%3Ccircle fill='%23ffffff' cx='156.4' cy='237.8' r='4'/%3E%3Ccircle fill='%23ffffff' cx='501.5' cy='105.4' r='5'/%3E%3Ccircle fill='%23ffffff' cx='374.5' cy='139.2' r='6'/%3E%3Ccircle fill='%23ffffff' cx='596.9' cy='228.1' r='4'/%3E%3Ccircle fill='%23ffffff' cx='320.3' cy='266.5' r='5'/%3E%3Ccircle fill='%23ffffff' cx='190.2' cy='70.3' r='4'/%3E%3C/g%3E%3Cg stroke='%23ffffff' stroke-width='1' stroke-opacity='0.2'%3E%3Cline x1='267.5' y1='61' x2='429.8' y2='200.5'/%3E%3Cline x1='429.8' y1='200.5' x2='156.4' y2='237.8'/%3E%3Cline x1='156.4' y1='237.8' x2='501.5' y2='105.4'/%3E%3Cline x1='501.5' y1='105.4' x2='374.5' y2='139.2'/%3E%3Cline x1='374.5' y1='139.2' x2='596.9' y2='228.1'/%3E%3Cline x1='596.9' y1='228.1' x2='320.3' y2='266.5'/%3E%3Cline x1='320.3' y1='266.5' x2='190.2' y2='70.3'/%3E%3Cline x1='190.2' y1='70.3' x2='267.5' y2='61'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="d-flex flex-column flex-md-row">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="w-100 p-4 text-white d-flex flex-column justify-content-between" 
                    style={{ 
                      borderRight: index < stats.length - 1 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: hoveredStat === index ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                      transform: hoveredStat === index ? 'translateY(-5px)' : 'translateY(0)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div 
                      className="display-4 fw-bold mb-3"
                      style={{
                        transform: hoveredStat === index ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.3s ease'
                      }}
                    >{stat.value}</div>
                    <div className="fs-6">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Therapeutic Areas Section - Now Full Width with improved design */}
        <Row className="mb-5">
          <Col>
            <div id="therapeutic-section" ref={therapeuticRef} className="bg-white rounded-lg shadow p-0 overflow-hidden">
              {/* Header section with accent color and white heading */}
              <div className="bg-primary bg-gradient p-4 text-white">
                <h3 className="fw-bold mb-0 text-white">Therapeutic Area Collections</h3>
              </div>
              
              <div className="p-4">
                {/* Updated content with specified records sorted in descending order */}
                <div className="mb-4">
                  <p className="mb-3">Detailed therapeutic-area-specific collections:</p>
                  
                  <ul className="list-unstyled">
                    {/* Cardiology - 1.5M records */}
                    <li className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fs-5 fw-medium text-dark">Cardiology</span>
                        <span className="badge text-white" style={{backgroundColor: "#E53E3E", padding: "0.5rem 0.75rem"}}>
                          1.5M records
                        </span>
                      </div>
                      <div className="progress rounded" style={{height: "10px", backgroundColor: 'rgba(0,0,0,0.05)'}}>
                        <div 
                          className="therapeutic-progress"
                          role="progressbar"
                          style={{ 
                            width: '0%',
                            height: '100%',
                            background: 'linear-gradient(90deg, #E53E3E99 0%, #E53E3E 100%)',
                            transition: 'width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                          }}
                          data-value="100%"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </li>
                    
                    {/* Metabolic Disorders - 1.5M records */}
                    <li className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fs-5 fw-medium text-dark">Metabolic Disorders</span>
                        <span className="badge text-white" style={{backgroundColor: "#DD6B20", padding: "0.5rem 0.75rem"}}>
                          1.5M records
                        </span>
                      </div>
                      <div className="progress rounded" style={{height: "10px", backgroundColor: 'rgba(0,0,0,0.05)'}}>
                        <div 
                          className="therapeutic-progress"
                          role="progressbar"
                          style={{ 
                            width: '0%',
                            height: '100%',
                            background: 'linear-gradient(90deg, #DD6B2099 0%, #DD6B20 100%)',
                            transition: 'width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                          }}
                          data-value="100%"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </li>
                    
                    {/* Neurology - 100k+ records */}
                    <li className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fs-5 fw-medium text-dark">Neurology</span>
                        <span className="badge text-white" style={{backgroundColor: "#805AD5", padding: "0.5rem 0.75rem"}}>
                          100k+ records
                        </span>
                      </div>
                      <div className="progress rounded" style={{height: "10px", backgroundColor: 'rgba(0,0,0,0.05)'}}>
                        <div 
                          className="therapeutic-progress"
                          role="progressbar"
                          style={{ 
                            width: '0%',
                            height: '100%',
                            background: 'linear-gradient(90deg, #805AD599 0%, #805AD5 100%)',
                            transition: 'width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                          }}
                          data-value="65%"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </li>

                    {/* Oncology - 77k+ records */}
                    <li className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fs-5 fw-medium text-dark">Oncology</span>
                        <span className="badge text-white" style={{backgroundColor: "#3182CE", padding: "0.5rem 0.75rem"}}>
                          77k+ records
                        </span>
                      </div>
                      <div className="progress rounded" style={{height: "10px", backgroundColor: 'rgba(0,0,0,0.05)'}}>
                        <div 
                          className="therapeutic-progress"
                          role="progressbar"
                          style={{ 
                            width: '0%',
                            height: '100%',
                            background: 'linear-gradient(90deg, #3182CE99 0%, #3182CE 100%)',
                            transition: 'width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                          }}
                          data-value="50%"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </li>
                    
                    {/* Rare Diseases - 15k+ records */}
                    <li className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fs-5 fw-medium text-dark">Rare Diseases</span>
                        <span className="badge text-white" style={{backgroundColor: "#38A169", padding: "0.5rem 0.75rem"}}>
                          15k+ records
                        </span>
                      </div>
                      <div className="progress rounded" style={{height: "10px", backgroundColor: 'rgba(0,0,0,0.05)'}}>
                        <div 
                          className="therapeutic-progress"
                          role="progressbar"
                          style={{ 
                            width: '0%',
                            height: '100%',
                            background: 'linear-gradient(90deg, #38A16999 0%, #38A169 100%)',
                            transition: 'width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                          }}
                          data-value="25%"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Footer section */}
                <div className="mt-5 text-center">
                  <p className="text-secondary mb-4">
                    Access comprehensive therapeutic datasets tailored to your research needs with complete patient journeys and longitudinal records.
                  </p>
                  <button className="btn btn-primary px-4 py-2" onClick={() => openCalendly()}>
                    Explore All Datasets
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0.2; }
          25% { transform: translateY(-10px) translateX(5px); opacity: 0.7; }
          50% { transform: translateY(5px) translateX(10px); opacity: 0.5; }
          75% { transform: translateY(10px) translateX(-5px); opacity: 0.7; }
          100% { transform: translateY(0) translateX(0); opacity: 0.2; }
        }
        
        /* Animation for data flowing along lines in the map */
        @keyframes dataFlow {
          0% { 
            transform: translate(500px, 170px); 
            opacity: 0;
          }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { 
            transform: translate(610px, 160px); 
            opacity: 0;
          }
        }
        
        /* Animation for India to SE Asia */
        @keyframes dataFlow2 {
          0% { 
            transform: translate(380px, 210px); 
            opacity: 0;
          }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { 
            transform: translate(500px, 260px); 
            opacity: 0;
          }
        }
        
        /* Animation for China to India */
        @keyframes dataFlow3 {
          0% { 
            transform: translate(500px, 170px); 
            opacity: 0;
          }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { 
            transform: translate(380px, 210px); 
            opacity: 0;
          }
        }
        
        .data-flow-particle.particle-type-0 {
          animation: dataFlow 8s linear infinite;
        }
        
        .data-flow-particle.particle-type-1 {
          animation: dataFlow2 6s linear infinite;
        }
        
        .data-flow-particle.particle-type-2 {
          animation: dataFlow3 7s linear infinite;
        }
        
        .genomic-particle {
          animation: particleFloat 4s ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }
        
        /* Card hover effects */
        @keyframes cardPulse {
          0% { box-shadow: 0 0 0 rgba(0,0,0,0.1); }
          50% { box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
          100% { box-shadow: 0 0 0 rgba(0,0,0,0.1); }
        }
        
        /* Progress bar animation enhancement */
        @keyframes progressGlow {
          0% { box-shadow: 0 0 5px rgba(0,100,255,0.2); }
          50% { box-shadow: 0 0 15px rgba(0,100,255,0.4); }
          100% { box-shadow: 0 0 5px rgba(0,100,255,0.2); }
        }
        
        .animate__animated {
          animation-duration: 1s;
        }
        
        .animate__fadeIn {
          animation-name: fadeIn;
        }
        
        .animate__fadeInUp {
          animation-name: fadeInUp;
        }
        
        .animate__delay-1s {
          animation-delay: 0.3s;
        }
        
        .animate__delay-2s {
          animation-delay: 0.6s;
        }
        
        .animate__delay-3s {
          animation-delay: 0.9s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        
        /* DNA helix animation */
        @keyframes rotateHelix {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* For text glow effect */
        @keyframes textGlow {
          0% { text-shadow: 0 0 10px rgba(255,255,255,0.2); }
          50% { text-shadow: 0 0 20px rgba(255,255,255,0.5); }
          100% { text-shadow: 0 0 10px rgba(255,255,255,0.2); }
        }
      `}</style>
    </section>
  );
};

export default DataBook;