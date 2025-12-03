import { useState, useEffect } from "react";
import api from "../../services/api";
import "../../styles/AdminDashboard.css";

export default function ManagerQualifications() {
  const [qualifications, setQualifications] = useState([]);
  const [formData, setFormData] = useState({
    school: "",
    program: "",
    year: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  // Load qualifications
  const loadQualifications = async () => {
    try {
      const res = await api.get("/qualifications");
      setQualifications(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadQualifications();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save or update qualification
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (editingId) {
        await api.put(`/qualifications/${editingId}`, formData);
        setMessage("Qualification updated successfully.");
      } else {
        await api.post("/qualifications", formData);
        setMessage("Qualification added successfully.");
      }

      setFormData({ school: "", program: "", year: "", description: "" });
      setEditingId(null);
      loadQualifications();

    } catch (err) {
      console.log("Save error:", err.response?.data);
      setMessage(err.response?.data?.message || "Save failed.");
    }
  };

  // Edit button
  const startEdit = (q) => {
    setEditingId(q._id);
    setFormData({
      school: q.school,
      program: q.program,
      year: q.year,
      description: q.description,
    });
  };

  // Delete qualification
  const deleteQualification = async (id) => {
    try {
      await api.delete(`/qualifications/${id}`);
      loadQualifications();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Manage Qualifications</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          name="school"
          placeholder="School"
          value={formData.school}
          onChange={handleChange}
        />

        <input
          name="program"
          placeholder="Program"
          value={formData.program}
          onChange={handleChange}
        />

        <input
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">
          {editingId ? "Update Qualification" : "Add Qualification"}
        </button>
      </form>

      <p style={{ textAlign: "center", color: "gray" }}>{message}</p>

      <table className="admin-table">
        <thead>
          <tr>
            <th>School</th>
            <th>Program</th>
            <th>Year</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {qualifications.map((q) => (
            <tr key={q._id}>
              <td>{q.school}</td>
              <td>{q.program}</td>
              <td>{q.year}</td>
              <td>{q.description}</td>
              <td>
                <button className="edit-btn" onClick={() => startEdit(q)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteQualification(q._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
