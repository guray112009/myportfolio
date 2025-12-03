import React, { useState } from "react";
import "../styles/Education.css";

// IMAGES FROM ASSETS
import internetCafeImage from "../assets/images/InternetCafe.jpg";
import teachesImage from "../assets/images/teaches.webp";
import awsImage from "../assets/images/AWS.png";
import softwareImage from "../assets/images/Software.webp";

export default function Education() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  const educationItems = [
    {
      id: "cafe",
      title: "Internet Cafe Management",
      subtitle: "Hands-on Experience",
      image: internetCafeImage,
      content: `For seven years, I ran an internet cafe that served as both a business and a learning lab. I handled hardware repairs, installed operating systems, set up LAN networks, and helped customers troubleshoot their devices.`,
    },
    {
      id: "networking",
      title: "Computer Systems Technician – Networking",
      subtitle: "Centennial College – Honors Graduate",
      image: null,
      content: `I graduated with Honors from Centennial College, where I studied network architecture, security protocols, and system diagnostics using tools like Cisco Packet Tracer and Wireshark.`,
      link: {
        label: "🎓 View My Networking Diploma",
        url: "/Comp-Sys-Tech-Net.pdf", // MUST be in public
      },
    },
    {
      id: "teaching",
      title: "Teacher Training Certificate",
      subtitle: "Islamic Education Program",
      image: teachesImage,
      content: `Through an Islamic education program, I learned classroom management, lesson planning, and how to guide students through meaningful learning experiences.`,
      link: {
        label: "🏫 View My Teaching Certificate",
        url: "/SoundVision.pdf", // MUST be in public
      },
    },
    {
      id: "software",
      title: "Software Engineering Technician Program",
      subtitle: "Centennial College",
      image: softwareImage,
      content: `I am mastering full-stack development, object-oriented programming, and database systems. I’ve built academic and personal projects using HTML, CSS, JavaScript, React, Node.js, and SQL.`,
    },
    {
      id: "ai",
      title: "AI Introduction & System Design",
      subtitle: "Hands-On Labs",
      image: null,
      content: `I am taking AI courses that cover machine learning models, neural networks, and intelligent system architecture with Python and modern AI frameworks.`,
    },
    {
      id: "aws",
      title: "AWS Cloud Practitioner",
      subtitle: "Cloud Architecture & Services",
      image: awsImage,
      content: `I’m studying AWS EC2, S3, IAM, VPC, Lambda, Cloud security, billing, resource management, and deployment practices.`,
    },
  ];

  return (
    <main className="education-page fade-in">
      <h1 className="page-title">📘 My Education Journey</h1>

      {educationItems.map(({ id, title, subtitle, image, content, link }) => (
        <section
          key={id}
          className={`education-section ${
            ["networking", "software", "aws"].includes(id) ? "alt" : ""
          }`}
        >
          {image && <img src={image} alt={title} className="education-photo" />}

          <div className="education-text center-text">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>

            <button className="read-more-btn" onClick={() => toggleExpand(id)}>
              {expanded === id ? "Hide Details" : "Read More"}
            </button>

            {expanded === id && (
              <>
                <p>{content}</p>

                {link && (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-link"
                  >
                    {link.label}
                  </a>
                )}
              </>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
