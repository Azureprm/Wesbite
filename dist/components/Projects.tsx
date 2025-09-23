import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <section id="projects">
       <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 tracking-tight">Projects</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
       </div>
    </section>
  );
};

export default Projects;
