import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <img
        src="/../src/assets/wallace_logo.png"
        alt="Wallace Corporation logo"
        style={{ width: "200px", height: "auto", marginBottom: "20px" }}
      />
      <div>
        <Link to="/welcome/home">
          <button className="sidebar-button">Home</button>
        </Link>
        <Link to="/welcome/products">
          <button className="sidebar-button">Products</button>
        </Link>
        <Link to="/welcome/about">
          <button className="sidebar-button">About</button>
        </Link>
        <Link to="/welcome">
          <button className="sidebar-button">EXIT</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
