import React, { useState } from 'react';

export const Contact_Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    reason: '',
    message: '', // New field for feedback/query
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Formspree endpoint (replace with your Formspree form ID)
    const formspreeEndpoint = 'https://formspree.io/f/xbldwgaw';

    // Send form data to Formspree
    fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully!');
          setFormData({
            name: '',
            mobile: '',
            email: '',
            address: '',
            reason: '',
            message: '', // Reset the new field
          });
        } else {
          alert('Form submission failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Form submission failed. Please try again.');
      });
  };

  return (
    <div className="flex flex-wrap min-h-screen bg-gray-100">
      {/* Left Side - Photo */}
      <div
        className="w-full md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dh3os5xi2/image/upload/v1740064655/woman-sits-desk-front-laptop_488400-1612_qvjs4g.jpg')",
        }}
      ></div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2 p-8">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mobile Number Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                Mobile Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email ID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Full Address Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Full Address
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                placeholder="Enter your full address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Reason Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
                Reason
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="reason"
                value={formData.reason}
                onChange={handleChange}
                required
              >
                <option value="">Select a reason</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
                <option value="query">Query</option>
              </select>
            </div>

            {/* Message Field (New Field) */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Your Feedback/Query
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter your feedback or query"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};