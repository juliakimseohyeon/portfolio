import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project/Project";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
