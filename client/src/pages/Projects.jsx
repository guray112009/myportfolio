import React from "react";
import "../styles/Projects.css";  // your project css (you can create it)

export default function Project() {
  return (
    <div className="project-page fade-in">
      <h1 className="project-title">My Projects</h1>

      <div className="project-grid">

        {/* ======================
            CAMPUS CONNECT PROJECT
        ======================= */}
        <div className="project-card">
          <h2>Campus Connect</h2>
          <p>
            A student portal designed to streamline campus communication and access to 
            resources. Built with HTML, CSS, and JavaScript, hosted on Centennial College’s 
            student web server.
          </p>
          <a
            href="http://studentweb.cencol.ca/cibrahim/CampusConnectProject/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 Visit Campus Connect
          </a>
        </div>

        {/* ======================
            REGISTRATION PROJECT
        ======================= */}
        <div className="project-card">
          <h2>Final Registration System</h2>
          <p>
            A registration form project showcasing form validation, user input handling, and 
            clean UI design. Developed as part of my final coursework.
          </p>
          <a
            href="http://studentweb.cencol.ca/cibrahim/FinallyProject/register.html"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            🔗 Try the Registration Form
          </a>
        </div>

        {/* ======================
            PDF PRESENTATION PROJECT
        ======================= */}
        <div className="project-card">
          <h2>Final Project Presentation</h2>
          <p>
            A PDF presentation summarizing my final project goals, implementation, and 
            outcomes. Includes screenshots, architecture, and reflection.
          </p>

          {/* USE PUBLIC FOLDER PATH */}
          <a
            href="/Final_Project_Presentation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            📄 View / Download Presentation (PDF)
          </a>
        </div>

      </div>
    </div>
  );
}
