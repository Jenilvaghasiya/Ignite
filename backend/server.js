const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Change if necessary
  password: "", // Change if necessary
  database: "igniteDB",
});

db.connect((err) => {
  if (err) console.log("Database connection failed:", err);
  else console.log("Connected to MySQL");
});

// Signup Route
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword],
    (err, result) => {
      if (err) return res.status(500).json({ message: "Error registering user" });
      res.json({ message: "User registered successfully" });
    }
  );
});

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    
    if (results.length === 0) return res.status(401).json({ message: "Invalid credentials" });

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, name: user.name }, "secret", { expiresIn: "1h" });
    res.json({ token, name: user.name });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
