import React, { useState } from "react";
import "../styles/Contact.css";

// Correct path for your image
import contactImage from "../assets/images/FormPic.webp";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Abdirahman will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="contact-page fade-in">
      <h1 className="contact-title">Contact Me</h1>

      <p className="contact-intro">
        Whether you have a project in mind, a question, or just want to say
        hello — I’d love to hear from you.
      </p>

      <div className="contact-image-wrapper">
        <img
          src={contactImage}
          alt="Contact illustration"
          className="contact-image"
        />
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Subject
          <input
            type="text"
            name="subject"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="social-links">
        <h3>Connect with Me</h3>

        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          📧 Gmail
        </a>

        <a
          href="https://www.linkedin.com/in/cabdirahman-ibrahim-02a434333/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://wa.me/16472419335"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          💬 WhatsApp
        </a>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          🐱 GitHub
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          📄 Resume
        </a>
      </div>
    </main>
  );
}
