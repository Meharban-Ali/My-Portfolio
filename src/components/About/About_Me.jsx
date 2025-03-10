import React from 'react'

export const  About_Me= () => {
  return (
    <section className="text-gray-600 body-font bg-gray-900">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Java Fullstack Development Skills
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-white">
          Expertise in building scalable and efficient fullstack applications using Java, Spring Boot, React, and modern DevOps tools.
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {/* Skill 1: Java */}
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg  bg-gray-950 transition ease-in-out duration-300 transform hover:shadow-lg hover:scale-105">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2 text-white">Java</h2>
            <p className="leading-relaxed text-base text-white">
              Proficient in Java programming, including OOP, multithreading, and collections.
            </p>
          </div>
        </div>

        {/* Skill 2: Spring Boot */}
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg bg-gray-950 transition ease-in-out duration-300 transform hover:shadow-lg hover:scale-105">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-lg  font-medium title-font mb-2 text-white">Spring Boot</h2>
            <p className="leading-relaxed text-base text-white">
              Experience in building RESTful APIs and microservices using Spring Boot.
            </p>
          </div>
        </div>

        {/* Skill 3: React */}
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg bg-gray-950 transition ease-in-out duration-300 transform hover:shadow-lg hover:scale-105">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-lg text-white font-medium title-font mb-2">React</h2>
            <p className="leading-relaxed text-base text-white">
              Skilled in building dynamic and responsive user interfaces with React.
            </p>
          </div>
        </div>

        {/* Skill 4: Database Management */}
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg bg-gray-950 transition ease-in-out duration-300, hover:shadow-lg hover:scale-105">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
              </svg>
            </div>
            <h2 className="text-lg text-white font-medium title-font mb-2">Database Management</h2>
            <p className="leading-relaxed text-base text-white">
              Expertise in SQL and NoSQL databases like MySQL, PostgreSQL, and MongoDB.
            </p>
          </div>
        </div>

        {/* Skill 5: DevOps */}
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg bg-gray-950 transition ease-in-out duration-300 transform hover:shadow-lg hover:scale-105">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
              </svg>
            </div>
            <h2 className="text-lg text-white font-medium title-font mb-2">Spring Security</h2>
            <p className="leading-relaxed text-base text-white">
              Hands-on experience with CI/CD pipelines, Docker, Kubernetes, and AWS.
            </p>
          </div>
        </div>

        {/* Skill 6: Testing */}
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg bg-gray-950 transition ease-in-out duration-300 transform hover:shadow-lg hover:scale-105">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h2 className="text-lg text-white font-medium title-font mb-2">Rest Api</h2>
            <p className="leading-relaxed text-base text-white">
              Proficient in unit testing, integration testing, and tools like JUnit and Mockito.
            </p>
          </div>
        </div>
      </div>

      <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <a href="/path/to/your/UpdateResume(2).pdf" download="UpdateResume(2).pdf">Download Resume</a>
        
      </button>
    </div>
  </section>
  )
}
