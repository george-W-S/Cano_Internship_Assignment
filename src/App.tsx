import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./Welcome";
import Home from "./Home";
import Products from "./Products";
import About from "./About";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/welcome/home" element={<Home />} />
        <Route path="/welcome/products" element={<Products />} />
        <Route path="/welcome/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
