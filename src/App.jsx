import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Project from "./pages/Project/Project";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import AboutMe from "./pages/AboutMe/AboutMe";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign";

function App() {
  const [selectedProject, setSelectedProject] = useState({});

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/projects" />} />
        <Route
          path="/projects"
          element={<Project setSelectedProject={setSelectedProject} />}
        />
        <Route
          path="/projects/:id"
          element={
            <ProjectDetail
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          }
        />
        <Route path="/graphic-projects" element={<GraphicDesign />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
