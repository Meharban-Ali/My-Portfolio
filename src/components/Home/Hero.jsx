import React from 'react';
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div>
      <section className="bg-gray-900 text-gray-300 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Meharban Ali
            </h1>
            <p className="mb-8 leading-relaxed">
              A passionate Java developer dedicated to building efficient, scalable, and innovative solutions. With expertise in Spring Boot, microservices, and modern Java practices, I thrive on solving complex problems and delivering high-quality software.
            </p>
            <div className="flex justify-center">
              
              <button 
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link to="/contact">
                Hire Me
                </Link>
              </button>
              
              <a href="/path/to/your/UpdateResume(2).pdf" download="UpdateResume(2).pdf">
                  <button className="ml-4 inline-flex text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                    My Resume
                  </button>
                </a>

            </div>
          </div>
          <div className="lg:max-w-sm lg:w-full border rounded-full overflow-hidden md:w-1/2 w-5/6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://res.cloudinary.com/dh3os5xi2/image/upload/v1737224525/Meharban-Photoroom_zec9ov.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
