'use client'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const DataOffering = () => {
  // Minimal healthcare data icons
  const ehrIcon = (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#0d6efd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <line x1="8" y1="6" x2="16" y2="6"></line>
      <line x1="8" y1="10" x2="16" y2="10"></line>
      <line x1="8" y1="14" x2="16" y2="14"></line>
      <line x1="8" y1="18" x2="12" y2="18"></line>
    </svg>
  );

  const pathologyIcon = (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#0d6efd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="12" cy="10" r="3"></circle>
      <line x1="9" y1="17" x2="15" y2="17"></line>
    </svg>
  );

  const genomicsIcon = (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#0d6efd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,12 C8,6 16,18 21,12"></path>
      <path d="M3,12 C8,18 16,6 21,12"></path>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
  );

  const transcriptomicsIcon = (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#0d6efd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3,12 Q8,6 12,12 Q16,18 21,12"></path>
      <circle cx="3" cy="12" r="1"></circle>
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="21" cy="12" r="1"></circle>
    </svg>
  );

  const proteomicsIcon = (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#0d6efd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="7" r="3"></circle>
      <circle cx="17" cy="7" r="3"></circle>
      <circle cx="7" cy="17" r="3"></circle>
      <circle cx="17" cy="17" r="3"></circle>
      <line x1="10" y1="7" x2="14" y2="7"></line>
      <line x1="7" y1="10" x2="7" y2="14"></line>
      <line x1="17" y1="10" x2="17" y2="14"></line>
      <line x1="10" y1="17" x2="14" y2="17"></line>
    </svg>
  );

  const imagingIcon = (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#0d6efd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="14" rx="2" ry="2"></rect>
      <circle cx="8" cy="8" r="1.5"></circle>
      <path d="M6,14 L8,12 L10,14 L15,9 L18,12"></path>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );

  const biobankIcon = (
    <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="#0d6efd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7,2 L17,2 L17,22 L7,22 Z"></path>
      <path d="M7,7 L17,7"></path>
      <path d="M7,12 L17,12"></path>
      <path d="M7,17 L17,17"></path>
      <circle cx="9" cy="4.5" r="0.5" fill="#0d6efd"></circle>
      <circle cx="9" cy="9.5" r="0.5" fill="#0d6efd"></circle>
      <circle cx="9" cy="14.5" r="0.5" fill="#0d6efd"></circle>
      <circle cx="9" cy="19.5" r="0.5" fill="#0d6efd"></circle>
    </svg>
  );

  // Data types with descriptions matching your content and enhanced presentation
  const dataTypes = [
    {
      icon: ehrIcon,
      title: "Longitudinal Electronic Health Records (EHRs)",
      description: "OMOP CDM-structured, enriched with clinical outcomes and accompanied by raw files.",
      fileFormats: ["PDFs", "HL7", "FHIR", "DICOM"]
    },
    {
      icon: pathologyIcon,
      title: "Slides & Pathology Reports",
      description: "Digitized pathology slides and structured histopathology findings.",
      fileFormats: ["TIFF", "SVS", "XML", "JSON"]
    },
    {
      icon: genomicsIcon,
      title: "Genomics Data",
      description: "High-quality sequencing data supporting disease gene mapping and variant interpretation.",
      fileFormats: ["FASTQ", "VCF", "BAM"]
    },
    {
      icon: transcriptomicsIcon,
      title: "Transcriptomics Data",
      description: "RNA expression profiles for discovery of molecular mechanisms.",
      fileFormats: ["FASTQ", "TXT", "CSV"]
    },
    {
      icon: proteomicsIcon,
      title: "Proteomics Data",
      description: "Protein expression and quantification datasets.",
      fileFormats: ["RAW", "mzML", "TXT"]
    },
    {
      icon: imagingIcon,
      title: "Imaging Data",
      description: "Annotated radiology and diagnostic imaging datasets.",
      fileFormats: ["DICOM", "PNG", "JPEG", "JSON"]
    },
    {
      icon: biobankIcon,
      title: "BioBank Data",
      description: "Access to raw biological materials including tissue samples, blood, and plasma with corresponding metadata.",
      fileFormats: ["Tissue", "Blood", "Plasma"]
    }
  ];

  return (
    <section className="py-2 position-relative">
      <div className="divider d-none" />
      
      {/* Simplified Background */}
      <div className="animated-background">
        {/* Removed animated elements */}
      </div>
      
      <Container className="pt-1 pb-1">
        <Row>
          <Col className="text-center">
            <h6 className="text-uppercase fw-semibold tracking-wide text-primary mb-2">Healthcare Data</h6>
            <h2 className="display-5 fw-semibold text-dark mt-1 mb-3">Our <span className="text-highlight">Data Offering</span></h2>
            <p className="lead mb-4">Access <span className="text-emphasis">diverse</span>, <span className="text-emphasis">structured</span>, and <span className="text-emphasis">analysis-ready</span> data</p>
          </Col>
        </Row>
        
        <Row className="mt-3 mb-2">
          {dataTypes.map((dataType, index) => (
            <Col lg={6} className={index < dataTypes.length - 1 ? "mb-4" : ""} key={index}>
              <div className="minimal-card">
                <div className="card-content">
                  <div className="d-flex align-items-start">
                    <div className="icon-wrapper me-3">
                      {dataType.icon}
                    </div>
                    <div className="card-text-content">
                      <h5 className="fw-bold text-dark">{dataType.title}</h5>
                      <p className="text-muted mb-2">
                        {dataType.description.split(/(\bOMOP CDM-structured\b|\bstructured histopathology findings\b|\bdisease gene mapping\b|\bmolecular mechanisms\b|\bProtein expression\b|\bAnnotated radiology\b|\braw biological materials\b)/g).map((text, i) => 
                          i % 2 === 1 ? <span key={i} className="text-key-feature">{text}</span> : text
                        )}
                      </p>
                      {dataType.fileFormats && dataType.fileFormats.length > 0 && (
                        <div className="file-formats">
                          {dataType.fileFormats.map((format, idx) => (
                            <span key={idx} className="badge-minimal me-2">{format}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <Row className="justify-content-center mt-4 mb-2">
          <Col md={6} lg={{ span: 4, offset: 0 }} className="text-center">
            <a href="#" className="cta-button">
              <span className="cta-content">
                <span className="cta-text">Book a Call</span>
                <span className="cta-icon">→</span>
              </span>
            </a>
          </Col>
        </Row>
      </Container>
      
      <style jsx>{`
        section {
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        
        .animated-background {
          display: none;
        }
        
        .tracking-wide {
          letter-spacing: 2px;
        }
        
        .minimal-card {
          padding: 1.5rem;
          margin-bottom: 0.5rem;
          border-radius: 8px;
          border: none;
          background: white;
          transition: all 0.3s ease;
          box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.04),
            0 4px 8px rgba(0, 0, 0, 0.03);
          transform: translateZ(0);
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .minimal-card:hover {
          transform: translateY(-2px) translateZ(5px);
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.06),
            0 8px 16px rgba(0, 0, 0, 0.05);
        }
        
        .icon-wrapper {
          transform: translateZ(10px);
        }
        
        .icon-wrapper svg {
          width: 42px;
          height: 42px;
          opacity: 0.85;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
          transition: transform 0.3s ease;
        }
        
        .minimal-card:hover .icon-wrapper svg {
          transform: scale(1.05);
        }
        
        .card-content {
          position: relative;
          z-index: 1;
        }
        
        .card-text-content {
          transform: translateZ(5px);
        }
        
        .badge-minimal {
          font-size: 0.7rem;
          font-weight: 500;
          color: #6c757d;
          background: none;
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        
        .minimal-card:hover .badge-minimal {
          border-color: rgba(13, 110, 253, 0.2);
          color: #0d6efd;
        }
        
        .text-highlight {
          position: relative;
          color: #0d6efd;
          font-weight: 700;
        }
        
        .text-highlight::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: rgba(13, 110, 253, 0.1);
          z-index: -1;
          border-radius: 2px;
        }
        
        .text-emphasis {
          color: #0d6efd;
          font-weight: 500;
        }
        
        .text-key-feature {
          color: #0d6efd;
          font-weight: 500;
        }
        
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #0d6efd, #0a58ca);
          color: white;
          font-weight: 600;
          padding: 0;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.2);
          transition: all 0.3s ease;
          text-decoration: none;
          transform: translateY(0);
        }
        
        .cta-content {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.8rem 2rem;
          position: relative;
          z-index: 1;
        }
        
        .cta-text {
          margin-right: 8px;
        }
        
        .cta-icon {
          display: inline-flex;
          transition: transform 0.3s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(13, 110, 253, 0.3);
          color: white;
        }
        
        .cta-button:hover .cta-icon {
          transform: translateX(4px);
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0a58ca, #0d6efd);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .cta-button:hover::before {
          opacity: 1;
        }
        
        .text-primary {
          color: #0d6efd !important;
        }
        
        h5 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1.15rem;
        }
        
        .text-muted {
          color: #6c757d !important;
        }
        
        .lead {
          font-size: 1.25rem;
          font-weight: 400;
        }
      `}</style>
    </section>
  );
};

export default DataOffering;