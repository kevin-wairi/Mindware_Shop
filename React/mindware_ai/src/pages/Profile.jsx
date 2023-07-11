import React, { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem("userData"));

  console.log(userData);
  if (!userData) {
    // User data is not available, navigate to sign-in
    return navigate(`/sign-in`);
  }

  const handleLogout = () => {
    // Clear token and user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userData");

    // Navigate to the logout page or any other desired location
    return navigate(`/`);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center py-8">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={
                userData.profilePicture ||
                "https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              }
              alt="Profile Picture"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {userData.name ? userData.name : userData.email}
            </h5>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Invite friend
              </button>
              <button
                onClick={() => handleLogout()}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
