import { motion } from "framer-motion";

const Step6Review = ({ onSubmit }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto mt-10"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Review & Submit</h2>
      
      <p className="text-gray-600">Please review your responses before submitting.</p>

      <button onClick={onSubmit} className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
        Submit
      </button>
    </motion.div>
  );
};

export default Step6Review;
