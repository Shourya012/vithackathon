import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";

const Signup = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Signup Data:", data);
    
    // Save user data locally
    localStorage.setItem("user", JSON.stringify({
      fullName: data.name,
      email: data.email,
      age: "",
      healthGoals: ""
    }));

    try {
      const response = await axios.post("http://localhost:5000/signup", data);
      if (response.data.success) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Signup failed. Try again!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('https://tse3.mm.bing.net/th?id=OIP.YOq0-68LQfnyzl0MVX9a7gHaDb&pid=Api&P=0&h=180/nutrition.jpg')`, filter: "brightness(50%)" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg w-96 border border-gray-200 z-10">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Full Name Field */}
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Full Name" fullWidth variant="outlined" required />
            )}
          />

          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Email" type="email" fullWidth variant="outlined" required />
            )}
          />

          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Password" type="password" fullWidth variant="outlined" required />
            )}
          />

          {/* Signup Button */}
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition shadow-md transform hover:scale-105">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-green-700 font-medium hover:underline">Login</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;
