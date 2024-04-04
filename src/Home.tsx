import React from "react";
import Sidebar from "./Sidebar";
import "./Page.css";
import "./App.css";

const Home: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page-container">
        <div className="page-content">HOME</div>
      </div>
      <div className="text-content">
        <p>
          The Wallace Corporation is a pioneering leader at the forefront of
          three distinct fields: Organics, Synthetics, and Artificials.
        </p>
        <p>
          With Organics, the Wallace Corporation has pushed the boundaries of
          what's possible with living organisms, developing advanced medical
          solutions and sustainable food production methods. Notably, in 2025,
          Wallace Corporation shared its protein farming patents, ensuring an
          end to the Great Famine and ceasing a global crisis.
        </p>
        <p>
          During the 2030s, our Synthetics division had already mastered
          replicant technology, enabling humanity to colonize our solar system
          and beyond, with nine new off-world planets currently terraformed.
        </p>
        <p>
          In the realm of Artificials, we are revolutionizing artificial
          intelligence and robotics by creating intelligent systems that serve
          as companions, enhancing productivity, improving lives, and opening
          new possibilities for humanity.
        </p>
      </div>
      <div className="copyright">
        Copyright © 2025-2049 Wallace Corporation - All Rights Reserved
      </div>
    </div>
  );
};

export default Home;
