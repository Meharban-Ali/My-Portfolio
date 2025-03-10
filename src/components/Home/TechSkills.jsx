import React from 'react'
import { SiSpringboot,SiSpringsecurity, SiHibernate, SiMysql, SiPostman, SiIntellijidea} from "react-icons/si";
import { FaJava, FaReact,  FaBootstrap, FaGithub, FaArrowDown } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";





export const TechSkills = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Language And Framework (Java) 
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          <div className='mx-16 my-8'>
          <span className='text-6xl'><FaArrowDown /></span>
          </div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-white text-xl bg-gray-800 p-6 rounded-lg hover:bg-purple-900 transition-all duration-300">
        As a proficient Java Developer, I specialize in creating robust, scalable, and efficient software solutions. With expertise in Java and related technologies, I have a strong command over:

- Core Java and Object-Oriented Programming (OOP) principles
- Advanced frameworks like Spring, Spring Boot, and Hibernate
- Building RESTful APIs and microservices architecture
- Database management using MySQL
        </p>
      </div>

      {/* springboot */}
      <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
        <div className='text-9xl mx-12 text-green-900'>
          <SiSpringboot />
        </div>
        <p className='text-center text-3xl text-white'>Spring Boot</p>
      </div>
    </div>


        {/* Spring Security */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-out transform hover:shadow-lg hover:scale-105">
            <div className='text-9xl mx-12 text-green-900'>
            <SiSpringsecurity />
            </div>
            <p className='text-center text-3xl text-white'>Spring Security</p>
          </div>
        </div>

        {/* java */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            <div className='text-9xl mx-12 text-white'>
            <FaJava />
            </div>
            <p className='text-center text-3xl text-white'>Java</p>
          </div>
        </div>

        {/* Microservice */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            <div className='text-9xl mx-12 text-rose-600'>
            <GrServices />
            <p className='text-center text-3xl text-white'>Microservice</p>
            </div>
          </div>
        </div>
        {/* Hibernate/ORM */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            <div className='text-9xl mx-12 text-purple-800'>
            <SiHibernate />
            <p className='text-3xl text-white'>Hibern/ORM</p>
            </div>
          </div>
        </div>
        {/* mysql */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            <div className='text-9xl mx-12 text-sky-900'>
            <SiMysql />
            <p className='text-center text-3xl text-white'>Mysql</p>
            </div>
          </div>
        </div>
        {/* react */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 transform hover:shadow-lg hover:scale-105">
            <div className='text-9xl mx-12 text-blue-800'>
            <FaReact />
            <p className='text-center text-3xl text-white'>React js</p>
            </div>
          </div>
        </div>
        {/* bootstrap */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            <div className='text-9xl mx-12 text-blue-600'>
            <FaBootstrap />
            <p className='text-center text-3xl text-white'>Bootstrap</p>
            </div>
          </div>
        </div>
        {/* Tailbind CSS */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            <div className='text-9xl mx-12 text-white'>
            <RiTailwindCssFill />
            <p className='text-center text-3xl text-white'>Tailwind</p>
            </div>
          </div>
        </div>
        {/* github */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            <div className='text-9xl mx-12 text-white'>
            <FaGithub />
            <p className='text-center text-3xl text-white'>Github</p>
            </div>
          </div>
        </div>
        {/* postman */}
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            <div className='text-9xl mx-12 text-orange-600'>
            <SiPostman />
            <p className='text-center text-3xl text-white'>Postman</p>
            </div>
          </div>
        </div>

        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-800 p-6 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            <div className='text-9xl mx-12 text-red-400'>
            <SiIntellijidea />
            <p className='text-center text-3xl text-white'>Intellij</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
  )
}
