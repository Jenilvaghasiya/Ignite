import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import bgImage from './img/img2.jpeg'; 

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", user);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.name);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundImage: `url(${bgImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <div style={{ 
        width: '500px', 
        height:'50%',
        padding: '60px', 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        boxShadow: '0 0 10px rgba(0,0,0,0.2)', 
        textAlign: 'center', 
        backgroundColor: 'rgba(255, 255, 255, 0.68)' 
      }}>
        <h2 style={{ marginBottom: '20px', color: 'black',fontFamily: 'cursive' }}> IGNITE LOGIN</h2>

        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
        )}

        <input 
          type="email"  
          placeholder="Email" 
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          onKeyDown={handleKeyPress}
          style={{ 
            width: '90%', 
            padding: '10px', 
            marginBottom: '15px', 
            borderRadius: '4px', 
            border: '1px solid #ccc' 
          }}
        />

        <input 
          type="password" 
          placeholder="Password" 
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          onKeyDown={handleKeyPress}
          style={{ 
            width: '90%', 
            padding: '10px', 
            marginBottom: '20px', 
            borderRadius: '4px', 
            border: '1px solid #ccc' 
          }}
        />

        <button 
          onClick={handleLogin}
          style={{ 
            width: '95%', 
            padding: '10px', 
            backgroundColor: 'black', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontFamily: 'cursive' 
          }}
        >
          Login
        </button>

        <p style={{ marginTop: '15px', fontSize: '14px' }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
