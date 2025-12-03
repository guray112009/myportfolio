import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";     // ✅ Use API helper
import "../../styles/Auth.css";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await api.post("/auth/signup", formData); // ✅ Uses .env baseURL

      setMessage("Signup successful! Redirecting...");

      setTimeout(() => navigate("/signin"), 1500);

    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Account</button>
      </form>

      {message && <p className="auth-message">{message}</p>}
    </div>
  );
}
