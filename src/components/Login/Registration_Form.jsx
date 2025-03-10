import React, { useState, useRef } from "react";

export const Registration_Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null); // For file upload
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  // File input ko reset karne ke liye ref
  const fileInputRef = useRef(null);

  // Function to generate alphanumeric user ID
  const generateUserId = () => {
    return Math.random().toString(36).substr(2, 8).toUpperCase(); // Uppercase mein convert karo
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Set base64 string
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate user ID
    const userId = generateUserId();

    // Generate random password
    const password = Math.random().toString(10).substr(2, 9);

    const user = { name, email, photo, role, userId, password }; // userId ko add karo
    console.log("Form Data:", user);

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // User object ko send karo
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Network response was not ok");
      }

      console.log("API Response:", data);

      if (response.ok) {
        alert(
          `Registration successful! Your User ID: ${userId}, Password: ${password}`
        );

        // Form reset karein
        setName(""); // Name ko reset karein
        setEmail(""); // Email ko reset karein
        setPhoto(null); // Photo ko reset karein
        setRole(""); // Role ko reset karein
        setError(""); // Error message ko reset karein

        // File input ko reset karein
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // File input ko clear karein
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Left Side: Image */}
      <div className="w-1/2 h-screen flex items-center justify-center bg-gray-700">
        <img
          src="https://res.cloudinary.com/dh3os5xi2/image/upload/v1740064655/woman-sits-desk-front-laptop_488400-1612_qvjs4g.jpg" // Replace with your image URL
          alt="Registration Illustration"
          className="w-4/5 h-auto rounded-lg shadow-2xl"
        />
      </div>

      {/* Right Side: Registration Form */}
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-2xl">
          <p className="text-center text-4xl font-bold mb-8">Registration Form</p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Photo</label>
              <input
                type="file"
                onChange={handlePhotoChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept="image/*"
                required
                ref={fileInputRef} // Ref ko file input se attach karein
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-pink-800 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};