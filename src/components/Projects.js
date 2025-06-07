import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'CropGain - Financial Management Software',
      description: 'React-based accounts management system for COOP LANKA with real-time expense tracking and data visualization.',
      tech: ['React.js', 'Tailwind', 'MongoDB'],
      status: 'Ongoing',
      year: '2024'
    },
    {
      title: 'AI-Powered Image Classification',
      description: 'Deep learning model using CNN for image classification with high accuracy prediction.',
      tech: ['Python', 'TensorFlow', 'Keras', 'Google Colab'],
      year: '2025'
    },
    {
      title: 'Employee Attrition Prediction Model',
      description: 'Machine learning model with improved prediction accuracy through hyperparameter tuning.',
      tech: ['Python', 'Scikit-Learn', 'Pandas'],
      year: '2024'
    },
    {
      title: 'University Sports Event Management App',
      description: 'Mobile app for sports event management with real-time updates and tournament scheduling.',
      tech: ['Flutter', 'Firebase'],
      year: '2024'
    }
  ];

  const ProjectCard = ({ project, index }) => (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:translateY-[-4px]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">
            {project.title}
          </h3>
          <span className="text-sm text-blue-400 bg-blue-500/20 px-2 py-1 rounded-full">
            {project.year}
          </span>
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-gray-700/50 text-blue-300 rounded text-sm border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.status && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm">{project.status}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-semibold text-center mb-6 text-blue-400">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Patient Management System (MERN)',
              'IoT Energy Meter (ESP8266)',
              'Multiplayer Tic-Tac-Toe (Sockets)',
              'USECTA Portfolio Website',
              'Personal Expense Tracker'
            ].map((project, index) => (
              <div
                key={index}
                className="p-4 bg-gray-700/50 rounded-lg border border-gray-600/50 hover:border-blue-500/50 transition-all duration-200 hover:transform hover:scale-105 cursor-default"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-300">{project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;