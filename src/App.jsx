import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import DockDemo from "./DockDemo.jsx";

const App = () => {
  return (
    <div className="h-screen w-screen bg-slate-900 flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Sections */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>
      <section id="about" className="min-h-screen flex items-center justify-center">
        <About />
      </section>
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <Skills />
      </section>
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>

      <DockDemo />
    </div>
  );
};

export default App;
