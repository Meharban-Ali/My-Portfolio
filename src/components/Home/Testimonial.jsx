import React from 'react'

export const Testimonial = () => {

    const testimonials = [
        {
          name: "Meharban Ali",
          role: "Java Full Stack Developer",
          img: "https://res.cloudinary.com/dh3os5xi2/image/upload/v1737902787/WhatsApp_Image_2025-01-26_at_8.13.00_PM_dppgv8.jpg",
          quote: "Working with Java technologies such as Spring Boot and Hibernate, I have built scalable and efficient solutions. I enjoy the process of creating seamless web applications and contributing to every stage of development, from front-end to back-end.",
        },
        {
          name: "Gayyur Hasan",
          role: "React Js Developer",
          img: "https://res.cloudinary.com/dh3os5xi2/image/upload/v1737901977/file_p3lymg.jpg",
          quote: "As a UI Developer, I am passionate about creating responsive and visually appealing user interfaces. My experience with React, Angular, and CSS frameworks has enabled me to build interactive and user-friendly front-end applications.",
        },
        {
          name: "Arif Ali",
          role: "Python Developer",
          img: "https://res.cloudinary.com/dh3os5xi2/image/upload/v1737901307/Meharban-Photoroom_cvf3k2.png",
          quote: "With a focus on architecture and scalability, I have guided teams to build highly reliable Java-based applications using microservices architecture and cloud technologies. Java continues to be the backbone of many enterprise solutions.",
        },
      ];
  return (
    <section className="text-gray-600 body-font bg-gray-900 mt-4">
        <div className='text-center'>
            <h1 className='text-white p-2 text-4xl'>Testimonials</h1>
        </div>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={testimonial.img}
              />
              <p className="leading-relaxed text-white">{testimonial.quote}</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-sm">
                {testimonial.name}
              </h2>
              <p className="text-gray-400">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
