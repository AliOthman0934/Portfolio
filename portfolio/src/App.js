import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import About from "../src/components/About/About"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  );
}

export default App;
