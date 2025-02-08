import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    age: "25",
    healthGoals: "Weight loss & better digestion",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-xl font-bold">
            JD
          </div>
        </div>

        {/* Profile Header */}
        <h2 className="text-3xl font-bold text-center mt-4">Profile</h2>

        {/* Profile Form */}
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 rounded-lg border 
              ${isEditing ? "border-gray-400" : "bg-gray-100"} focus:outline-none`}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full px-4 py-2 rounded-lg border bg-gray-100 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 rounded-lg border 
              ${isEditing ? "border-gray-400" : "bg-gray-100"} focus:outline-none`}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Health Goals</label>
            <textarea
              name="healthGoals"
              value={formData.healthGoals}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-4 py-2 rounded-lg border 
              ${isEditing ? "border-gray-400" : "bg-gray-100"} focus:outline-none`}
            ></textarea>
          </div>

          {/* Edit/Save Button */}
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className={`w-full py-3 rounded-lg text-white font-semibold text-lg shadow-md transition-all
              ${isEditing ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"}`}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
