
import React from 'react';
import { GithubIcon, MailIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-cover bg-center relative" style={{ backgroundImage: "linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 1)), url('https://picsum.photos/1920/1080')" }}>
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <img
            src="https://picsum.photos/seed/parth-gohel/300/300"
            alt="Parth Sanjaybhai Gohel"
            className="w-48 h-48 rounded-full border-4 border-cyan-400 object-cover shadow-xl mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-2">
            Parth Sanjaybhai Gohel
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 font-light mb-8">
            Frontend Developer
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-110">
              <GithubIcon className="w-8 h-8" />
            </a>
            <a href="mailto:vasantgohel5211@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-110">
              <MailIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
