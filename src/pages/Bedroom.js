import React from "react";
import "../style/Bedroomstyle.css";
import bedImg from "../assets/bed.jpeg";
import { useNavigate } from "react-router-dom";

const Bedroom = () => {
  const navigate = useNavigate();

  return (
    <div className="bedroom" style={{ backgroundImage: `url(${bedImg})` }}>
      <div className="room-buttons">
        <button onClick={() => navigate("/SpaceStaion")}>← Lobby</button>
        <button onClick={() => navigate("/Hall")}>Hall →</button>
      </div>
    </div>
  );
};

export default Bedroom;
