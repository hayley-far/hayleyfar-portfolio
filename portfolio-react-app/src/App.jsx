import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import HomePage from './HomePage.jsx';
import ProjectsPage from './ProjectsPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* stays on all pages */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* Add more pages here */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
