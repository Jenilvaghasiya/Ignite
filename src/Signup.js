import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async () => {
    await axios.post("http://localhost:5000/signup", user);
    navigate("/");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={handleSignup}>Register</button>
    </div>
  );
}

export default Signup;
