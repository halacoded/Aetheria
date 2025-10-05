import React from "react";
import "../style/SpaceStaionstyle.css";
import coreImg from "../assets/core.jpeg"; // Make sure this image exists
import { useNavigate } from "react-router-dom";

const Core = () => {
  const navigate = useNavigate();

  return (
    <div
      className="space-station"
      style={{ backgroundImage: `url(${coreImg})` }}
    >
      <div className="room-buttons">
        <button onClick={() => navigate("/Lab")}>← Lab</button>
      </div>
    </div>
  );
};

export default Core;
