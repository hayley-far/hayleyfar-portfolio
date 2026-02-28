import { useState } from 'react'
import './App.css'

// import components
import Header from './components/Header/Header.jsx'
import ScrollReveal from './components/AboutMe/ScrollReveal.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/ContactMe/Contact.jsx'

// react functional component
function HomePage() {
    //return statement to define what is rendered on screen
    //<> </> is a react fragment that allows multiple elements to be returned without adding extra nodes to the DOM
  return (
      <>
       <ScrollReveal /> {/* About me section is called inside here */}
       <Skills />
       <Projects />
       <Contact />
    </>
  );
}

export default HomePage
