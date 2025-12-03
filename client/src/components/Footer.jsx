import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP FOOTER SECTION */}
      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-section">
          <h3>About Me</h3>
          <p>
            Passionate full-stack developer and IT professional based in Toronto.
            Building modern, responsive, and scalable applications.
          </p>
        </div>

        {/* COLUMN 2 – QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 – CONTACT INFO */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:cibrahim656@my.centennialcollege.ca">
            cibrahim656@my.centennialcollege.ca
          </a></p>
          <p>Phone: <a href="tel:+16472419335">+1 647 241 9335</a></p>
        </div>

        {/* COLUMN 4 – SOCIAL MEDIA */}
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-icons">

            <a href="mailto:cibrahim656@my.centennialcollege.ca" target="_blank" rel="noreferrer">
              📧
            </a>

            <a href="https://www.linkedin.com/in/cabdirahman-ibrahim-02a434333/" target="_blank" rel="noreferrer">
              💼
            </a>

            <a href="https://wa.me/16472419335" target="_blank" rel="noreferrer">
              💬
            </a>

            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              🐱
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT LINE */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Abdirahman Ibrahim — All Rights Reserved</p>
      </div>

    </footer>
  );
}
