import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsMatrix from "./components/SkillsMatrix";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarsBackground from "./components/StarsBackground";

function App() {
  return (
    <>
      <StarsBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <SkillsMatrix />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;