import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <Shield size={22} />

        <span>
          Palm<span className="accent"></span>
        </span>
      </Link>

      <button
        className="nav-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={`nav-links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/writeups">Writeups</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;