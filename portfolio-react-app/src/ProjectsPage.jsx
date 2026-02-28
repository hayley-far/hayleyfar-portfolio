import { useState } from 'react'
import './App.css'

// import components
import ProjectSection from './components/ProjectsPage/ProjectsSection.jsx'
import ProjectTitle from './components/ProjectsPage/ProjectTitle.jsx'

// react functional component
function ProjectsPage() {
  return (
      <>
      <ProjectTitle />
       <ProjectSection />
    </>
  );
}

export default ProjectsPage
