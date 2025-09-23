import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-12 md:py-24 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100">
        Alex Doe
      </h1>
      <h2 className="mt-3 text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-slate-400">
        Full Stack Developer & Lifelong Learner
      </h2>
    </header>
  );
};

export default Header;
