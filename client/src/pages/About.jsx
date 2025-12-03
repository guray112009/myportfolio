import React from "react";

// Correct image paths based on YOUR actual folder
import profilepic from "../assets/images/myself1.jpeg";
import skillsImage from "../assets/images/Tech-Stack.webp";
import codeImage from "../assets/images/Code.jpeg";

// Page-specific CSS
import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page fade-in">

      <h1 className="about-title">About Me</h1>

      <img
        src={profilepic}
        alt="Cabdirahman Ibrahim"
        className="profile-pic"
      />

      {/* ===== Introduction ===== */}
      <section className="about-section">
        <h2>Introduction</h2>
        <p className="bio">
          I'm <strong>Cabdirahman Ibrahim</strong>, a passionate web developer
          based in Toronto. I specialize in building responsive, user-friendly
          websites and applications using modern technologies like React,
          JavaScript, and CSS. I’m currently studying Web Application Development
          at Centennial College and enjoy turning ideas into interactive digital
          experiences.
        </p>
      </section>

      {/* ===== Education ===== */}
      <section className="about-section">
        <h2>Education</h2>
        <p className="bio">
          I hold a diploma in <strong>Computer Systems Technician – Networking</strong>,
          and I am currently completing my diploma in{" "}
          <strong>Software Engineering Technician</strong>. My academic journey has
          given me hands-on experience with secure networks, troubleshooting, and
          cybersecurity fundamentals.
        </p>

        <p className="bio">
          For full academic details, visit my{" "}
          <a href="/education" className="inline-link">Education page</a>.
        </p>
      </section>

      {/* ===== Technical Skills ===== */}
      <section className="about-section">
        <h2>Technical Skills</h2>

        <img
          src={skillsImage}
          alt="Tech Stack"
          className="section-image"
        />

        <p className="bio">
          I work with technologies like <strong>React</strong>, <strong>Vite</strong>,{" "}
          <strong>Node.js</strong>, <strong>HTML</strong>, <strong>CSS</strong>,
          <strong>JavaScript</strong>, <strong>C#</strong>, <strong>Python</strong>,
          and <strong>Java</strong>. I enjoy building full-stack applications and
          scalable backend systems.
        </p>

        <p className="bio">
          My background in networking includes experience with{" "}
          <strong>Cisco Packet Tracer</strong>, <strong>Wireshark</strong>,
          firewalls, and secure network troubleshooting. This helps me design
          strong, reliable applications.
        </p>

        <img
          src={codeImage}
          alt="Programming Concepts"
          className="section-image"
        />
      </section>

      {/* ===== Career Portfolio ===== */}
      <section className="about-section">
        <h2>Career Portfolio</h2>
        <p className="bio">
          Welcome to my professional portfolio. Here you'll find my resume,
          academic achievements, technical projects, and more.
        </p>

        <a
          href="/Cabdirahman_Ibrahim_Portfolio.pdf"


          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          📄 View My Career Portfolio PDF
        </a>
      </section>

      {/* ===== Resume ===== */}
      <section className="about-section">
        <h2>Resume</h2>
        <p className="bio">
          For a detailed review of my qualifications and professional experience,
          you can download my resume below.
        </p>

        <a
          href="/Resume.pdf"

          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          📄 Download My Resume PDF
        </a>
      </section>

    </div>
  );
}
