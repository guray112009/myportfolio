import { useEffect, useState } from "react";
import api from "../../services/api";
import "../../styles/AdminDashboard.css";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    try {
      const res = await api.get("/contacts");   // ✔ token now included
      setMessages(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch messages", err);
      setError("Failed to load messages.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="admin-page">
      <h1 className="admin-title">Contact Messages</h1>
      <p className="admin-subtitle">{error}</p>

      {loading && <p>Loading...</p>}

      {!loading && messages.length === 0 && (
        <p>No messages yet.</p>
      )}

      {messages.length > 0 && (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td>{new Date(msg.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
