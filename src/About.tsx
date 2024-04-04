import React from "react";
import Sidebar from "./Sidebar";
import "./Page.css";

const About: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page-container">
        <div className="page-content">ABOUT</div>
      </div>
      <div className="text-content">
        <p>
          Welcome to the Covert B2B Wallace Corporation Marketplace, where
          discretion and quality are paramount. Our marketplace caters to
          corporate clients who rely on the utmost discretion and precision in
          their operations.
        </p>
        <p>
          From specialized equipment to confidential services, we provide a
          clandestine environment for your business needs, ensuring the highest
          standards of service and confidentiality.
        </p>
        <p>
          Make use of our state-of-the-art environmental rating scale, a
          revolutionary tool designed to help businesses reduce costs tied to
          carbon emissions. By providing a comprehensive assessment of
          environmental impact, this scale enables companies to identify areas
          for improvement and implement targeted strategies to minimize their
          carbon footprint.
        </p>
        <p>Join us and experience the covert advantage.</p>
      </div>
      <div className="copyright">
        Copyright © 2025-2049 Wallace Corporation - All Rights Reserved
      </div>
    </div>
  );
};

export default About;
