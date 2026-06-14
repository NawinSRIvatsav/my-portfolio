function Experience() {
  const experiences = [
    {
      company: "ZF India Pvt Ltd",
      role: "Data Analyst - Finance & Controlling",
      period: "Jan 2026 - Present",
      desc: "Building Power BI dashboards, SQL reporting and finance analytics solutions."
    },
    {
      company: "Hurix Systems Pvt Ltd",
      role: "Associate",
      period: "Nov 2025 - Jan 2026",
      desc: "Worked on digital learning solutions and operational support."
    },
    {
      company: "CODEBIND Technology",
      role: "Web Development Intern",
      period: "Jan 2022 - Mar 2022",
      desc: "Developed responsive websites using HTML, CSS, JavaScript and Bootstrap."
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-card" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{exp.company}</h3>
              <h4>{exp.role}</h4>
              <span>{exp.period}</span>

              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;