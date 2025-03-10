import React from 'react';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../database/db';

export const Project = () => {
  return (
    <section className="bg-gray-800 text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">
              My Projects
            </h1>
            <div className="h-1 w-20 bg-indigo-600 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-100">
          Here is a collection of projects that I have worked on, showcasing my skills in design, development, and problem-solving. These projects reflect my passion for creating innovative and user-friendly solutions.

          Each project is the result of thorough research, careful planning, and a commitment to delivering quality outcomes. From concept to completion, I have focused on ensuring that every detail contributes to a seamless and impactful user experience.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.id} className="xl:w-1/4 md:w-1/2 p-4">
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                subtitle={project.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
