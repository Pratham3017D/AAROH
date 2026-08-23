import { Link } from "react-router-dom";
import { Menu, Sun, Moon } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
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

        {/* Center Navigation */}
        <nav className="nav-links">
          <a href="/features">Features</a>

          <Link to="/explore">Explore</Link>

          <a href="/universities">Universities</a>

          <a href="/about">About</a>
        </nav>

        {/* Actions */}
        <div className="nav-actions">

          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link
            to="/submit"
            className="primary-btn"
          >
            Get Started
          </Link>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* Profile */}
          <Link
            to="/profile"
            className="navbar-profile"
            aria-label="Open Profile"
          >
            <span>PR</span>
          </Link>

          {/* Mobile Menu */}
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