import React from "react";

export const ServiceOffering = () => {
  return (
    <section className="text-white body-font bg-gray-800 mb-10">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5 text-white">
            Anyone if you need Website or Webapp, college project code and Portfolio so Contact me.
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="leading-relaxed text-base text-white">
            We specialize in developing custom software solutions tailored to your business needs. Whether you're looking to streamline operations, build innovative websites, or need a powerful project management tool, we've got you covered. Our team of developers is dedicated to creating high-quality, scalable, and reliable code for your success.
          </p>
          <div className="flex md:mt-4 mt-6">
            
             <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
              Buy Project
            </button>
           
        
            {/* <a
              href="#"
              className="text-indigo-500 inline-flex items-center ml-4"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

