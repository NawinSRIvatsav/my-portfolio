import { FaPython, FaDatabase, FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      name: "Python",
      icon: <FaPython size={40} />,
    },
    {
      name: "SQL",
      icon: <FaDatabase size={40} />,
    },
    {
      name: "Power BI",
      icon: <FaChartBar size={40} />,
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          >
            {skill.icon}
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;