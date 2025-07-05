'use client'
import { useEffect, useRef, useState } from 'react';

const CapabilitiesSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCapability, setHoveredCapability] = useState(null);
  const [activeNodes, setActiveNodes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start the neural network animation
          setTimeout(() => {
            const nodeAnimation = setInterval(() => {
              setActiveNodes(prev => {
                const newNodes = [...prev];
                const randomIndex = Math.floor(Math.random() * 12);
                if (newNodes.includes(randomIndex)) {
                  return newNodes.filter(n => n !== randomIndex);
                } else {
                  return [...newNodes, randomIndex];
                }
              });
            }, 800);

            return () => clearInterval(nodeAnimation);
          }, 1000);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const capabilities = [
    {
      id: 'deep-learning',
      title: 'Deep Learning Architectures',
      description: 'CNNs, RNNs, transformers, diffusion models, custom loss engineering.',
      icon: '🧠',
      color: 'cyan',
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
      techStack: ['PyTorch', 'TensorFlow', 'JAX', 'Custom CUDA'],
      complexity: 'Advanced'
    },
    {
      id: 'llm-workflows',
      title: 'LLM-Oriented Workflows',
      description: 'Custom instruction-tuned models, RAG pipelines, memory graphs, and tool-augmented reasoning.',
      icon: '🔗',
      color: 'emerald',
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      techStack: ['Transformers', 'LangChain', 'Vector DBs', 'Fine-tuning'],
      complexity: 'Expert'
    },
    {
      id: 'foundation-models',
      title: 'Foundation & Multi-Modal Models',
      description: 'Language, vision, and tabular systems tailored to your domain.',
      icon: '🌐',
      color: 'violet',
      gradient: 'from-violet-400 via-purple-500 to-indigo-600',
      techStack: ['CLIP', 'DALLE', 'GPT', 'Custom Architectures'],
      complexity: 'Expert'
    },
    {
      id: 'agentic-systems',
      title: 'Agentic Systems',
      description: 'Autonomous pipelines that learn, plan, reason and execute.',
      icon: '🤖',
      color: 'orange',
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      techStack: ['RL', 'Planning', 'Multi-Agent', 'Tool Use'],
      complexity: 'Cutting-Edge'
    },
    {
      id: 'trusted-execution',
      title: 'Trusted Execution & Privacy',
      description: 'TEE-backed inference, secure enclaves, and privacy-preserving AI for sensitive data workflows.',
      icon: '🛡️',
      color: 'red',
      gradient: 'from-red-400 via-rose-500 to-pink-600',
      techStack: ['Intel SGX', 'AMD SEV', 'Homomorphic', 'Differential Privacy'],
      complexity: 'Specialized'
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      description: 'From PDFs to handwritten logs, building robust structured data streams (ETL & ELTs).',
      icon: '⚙️',
      color: 'amber',
      gradient: 'from-amber-400 via-yellow-500 to-orange-600',
      techStack: ['Apache Spark', 'Kafka', 'Airflow', 'Data Lakes'],
      complexity: 'Production'
    },
    {
      id: 'secure-mlops',
      title: 'Secure ML Ops',
      description: 'IAM, RBAC, encryption, audit logs, compliance frameworks.',
      icon: '🔐',
      color: 'slate',
      gradient: 'from-slate-400 via-gray-500 to-zinc-600',
      techStack: ['K8s', 'Docker', 'Vault', 'Compliance'],
      complexity: 'Enterprise'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`capabilities-section ${isVisible ? 'visible' : ''}`}
    >
      {/* Neural Network Background */}
      <div className="neural-background">
        <svg className="neural-network" viewBox="0 0 1200 800">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
            </radialGradient>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
          </defs>
          
          {/* Neural Network Nodes */}
          {Array.from({ length: 12 }).map((_, i) => {
            const x = 100 + (i % 4) * 300;
            const y = 150 + Math.floor(i / 4) * 200;
            const isActive = activeNodes.includes(i);
            
            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? "12" : "8"}
                  fill="url(#nodeGradient)"
                  className={`neural-node ${isActive ? 'active' : ''}`}
                />
                <circle
                  cx={x}
                  cy={y}
                  r="20"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="1"
                  className={`node-ring ${isActive ? 'active' : ''}`}
                />
              </g>
            );
          })}
          
          {/* Neural Connections */}
          {Array.from({ length: 8 }).map((_, i) => {
            const x1 = 100 + (i % 4) * 300;
            const y1 = 150 + Math.floor(i / 4) * 200;
            const x2 = 100 + ((i + 1) % 4) * 300;
            const y2 = 150 + Math.floor((i + 1) / 4) * 200;
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                className="neural-connection"
              />
            );
          })}
        </svg>
      </div>

      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="header-badge">
            <div className="badge-pulse" />
            <span className="badge-icon">🚀</span>
            <span className="badge-text">Core Technologies</span>
          </div>
          <h2 className="section-title">
            <span className="title-line">Our Capabilities</span>
            <span className="title-subtitle">Core technologies we master</span>
          </h2>
        </div>

        {/* Capabilities Matrix */}
        <div className="capabilities-matrix">
          {capabilities.map((capability, index) => (
            <div
              key={capability.id}
              className={`capability-cell ${capability.color}`}
              style={{ '--cell-index': index }}
              onMouseEnter={() => setHoveredCapability(capability.id)}
              onMouseLeave={() => setHoveredCapability(null)}
            >
              {/* Cell Background Effects */}
              <div className="cell-background">
                <div className={`cell-gradient ${capability.gradient}`} />
                <div className="cell-mesh" />
                <div className="cell-particles" />
              </div>

              {/* Complexity Badge */}
              <div className="complexity-badge">
                <span className="complexity-text">{capability.complexity}</span>
              </div>

              {/* Capability Content */}
              <div className="capability-content">
                <div className="capability-header">
                  <div className="icon-container">
                    <span className="capability-icon">{capability.icon}</span>
                    <div className="icon-glow" />
                  </div>
                  <h3 className="capability-title">{capability.title}</h3>
                </div>

                <p className="capability-description">
                  {capability.description}
                </p>

                {/* Tech Stack */}
                <div className="tech-stack">
                  <div className="tech-label">Tech Stack</div>
                  <div className="tech-items">
                    {capability.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`hover-overlay ${hoveredCapability === capability.id ? 'active' : ''}`}>
                  <div className="overlay-content">
                    <div className="overlay-icon">✨</div>
                    <div className="overlay-text">Deep Dive Available</div>
                  </div>
                </div>
              </div>

              {/* Interactive Elements */}
              <div className="cell-interactions">
                <div className="corner-accent top-left" />
                <div className="corner-accent top-right" />
                <div className="corner-accent bottom-left" />
                <div className="corner-accent bottom-right" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="bottom-statement">
          <div className="statement-container">
            <div className="statement-decorations">
              <div className="deco-line left" />
              <div className="deco-orb" />
              <div className="deco-line right" />
            </div>
            
            <div className="statement-content">
              <h4 className="statement-title">
                We build core technologies of modern intelligence
              </h4>
              <p className="statement-text">
                Agentic, autonomous systems that are beyond interfaces and wrappers.
              </p>
              <div className="statement-tags">
                <span className="tag">Core Technologies</span>
                <span className="tag-separator">•</span>
                <span className="tag">Agentic Systems</span>
                <span className="tag-separator">•</span>
                <span className="tag">Production Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .capabilities-section {
          position: relative;
          padding: 120px 0;
          background: radial-gradient(ellipse at center, #0a0f1c 0%, #050b14 50%, #020408 100%);
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .capabilities-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Neural Network Background */
        .neural-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          opacity: 0.3;
        }

        .neural-network {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .neural-node {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.6, 1);
        }

        .neural-node.active {
          animation: nodePulse 1.5s ease-in-out infinite;
        }

        @keyframes nodePulse {
          0%, 100% { 
            r: 8;
            opacity: 0.6;
          }
          50% { 
            r: 15;
            opacity: 1;
          }
        }

        .node-ring {
          transition: all 0.6s ease;
        }

        .node-ring.active {
          stroke: rgba(59, 130, 246, 0.8);
          stroke-width: 2;
          animation: ringExpand 1.5s ease-in-out infinite;
        }

        @keyframes ringExpand {
          0%, 100% { 
            r: 20;
            opacity: 0.2;
          }
          50% { 
            r: 35;
            opacity: 0.8;
          }
        }

        .neural-connection {
          animation: connectionFlow 3s linear infinite;
        }

        @keyframes connectionFlow {
          0% { stroke-dasharray: 0 20; }
          50% { stroke-dasharray: 10 10; }
          100% { stroke-dasharray: 20 0; }
        }

        .section-container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 10;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          animation: headerFloat 1s ease-out 0.3s both;
        }

        @keyframes headerFloat {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .header-badge {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 28px;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 50px;
          margin-bottom: 32px;
          font-size: 14px;
          color: #93c5fd;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          overflow: hidden;
        }

        .badge-pulse {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2));
          border-radius: 50px;
          animation: badgeRipple 2s ease-in-out infinite;
        }

        @keyframes badgeRipple {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.3;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.1;
          }
        }

        .badge-icon {
          position: relative;
          z-index: 2;
          font-size: 18px;
          animation: rocketBoost 2s ease-in-out infinite;
        }

        @keyframes rocketBoost {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(5deg); }
        }

        .badge-text {
          position: relative;
          z-index: 2;
        }

        .section-title {
          margin-bottom: 0;
        }

        .title-line {
          display: block;
          font-size: clamp(3.5rem, 7vw, 5.5rem);
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #8b5cf6 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          margin-bottom: 16px;
          animation: titleGlow 4s ease-in-out infinite;
        }

        @keyframes titleGlow {
          0%, 100% { 
            filter: brightness(1) contrast(1);
          }
          50% { 
            filter: brightness(1.2) contrast(1.1);
          }
        }

        .title-subtitle {
          display: block;
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-weight: 400;
          color: #64748b;
          letter-spacing: 0.02em;
        }

        /* Capabilities Matrix */
        .capabilities-matrix {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 24px;
          margin-bottom: 80px;
        }

        .capability-cell {
          position: relative;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 32px;
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          opacity: 0;
          transform: translateY(60px) scale(0.9);
          animation: cellReveal 0.8s ease-out calc(var(--cell-index) * 0.1s) both;
          min-height: 280px;
        }

        @keyframes cellReveal {
          0% { 
            opacity: 0; 
            transform: translateY(60px) scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        .capability-cell:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 25px 60px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        /* Cell Background Effects */
        .cell-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          border-radius: 20px;
          overflow: hidden;
        }

        .cell-gradient {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          opacity: 0;
          transition: opacity 0.5s ease;
          background: linear-gradient(135deg, var(--tw-gradient-stops));
        }

        .cell-gradient.from-cyan-400 { 
          --tw-gradient-from: #22d3ee;
          --tw-gradient-to: #8b5cf6;
          --tw-gradient-stops: var(--tw-gradient-from), #3b82f6, var(--tw-gradient-to);
        }

        .cell-gradient.from-emerald-400 { 
          --tw-gradient-from: #34d399;
          --tw-gradient-to: #0d9488;
          --tw-gradient-stops: var(--tw-gradient-from), #10b981, var(--tw-gradient-to);
        }

        .cell-gradient.from-violet-400 { 
          --tw-gradient-from: #a78bfa;
          --tw-gradient-to: #4f46e5;
          --tw-gradient-stops: var(--tw-gradient-from), #8b5cf6, var(--tw-gradient-to);
        }

        .cell-gradient.from-orange-400 { 
          --tw-gradient-from: #fb923c;
          --tw-gradient-to: #ec4899;
          --tw-gradient-stops: var(--tw-gradient-from), #ef4444, var(--tw-gradient-to);
        }

        .cell-gradient.from-red-400 { 
          --tw-gradient-from: #f87171;
          --tw-gradient-to: #ec4899;
          --tw-gradient-stops: var(--tw-gradient-from), #f43f5e, var(--tw-gradient-to);
        }

        .cell-gradient.from-amber-400 { 
          --tw-gradient-from: #fbbf24;
          --tw-gradient-to: #fb923c;
          --tw-gradient-stops: var(--tw-gradient-from), #f59e0b, var(--tw-gradient-to);
        }

        .cell-gradient.from-slate-400 { 
          --tw-gradient-from: #94a3b8;
          --tw-gradient-to: #52525b;
          --tw-gradient-stops: var(--tw-gradient-from), #6b7280, var(--tw-gradient-to);
        }

        .capability-cell:hover .cell-gradient {
          opacity: 0.05;
        }

        .cell-mesh {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .cell-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.03) 2px, transparent 2px),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          animation: particleFloat 6s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Complexity Badge */
        .complexity-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 4px 12px;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .complexity-text {
          font-size: 10px;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Capability Content */
        .capability-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .capability-header {
          margin-bottom: 20px;
        }

        .icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .capability-icon {
          font-size: 32px;
          position: relative;
          z-index: 2;
          animation: iconOrbit 4s linear infinite;
        }

        @keyframes iconOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .icon-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          animation: glowPulse 2s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.4;
          }
          50% { 
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        .capability-title {
          font-size: clamp(1.3rem, 2.5vw, 1.6rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          margin: 0;
        }

        .capability-description {
          font-size: 14px;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        /* Tech Stack */
        .tech-stack {
          margin-top: auto;
        }

        .tech-label {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .tech-items {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-item {
          padding: 4px 8px;
          font-size: 10px;
          font-weight: 600;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          color: #93c5fd;
          transition: all 0.3s ease;
        }

        .tech-item:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-1px);
        }

        /* Hover Overlay */
        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .hover-overlay.active {
          opacity: 1;
          transform: scale(1);
        }

        .overlay-content {
          text-align: center;
          color: #ffffff;
        }

        .overlay-icon {
          font-size: 48px;
          margin-bottom: 8px;
          animation: sparkle 1s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }

        .overlay-text {
          font-size: 16px;
          font-weight: 600;
        }

        /* Interactive Elements */
        .cell-interactions {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .corner-accent {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .corner-accent.top-left {
          top: 8px;
          left: 8px;
          border-top-color: rgba(59, 130, 246, 0.5);
          border-left-color: rgba(59, 130, 246, 0.5);
        }

        .corner-accent.top-right {
          top: 8px;
          right: 8px;
          border-top-color: rgba(59, 130, 246, 0.5);
          border-right-color: rgba(59, 130, 246, 0.5);
        }

        .corner-accent.bottom-left {
          bottom: 8px;
          left: 8px;
          border-bottom-color: rgba(59, 130, 246, 0.5);
          border-left-color: rgba(59, 130, 246, 0.5);
        }

        .corner-accent.bottom-right {
          bottom: 8px;
          right: 8px;
          border-bottom-color: rgba(59, 130, 246, 0.5);
          border-right-color: rgba(59, 130, 246, 0.5);
        }

        .capability-cell:hover .corner-accent {
          border-color: rgba(59, 130, 246, 1);
          width: 30px;
          height: 30px;
        }

        /* Bottom Statement */
        .bottom-statement {
          animation: statementAscend 1s ease-out 1.2s both;
        }

        @keyframes statementAscend {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .statement-container {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .statement-decorations {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 32px;
        }

        .deco-line {
          height: 2px;
          width: 120px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
          animation: lineShimmer 3s ease-in-out infinite;
        }

        .deco-line.left {
          animation-delay: 0s;
        }

        .deco-line.right {
          animation-delay: 1.5s;
        }

        @keyframes lineShimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .deco-orb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          box-shadow: 
            0 0 20px rgba(59, 130, 246, 0.5),
            inset 0 2px 4px rgba(255, 255, 255, 0.3);
          animation: orbRotate 4s linear infinite;
        }

        @keyframes orbRotate {
          0% { 
            transform: rotate(0deg) scale(1);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% { 
            transform: rotate(180deg) scale(1.2);
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.7);
          }
          100% { 
            transform: rotate(360deg) scale(1);
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
        }

        .statement-content {
          margin-bottom: 24px;
        }

        .statement-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #8b5cf6 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }

        .statement-text {
          font-size: clamp(1.1rem, 2.2vw, 1.4rem);
          color: #94a3b8;
          font-weight: 500;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .statement-tags {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .tag {
          font-size: 14px;
          font-weight: 700;
          color: #3b82f6;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          position: relative;
          animation: tagGlow 3s ease-in-out infinite;
        }

        .tag:nth-child(1) { animation-delay: 0s; }
        .tag:nth-child(3) { animation-delay: 1s; }
        .tag:nth-child(5) { animation-delay: 2s; }

        @keyframes tagGlow {
          0%, 100% { 
            color: #3b82f6;
            text-shadow: 0 0 0 transparent;
          }
          50% { 
            color: #60a5fa;
            text-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
          }
        }

        .tag-separator {
          color: #475569;
          font-weight: 300;
          font-size: 16px;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .capabilities-matrix {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 20px;
          }
          
          .section-container {
            padding: 0 30px;
          }
        }

        @media (max-width: 768px) {
          .capabilities-section {
            padding: 80px 0;
          }
          
          .section-container {
            padding: 0 20px;
          }
          
          .section-header {
            margin-bottom: 60px;
          }
          
          .capabilities-matrix {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .capability-cell {
            padding: 24px;
            min-height: 240px;
          }
          
          .neural-background {
            opacity: 0.2;
          }
          
          .statement-decorations {
            margin-bottom: 24px;
          }
          
          .deco-line {
            width: 80px;
          }
          
          .statement-tags {
            flex-direction: column;
            gap: 8px;
          }
        }

        @media (max-width: 480px) {
          .capability-cell {
            padding: 20px;
            min-height: 220px;
          }
          
          .capability-icon {
            font-size: 28px;
          }
          
          .icon-container {
            width: 50px;
            height: 50px;
          }
          
          .capability-title {
            font-size: 1.2rem;
          }
          
          .capability-description {
            font-size: 13px;
          }
          
          .tech-item {
            font-size: 9px;
            padding: 3px 6px;
          }
          
          .complexity-badge {
            top: 12px;
            right: 12px;
            padding: 3px 8px;
          }
          
          .complexity-text {
            font-size: 9px;
          }
          
          .statement-tags {
            gap: 6px;
          }
          
          .tag {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default CapabilitiesSection;