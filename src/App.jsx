import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext"; // Import AuthProvider
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MultiStepForm from "./components/MultiStepForm";
import Profile from "./pages/Profile";
import NutritionPlan from "./pages/NutritionPlan";

// 🔐 Protected Route Component
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("user"); // Check if user is logged in
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar always visible */}
      <div className="pt-20"> {/* Prevent navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default Route */}
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<MultiStepForm />} />
          
          {/* Protected Routes - Only accessible when logged in */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/nutrition" element={<ProtectedRoute element={<NutritionPlan />} />} />

          {/* Redirect invalid routes to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

// 🔥 Render the App inside AuthProvider
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider> 
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
