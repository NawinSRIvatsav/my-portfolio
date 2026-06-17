import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaRobot,
  FaGlobe,
  FaGitAlt,
  FaWindows,
  FaUsers,
  FaLanguage,
} from "react-icons/fa";

function SkillsMatrix() {
  const skills = [
    {
      title: "Programming",
      icon: <FaPython size={40} />,
      items: ["Python", "SQL", "JavaScript", "HTML"],
    },
    {
      title: "Analytics & BI Tools",
      icon: <FaChartBar size={40} />,
      items: [
        "Power BI",
        "Tableau",
        "Microsoft Excel",
        "SAP",
      ],
    },
    {
      title: "Data Analysis",
      icon: <FaChartBar size={40} />,
      items: [
        "Data Cleaning",
        "Data Validation",
        "KPI Reporting",
        "Dashboard Development",
        "Forecasting",
        "Variance Analysis",
      ],
    },
    {
      title: "Machine Learning",
      icon: <FaRobot size={40} />,
      items: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "PyTorch",
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase size={40} />,
      items: ["MySQL"],
    },
    {
      title: "Web Technologies",
      icon: <FaGlobe size={40} />,
      items: [
        "Flask",
        "ReactJS",
        "Streamlit",
      ],
    },
    {
      title: "Version Control",
      icon: <FaGitAlt size={40} />,
      items: ["Git", "GitHub"],
    },
    {
      title: "Operating Systems",
      icon: <FaWindows size={40} />,
      items: ["Windows", "Ubuntu"],
    },
    {
      title: "Professional Skills",
      icon: <FaUsers size={40} />,
      items: [
        "Problem Solving",
        "Analytical Thinking",
        "Communication",
        "Team Collaboration",
        "Stakeholder Management",
      ],
    },
    {
      title: "Languages",
      icon: <FaLanguage size={40} />,
      items: [
        "English",
        "Tamil",
        "Hindi",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>

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
              delay: index * 0.1,
            }}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <ul className="skill-list">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsMatrix;