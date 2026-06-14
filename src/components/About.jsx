import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>

      <p>
        Data Analyst passionate about SQL, Power BI, Python,
        dashboards and transforming data into business insights.
      </p>
    </motion.section>
  );
}

export default About;