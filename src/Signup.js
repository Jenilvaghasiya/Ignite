import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import bgImage from './img/img3.jpeg'; // ✅ Import background image

function Signup() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!user.name || !user.email || !user.password) {
      setError("All fields are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(user.email)) {
      setError("Enter a valid email address!");
      return;
    }
    if (user.password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/signup", user);
      navigate("/login");
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${bgImage})`, // ✅ Set background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '500px', 
        height:'50%',
        padding: '25px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 12px rgba(0,0,0,0.2)',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)'
      }}>
        <h2 style={{ marginBottom: '20px', color: 'black',fontFamily:'cursive', }}> IGNITE SIGN UP !</h2>

        {error && <p style={{ color: 'red', marginBottom: '10px', fontSize: '14px' }}>{error}</p>}

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#10B981'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#10B981'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          style={{
            width: '90%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#10B981'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />

        <button
          onClick={handleSignup}
          style={{
            width: '95%',
            padding: '12px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'grey'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'black'}
        >
          Register
        </button>

        <p style={{ marginTop: '15px', fontSize: '14px' }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
