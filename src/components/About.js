import React, { useState, useEffect, useRef } from 'react';
import { Award, User, Code, Brain, Cpu, Database, Terminal, Monitor, Zap, Target, Trophy, Users, Heart, GitBranch } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, experience: 0, lines: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);

  const tabs = [
    { id: 'overview', label: 'System Overview', icon: Monitor },
    { id: 'skills', label: 'Core Modules', icon: Cpu },
    { id: 'achievements', label: 'Performance Metrics', icon: Trophy },
    { id: 'impact', label: 'Community Processes', icon: Users }
  ];

  const skills = [
    { name: 'Machine Learning', icon: Brain, color: 'from-purple-400 to-pink-400' },
    { name: 'Full-Stack Development', icon: Code, color: 'from-blue-400 to-cyan-400' },
    { name: 'Data Structures & Algorithms', icon: Database, color: 'from-green-400 to-emerald-400' },
    { name: 'System Architecture', icon: Terminal, color: 'from-orange-400 to-red-400' },
    { name: 'Version Control & CI/CD', icon: GitBranch, color: 'from-indigo-400 to-purple-400' },
    { name: 'Cloud Computing', icon: Zap, color: 'from-yellow-400 to-orange-400' }
  ];

  const achievements = [
    { title: 'IEEEXtreme 18.0', subtitle: 'Top Percentile Performance', icon: Code, metric: '95th', color: 'text-blue-400' },
    { title: 'Team Leadership', subtitle: 'University Badminton Captain', icon: Award, metric: '2+ Years', color: 'text-yellow-400' },
    { title: 'Project Portfolio', subtitle: 'Full-Stack Applications', icon: Target, metric: '15+', color: 'text-green-400' },
    { title: 'Community Service', subtitle: 'Educational Initiatives', icon: Heart, metric: '250+ Hours', color: 'text-pink-400' }
  ];

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
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          speedX: (Math.random() - 0.5) * 1,
          speedY: (Math.random() - 0.5) * 1
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

  // Animate stats when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateValue = (start, end, duration, setter, key) => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          setter(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 16);
      };

      animateValue(0, 15, 2000, setAnimatedStats, 'projects');
      animateValue(0, 2, 1500, setAnimatedStats, 'experience');
      animateValue(0, 8, 3000, setAnimatedStats, 'lines');
    }
  }, [isVisible]);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <Terminal className="w-5 h-5 group-hover:animate-pulse" />
                    System.Engineer.Initialize()
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Third-year Computer Engineering undergraduate with specialized focus on 
                    <span className="text-blue-400 font-semibold"> AI/ML systems</span>, 
                    <span className="text-purple-400 font-semibold"> full-stack architecture</span>, and 
                    <span className="text-green-400 font-semibold"> scalable solution design</span>.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <Brain className="w-5 h-5 group-hover:animate-pulse" />
                    Core.Competencies.Load()
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Expertise in modern tech stack including React, Node.js, Flutter, and Python. 
                    Combining technical innovation with business intelligence to deliver 
                    <span className="text-cyan-400 font-semibold"> enterprise-grade solutions</span>.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Performance.Metrics
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-blue-500/30 hover:border-blue-500 transition-all duration-300 group">
                        <div className="text-3xl font-bold text-blue-400 font-mono group-hover:scale-110 transition-transform duration-300">
                          {animatedStats.projects}+
                        </div>
                        <div className="text-gray-300 text-sm">Projects Deployed</div>
                      </div>
                      <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-purple-500/30 hover:border-purple-500 transition-all duration-300 group">
                        <div className="text-3xl font-bold text-purple-400 font-mono group-hover:scale-110 transition-transform duration-300">
                          {animatedStats.experience}+
                        </div>
                        <div className="text-gray-300 text-sm">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 group">
                        <div className="text-3xl font-bold text-yellow-400 font-mono group-hover:scale-110 transition-transform duration-300">
                          {animatedStats.lines}K+
                        </div>
                        <div className="text-gray-300 text-sm">K Lines of Code</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">System Architecture & Capabilities</h3>
              <p className="text-gray-400">Core modules running at optimal performance</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-transparent transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color}`}>
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white text-center group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gray-700/50 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{achievement.subtitle}</p>
                    <div className={`text-2xl font-bold font-mono ${achievement.color}`}>
                      {achievement.metric}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'impact':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 group-hover:animate-pulse" />
                  Leadership.Execution()
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span>Captain of University Badminton Team</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                    <User className="w-5 h-5 text-blue-400" />
                    <span>Active Member - Arts Society & Rotaract Club</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                    <Code className="w-5 h-5 text-purple-400" />
                    <span>IEEEXtreme 18.0 Participant (Top Percentile)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 group-hover:animate-pulse" />
                  Community.Impact()
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                    <span className="text-green-400 mt-1">▶</span>
                    <span>Mehewara Project - Enhancing rural education infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                    <span className="text-blue-400 mt-1">▶</span>
                    <span>Helping Hands CSR initiatives - Community development</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-white transition-colors duration-300">
                    <span className="text-purple-400 mt-1">▶</span>
                    <span>Volunteer Mathematics Tutor - Educational mentorship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              System.About()
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            {'// Initializing engineer profile...'}
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-blue-500/50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="transition-all duration-500 ease-in-out">
          {renderContent()}
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default About;