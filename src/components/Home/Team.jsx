import React from 'react'

export const Team = () => {

    const teamMembers = [
        { name: "Meharban Ali", role: "Java Developer", img: "https://res.cloudinary.com/dh3os5xi2/image/upload/v1737901307/Meharban-Photoroom_cvf3k2.png" },
        { name: "Gayyur Hasan", role: "React JS Developer", img: "https://res.cloudinary.com/dh3os5xi2/image/upload/v1737901977/file_p3lymg.jpg" },
        { name: "Bilal Ahmad", role: "FullSatck Developer ", img: "https://res.cloudinary.com/dh3os5xi2/image/upload/v1737902437/file_1_eak1g8.jpg" },
        { name: "Arif Ali", role: "Python Developer", img: "https://res.cloudinary.com/dh3os5xi2/image/upload/v1737902787/WhatsApp_Image_2025-01-26_at_8.13.00_PM_dppgv8.jpg" },
        { name: "Nisar Ahmad", role: "Software Engineer", img: "https://res.cloudinary.com/dh3os5xi2/image/upload/v1737903728/img1_bjp3cv.jpg" },
        { name: "Sanjay Kushwah", role: "C# Developer", img: "https://res.cloudinary.com/dh3os5xi2/image/upload/v1737906381/file_2_bpunlv.jpg" },
      ];
  return (
    <section className="text-gray-600 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
          Crafting scalable Java solutions and dynamic React interfaces with a touch of innovation. Whether it's seamless API integration or interactive UI components, we're building experiences that you’ll love but probably haven’t seen before.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt={member.name}
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={member.img}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">{member.name}</h2>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
