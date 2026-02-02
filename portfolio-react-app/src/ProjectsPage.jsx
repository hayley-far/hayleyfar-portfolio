import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import components
import ProjectSection from './components/ProjectsPage/ProjectsSection.jsx'
import ProjectTitle from './components/ProjectsPage/ProjectTitle.jsx'

// react functional component
function ProjectsPage() {
    //return statement to define what is rendered on screen
    //<> </> is a react fragment that allows multiple elements to be returned without adding extra nodes to the DOM
  return (
      <>
      <ProjectTitle />
       <ProjectSection />
    </>
  );
}

export default ProjectsPage
