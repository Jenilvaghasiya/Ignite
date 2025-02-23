import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AddPerfume from "./AddPerfume";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";

// ✅ Protected Route Component
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/add-perfume" 
          element={
            <PrivateRoute>
              <AddPerfume />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
