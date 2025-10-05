import React, { useState } from "react";
import "../style/SpacePagestyle.css";
import earthVideo from "../assets/earth-rotation.mp4";
import satelliteImg from "../assets/sat.png";
import asteroidsImg from "../assets/asteroids.png";
import shipImg from "../assets/ship.png";
import rocketImg from "../assets/roket.png";
import { useNavigate } from "react-router-dom";

const SpacePage = () => {
  const navigate = useNavigate();

  const [facts, setFacts] = useState({
    rocket: false,
    satellite: false,
    asteroids: false,
    earth: false,
  });

  const toggleFact = (key) => {
    setFacts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleShipClick = () => {
    navigate("/SpaceStaion");
  };

  return (
    <div className="space-container">
      {/* Welcome Header */}
      <div className="space-header">
        <h1>Welcome aboard</h1>
        <p>Discover more before you join us on the journey to Aetheria.</p>
      </div>

      {/* Rocket */}
      <div className="rocket-container" onClick={() => toggleFact("rocket")}>
        <img src={rocketImg} alt="Rocket" className="rocket" />
        <div className="rocket-text">Rocket</div>
        {facts.rocket && (
          <div className="fact-box">
            Rockets travel at speeds over 25,000 mph to escape Earth's gravity.
          </div>
        )}
      </div>

      {/* Satellite */}
      <div
        className="satellite-container"
        onClick={() => toggleFact("satellite")}
      >
        <img src={satelliteImg} alt="Satellite" className="satellite" />
        <div className="satellite-text">Satellite</div>
        {facts.satellite && (
          <div className="fact-box">
            Satellites orbit Earth and help with communication, weather, and
            GPS.
          </div>
        )}
      </div>

      {/* Asteroids */}
      <div
        className="asteroids-container"
        onClick={() => toggleFact("asteroids")}
      >
        <img src={asteroidsImg} alt="Asteroids" className="asteroids" />
        <div className="asteroids-text">Asteroids</div>
        {facts.asteroids && (
          <div className="fact-box">
            Asteroids are rocky remnants from the early solar system, mostly
            found in the asteroid belt.
          </div>
        )}
      </div>

      {/* Ship (navigates only) */}
      <div className="ship-container" onClick={handleShipClick}>
        <img src={shipImg} alt="Space Station" className="ship" />
        <div className="ship-text">Aetheria</div>
      </div>

      {/* Earth */}
      <div className="earth-wrapper" onClick={() => toggleFact("earth")}>
        <div className="earth-container">
          <video src={earthVideo} autoPlay loop muted className="earth-video" />
          <div className="earth-text">Earth</div>
          {facts.earth && (
            <div className="fact-box">
              Earth rotates once every 24 hours, creating day and night.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpacePage;
