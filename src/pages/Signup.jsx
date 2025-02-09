import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";

const Signup = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    navigate("/login"); // Redirect to login after signup
  };

  // Background image URL
  const bgImageUrl = "https://images.unsplash.com/photo-1564866655-d2b42236ff93"; // Use your own image link here

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg w-96 border border-gray-200 z-10">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Full Name" fullWidth variant="outlined" className="rounded-lg" />
            )}
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Email" type="email" fullWidth variant="outlined" className="rounded-lg" />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Password" type="password" fullWidth variant="outlined" className="rounded-lg" />
            )}
          />

          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition shadow-md transform hover:scale-105">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-green-700 font-medium hover:underline">Login</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;
