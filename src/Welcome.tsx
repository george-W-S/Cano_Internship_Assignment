import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Welcome: React.FC = () => {
  const [text, setText] = useState("");
  const welcomeText =
    "Welcome to the covert B2B Wallace Corporation marketplace.";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= welcomeText.length) {
        setText(welcomeText.substring(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <img
          src="/../src/assets/wallace_logo.png"
          alt="Wallace Corporation logo"
          style={{ width: "400px", height: "auto" }}
        />
      </div>
      <br />
      <h2
        style={{
          fontFamily: "Orbitron, sans-serif",
          color: "#ED0013",
          fontSize: "2em",
        }}
      >
        {text}
      </h2>
      <div>
        <Link to="/welcome/home">
          <button style={{ fontFamily: "Orbitron, sans-serif" }}>ENTER</button>
        </Link>
      </div>
      <div className="copyright">
        Copyright © 2025-2049 Wallace Corporation - All Rights Reserved
      </div>
    </>
  );
};

export default Welcome;
