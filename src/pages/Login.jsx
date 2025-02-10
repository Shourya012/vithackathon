import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import { AuthContext } from "../AuthContext"; // Make sure this path is correct!
import axios from "axios";

const Login = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext); // Ensure context is not undefined

  if (!authContext) {
    console.error("AuthContext is undefined! Make sure AuthProvider wraps your components.");
    return null; // Prevent crash
  }

  const { login } = authContext;
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data) => {
    console.log("Login Data:", data);

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please sign up first.");
      navigate("/signup");
      return;
    }

    if (storedUser.email === data.email && storedUser.password === data.password) {
      localStorage.setItem("authenticated", "true");
      login(storedUser);
      navigate("/dashboard");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/login", data);
      if (response.data.success) {
        login(response.data.user);
        navigate("/dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("Invalid email or password. Try again!");
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
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Email" type="email" fullWidth variant="outlined" required onChange={handleChange} />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField {...field} label="Password" type="password" fullWidth variant="outlined" required onChange={handleChange} />
            )}
          />

          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition shadow-md transform hover:scale-105">
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/signup" className="text-green-700 font-medium hover:underline">Sign Up</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
