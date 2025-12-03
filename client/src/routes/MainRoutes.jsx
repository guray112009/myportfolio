import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Education from "../pages/Education";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

// Admin pages
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManagerQualifications from "../pages/admin/ManagerQualifications";
import ManagerProjects from "../pages/admin/ManagerProjects";
import ManagerServices from "../pages/admin/ManagerServices";
import AdminMessages from "../pages/admin/AdminMessages";

import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";

export default function MainRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />

      {/* Auth */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/qualifications" element={<ManagerQualifications />} />
      <Route path="/admin/projects" element={<ManagerProjects />} />
      <Route path="/admin/services" element={<ManagerServices />} />
      <Route path="/admin/messages" element={<AdminMessages />} />
    </Routes>
  );
}
