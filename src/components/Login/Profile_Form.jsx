import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Profile_Form = () => {
  const navigate = useNavigate();

  // Local storage se user data fetch karein
  let user;
  try {
    user = JSON.parse(localStorage.getItem('user'));
    console.log('User from localStorage:', user); // Debugging ke liye
  } catch (error) {
    console.error('Error parsing user data:', error);
    user = null;
  }

  if (!user) {
    return <p className="text-center text-red-500">User not logged in!</p>;
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="mt-16">
      <p className="text-center text-4xl font-bold">Profile Details</p>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <p className="text-lg"><strong>Name:</strong> {user.name || 'N/A'}</p>
        <p className="text-lg"><strong>Email:</strong> {user.email || 'N/A'}</p>
        <p className="text-lg"><strong>Role:</strong> {user.role || 'N/A'}</p>
        {user.photo ? (
          <div className="mt-4">
            <p className="text-lg"><strong>Photo:</strong></p>
            <img src={user.photo} alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
          </div>
        ) : null}
        <button
          onClick={handleLogout}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};