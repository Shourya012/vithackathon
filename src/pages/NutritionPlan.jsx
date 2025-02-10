import React, { useState, useEffect } from "react";
import axios from "axios";

const NutritionPlan = () => {
  const [nutritionPlan, setNutritionPlan] = useState(null);

  const bgImageUrl = "https://tse2.mm.bing.net/th?id=OIP.rmPRixai0bGITCeSAZAXrQHaEA&pid=Api&P=0&h=180"; // Replace with your preferred background image

  useEffect(() => {
    axios.get("mysql+mysqlconnector://root:2005@localhost/vit")
      .then(response => setNutritionPlan(response.data))
      .catch(error => console.error("Error fetching nutrition plan:", error));
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="bg-white p-8 shadow-lg rounded-xl w-full max-w-lg bg-opacity-80">
        <h2 className="text-2xl font-bold text-center mb-6">Your Personalized Nutrition Plan</h2>
        {nutritionPlan ? (
          <div className="space-y-4">
            {nutritionPlan.map((item, index) => (
              <div key={index} className="p-4 bg-green-100 rounded-lg shadow-md">
                <h3 className="font-bold">{item.mealTime}</h3>
                <p>{item.recommendation}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Generating your plan...</p>
        )}
      </div>
    </div>
  );
};

export default NutritionPlan;
