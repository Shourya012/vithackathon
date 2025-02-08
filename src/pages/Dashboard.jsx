import { motion } from "framer-motion";
import MultiStepForm from "../components/MultiStepForm";

const Dashboard = () => {
  return (
    <div className="p-10 bg-gradient-to-br from-green-100 to-green-50 min-h-screen">
      {/* Header Section */}
      <motion.h1 
        className="text-5xl font-bold text-green-800 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Your Personalized Ayurveda & Nutrition Plan
      </motion.h1>
      
      <motion.p 
        className="text-gray-700 mt-4 text-center text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Based on your responses, here is your customized health plan:
      </motion.p>

      {/* Cards Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Diet Plan Card */}
        <motion.div 
          className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-green-700">🥗 Diet Plan</h2>
          <ul className="text-gray-600 mt-3 space-y-2">
            <li>✅ Eat more leafy greens and fruits</li>
            <li>✅ Avoid excessive spicy foods</li>
            <li>✅ Stay hydrated with herbal teas</li>
          </ul>
        </motion.div>

        {/* Exercise Plan Card */}
        <motion.div 
          className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-green-700">🏃‍♂️ Exercise Tips</h2>
          <ul className="text-gray-600 mt-3 space-y-2">
            <li>✅ Walk for at least 30 minutes daily</li>
            <li>✅ Practice yoga for flexibility</li>
            <li>✅ Stretch and meditate in the morning</li>
          </ul>
        </motion.div>

        {/* Sleep & Stress Card */}
        <motion.div 
          className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-semibold text-green-700">😴 Sleep & Stress</h2>
          <ul className="text-gray-600 mt-3 space-y-2">
            <li>✅ Maintain a consistent sleep schedule</li>
            <li>✅ Practice meditation daily</li>
            <li>✅ Reduce screen time before bed</li>
          </ul>
        </motion.div>
      </div>

      {/* MultiStep Form Section */}
      <div className="mt-10 flex justify-center">
        <motion.div 
          className="w-full md:w-3/4 lg:w-1/2 bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-4">📝 Complete Your Health Profile</h2>
          <MultiStepForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
