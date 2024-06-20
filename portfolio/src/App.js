import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import About from "../src/components/About/About"
import Projects from "../src/components/Projects/Projects"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
