import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";
import "../../styles/Auth.css";

export default function Signin() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // 🔥 Send login request to backend
      const res = await api.post("/auth/signin", formData);

      // 🔥 Save token + user (VERY IMPORTANT)
      localStorage.setItem("portfolio_token", res.data.token);
      localStorage.setItem("portfolio_user", JSON.stringify(res.data.user));

      // 🔥 Update AuthContext
      login(res.data.token, res.data.user);

      // Redirect
      window.location.href = "/admin/dashboard";
    } catch (err) {
      console.log(err.response?.data);
      setMessage(err.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Sign In</button>
      </form>

      <p className="auth-message">{message}</p>
    </div>
  );
}
