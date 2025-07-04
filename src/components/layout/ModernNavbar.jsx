'use client'
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

const ModernNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1(857)654-2544', '_blank');
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={`py-3 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}
      style={{
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none'
      }}
    >
      <Container>
        {/* Logo Text */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <span 
            style={{ 
              fontSize: '22px', 
              color: scrolled ? '#000' : '#fff',
              letterSpacing: '-0.5px',
              fontFamily: '"Inter", "Helvetica Neue", sans-serif',
              fontWeight: '600',
              transition: 'color 0.3s ease'
            }}>
            Quant Labs
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Nav.Link 
              href="#contact" 
              className="me-4"
              style={{
                fontSize: '14px',
                color: scrolled ? '#000' : '#fff',
                fontWeight: '600',
                transition: 'color 0.2s ease'
              }}
            >
              Contact Us
            </Nav.Link>
            
            <div className="d-flex align-items-center">
              <button 
                onClick={handleWhatsAppClick}
                className="d-flex align-items-center gap-2 position-relative"
                style={{ 
                  backgroundColor: '#25D366',
                  border: 'none',
                  padding: '10px 24px 10px 16px',
                  borderRadius: '12px',
                  color: '#fff',
                  fontWeight: '500',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 6px 15px rgba(37, 211, 102, 0.15)'
                }}
              >
                <div className="d-flex align-items-center justify-content-center" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  flexShrink: 0
                }}>
                  <FaWhatsapp size={16} color="#fff" />
                </div>
                <span>+1 (857) 654-2544</span>
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ModernNavbar;