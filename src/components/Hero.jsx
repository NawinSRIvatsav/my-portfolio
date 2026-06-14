import { FaGithub, FaLinkedin } from "react-icons/fa";
import SplineScene from "./SplineScene";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <p className="hero-intro">Hello, I'm</p>

          <h1>Nawin Srivatsav S</h1>

          <h2>Data Analyst | Power BI | SQL | Python</h2>

          <p className="hero-desc">
            Transforming business data into actionable insights through
            analytics, visualization and automation.
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="primary-btn">
                Resume
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/nawin-srivatsav-s-052447227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="secondary-btn">
                <FaLinkedin />
                LinkedIn
              </button>
            </a>

            <a
              href="https://github.com/NawinSRIvatsav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="secondary-btn">
                <FaGithub />
                GitHub
              </button>
            </a>
          </div>
        </div>

        <div className="hero-right">
  <div className="spline-wrapper">
    <SplineScene />
  </div>
</div>

      </div>
    </section>
  );
}

export default Hero;