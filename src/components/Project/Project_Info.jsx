import React from 'react'

export const Project_Info = () => {
  return (
    <section className="text-white body-font overflow-hidden bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
      <p className='text-white text-center text-4xl mb-10'>Explore My Projects</p>
        <div className="flex flex-wrap -m-12">
          {/* Static Website Section */}
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              STATIC WEBSITES
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">
              Fast, Secure, and Scalable Static Websites
            </h2>
            <p className="leading-relaxed mb-8">
              Deliver blazing-fast static websites with modern tools like Gatsby, Next.js, and Hugo. Perfect for blogs, portfolios, and marketing sites. Enjoy seamless deployment, CDN integration, and top-notch performance.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              
              
            </div>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/104x104"
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-white">Meharban Ali</span>
                <span className="text-white text-xs tracking-widest mt-0.5">WEB DEVELOPER</span>
              </span>
            </a>
          </div>

          {/* Dynamic Website Section */}
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              DYNAMIC WEBSITES
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">
              Powerful and Interactive Dynamic Websites
            </h2>
            <p className="leading-relaxed mb-8">
              Build dynamic, data-driven websites with React, Node.js, and modern backend frameworks. Ideal for e-commerce, dashboards, and web applications. Enjoy real-time updates, user authentication, and database integration.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
               
            </div>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/103x103"
                className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-white">Meharban Ali</span>
                <span className="text-white text-xs tracking-widest mt-0.5">FULL-STACK DEVELOPER</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
