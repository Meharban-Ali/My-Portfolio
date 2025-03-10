import React from 'react';

export const Contact_form = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          alert('Thank you for contacting us! We will get back to you soon.');
          form.reset(); // Reset the form after successful submission
        } else {
          alert('Oops! Something went wrong. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again.');
      });
  };

  return (
    <section className="text-white body-font relative bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            If you have any questions or need assistance, feel free to reach out to us. Our team of Java developers is here to help you with your technical needs.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            action="https://formspree.io/f/xrbelogj" // Replace with your Formspree endpoint
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap -m-2">
              {/* Name Input */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              {/* Email Input */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              {/* Message Textarea */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  ></textarea>
                </div>
              </div>
              {/* Submit Button */}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          {/* Contact Information */}
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a href="mailto:example@email.com" className="text-indigo-500">
              meharbanali7900@gmail.com
            </a>
            <p className="leading-normal my-5">
              New Ashok Nagar New Delhi
              <br />
              Delhi-110096
            </p>
            {/* Social Media Icons */}
            <span className="inline-flex">
              <a href="https://www.facebook.com/share/12E8N3Kofr9/?mibextid=qi2Omg" className="text-white" target="_blank" rel="noopener noreferrer">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="https://wa.me/917505195491" className="ml-4 text-white" target="_blank" rel="noopener noreferrer">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.471-.149-.669.149-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.462 7.403h-.004c-1.064 0-2.117-.152-3.137-.448-1.632-.472-3.074-1.308-4.26-2.485-1.186-1.177-2.022-2.619-2.494-4.251C2.152 13.608 2 12.555 2 11.491c0-1.064.152-2.117.448-3.137.472-1.632 1.308-3.074 2.485-4.26 1.177-1.186 2.619-2.022 4.251-2.494C10.392 2.152 11.445 2 12.509 2h.004c1.064 0 2.117.152 3.137.448 1.632.472 3.074 1.308 4.26 2.485 1.186 1.177 2.022 2.619 2.494 4.251.296 1.02.448 2.073.448 3.137 0 1.064-.152 2.117-.448 3.137-.472 1.632-1.308 3.074-2.485 4.26-1.177 1.186-2.619 2.022-4.251 2.494-1.02.296-2.073.448-3.137.448z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/meharban_ali75?igsh=YzljYTk1ODg3Zg==" className="ml-4 text-white" target="_blank" rel="noopener noreferrer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/meharban-ali-64a736289/" className="ml-4 text-white" target="_blank" rel="noopener noreferrer">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};