import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-content">

        {/* Logo */}
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="AAROH Logo"
            className="logo-image"
          />
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#features">Features</a>

          {/* Projects now opens Explore Ideas */}
          <Link to="/explore">Explore</Link>

          <a href="#universities">Universities</a>

          <a href="#about">About</a>
        </nav>

        {/* Actions */}
        <div className="nav-actions">

          <button className="login-btn">
            Login
          </button>

          {/* Get Started → Submit Innovation */}
          <Link to="/submit" className="primary-btn">
            Get Started
          </Link>

          <button
            className="menu-btn"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;