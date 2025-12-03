import { useEffect, useState } from "react";
import api from "../../services/api";
import "../../styles/AdminDashboard.css";

export default function ManagerServices() {
  const [services, setServices] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  // Load all services on page open
  const loadServices = async () => {
    try {
      const res = await api.get("/services");
      setServices(res.data);
    } catch (error) {
      console.error("Error loading services", error);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  // Handle Add / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!title || !description) {
      setMessage("All fields are required.");
      return;
    }

    try {
      if (editingId) {
        // UPDATE service
        await api.put(`/services/${editingId}`, {
          title,
          description,
          subtitle: "",
          category: "General",
          image: "",
          icon: "",
        });
        setMessage("Service updated successfully!");
      } else {
        // CREATE service
        await api.post("/services", {
          title,
          description,
          subtitle: "",
          category: "General",
          image: "",
          icon: "",
        });
        setMessage("Service added successfully!");
      }

      setTitle("");
      setDescription("");
      setEditingId(null);
      loadServices();

    } catch (error) {
      console.error("Save error:", error);
      setMessage("Save failed.");
    }
  };

  // LOAD data for editing
  const startEdit = (service) => {
    setEditingId(service._id);
    setTitle(service.title);
    setDescription(service.description);
  };

  // DELETE service
  const deleteService = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await api.delete(`/services/${id}`);
      loadServices();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Manage Services</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Service Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Service Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="submit">
          {editingId ? "Update Service" : "Add Service"}
        </button>
      </form>

      <p style={{ textAlign: "center", color: "gray" }}>{message}</p>

      {/* TABLE VIEW */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th style={{ width: "150px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {services.length > 0 ? (
            services.map((s) => (
              <tr key={s._id}>
                <td>{s.title}</td>
                <td>{s.description}</td>
                <td>
                  <button className="edit-btn" onClick={() => startEdit(s)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => deleteService(s._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center", padding: "20px" }}>
                No services added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
