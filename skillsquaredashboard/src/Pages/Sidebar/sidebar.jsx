import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  FileSpreadsheet,
  Phone,
  Menu,
  X,
  LogOut,
  ChevronDown
} from "lucide-react";
import Logo from "../../assets/logo.png";
import "./sidebar.css";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);

  return (
    <>
      {!open && (
  <button
    className="menu-toggle"
    onClick={() => setOpen(true)}
  >
    <Menu size={28} />
  </button>
)}

      <div
        className={`sidebar-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      <aside className={`sidebar ${open ? "open" : ""}`}>
       <div className="sidebar-header">
  <div className="logo-section">
  <img
    src={Logo}
    alt="SkillSquare Logo"
    className="logok"
  />
  <span className="logo-text">SkillSquare</span>
</div>

  <button
    className="close-btn"
    onClick={() => setOpen(false)}
  >
    <X size={24} />
  </button>
</div>
        <nav className="sidebar-menu">
          <Link to="/dashboard" className="menu-item">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <button
            className={`menu-item college-btn ${
              collegeOpen ? "active" : ""
            }`}
            onClick={() => setCollegeOpen(!collegeOpen)}
          >
            <Building2 size={20} />
            Colleges
            <ChevronDown
              size={18}
              className={collegeOpen ? "rotate" : ""}
            />
          </button>

          <div className={`submenu ${collegeOpen ? "show" : ""}`}>
            <Link to="/college/skill-square">Skill Square</Link>
            <Link to="/college/mepco">Mepco</Link>
            <Link to="/college/st-hindu">ST Hindu</Link>
          </div>

          <Link to="/students" className="menu-item">
            <Users size={20} />
            Students
          </Link>

          <Link to="/extracts" className="menu-item">
            <FileSpreadsheet size={20} />
            Extracts
          </Link>

          <Link to="/contact" className="menu-item">
            <Phone size={20} />
            Contact
          </Link>
        </nav>

        <button className="logout-btn">
          <LogOut size={18} />
          Logout
        </button>
      </aside>
    </>
  );
}