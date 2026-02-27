import React, { useState, useLayoutEffect, useRef } from 'react';
// Import the CSS Module file
// CSS Modules scope styles locally to this component
import styles from './ProjectsSection.module.css';
import Card from '../Cards/Cards.jsx';

//Project images
import portfolioImg from '../../assets/projectImgs/portfolio.png';
import bombermanImg from '../../assets/projectImgs/acornBomber.png';
import chipsImg from '../../assets/projectImgs/fashAndChaps.png';
import recappImg from '../../assets/projectImgs/recapp.png';
import galagaImg from '../../assets/projectImgs/starSwarm.png';
import avcImg from '../../assets/projectImgs/avc.JPG';


// This is a React functional component
// Components are reusable pieces of UI
function ProjectSection() {
    const projects = [
            {id: "portfolio", title: "Portfolio Website", date: "Dec 2025 - Feb 2026 | React, Vite, JavaScript, HTML, CSS", description: <p>Designed and developed a personal portfolio website to showcase projects and technical skills. Learned JavaScript and React while building the portfolio, focusing on a component-based structure and responsive design.</p>, color: "purple", image: portfolioImg,},
            {id: "bomberman",title: "Acorn Bomber", date: "Jan 2026 - Feb 2026 | Java, JSON, Swing, Piskel", description: <p>Developed a two-level Bomberman-style 2D game, implementing enemy AI with both random movement and A* pathfinding. Designed and created all original sprites used in the game. Structured the project using OOP to separate rendering, game logic, and input handling.</p>, color: "purple", image: bombermanImg,},
            {id: "chips",title: "Fash and Chaps", date: "Sept 2025 - Oct 2025 | Java, JUnit, GitLab", description: <p>Worked in a team of six to develop a game inspired by Chip’s Challenge as part of the SWEN225 course. Designed and implemented the core game logic using a structured object-oriented architecture and applied multiple design patterns.</p>,color: "green", image: chipsImg,},
            {id: "recapp",title: "Recapp", date: "VUW Hackathon 2025 | TypeScript, JavaScript, GitHub", description: <p>Worked in a team of six to develop a private app for connecting with close friends and family, allowing users to share memories without the pressure of social media. Contributed to concept design and project presentation, while supporting teammates in development.</p>,color: "green", image: recappImg,},
            {id: "galaga",title: "Star Swarm", date: "Sept 2024 - Oct 2024 | Processing (Java), Piskel", description: <p>Developed a three-level Galaga-style 2D game in Processing as part of the CGRA151 course. Implemented physics-based movement and object-oriented programming. Designed and created all original sprites used in the game.</p>,color: "green", image: galagaImg,},
            {id: "avc",title: "Autonomous Vehicle Challenge", date: "May 2024 - June 2024 | C++, Raspberry Pi, Linux", description: <p>Worked in a team of five to build and code a line-following robot to complete a course uninterrupted as part of the ENGR101 course. Coordinated team activities to manage time effectively and supported teammates, while focusing on testing and debugging.</p>,color: "green", image: avcImg,},
          ];
    const [activeProject, setActiveProject] = useState(projects[0]);
    const carouselRef = useRef(null);

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

    // Scroll the left carousel so the active project element is visible
    useLayoutEffect(() => {
      const container = carouselRef.current;
      if (!container || !activeProject || !activeProject.id) return;
      const el = container.querySelector(`#${activeProject.id}`);
      if (!el) return;

      // element and container rects
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      // compute element top relative to container's scroll top
      const relativeTop = elRect.top - containerRect.top + container.scrollTop;

      // center the element in the container (adjust as needed)
      const offset = Math.max(0, relativeTop - (container.clientHeight - elRect.height) / 2);

      container.scrollTo({ top: offset, behavior: 'smooth' });
    }, [activeProject]);



  return (
      <section className={styles.projectsSection}>
            {/* Left column */}
            <div className={styles.carouselContainer} ref={carouselRef}>
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
                date={activeProject.date}
                variant="mainContentCard"
                color={activeProject.color}
                image={activeProject.image}
              />
            </div>
          </section>
    );
}

// Export the component so it can be used in other files (like App.jsx)
export default ProjectSection