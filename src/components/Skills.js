import React from 'react';
import { Code, Database, Smartphone, Cloud } from 'lucide-react';

const Skills = () => {
  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    backend: ['Node.js', 'Express', 'Java', 'Python', 'C++'],
    mobile: ['React Native', 'Flutter', 'Android Studio'],
    database: ['MongoDB', 'MySQL'],
    devops: ['Docker', 'Jenkins', 'AWS', 'CI/CD'],
    tools: ['Git', 'Jira', 'Figma']
  };

  const SkillCard = ({ category, skills, icon: Icon }) => (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-6 h-6 text-blue-400" />
          <h3 className="text-xl font-semibold text-white capitalize">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard category="frontend" skills={skills.frontend} icon={Code} />
          <SkillCard category="backend" skills={skills.backend} icon={Database} />
          <SkillCard category="mobile" skills={skills.mobile} icon={Smartphone} />
          <SkillCard category="database" skills={skills.database} icon={Database} />
          <SkillCard category="devops" skills={skills.devops} icon={Cloud} />
          <SkillCard category="tools" skills={skills.tools} icon={Code} />
        </div>

        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <h3 className="text-2xl font-semibold text-center mb-8 text-blue-400">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['C/C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Dart'].map((lang, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-white font-medium hover:scale-105 transition-transform duration-200 cursor-default"
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;