import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projectList = [
    {
      title: 'Rock Paper Scissors game',
      description: 'A fun game developed using advanced js,html and css.',
      link: 'https://keerthi1605.github.io/Rock-Paper-Scissor-game/rockpapersrcAdv.html'
    },
    {
      title: 'Calculator',
      description: 'A Calculator created using html,css and js.',
      link: 'https://keerthi1605.github.io/Calculator/calculator.html'
    },
    {
      title: 'Womens Page',
      description: 'A website focused on empowering women through advices and tips on finance,fitness and travel.',
      link: 'https://keerthi1605.github.io/Women-s-Page/home.html'
    },
    
  ];

  return (
    <section id="projects" className="px-6 py-16">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
