import React from 'react';

function ProjectCard({ title, description, link }) {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm my-2">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Project</a>
    </div>
  );
}

export default ProjectCard;
