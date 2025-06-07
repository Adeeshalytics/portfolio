import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, ChevronDown, Code, Brain, Cpu, Terminal, Zap, Database, Linkedin } from 'lucide-react';
import pavithImage from '../assets/pavith.jpg';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  
  // Use useRef to track the current state without causing re-renders
  const typewriterRef = useRef({
    currentText: '',
    currentIndex: 0,
    isDeleting: false
  });
  
  const texts = [
    'Machine Learning Enthusiast',
    'Software Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];
  
  const techStack = [
    { icon: Code, name: 'Software Engineering', color: 'from-blue-400 to-cyan-400' },
    { icon: Brain, name: 'Machine Learning', color: 'from-purple-400 to-pink-400' },
    { icon: Cpu, name: 'Computer Vision', color: 'from-green-400 to-emerald-400' },
    { icon: Database, name: 'Data Science', color: 'from-orange-400 to-red-400' },
    { icon: Terminal, name: 'Deep Learning', color: 'from-indigo-400 to-purple-400' },
    { icon: Zap, name: 'AI Systems', color: 'from-yellow-400 to-orange-400' }
  ];

  // Improved typewriter effect with better timing control
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;
    
    let timeoutId;
    
    const typeWriter = () => {
      const currentTextRef = typewriterRef.current.currentText;
      const currentIndexRef = typewriterRef.current.currentIndex;
      const isDeletingRef = typewriterRef.current.isDeleting;
      const targetText = texts[currentIndexRef];
      
      if (!isDeletingRef) {
        // Typing phase
        if (currentTextRef.length < targetText.length) {
          const nextText = targetText.slice(0, currentTextRef.length + 1);
          typewriterRef.current.currentText = nextText;
          setCurrentText(nextText);
          timeoutId = setTimeout(typeWriter, typingSpeed);
        } else {
          // Finished typing, pause then start deleting
          typewriterRef.current.isDeleting = true;
          setIsDeleting(true);
          timeoutId = setTimeout(typeWriter, pauseDuration);
        }
      } else {
        // Deleting phase
        if (currentTextRef.length > 0) {
          const nextText = currentTextRef.slice(0, -1);
          typewriterRef.current.currentText = nextText;
          setCurrentText(nextText);
          timeoutId = setTimeout(typeWriter, deletingSpeed);
        } else {
          // Finished deleting, move to next text
          typewriterRef.current.isDeleting = false;
          typewriterRef.current.currentIndex = (currentIndexRef + 1) % texts.length;
          setIsDeleting(false);
          setCurrentIndex(typewriterRef.current.currentIndex);
          timeoutId = setTimeout(typeWriter, 500); // Small pause before starting next word
        }
      }
    };
    
    // Start the typewriter effect
    timeoutId = setTimeout(typeWriter, 1000);
    
    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []); // Empty dependency array - runs only once on mount

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating particles animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: particle.x + particle.speedX,
        y: particle.y + particle.speedY,
        x: particle.x > window.innerWidth ? 0 : particle.x < 0 ? window.innerWidth : particle.x,
        y: particle.y > window.innerHeight ? 0 : particle.y < 0 ? window.innerHeight : particle.y
      })));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen pt-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transform: `scale(${particle.size})`
          }}
        />
      ))}

      {/* Mouse Follower Effect */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Profile Picture with Static Border */}
          <div className="mb-8 relative group">
            <div className="w-40 h-40 mx-auto relative">
              {/* Static Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1">
                <div className="w-full h-full bg-gray-900 rounded-full p-1">
                  <img 
                    src={pavithImage}
                    alt="Pavith Adeesha"
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Pulsing Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping" />
              <div className="absolute inset-2 rounded-full border-2 border-purple-500/20 animate-ping animation-delay-200" />
            </div>
          </div>
          
          {/* Main Title with Glitch Effect */}
          <h1 className="text-6xl md:text-8xl font-black mb-4 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Pavith Adeesha
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-70 animate-pulse blur-sm">
              Pavith Adeesha
            </div>
          </h1>
          
          {/* Typewriter Role */}
          <div className="h-16 mb-4 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              <span className="text-gray-400">{'<'}</span>
              <span className="text-green-400">{currentText}</span>
              <span className="animate-blink text-green-400">|</span>
              <span className="text-gray-400">{'/>'}</span>
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/Adeeshalytics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/pavith4dee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:pavithadeesha@gmail.com"
              className="text-gray-400 hover:text-red-400 transform hover:scale-110 transition-all duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-transparent transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <tech.icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Transforming ideas into intelligent solutions through
            <span className="text-blue-400 font-semibold"> cutting-edge AI/ML</span>, 
            <span className="text-purple-400 font-semibold"> robust software engineering</span>, and
            <span className="text-cyan-400 font-semibold"> innovative problem-solving</span>
          </p>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a
              href="mailto:pavithadeesha@gmail.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3 text-white font-semibold">
                <Mail className="w-5 h-5" />
                Let's Build Something Amazing
              </div>
            </a>
            <a
              href="https://github.com/Adeeshalytics"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 border-2 border-gray-600 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-transparent"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-3 text-gray-300 group-hover:text-white font-semibold">
                <Github className="w-5 h-5" />
                Explore My Code
              </div>
            </a>
          </div>

          {/* Animated Scroll Indicator */}
          <div className="relative">
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
            </div>
            <div className="absolute inset-0 animate-ping">
              <ChevronDown className="w-8 h-8 mx-auto text-blue-400 opacity-20" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </section>
  );
};

export default Home;
