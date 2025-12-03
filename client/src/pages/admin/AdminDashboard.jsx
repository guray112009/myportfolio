import { useNavigate } from "react-router-dom";
import "../../styles/AdminDashboard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <main className="admin-page">
      <h1 className="admin-title">Admin Dashboard</h1>

      <p className="admin-subtitle">
        Welcome, Admin. Manage all your portfolio data below.
      </p>

      <div className="admin-grid">
        {/* QUALIFICATIONS */}
        <section className="admin-card">
          <h2>Qualifications / Education</h2>
          <p>Manage your education and qualifications.</p>
          <button
            className="admin-btn"
            onClick={() => navigate("/admin/qualifications")}
          >
            Manage
          </button>
        </section>

        {/* PROJECTS */}
        <section className="admin-card">
          <h2>Projects</h2>
          <p>Create, update, or delete portfolio projects.</p>
          <button
            className="admin-btn"
            onClick={() => navigate("/admin/projects")}
          >
            Manage
          </button>
        </section>

        {/* SERVICES */}
        <section className="admin-card">
          <h2>Services</h2>
          <p>Adjust the services you offer to clients.</p>
          <button
            className="admin-btn"
            onClick={() => navigate("/admin/services")}
          >
            Manage
          </button>
        </section>

        {/* CONTACT MESSAGES */}
        <section className="admin-card">
          <h2>Contact Messages</h2>
          <p>View messages submitted from the contact form.</p>
          <button
            className="admin-btn"
            onClick={() => navigate("/admin/messages")}
          >
            View
          </button>
        </section>
      </div>
    </main>
  );
}
