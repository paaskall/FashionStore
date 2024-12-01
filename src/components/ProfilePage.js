import React, { useState } from "react";
import { User, Mail } from "lucide-react"; // Import ikon dari Lucide React

const ProfilePage = ({ user, updateProfile }) => {
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);

  const handleSave = () => {
    updateProfile({ name, email });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">
        Your Profile
      </h2>

      {/* Form */}
      <form className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
        {/* Name Field */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-2 rounded-full">
            <User className="h-6 w-6 text-indigo-500" />
          </div>
          <div className="flex-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-2 rounded-full">
            <Mail className="h-6 w-6 text-indigo-500" />
          </div>
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleSave}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>

      {/* Decorative Element */}
      <div className="mt-10 flex justify-center">
        <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center">
          <User className="h-16 w-16 text-indigo-500" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
