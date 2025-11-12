
import React from 'react';
import { MailIcon, PhoneIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
        <p className="max-w-2xl mx-auto text-slate-400 mb-10">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex items-center space-x-4">
            <MailIcon className="w-8 h-8 text-cyan-400" />
            <a href="mailto:vasantgohel5211@gmail.com" className="text-lg text-slate-300 hover:text-cyan-400 transition-colors">
              vasantgohel5211@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <PhoneIcon className="w-8 h-8 text-cyan-400" />
            <a href="tel:+919512301407" className="text-lg text-slate-300 hover:text-cyan-400 transition-colors">
              +91 9512301407
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
