import React, { useState } from 'react';

export const Faqs = () => {
  // State to track which FAQ item is open
   // State to track which FAQ is open
   const [openIndex, setOpenIndex] = useState(null);

   // Function to toggle FAQ open/close
   const toggleFAQ = (index) => {
     if (openIndex === index) {
       // If the same FAQ is clicked again, close it
       setOpenIndex(null);
     } else {
       // Open the clicked FAQ
       setOpenIndex(index);
     }
   };

  return (
    <section className="faq text-gray-800 body-font py-12 mt-10">
      <div className="container mx-auto px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

      {/* FAQ Item 1 */}
      <div className="faq-item mb-6">
        <button
          className="faq-question text-lg font-medium text-indigo-600 focus:outline-none"
          onClick={() => toggleFAQ(1)}
        >
          What services do you offer?
        </button>
        {openIndex === 1 && (
          <div className="faq-answer mt-2">
            <p>
              We offer a wide range of Lehenga, Sherwani, and Saree with top-notch quality. Our products are affordable, and we ensure every customer is satisfied with their purchase. 💃
            </p>
          </div>
        )}
      </div>

      {/* FAQ Item 2 */}
      <div className="faq-item mb-6">
        <button
          className="faq-question text-lg font-medium text-indigo-600 focus:outline-none"
          onClick={() => toggleFAQ(2)}
        >
          How can I get a quote?
        </button>
        {openIndex === 2 && (
          <div className="faq-answer mt-2">
            <p>
              You can contact us through the form below or call us directly to discuss your requirements and get a personalized quote.
            </p>
          </div>
        )}
      </div>

      {/* FAQ Item 3 */}
      <div className="faq-item mb-6">
        <button
          className="faq-question text-lg font-medium text-indigo-600 focus:outline-none"
          onClick={() => toggleFAQ(3)}
        >
          What is the product quality?
        </button>
        {openIndex === 3 && (
          <div className="faq-answer mt-2">
            <p>
              Each product is carefully crafted to ensure uniqueness and affordability. We take pride in offering the best quality Lehenga, Sherwani, and Saree to meet your expectations.
            </p>
          </div>
        )}
      </div>
    </div> 

      <div className="relative overflow-hidden bg-gray-900 py-7 mt-10 pt-8 shadow-lg rounded-lg">
      {/* Moving Message */}
      <div className="whitespace-nowrap animate-marquee">
        <span className="text-white text-2xl font-semibold">
          Note: If you want to need any type of website or web app then you can contact me | 7505195491 and meharbanali7900@gmail.com.
        </span>
      </div>

      {/* Tailwind CSS Animation (Add to your CSS file) */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>

    <div className='text-center mt-10'>
          <p className='text-4xl font-bold'>Thanks to All Explore Our Portfolio</p>
        </div>
    </section>
  );
};