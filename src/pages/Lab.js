import React from "react";
import "../style/SpaceStaionstyle.css";
import labImg from "../assets/lab.jpeg";
import { useNavigate } from "react-router-dom";

const Lab = () => {
  const navigate = useNavigate();

  return (
    <div
      className="space-station"
      style={{ backgroundImage: `url(${labImg})` }}
    >
      <div className="room-buttons">
        <button onClick={() => navigate("/SpaceStaion")}>← Lobby</button>
        <button onClick={() => navigate("/Core")}> Core Room →</button>
      </div>
    </div>
  );
};

export default Lab;
