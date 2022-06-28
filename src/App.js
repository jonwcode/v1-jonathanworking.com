import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutme";
import Projects from "./pages/projects";
import ContactMe from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/contact" exact element={<ContactMe />} />
      <Route path="/projects" exact element={<Projects />} />
      <Route path="/about" exact element={<AboutMe />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default App;
