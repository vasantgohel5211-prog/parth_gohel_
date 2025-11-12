
import React from 'react';
import { GlobeIcon } from './icons';

interface DetailItemProps {
  label: string;
  value: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row mb-4">
    <dt className="w-full sm:w-1/3 font-semibold text-cyan-400">{label}</dt>
    <dd className="w-full sm:w-2/3 text-slate-300">{value}</dd>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">About Me</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">A Passionate Frontend Developer</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm a dedicated Frontend Developer with a background in Computer Applications. I enjoy building intuitive, beautiful, and responsive user interfaces. My goal is to combine my technical skills and creativity to deliver exceptional web experiences.
              </p>
            </div>
            <div>
              <dl>
                <DetailItem label="Name" value="Parth Sanjaybhai Gohel" />
                <DetailItem label="Education" value="BCA (Bachelor of Computer Applications)" />
                <DetailItem label="Date of Birth" value="12 April, 2006" />
                <DetailItem label="Nationality" value="Indian" />
                <DetailItem label="Languages" value="Gujarati, Hindi, English" />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
