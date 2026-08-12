import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <Shield size={22} />

        <span>
          Palm<span className="accent"></span>
        </span>
      </Link>

      <div className="nav-links">
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