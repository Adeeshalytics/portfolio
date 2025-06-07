import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, Send, User, MessageSquare, Terminal, Code, Zap, Globe, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [typedText, setTypedText] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const sectionRef = useRef(null);

  const terminalText = "System.Contact.Initialize() >> Ready for new connections...";

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < terminalText.length) {
        setTypedText(terminalText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Floating particles animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 40; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          color: ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'][Math.floor(Math.random() * 4)]
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with realistic delay
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Protocol',
      subtitle: 'pavithadeesha@gmail.com',
      href: 'mailto:pavithadeesha@gmail.com',
      color: 'from-blue-400 to-cyan-400',
      borderColor: 'border-blue-500/50',
      bgColor: 'bg-blue-600/10'
    },
    {
      icon: Phone,
      title: 'Voice Channel',
      subtitle: '+94 71 945 1798',
      href: 'tel:+94719451798',
      color: 'from-green-400 to-emerald-400',
      borderColor: 'border-green-500/50',
      bgColor: 'bg-green-600/10'
    },
    {
      icon: Linkedin,
      title: 'Professional Network',
      subtitle: 'Connect & Collaborate',
      href: 'https://linkedin.com/in/pavith4dee',
      color: 'from-blue-400 to-indigo-400',
      borderColor: 'border-indigo-500/50',
      bgColor: 'bg-indigo-600/10'
    },
    {
      icon: Github,
      title: 'Code Repository',
      subtitle: 'Open Source Projects',
      href: 'https://github.com/Adeeshalytics',
      color: 'from-purple-400 to-pink-400',
      borderColor: 'border-purple-500/50',
      bgColor: 'bg-purple-600/10'
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-0 px-4 flex flex-col"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-move 25s linear infinite'
        }} />
      </div>

      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Mouse Follower Effect */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 pt-20 flex-grow">
        {/* Terminal Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">contact-terminal</span>
            </div>
            <div className="text-left">
              <span className="text-green-400 font-mono">$</span>
              <span className="text-white font-mono ml-2">{typedText}</span>
              <span className="animate-pulse text-white">|</span>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              System.Connect()
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto">
            {'// Establishing secure communication channels...'}
          </p>
        </div>

        {/* Status Bar */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-mono">ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300 text-sm">Kandy, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300 text-sm font-mono">
                {currentTime.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                Communication.Channels()
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center gap-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border ${method.borderColor} hover:border-opacity-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`p-3 ${method.bgColor} rounded-lg border ${method.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className={`w-6 h-6 bg-gradient-to-r ${method.color} bg-clip-text text-transparent`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-gray-300 font-mono text-sm">{method.subtitle}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl border border-green-500/30">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <span className="text-green-400 font-semibold">Status: Available for new projects</span>
                </div>
                <p className="text-gray-300 text-sm mt-2 font-mono">
                  Response time: ~1 hour | Timezone: UTC+5:30
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-blue-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 font-mono">1h</div>
                <div className="text-gray-300 text-sm">Avg Response</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 font-mono">100%</div>
                <div className="text-gray-300 text-sm">Project Success</div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Message.Transmit()
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-cyan-400 font-mono">
                    user.name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 font-mono"
                      placeholder="Enter your identifier..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-cyan-400 font-mono">
                    user.email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 font-mono"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-cyan-400 font-mono">
                  message.subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 font-mono"
                  placeholder="Project collaboration | Job opportunity | General inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-cyan-400 font-mono">
                  message.body
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none font-mono"
                    placeholder="Describe your project, timeline, and requirements..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 font-mono relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>EXECUTE TRANSMISSION</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-600/20 border border-green-500/50 rounded-lg text-green-400 text-center font-mono animate-pulse">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>MESSAGE TRANSMITTED SUCCESSFULLY</span>
                  </div>
                  <p className="text-sm text-green-300 mt-1">Response incoming within 1 hour...</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Available.Services()
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h4 className="text-xl font-bold text-blue-400 mb-3 font-mono">Full-Stack.Dev</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                React • Node.js • Flutter • MongoDB<br/>
                End-to-end application development
              </p>
            </div>
            <div className="group text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h4 className="text-xl font-bold text-purple-400 mb-3 font-mono">AI.Solutions</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Machine Learning • Data Science<br/>
                Intelligent automation systems
              </p>
            </div>
            <div className="group text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h4 className="text-xl font-bold text-green-400 mb-3 font-mono">Cloud.Deploy</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                AWS • DevOps • CI/CD<br/>
                Scalable infrastructure solutions
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Logo & Copyright */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">PA</span>
                  </div>
                  <span className="text-white font-semibold">Pavith Adeesha</span>
                </div>
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} All rights reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div className="flex justify-center md:justify-start gap-8">
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a>
                <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors">Experience</a>
              </div>

              {/* Social Links */}
              <div className="flex justify-end gap-4">
                <a
                  href="https://github.com/Adeeshalytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/pavith4dee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:pavithadeesha@gmail.com"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400 text-sm">
                Built with React & TailwindCSS • Deployed with ❤️
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
};

export default Contact;