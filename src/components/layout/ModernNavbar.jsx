'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ModernNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      <style>{`
        .navbar-root {
          position: fixed;
          top: 0; left: 0; width: 100vw;
          z-index: 9999;
          pointer-events: none;
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px 40px;
          background: transparent;
          transition: all 0.7s cubic-bezier(0.165,0.84,0.44,1);
          border-radius: 0;
          box-shadow: none;
          position: relative;
          pointer-events: auto;
        }
        .navbar-logo {
          display: flex; align-items: center;
          transition: all 0.7s cubic-bezier(0.165,0.84,0.44,1);
          margin-left: 0;
        }
        .navbar-logo span {
          font-size: 28px;
          color: #fff; font-weight: 700; margin-left: 16px;
          letter-spacing: -0.02em;
          font-family: 'Inter', sans-serif;
          transition: all 0.7s cubic-bezier(0.165,0.84,0.44,1);
        }
        .navbar-contact {
          display: flex; align-items: center;
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.4s;
        }
        .navbar-contact a {
          display: inline-block;
          padding: 14px 32px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 30px;
          color: #fff;
          font-weight: 600;
          text-decoration: none;
          font-size: 17px;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
        }
        .navbar-contact a:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(-2px);
        }

        /* SCROLLED styles: super tight pill, huge logo, no text/button */
        .navbar-root.scrolled {
          background: transparent;
          pointer-events: none;
        }
        .navbar-inner.scrolled {
          width: 116px; /* 90px logo + 13px*2 padding */
          max-width: 98vw;
          margin: 16px auto 0;
          padding: 13px 0;
          background: rgba(22,22,22,0.98);
          border-radius: 100px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.23);
          border: 1px solid rgba(255,255,255,0.10);
          backdrop-filter: blur(18px);
          justify-content: center;
        }
        .navbar-inner.scrolled .navbar-logo span,
        .navbar-inner.scrolled .navbar-contact {
          opacity: 0;
          width: 0;
          margin-left: 0;
          pointer-events: none;
        }
        .navbar-inner.scrolled .navbar-logo {
          margin: 0 auto;
        }
        .navbar-inner .logo-img {
          width: 60px; height: 60px; transition: width 0.7s, height 0.7s;
        }
        .navbar-inner.scrolled .logo-img {
          width: 90px; height: 90px;
        }

        @media (max-width: 800px) {
          .navbar-inner { padding: 10px 4px; }
        }
      `}</style>
      <div className={`navbar-root${scrolled ? ' scrolled' : ''}`}>
        <div className={`navbar-inner${scrolled ? ' scrolled' : ''}`}>
          <div className="navbar-logo">
            <Image
              src="/quant-labs-logo.svg"
              alt="Quant Labs"
              width={90}
              height={90}
              className="logo-img"
              style={{
                filter: 'brightness(0) invert(1)',
              }}
            />
            <span>Quant Labs</span>
          </div>
          <div className="navbar-contact">
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernNavbar;
