import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <Sparkles size={15} />
            <span>Where Student Innovation Comes Alive</span>
          </motion.div>

          <h1 className="hero-title">
            Build Tomorrow's
            <span> Innovation Today.</span>
          </h1>

          <p className="hero-description">
            AAROH brings students, projects, ideas, and teams together in one
            ecosystem — giving every innovation a place to grow.
          </p>

          <div className="hero-actions">
            <Link to="/signup" className="hero-primary-btn">
              Start Building
              <ArrowRight size={18} />
            </Link>

            <a href="#features" className="hero-secondary-btn">
              Explore AAROH
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-line" />
            <span>Built for the next generation of innovators</span>
            <div className="hero-trust-line" />
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: "easeOut" }}
        >
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <motion.div
            className="hero-center-card"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="hero-logo-mark">🍃</div>

            <div className="hero-card-content">
              {/* <span>INNOVATION ECOSYSTEM</span> */}
              <strong>आROH</strong>
              <p>Connecting Student Innovation</p>
            </div>
          </motion.div>

          <motion.div
            className="floating-card floating-card-projects"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="floating-icon">
              <FolderKanban size={19} />
            </div>

            <div>
              <strong>Projects</strong>
              <span>Build & showcase</span>
            </div>
          </motion.div>

          <motion.div
            className="floating-card floating-card-team"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="floating-icon">
              <Users size={19} />
            </div>

            <div>
              <strong>Team Finder</strong>
              <span>Find your people</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;