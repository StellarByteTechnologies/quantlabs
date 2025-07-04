'use client';
import { useState } from 'react';
import { Col, Container, Row, Toast } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currentYear } from '@/assets/data/constants';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);
  
  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    try {
      // You would replace this with your actual API endpoint
      // For example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
      console.log('Subscribing email:', email);
      
      // For demonstration, we're just simulating success
      // In a real implementation, you would handle the API response here
      
      // Show success message
      setShowToast(true);
      
      // Clear the input field
      setEmail('');
      
      // Hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className="pt-5 pb-3 position-relative bg-white">
      <Container>
        {/* Toast notification for successful subscription */}
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
          <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
            <Toast.Header closeButton={true}>
              <strong className="me-auto">Success</strong>
            </Toast.Header>
            <Toast.Body>Subscribed successfully!</Toast.Body>
          </Toast>
        </div>
        
        {/* Main Footer Content - Two Column Layout */}
        <Row className="mb-5">
          {/* Left Column - Logo and Newsletter */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <Link className="navbar-brand d-inline-block mb-4" href="/">
              <span className="fw-bold fs-4">Omics Bank</span>
            </Link>
            <div>
              <h4 className="fw-bold mb-4">Subscribe to Newsletter</h4>
              <form onSubmit={handleSubscribe} className="d-flex newsletter-input">
                <input 
                  type="email" 
                  className="form-control border-end-0" 
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  <IconifyIcon icon="lucide:arrow-right" />
                </button>
              </form>
            </div>
            
            {/* Certificates Section with actual logo images */}
            <div className="mt-5">
              <h6 className="text-muted mb-4">CERTIFICATES</h6>
              <div className="d-flex flex-wrap gap-4">
                <div className="d-flex align-items-center">
                  <img 
                    src="/images/logos/iso.webp" 
                    alt="ISO 27001 Certified" 
                    width={60} 
                    height={60} 
                    style={{ objectFit: "contain" }}
                  />
                  <div className="ms-2">
                    <div>ISO</div>
                    <div>27001</div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img 
                    src="/images/logos/gdpr.webp" 
                    alt="GDPR Compliant" 
                    width={60} 
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                  <div className="ms-2">
                    <div>GDPR</div>
                    <div>compliant</div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img 
                    src="/images/logos/hipaa.webp" 
                    alt="HIPAA Compliant" 
                    width={60} 
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                  <div className="ms-2">
                    <div>HIPAA</div>
                    <div>compliant</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          {/* Right Column - Contact Information */}
          <Col lg={6}>
            <Row>
              {/* Address Section */}
              <Col md={6} className="mb-4 mb-md-0">
                <h6 className="text-muted mb-4">ADDRESS</h6>
                <p className="mb-2">169 Madison Avenue,</p>
                <p className="mb-2">STE 11133,</p>
                <p className="mb-4">New York, NY 10016, USA</p>
              </Col>
              
              {/* Contact Section */}
              <Col md={6} className="mb-4 mb-md-0">
                <h6 className="text-muted mb-4">CONTACT</h6>
                <p className="mb-2">Phone: +1 (857) 654-2544</p>
                <p className="mb-4">Email: info@omicsbank.com</p>
                
                <p className="mb-2">Hours: 9AM-6PM EST</p>
                <p className="mb-2">Monday - Friday</p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-5 pt-3 border-top">
          <Col className="d-flex justify-content-between align-items-center">
            <div>© {currentYear} Omics Bank</div>
            <div>
              Site By <Link href="https://stellarbyt.com" className="text-primary text-decoration-none">Stellarbyte</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;