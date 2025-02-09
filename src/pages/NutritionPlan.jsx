import React, { useState, useEffect } from "react";
import axios from "axios";

const NutritionPlan = () => {
  const [nutritionPlan, setNutritionPlan] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/generate-nutrition-plan")
      .then(response => setNutritionPlan(response.data))
      .catch(error => console.error("Error fetching nutrition plan:", error));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 shadow-lg rounded-xl w-full max-w-lg">
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
