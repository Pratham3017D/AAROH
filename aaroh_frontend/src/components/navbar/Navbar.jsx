import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="AAROH Logo"
            className="logo-image"
          />
        </Link>

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#projects">Projects</a>
          <a href="#universities">Universities</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button className="login-btn">
            Login
          </button>

          <button className="primary-btn">
            Get Started
          </button>

          <button className="menu-btn" aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;