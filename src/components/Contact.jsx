import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p>
        I'm always open to discussing Data Analytics,
        Power BI, SQL, Python, and new opportunities.
      </p>

      <div className="contact-links">
        <a
          href="mailto:srinawin6@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/nawin-srivatsav-s-052447227"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/NawinSRIvatsav"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;