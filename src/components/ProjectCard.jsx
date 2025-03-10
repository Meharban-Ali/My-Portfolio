import React from 'react'

export const ProjectCard = ({image, title, subtitle, description}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
  <img
    className="h-40 rounded w-full object-cover object-center mb-6"
    src={image}
    alt={title}
  />
  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
    {subtitle}
  </h3>
  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
  <p className="leading-relaxed text-base">{description}</p>
  <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-200">
    View Project
  </button>
</div>

  )
}
