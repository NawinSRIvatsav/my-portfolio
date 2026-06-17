import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload, FaChartBar, FaDatabase, FaPython, FaBrain } from "react-icons/fa";
import AstronautAvatar from "./AstronautAvatar";

function Hero() {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Fade up animation for elements
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="home" className="hero-section">
      {/* Decorative premium background grid & glowing ambient light sources */}
      <div className="hero-grid-overlay" />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-left-col">
          {/* Active Status Badge */}
          <motion.div className="premium-badge" variants={fadeUpVariants}>
            <span className="badge-pulse"></span>
            <span className="badge-text">
              Transforming raw numbers into corporate foresight
            </span>
          </motion.div>

          {/* Intro Text */}
          <motion.p className="hero-salutation" variants={fadeUpVariants}>
            Hello, I'm
          </motion.p>

          {/* Main Name with premium gradient text masking */}
          <motion.h1 className="hero-main-title" variants={fadeUpVariants}>
            Nawin Srivatsav S
          </motion.h1>

          {/* Professional Role Tagline */}
          <motion.h2 className="hero-sub-title" variants={fadeUpVariants}>
  Data Analyst • Power BI Developer • Python Automation
</motion.h2>

          {/* Rich Skill Badges with icons for recruiters */}
          <motion.div className="hero-skills-strip" variants={fadeUpVariants}>
            <div className="skill-strip-item">
              <FaChartBar className="skill-icon-pbi" />
              <span>Power BI</span>
            </div>
            <div className="skill-strip-item">
              <FaDatabase className="skill-icon-db" />
              <span>SQL Analytics</span>
            </div>
            <div className="skill-strip-item">
              <FaPython className="skill-icon-py" />
              <span>Python Automation</span>
            </div>
            <div className="skill-strip-item">
              <FaChartBar className="skill-icon-chart" />
              <span>Financial Modeling</span>
            </div>
          </motion.div>

          {/* Compelling Value Proposition */}
          <motion.p className="hero-editorial-desc" variants={fadeUpVariants}>
            Currently working in Finance & Controlling Analytics at 
            <strong> ZF India</strong>. I architect intuitive BI frameworks, construct scalable 
            SQL storage pipelines, and generate automated forecasting workflows that mitigate 
            operational risk and unlock massive bottom-line growth.
          </motion.p>

          {/* High-Converting CTA Buttons */}
          <motion.div className="hero-interactive-actions" variants={fadeUpVariants}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn-primary"
              aria-label="Download Professional Resume"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nawin-srivatsav-s-052447227"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn-secondary"
              aria-label="Connect on LinkedIn"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/NawinSRIvatsav"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn-secondary"
              aria-label="Browse GitHub Projects"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </motion.div>
        </div>

        {/* Right side: 3D Scene viewport with overlayed glass analytics telemetry */}
        <div className="hero-right-col">
          <motion.div 
            className="spline-viewport-frame"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="spline-scene-container">
              <AstronautAvatar />
            </div>

            {/* Recruiter Appeal: Mock Premium Glassmorphic Analytics Telemetry */}
            <motion.div 
              className="glass-telemetry-panel telemetry-top"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <FaBrain className="telemetry-icon-brain" />
              <div>
                <h4>Cognitive Data Automation</h4>
                <p>AI integrations operationalized</p>
              </div>
            </motion.div>

            <motion.div 
              className="glass-telemetry-panel telemetry-bottom"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <div className="telemetry-stat-row">
                <span className="telemetry-stat">85%</span>
                <span className="telemetry-trend">↑ Peak Efficiency</span>
              </div>
              <p className="telemetry-subtitle">Report latency minimized across systems</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;