
import React from 'react';
import Card from './Card';

const Projects: React.FC = () => {
  const projectsData = [
    {
      imgSrc: "https://picsum.photos/seed/project1/500/300",
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce front-end built with React and Tailwind CSS, featuring product catalogs, shopping cart, and a streamlined checkout process.",
      tags: ["React", "Tailwind CSS", "TypeScript"]
    },
    {
      imgSrc: "https://picsum.photos/seed/project2/500/300",
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex data sets, using D3.js and React. Features dynamic charts and filters for an intuitive user experience.",
       tags: ["React", "D3.js", "API"]
    },
    {
      imgSrc: "https://picsum.photos/seed/project3/500/300",
      title: "Task Management App",
      description: "A sleek and productive task management application with drag-and-drop functionality, user authentication, and real-time updates.",
      tags: ["React", "Firebase", "State Management"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">My Projects</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
