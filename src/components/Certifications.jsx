import { motion } from "framer-motion";
import {
  FaCertificate,
  FaRoad,
  FaCheckCircle,
  FaHourglassHalf,
} from "react-icons/fa";

function Certifications() {
  const earnedCertifications = [
    {
      title: "Data Analytics with Python",
      issuer: "NPTEL SWAYAM",
      period: "Jan 2023 – Apr 2023",
      credentialId: null,
    },
    {
      title: "Python Beginner & Python Programmer",
      issuer: "NeoOrange",
      period: "Jul 2023 – Nov 2023",
      credentialId: "NOT221104",
    },
    {
      title: "Programming in Python DSA",
      issuer: "NeoOrange",
      period: "May 2023 – Sep 2023",
      credentialId: "NOT221104",
    },
    {
      title: "Programming in Python Data Science",
      issuer: "NeoOrange",
      period: "Apr 2023 – Jul 2023",
      credentialId: "NOT221104",
    },
    {
      title: "Python & SQL Training",
      issuer: "Besant Technologies",
      period: "Aug 2025",
      credentialId: "BDZ-124505",
    },
  ];

  const roadmap = [
    {
      title: "PL-300: Microsoft Power BI Data Analyst",
      status: "In Progress / Planned",
    },
    {
      title: "AZ-900: Microsoft Azure Fundamentals",
      status: "Planned",
    },
    {
      title: "AWS Cloud Practitioner",
      status: "Planned",
    },
    {
      title: "Advanced Power BI & DAX",
      status: "In Progress",
    },
    {
      title: "Advanced SQL Analytics",
      status: "Planned",
    },
  ];

  const getStatusClass = (status) =>
    status
      .toLowerCase()
      .replace(/\s*\/\s*/g, "-")
      .replace(/\s+/g, "-");

  return (
    <section id="certifications" className="certifications">

      <motion.div
        className="certifications-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Certifications & Learning Roadmap</h2>

        <p className="certifications-subtitle">
          A collection of professional certifications,
          technical training programs, and future learning
          objectives focused on Data Analytics, Business
          Intelligence, Cloud Technologies, and AI-driven
          automation.
        </p>
      </motion.div>

      <div className="certifications-container">

        {/* Certifications Column */}

        <motion.div
          className="cert-column"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="column-title">
            <FaCertificate className="section-icon text-sky" />
            <h3>Earned Certifications</h3>
          </div>

          <div className="cert-list">
            {earnedCertifications.map((cert, index) => (
              <motion.div
                key={index}
                className="cert-item-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="cert-status-icon">
                  <FaCheckCircle className="text-green" />
                </div>

                <div className="cert-info">
                  <h4>{cert.title}</h4>

                  <p className="cert-issuer">
                    {cert.issuer}
                  </p>

                  <p className="cert-period">
                    {cert.period}
                  </p>

                  {cert.credentialId && (
                    <span className="cert-id">
                      Credential ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap Column */}

        <motion.div
          className="cert-column"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="column-title">
            <FaRoad className="section-icon text-sky" />
            <h3>Learning Roadmap</h3>
          </div>

          <div className="cert-list">
            {roadmap.map((item, index) => (
              <motion.div
                key={index}
                className="roadmap-item-card"
                whileHover={{ scale: 1.02 }}
              >
                <div className="cert-status-icon">
                  <FaHourglassHalf className="text-amber" />
                </div>

                <div className="cert-info">
                  <h4>{item.title}</h4>

                  <span
                    className={`roadmap-status ${getStatusClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Certifications;