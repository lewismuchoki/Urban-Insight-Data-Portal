import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../context/Navbar";
import "./App.css";
import Data from "./pages/Data";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/events" element={<Events />} />
            <Route path="/data" element={<Data />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
