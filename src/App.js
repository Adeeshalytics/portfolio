import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';
import Header from './components/Header';
const App = () => {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-black">
        <Header />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;