import React from 'react';

const HealthSection = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <div style={{
        maxWidth: '1400px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* Left Content */}
        <div style={{ 
          color: 'white',
          padding: '2rem',
          zIndex: 10
        }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            color: '#60a5fa',
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            fontSize: '0.875rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            For Patients
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            A personal health assistant to{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              simplify your care
            </span>
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: '#cbd5e1',
            lineHeight: '1.7',
            marginBottom: '2.5rem',
            maxWidth: '600px'
          }}>
            Understand and navigate your care with a complete picture of your health journey.
          </p>
          
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '16px',
            fontSize: '1rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 20px 60px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 40px rgba(59, 130, 246, 0.3)';
          }}>
            <span>Explore our product</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Right Content - Modern Dashboard */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          
          {/* Floating Background Cards */}
          <div style={{
            position: 'absolute',
            top: '-2rem',
            left: '-2rem',
            width: '320px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '1.5rem',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transform: 'rotate(-3deg)',
            zIndex: 1
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', letterSpacing: '0.05em' }}>OCT 28</span>
              <div style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '0.375rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Office Visit
              </div>
            </div>
            <h3 style={{ fontWeight: '700', color: '#0f172a', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Radiology</h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>👨‍⚕️ Mark Baker, MD</p>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>📍 Advocate Health Care</p>
          </div>

          <div style={{
            position: 'absolute',
            top: '3rem',
            left: '0',
            width: '320px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '1.5rem',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transform: 'rotate(2deg)',
            zIndex: 2
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', letterSpacing: '0.05em' }}>OCT 13</span>
              <div style={{
                background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                color: 'white',
                padding: '0.375rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Procedure
              </div>
            </div>
            <h3 style={{ fontWeight: '700', color: '#0f172a', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Biopsy</h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>👨‍⚕️ James Carter, MD</p>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>📍 Advocate Health Care</p>
          </div>

          <div style={{
            position: 'absolute',
            top: '8rem',
            left: '1rem',
            width: '320px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '1.5rem',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transform: 'rotate(-1deg)',
            zIndex: 3
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', letterSpacing: '0.05em' }}>OCT 01</span>
              <div style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: 'white',
                padding: '0.375rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.7rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Laboratory
              </div>
            </div>
            <h3 style={{ fontWeight: '700', color: '#0f172a', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Complete Blood Count Panel</h3>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.25rem' }}>👩‍⚕️ Hana Lee, MD</p>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>📍 Advocate Health Care</p>
          </div>

          {/* Main Phone Interface */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            transform: 'translateX(2rem)',
            filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.3))'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              borderRadius: '3rem',
              padding: '0.5rem',
              border: '2px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '2.5rem',
                overflow: 'hidden',
                width: '350px',
                minHeight: '600px'
              }}>
                
                {/* Phone Header */}
                <div style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  position: 'relative',
                  borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: '#10b981',
                      borderRadius: '50%',
                      animation: 'pulse 2s infinite'
                    }}></div>
                    <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>New</span>
                  </div>
                  
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    border: '3px solid white',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}>
                    👨‍💼
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
                      borderRadius: '50%'
                    }}></div>
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>I'm Picnic.</span>
                  </div>
                </div>

                {/* Phone Content */}
                <div style={{ padding: '1.5rem' }}>
                  
                  {/* Imaging Section */}
                  <div style={{
                    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                    borderRadius: '20px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(226, 232, 240, 0.5)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Imaging</span>
                      <div style={{
                        background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                        fontWeight: '600'
                      }}>
                        New
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem'
                      }}>
                        🫁
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ fontWeight: '700', color: '#0f172a', marginBottom: '0.25rem' }}>PicnicCare</h4>
                        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Monitor your cholesterol</p>
                      </div>
                    </div>
                    
                    <button style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '16px',
                      padding: '0.875rem',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                    }}>
                      Order at-home test kit
                    </button>
                  </div>

                  {/* Medical Visualization */}
                  <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '100%',
                      height: '120px',
                      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80px',
                        height: '80px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        backdropFilter: 'blur(10px)'
                      }}>
                        🫁
                      </div>
                    </div>
                    <div style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      width: '32px',
                      height: '32px',
                      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      boxShadow: '0 4px 20px rgba(239, 68, 68, 0.4)'
                    }}>
                      5.6
                    </div>
                  </div>

                  {/* Health Metrics */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                    borderRadius: '16px',
                    border: '1px solid rgba(226, 232, 240, 0.5)'
                  }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Hemoglobin A1c</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a' }}>6.2%</span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Floating Orbs */}
          <div style={{
            position: 'absolute',
            top: '-1rem',
            right: '2rem',
            width: '24px',
            height: '24px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            borderRadius: '50%',
            opacity: 0.6,
            animation: 'float 3s ease-in-out infinite',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)'
          }}></div>
          
          <div style={{
            position: 'absolute',
            top: '8rem',
            right: '-1rem',
            width: '16px',
            height: '16px',
            background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
            borderRadius: '50%',
            opacity: 0.4,
            animation: 'float 4s ease-in-out infinite',
            animationDelay: '1s',
            boxShadow: '0 8px 32px rgba(168, 85, 247, 0.3)'
          }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '5rem',
            right: '3rem',
            width: '12px',
            height: '12px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            borderRadius: '50%',
            opacity: 0.7,
            animation: 'float 2.5s ease-in-out infinite',
            animationDelay: '2s',
            boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)'
          }}></div>
          
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HealthSection;