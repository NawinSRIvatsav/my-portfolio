import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "AI Automation Engine",
      role: "Lead Developer",
      impact: "Reduced manual reporting time by 85% via automated NLP pipelines.",
      description:
        "Designed and deployed enterprise-grade AI workflow automations integrating proprietary LLMs with business APIs. Engineered automated pipelines to handle document processing, dramatically lowering manual auditing effort.",
      tech: ["OpenAI API", "Python", "LangChain", "FastAPI"],
      github: "https://github.com/NawinSRIvatsav",
      demo: null,
      featured: true,
    },
    {
      title: "StockSage Analytics Platform",
      role: "Solo Developer",
      impact: "Delivered 92% accurate 30-day stock forecasts.",
      description:
        "Engineered a real-time predictive financial analytics application. Leveraged Prophet mathematical forecasting models and structured historical data streams to deliver clean visual trend analysis.",
      tech: ["Python", "Streamlit", "Prophet", "Plotly"],
      github: "https://github.com/NawinSRIvatsav",
      demo: "https://share.streamlit.io/", // Placeholder or real demo link
    },
    {
  title: "Instagram Clone using Python",
  role: "Full Stack Developer",
  impact: "Implemented end-to-end social media functionality with secure user management.",
  description:
    "Engineered an Instagram-inspired social platform supporting authentication, image sharing, likes, comments, user profiles, and follower relationships. Integrated backend database operations and responsive UI components to deliver a seamless social networking experience.",
  tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
  github: "https://github.com/NawinSRIvatsav",
  demo: null,
},
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Featured Projects & Workflows</h2>
        <p className="subtitle">Demonstrating business automation, data analytics, and scalable UI engineering.</p>
      </motion.div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card ${
              project.featured ? "featured-project" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -6,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            }}
          >
            {project.featured && (
              <span className="featured-badge">
                Featured Innovation
              </span>
            )}

            <div className="project-card-header">
              <h3>{project.title}</h3>
              <span className="project-role">{project.role}</span>
            </div>

            {/* Recruiter Impact Hook */}
            <div className="project-impact-highlight">
              <strong>Key Impact:</strong> {project.impact}
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="tech-stack" aria-label="Technologies used">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
                aria-label={`View code for ${project.title} on GitHub`}
              >
                <FaGithub /> View Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;