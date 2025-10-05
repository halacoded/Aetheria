import React from "react";
import "../style/SpaceStaionstyle.css";
import lobbyImg from "../assets/Libraryyy.jpeg";
import { useNavigate } from "react-router-dom";

const Library = () => {
  const navigate = useNavigate();

  return (
    <div
      className="space-station"
      style={{ backgroundImage: `url(${lobbyImg})` }}
    >
      <div className="room-buttons">
        <button onClick={() => navigate("/SpaceStaion")}>← Lobby</button>
        <button onClick={() => navigate("/Hall")}> Hall →</button>
      </div>
    </div>
  );
};

export default Library;
