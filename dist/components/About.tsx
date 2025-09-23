import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
      <div className="flex-shrink-0">
        <img
          src="https://picsum.photos/seed/profilepic/200/200"
          alt="Profile Picture"
          className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-slate-700 shadow-lg"
        />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 tracking-tight">About Me</h2>
        <p className="text-slate-400 max-w-prose space-y-4">
          I am a passionate developer with a strong foundation in software engineering principles. My true strength lies in my adaptability and my insatiable curiosity, which drives me to continuously learn and master new technologies. 
        </p>
        <p className="text-slate-400 max-w-prose mt-4">
          Whether it's diving into a new programming language for a weekend project or adopting a new framework for a complex application, I thrive in dynamic environments where I can embrace challenges and quickly deliver results.
        </p>
      </div>
    </section>
  );
};

export default About;
