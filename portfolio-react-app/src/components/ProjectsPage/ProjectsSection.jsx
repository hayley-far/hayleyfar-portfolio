import React, { useState, useLayoutEffect } from 'react';
// Import the CSS Module file
// CSS Modules scope styles locally to this component
import styles from './ProjectsSection.module.css';
import Card from '../Cards/Cards.jsx';


// This is a React functional component
// Components are reusable pieces of UI
function ProjectSection() {
    const projects = [
            {id: "portfolio", title: "Portfolio Website", description: <p>My personal portfolio built with React.</p>, color: "pink",},
            {id: "bomberman",title: "Bomberman Game", description: <p>A classic Bomberman clone.</p>, color: "pink",},
            {id: "chips",title: "Fash and Chaps", description: <p>Chips Challenge.</p>,color: "blue",},
            {id: "recapp",title: "Recapp", description: <p>Hackathon App.</p>,color: "blue",},
            {id: "galaga",title: "Galaga Game", description: <p>Retro arcade shooter.</p>,color: "blue",},
            {id: "avc",title: "Automated Vehicle Challenge", description: <p>Self-driving competition project.</p>,color: "blue",},
          ];
    const [activeProject, setActiveProject] = useState(projects[0]);
    useLayoutEffect(() => {
        // stop browser restoring previous scroll position
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
        }

        // capture and handle any incoming hash (use it to set active project)
        const hash = window.location.hash.replace('#', '');
        if (hash) {
          const match = projects.find(p => p.id === hash);
          if (match) setActiveProject(match);

          // remove the hash so the browser won't auto-jump to the element
          if (window.history && window.history.replaceState) {
            const urlNoHash = window.location.pathname + window.location.search;
            window.history.replaceState(null, '', urlNoHash);
          }
        }

        // temporarily disable smooth scrolling so the jump is instant and invisible
        const prevScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';

        // force top before paint
        window.scrollTo(0, 0);

        // restore previous scroll behavior on next frame
        requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = prevScrollBehavior || '';
        });
      }, []);



  return (
      <section className={styles.projectsSection}>
            {/* Left column */}
            <div className={styles.carouselContainer}>
              {projects.map((project) => (
               <div key={project.id} id={project.id}>
                <Card
                  key={project.title}
                  title={project.title}
                  variant="projectPageCard"
                  color={project.color}
                  isActive={activeProject.title === project.title}
                  onClick={() => setActiveProject(project)}
                />
            </div>
              ))}
            </div>

            {/* Right column */}
            <div className={styles.mainContent}>
              <Card
                title={activeProject.title}
                description={activeProject.description}
                variant="mainContentCard"
                color={activeProject.color}
              />
            </div>
          </section>
    );
}

// Export the component so it can be used in other files (like App.jsx)
export default ProjectSection