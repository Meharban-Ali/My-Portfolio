import React from 'react'

export const Statistic = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-900 mt-3">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center rounded-lg">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              15+
            </h2>
            <p className="leading-relaxed text-white">Projects Completed</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              1.5 Years
            </h2>
            <p className="leading-relaxed text-white">Experience</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              7+
            </h2>
            <p className="leading-relaxed text-white">Technologies Used</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
              10+
            </h2>
            <p className="leading-relaxed text-white">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  )
}
