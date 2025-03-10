import React from 'react'
import { LuCircleUserRound } from "react-icons/lu";

export const Client = () => {
    const testimonials = [
        { id: 1, message: "Highly skilled developers! Delivered a seamless application with great attention to detail.", author: "Meharban Ali" },
  { id: 2, message: "Professional team, innovative solutions, and timely delivery. Highly recommended!", author: "Asif Bhai" },
  { id: 3, message: "Top-notch software development services! Absolutely loved the final product.", author: "Parvez Hayat" },
  { id: 4, message: "Excellent quality and affordable pricing. Their work exceeded our expectations!", author: "Nandani" },
  { id: 5, message: "The team developed a robust and scalable solution tailored perfectly to our needs.", author: "Chand Bi" },
  { id: 6, message: "Great experience! Flexible team with a customer-first approach.", author: "Rimsha Khan" },
  { id: 7, message: "Efficient and creative development team. Delivered exactly what we envisioned.", author: "Sana Fatima" },
  { id: 8, message: "Their problem-solving skills and innovative approach were outstanding!", author: "Kavya" },
  { id: 9, message: "Quick turnaround time and exceptional quality. Highly impressed!", author: "Nisar Ahmad" },
  { id: 10, message: "Their software solutions are both efficient and creative. Great work!", author: "Kritika" },
  { id: 11, message: "The team provided excellent technical support and exceeded all expectations.", author: "Rekha Pandit" },
  { id: 12, message: "A dedicated and highly skilled team of developers. Great collaboration!", author: "Jhanvi Khanna" },
  { id: 13, message: "Their innovative solutions added tremendous value to our project.", author: "Riya Sharma" },
  { id: 14, message: "Superb technical expertise and a great user-friendly approach. Highly recommended!", author: "Pooja Shriwastav" },
  { id: 15, message: "They delivered a cutting-edge solution on time and within budget.", author: "Aliya Khan" },
  { id: 16, message: "Amazing team! Delivered a highly scalable and efficient solution.", author: "Arushi Sharma" },
      ];
   
      
  return (
    <section className="testimonials py-6 mt-10 bg-gray-800">
      <div className="container mx-8">
        <h2 className="text-center mb-4 text-gray-100">What Our 💃 Client Say</h2>
        <div className="testimonial-slider overflow-hidden">
          <div className="testimonial-items d-flex flex-column" id="testimonialContent">
            {testimonials.map(({ id, message, author }) => (
              <div key={id} className="testimonial-item text-center bg-gray-800">
                <div className='text-6xl flex items-center justify-center text-blue-800'>
                <LuCircleUserRound />
                </div>
                <i className="fas fa-user-circle fa-2x mb-3 text-primary"></i>
                <p className='text-xl text-gray-900'>"{message}"</p>
                <h5 className="text-muted">- {author}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
