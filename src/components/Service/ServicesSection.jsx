import React from 'react'
import { FaCode, FaPaintBrush, FaDatabase, FaCloudUploadAlt, FaTools } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

export const ServicesSection = () => {

  const services = [
    {
      icon: <FaCode className="text-4xl mb-4 text-indigo-600" />,
      title: "Backend Development",
      description:
        "Building robust and scalable backend systems using Java, Spring Boot, and microservices architecture.",
    },
    {
      icon: <FaPaintBrush className="text-4xl mb-4 text-indigo-600" />,
      title: "Frontend Development",
      description:
        "Creating responsive and user-friendly interfaces with React, Angular, and modern CSS frameworks.",
    },
    {
      icon: <FaDatabase className="text-4xl mb-4 text-indigo-600" />,
      title: "Database Design",
      description:
        "Designing and managing relational (MySQL) and NoSQL (MongoDB) databases for optimal performance.",
    },
    {
      icon: <FaCloudUploadAlt className="text-4xl mb-4 text-indigo-600" />,
      title: "Deployment & DevOps",
      description:
        "Deploying applications using Docker, Kubernetes, and cloud platforms like AWS. Setting up CI/CD pipelines.",
    },
    {
      icon: <FaTools className="text-4xl mb-4 text-indigo-600" />,
      title: "Maintenance & Support",
      description:
        "Providing ongoing maintenance, updates, and technical support for applications.",
    },
    {
      icon: <AiFillAppstore className="text-4xl mb-4 text-indigo-600" />,
      title: "Static And Dynamic Website D",
      description:
        "Providing ongoing maintenance, updates, and technical support for applications.",
    },
  ];

  return (
    <section className="py-12 bg-gray-900">
    <div className="container mx-auto px-4 ">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-4 text-white">Services I Offer</h2>
      {/* Section Description */}
      <p className="text-center text-white mb-8">
        As a Java Fullstack Developer, I provide end-to-end solutions for web and application development.
      </p>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            {/* Service Icon */}
            <div className="flex justify-center">{service.icon}</div>
            {/* Service Title */}
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            {/* Service Description */}
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-8">
        <a
          href="#contact" // Link to your contact section
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          Let's Work Together
        </a>
      </div>
    </div>
  </section>
  )
}
