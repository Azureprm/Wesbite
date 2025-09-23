import React from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';
import SkillRating from './SkillRating';

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 tracking-tight">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {SKILLS.map((skill: Skill) => (
          <div key={skill.name} className="bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-sky-500/20 transition-shadow duration-300 flex flex-col items-center justify-center text-center">
            <p className="font-semibold text-slate-200">{skill.name}</p>
            <SkillRating rating={skill.rating} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
