import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Project from "./pages/Project/Project";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/projects" />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
