import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import HomePage from './HomePage.jsx';
import ProjectsPage from './ProjectsPage.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* stays on all pages */}
      <main>
        <Routes> {/* define routes for the application. Each route corresponds to a URL path and renders a specific component. */}
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectsPage />} /> {/* when user clicks on certain project on homepage */}
        </Routes>
      </main>
      <Footer /> {/* stays on all pages */}
    </BrowserRouter>
  );
}

export default App;
