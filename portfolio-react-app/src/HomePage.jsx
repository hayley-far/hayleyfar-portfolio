import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import components
import Header from './components/Header/Header.jsx'
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
       <AboutMe />
       <Skills />
       <Projects />
       <Contact />
    </>
  );
}

export default HomePage
