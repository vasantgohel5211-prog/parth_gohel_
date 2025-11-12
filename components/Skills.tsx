
import React from 'react';
import { ReactIcon, TypeScriptIcon, TailwindIcon } from './icons';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => (
  <div className="bg-slate-800 p-6 rounded-lg flex flex-col items-center justify-center transition-all duration-300 hover:bg-slate-700 hover:scale-105 hover:shadow-cyan-500/20 shadow-lg">
    <div className="text-cyan-400 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-white">{name}</h3>
  </div>
);

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', icon: <ReactIcon className="w-12 h-12" /> },
    { name: 'TypeScript', icon: <TypeScriptIcon className="w-12 h-12 rounded-sm" /> },
    { name: 'JavaScript (ES6+)', icon: <div className="text-yellow-400 w-12 h-12 flex items-center justify-center text-4xl font-bold">JS</div> },
    { name: 'HTML5', icon: <div className="text-orange-500 w-12 h-12 flex items-center justify-center text-4xl font-bold">5</div> },
    { name: 'CSS3', icon: <div className="text-blue-500 w-12 h-12 flex items-center justify-center text-4xl font-bold">3</div> },
    { name: 'Tailwind CSS', icon: <TailwindIcon className="w-12 h-12" /> },
    { name: 'Git', icon: <div className="text-red-500 w-12 h-12 flex items-center justify-center text-4xl font-bold">G</div> },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">My Skills</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
