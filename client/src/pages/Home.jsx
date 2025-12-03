import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Hero images
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpeg";
import team3 from "../assets/images/team3.webp";
import team4 from "../assets/images/team4.png";
import team5 from "../assets/images/team5.webp";
import team6 from "../assets/images/team6.jpg";
import team7 from "../assets/images/team7.webp";

// Section images
import missionImage from "../assets/images/mission.png";
import skillsImage from "../assets/images/skills.webp";
import networkingImage from "../assets/images/networking.webp";
import developmentImage from "../assets/images/development.webp";

import "../styles/Home.css";

const heroImages = [team1, team2, team3, team4, team5, team6, team7];

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="centered-hero fade-in">
        <div className="hero-image-wrapper">
          <img
            src={heroImages[currentHeroIndex]}
            alt="Hero Slide"
            className="hero-full-image"
          />
        </div>

        <div className="hero-text">
          <h1>Welcome to My Portfolio</h1>
          <p>
            I'm <strong>Abdirahman</strong>, a Toronto-based tech professional with a strong
            foundation in networking and software development.
          </p>
          <p>
            I hold a diploma in <strong>Computer Systems Technician – Networking</strong> and I am
            currently completing my diploma in{" "}
            <strong>Software Engineering Technician</strong>.
          </p>
          <p>
            My journey began with networks and cybersecurity, then expanded into building
            full-stack applications, responsive UIs, and scalable back-end systems.
          </p>

          <Link to="/about" className="hero-button">
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="info-section fade-in">
        <img src={missionImage} alt="Mission" className="info-image" />
        <div className="info-text">
          <h2>My Mission</h2>
          <p>
            I build modern, responsive web applications that solve real-world problems and deliver
            great user experiences.
          </p>
          <Link to="/about#mission" className="info-button">
            More About My Mission
          </Link>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="info-section reverse fade-in">
        <img src={skillsImage} alt="Skills" className="info-image" />
        <div className="info-text">
          <h2>Technical Skills</h2>
          <p>
            Technologies I use include <strong>React</strong>, <strong>Node.js</strong>,{" "}
            <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>C#</strong>, <strong>Python</strong>, and <strong>Java</strong>.
          </p>
          <Link to="/projects" className="info-button">
            See My Projects
          </Link>
        </div>
      </section>

      {/* NETWORKING SECTION */}
      <section className="info-section fade-in">
        <img src={networkingImage} alt="Networking" className="info-image" />
        <div className="info-text">
          <h2>Networking Expertise</h2>
          <p>
            Experience configuring secure networks, troubleshooting connectivity issues, and
            implementing cybersecurity practices using Cisco tools.
          </p>
          <Link to="/education" className="info-button">
            View My Education
          </Link>
        </div>
      </section>

      {/* DEVELOPMENT SECTION */}
      <section className="info-section reverse fade-in">
        <img src={developmentImage} alt="Development" className="info-image" />
        <div className="info-text">
          <h2>Software Development</h2>
          <p>
            I design modern interfaces, build APIs, and develop full-stack applications that power
            real-world solutions.
          </p>
          <Link to="/services" className="info-button">
            Explore My Services
          </Link>
        </div>
      </section>

    </main>
  );
}
