import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "StockSage",
      description:
        "Real-time stock analytics platform using Python, Streamlit, Plotly and Prophet forecasting.",
      github: "#",
    },
    {
      title: "AI Automation Assistant",
      description:
        "Desktop automation assistant using Python, NLP, Hugging Face and voice commands.",
      github: "#",
    },
    {
      title: "Instagram Clone",
      description:
        "Instagram-style mobile UI clone built using Python and KivyMD.",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
          >
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>GitHub</button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;