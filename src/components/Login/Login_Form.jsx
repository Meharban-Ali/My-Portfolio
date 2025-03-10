import React, { useState } from "react";

export const Login_Form = () => {
  const [userId, setUserId] = useState(""); // userId ke liye state
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, password }), // userId aur password bhejo
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed!");
      }

      console.log("Login Response:", data);

      // Login successful
      alert("Login successful!");
      // User data ko store karein (jaise local storage me)
      localStorage.setItem("user", JSON.stringify(data.user));
      // Profile page par redirect karein
      window.location.href = "../Profiles";
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Left Side: Image */}
      <div className="w-1/2 h-screen flex items-center justify-center bg-gray-800">
        <img
          src="https://res.cloudinary.com/dh3os5xi2/image/upload/v1739994440/7677.jpg_wh860_i1byem.jpg" // Replace with your image URL
          alt="Login Illustration"
          className="w-4/5 h-auto rounded-lg shadow-2xl"
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="w-1/2 h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-2xl">
          <p className="text-center text-4xl font-bold mb-8">Login Form</p>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">User ID</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-pink-800 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};