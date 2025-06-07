import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

const Education = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const education = [
    {
      id: 1,
      degree: 'BSc (Hons) in Computer Engineering',
      institution: 'University of Ruhuna',
      location: 'Sri Lanka',
      status: 'Current Undergraduate',
      gpa: 'Third Year',
      description: 'Comprehensive program covering software engineering, AI, machine learning, and system architecture with hands-on project experience.',
      highlights: [
        '24-hour IEEEXtreme 18.0 global coding competition participant',
        'Captain of University Badminton Team',
        'Active member of multiple student organizations'
      ],
      courses: [
        'Software Development', 'Web Development', 'Machine Learning', 'Computer Architecture',
        'Data Structures & Algorithms', 'Design Patterns', 'Operating Systems', 'Network Programming',
        'GUI Development', 'Embedded Systems', 'Object Oriented Programming', 'Databases',
        'Artificial Intelligence', 'Computer Networks', 'DevOps'
      ],
      color: 'blue'
    },
    {
      id: 2,
      degree: 'BA (Hons) in International Business and Finance',
      institution: 'University of West of Scotland',
      location: 'Scotland, UK',
      period: 'March 2021 – March 2023',
      gpa: 'Honours Degree',
      description: 'Focused on strategic management, financial analysis, international business operations, and modern organizational practices.',
      highlights: [
        'Specialized in Strategic Risk Management',
        'Advanced Corporate and Financial Reporting',
        'International Business perspective'
      ],
      courses: [
        'Business Law', 'Strategic Risk Management', 'Advanced Corporate & Financial Reporting',
        'Business Taxation', 'Digitalization & Modern Organizations', 'Advanced Performance Management',
        'Audit & Assurance', 'Strategic Management', 'Business Analysis', 'Strategic Financial Management',
        'Applied Business Research'
      ],
      color: 'emerald'
    }
  ];

  const certifications = [
    {
      name: 'CIMA Management Case Study (MCS)',
      issuer: 'Chartered Institute of Management Accountants',
      description: 'Advanced management accounting and strategic business analysis certification',
      icon: Award
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A unique blend of technical expertise and business acumen, combining computer engineering 
            with international business and finance knowledge.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full"></div>

          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:ml-8' : 'md:mr-8 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline Dot */}
              <div className={`absolute ${
                index % 2 === 0 ? 'left-0 md:-left-8' : 'left-0 md:-right-8'
              } top-8 w-6 h-6 bg-gradient-to-r from-${edu.color}-400 to-${edu.color}-600 rounded-full border-4 border-slate-900 shadow-lg`}></div>

              {/* Education Card */}
              <div className={`ml-12 md:ml-0 group bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-${edu.color}-500/50 transition-all duration-500 hover:transform hover:scale-105 shadow-2xl hover:shadow-${edu.color}-500/20`}>
                
                {/* Header Section */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 bg-gradient-to-br from-${edu.color}-600/20 to-${edu.color}-700/20 rounded-xl border border-${edu.color}-500/30 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <GraduationCap className={`w-8 h-8 text-${edu.color}-400`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-${edu.color}-300 transition-colors duration-300`}>
                      {edu.degree}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-lg">
                        <BookOpen className={`w-5 h-5 text-${edu.color}-400`} />
                        <span className={`text-${edu.color}-300 font-medium`}>{edu.institution}</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        {edu.period && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        )}
                      </div>
                      
                      {edu.status && (
                        <div className="flex items-center gap-2 mt-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                          <span className="text-green-400 font-medium">{edu.status}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className={`text-lg font-semibold text-${edu.color}-300 mb-3`}>Key Highlights</h4>
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Trophy className={`w-4 h-4 text-${edu.color}-400 flex-shrink-0`} />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coursework Toggle */}
                <div className="border-t border-gray-700/50 pt-6">
                  <button
                    onClick={() => toggleSection(edu.id)}
                    className={`flex items-center justify-between w-full text-left group/btn hover:text-${edu.color}-300 transition-colors duration-200`}
                  >
                    <h4 className="text-lg font-semibold text-gray-200">
                      Relevant Coursework ({edu.courses.length} subjects)
                    </h4>
                    {expandedSection === edu.id ? (
                      <ChevronUp className={`w-5 h-5 text-${edu.color}-400 group-hover/btn:scale-110 transition-transform duration-200`} />
                    ) : (
                      <ChevronDown className={`w-5 h-5 text-${edu.color}-400 group-hover/btn:scale-110 transition-transform duration-200`} />
                    )}
                  </button>
                  
                  {expandedSection === edu.id && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-in slide-in-from-top-4 duration-300">
                      {edu.courses.map((course, idx) => (
                        <div
                          key={idx}
                          className={`px-4 py-2 bg-gradient-to-r from-${edu.color}-600/10 to-${edu.color}-700/10 text-${edu.color}-200 rounded-lg text-sm border border-${edu.color}-500/20 hover:border-${edu.color}-400/40 transition-all duration-200 hover:scale-105`}
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-4">
              Professional Certifications
            </h3>
            <p className="text-gray-300 text-lg">
              Continuous learning and professional development
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-purple-800/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg border border-purple-500/40 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                      {cert.name}
                    </h4>
                    <p className="text-purple-300 font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-2xl border border-blue-500/30">
            <div className="text-4xl font-bold text-blue-300 mb-2">2+</div>
            <div className="text-gray-300">Degrees Pursued</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-2xl border border-purple-500/30">
            <div className="text-4xl font-bold text-purple-300 mb-2">25+</div>
            <div className="text-gray-300">Courses Completed</div>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 rounded-2xl border border-emerald-500/30">
            <div className="text-4xl font-bold text-emerald-300 mb-2">1</div>
            <div className="text-gray-300">Professional Certification</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;