import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-700 flex flex-col items-center justify-center text-white px-6">
      {/* Title Section */}
      <h1 className="text-6xl font-extrabold text-center drop-shadow-md">
        Personalized <span className="text-yellow-300">Ayurveda & Nutrition</span> Planning
      </h1>
      <p className="text-lg text-center mt-4 max-w-2xl opacity-90">
        Get a personalized Ayurvedic health plan based on your medical history, lifestyle, and dietary habits.
      </p>

      {/* Welcome Card (Clickable) */}
      <Link to="/login">
        <div className="bg-white text-green-900 p-8 mt-8 rounded-2xl shadow-2xl w-full max-w-lg text-center cursor-pointer 
                        hover:shadow-lg transition-all transform hover:scale-105">
          <h2 className="text-2xl font-bold">Welcome to Ayurveda & Nutrition Planner</h2>
          <p className="text-gray-700 mt-3">
            Our AI-driven system analyzes your health data and provides customized Ayurvedic recommendations.
          </p>
        </div>
      </Link>

      {/* Get Started Button */}
      <Link to="/signup">
        <button className="bg-yellow-500 text-green-900 px-8 py-3 mt-8 rounded-full font-semibold text-lg shadow-md 
                            hover:bg-yellow-600 hover:scale-110 transition-all">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
