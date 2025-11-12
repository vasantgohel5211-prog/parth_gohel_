
import React from 'react';
import { GithubIcon } from './icons';

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description, tags }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 group">
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <span key={tag} className="bg-slate-700 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2">
             <GithubIcon className="w-5 h-5" /> <span>Code</span>
          </a>
           <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
             <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
