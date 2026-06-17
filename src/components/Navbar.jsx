import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => scrollToSection("home")}
      >
        NS
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li
          className={active === "home" ? "active" : ""}
          onClick={() => scrollToSection("home")}
        >
          Home
        </li>

        <li
          className={active === "about" ? "active" : ""}
          onClick={() => scrollToSection("about")}
        >
          About
        </li>

        <li
          className={active === "skills" ? "active" : ""}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>

        <li
          className={active === "experience" ? "active" : ""}
          onClick={() => scrollToSection("experience")}
        >
          Experience
        </li>

        <li
          className={active === "certifications" ? "active" : ""}
          onClick={() => scrollToSection("certifications")}
        >
          Certifications
        </li>

        <li
          className={active === "projects" ? "active" : ""}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </li>

        <li
          className={active === "contact" ? "active" : ""}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;