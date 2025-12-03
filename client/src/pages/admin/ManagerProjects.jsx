import { useEffect, useState } from "react";
import api from "../../services/api";
import "../../styles/AdminDashboard.css";

export default function ManagerProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  // ============================================================
  // Load all projects
  // ============================================================
  const fetchProjects = async () => {
    try {
      const res = await api.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.error("Failed to load projects", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ============================================================
  // Handle Form Change
  // ============================================================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ============================================================
  // Submit Form (Create OR Update)
  // ============================================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (editingId) {
        // UPDATE
        await api.put(`/projects/${editingId}`, form);
        setMessage("Project updated successfully.");
      } else {
        // CREATE
        await api.post("/projects", form);
        setMessage("Project added successfully.");
      }

      // Reset Form
      setForm({
        title: "",
        firstname: "",
        lastname: "",
        email: "",
        completion: "",
        description: "",
      });

      setEditingId(null);
      fetchProjects();

    } catch (error) {
      console.error("Save error:", error);
      setMessage("Save failed.");
    }
  };

  // ============================================================
  // Load data into form for editing
  // ============================================================
  const handleEdit = (project) => {
    setEditingId(project._id);
    setForm({
      title: project.title,
      firstname: project.firstname,
      lastname: project.lastname,
      email: project.email,
      completion: project.completion,
      description: project.description,
    });
  };

  // ============================================================
  // Delete Project
  // ============================================================
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await api.delete(`/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Manage Projects</h1>

      {/* ---------------------------- */}
      {/* FORM */}
      {/* ---------------------------- */}
      <form className="admin-form" onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={form.firstname}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={form.lastname}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="completion"
          placeholder="Completion (e.g. 80% or Completed)"
          value={form.completion}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          {editingId ? "Update Project" : "Add Project"}
        </button>
      </form>

      {message && <p className="auth-message">{message}</p>}

      {/* ---------------------------- */}
      {/* TABLE */}
      {/* ---------------------------- */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Student</th>
            <th>Email</th>
            <th>Completion</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p) => (
            <tr key={p._id}>
              <td>{p.title}</td>
              <td>{p.firstname} {p.lastname}</td>
              <td>{p.email}</td>
              <td>{p.completion}</td>
              <td>{p.description}</td>

              <td>
                <button className="edit-btn" onClick={() => handleEdit(p)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(p._id)}>
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
