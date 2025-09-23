import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed selection:bg-sky-500/20 selection:text-sky-300">
      <div className="min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 lg:py-0">
          <Header />
          <main className="flex flex-col gap-20 md:gap-28">
            <About />
            <Skills />
            <Projects />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
