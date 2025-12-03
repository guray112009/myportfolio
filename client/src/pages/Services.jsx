import React, { useState } from "react";
import "../styles/Services.css";

// IMAGES - MUST MATCH EXACT FILE NAMES
import awsImage from "../assets/images/AWDLEARN.png";
import softwareImage from "../assets/images/software-engineering-services.jpg";
import designImage from "../assets/images/WebDesign.jpg";
import networkImage from "../assets/images/CablelingNet.jpg";   // ✅ FIXED
import repairImage from "../assets/images/computer-repair-service.webp";
import tutoringImage from "../assets/images/Tutoring.webp";

export default function Services() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const services = [
    {
      id: "aws",
      title: "AWS Cloud & Infrastructure",
      subtitle: "Scalable, Secure Cloud Solutions",
      image: awsImage,
      short: "Setup, optimize, and secure AWS environments.",
      long: `My AWS experience covers secure cloud architecture, IAM identity management, EC2 hosting, S3 storage optimization, and building scalable VPC-based infrastructures.`,
    },
    {
      id: "software",
      title: "Software Development",
      subtitle: "Full-Stack Web & App Builds",
      image: softwareImage,
      short: "Build robust back-end systems and user-friendly interfaces.",
      long: `I develop full-stack applications using React, Node.js, MongoDB, and modern API architectures. I focus on clean UI/UX and scalable backend logic.`,
    },
    {
      id: "design",
      title: "Website Design & CMS",
      subtitle: "Responsive & User-Friendly Sites",
      image: designImage,
      short: "Design modern, responsive websites for any device.",
      long: `I create visually appealing and mobile-first websites using HTML, CSS, React, and CMS tools such as WordPress and Webflow. Every project focuses on usability and accessibility.`,
    },
    {
      id: "network",
      title: "Network Configuration",
      subtitle: "Routers, Switches, Firewalls",
      image: networkImage,
      short: "Design and configure secure networks for homes & businesses.",
      long: `I configure routers, switches, VLANs, and firewalls. I also troubleshoot connectivity issues and optimize LAN/WAN performance using tools such as Cisco Packet Tracer and Wireshark.`,
    },
    {
      id: "repair",
      title: "Computer Repair & Support",
      subtitle: "Hardware & Software Troubleshooting",
      image: repairImage,
      short: "Fix and maintain computers for smooth and reliable operation.",
      long: `I handle OS installation, disk cleanup, virus removal, hardware repairs, system optimization, and user technical support for both individuals and businesses.`,
    },
    {
      id: "tutoring",
      title: "IT Tutoring & Mentoring",
      subtitle: "Personalized Tech Guidance",
      image: tutoringImage,
      short: "Teach programming, networking, and cloud skills.",
      long: `I provide one-on-one tutoring for programming, networking, and cloud technologies. I help learners build confidence through hands-on practice and personalized guidance.`,
    },
  ];

  return (
    <main className="services-page fade-in">
      <h1 className="page-title">📋 My Service Offerings</h1>

      {services.map(({ id, title, subtitle, image, short, long }) => (
        <section key={id} className="services-section alt">
          <img src={image} alt={title} className="services-photo" />

          <div className="services-text center-text">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{short}</p>

            <button className="read-more-btn" onClick={() => toggleExpand(id)}>
              {expanded === id ? "Hide Details" : "Read More"}
            </button>

            {expanded === id && <p className="details">{long}</p>}
          </div>
        </section>
      ))}
    </main>
  );
}
