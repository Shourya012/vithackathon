import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";  // ✅ Fixed import space
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MultiStepForm from "./components/MultiStepForm";
import Profile from "./pages/Profile";
import NutritionPlan from "./pages/NutritionPlan";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* Prevent navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* ✅ Home is now default */}
          <Route path="/landing" element={<LandingPage />} />  {/* ✅ Fixed typo */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<MultiStepForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/nutrition" element={<NutritionPlan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
