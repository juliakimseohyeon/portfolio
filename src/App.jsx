import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { keepTheme, setTheme } from "./utils/themes";
import Header from "./components/Header/Header";
import Project from "./pages/Project/Project";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import AboutMe from "./pages/AboutMe/AboutMe";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign";

function App() {
  const [selectedProject, setSelectedProject] = useState({});
  const [toggle, setToggle] = useState("dark");
  const theme = localStorage.getItem("theme");

  const toggleTheme = () => {
    if (theme === "theme-dark") {
      setTheme("theme-light");
      setToggle("light");
    } else {
      setTheme("theme-dark");
      setToggle("dark");
    }
  };

  // Function to ensure the local storage always loads the correct theme
  useEffect(() => {
    keepTheme();
    if (theme === "theme-dark") {
      setToggle("dark");
    } else {
      setToggle("light");
    }
  }, []);

  return (
    <BrowserRouter>
      <Header toggle={toggle} theme={theme} toggleTheme={toggleTheme} />
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
