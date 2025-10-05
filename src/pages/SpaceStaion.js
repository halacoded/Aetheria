import React from "react";
import "../style/SpaceStaionstyle.css";
import lobbyImg from "../assets/lobby.jpeg";
import { useNavigate } from "react-router-dom";

const SpaceStaion = () => {
  const navigate = useNavigate();

  return (
    <div
      className="space-station"
      style={{ backgroundImage: `url(${lobbyImg})` }}
    >
      {/* Back button at top-left */}
      <button className="back-button" onClick={() => navigate("/SpacePage")}>
        ← Back to Space
      </button>

      <div className="room-buttons">
        <button onClick={() => navigate("/Library")}>← Library</button>
        <button onClick={() => navigate("/Hall")}> Hall →</button>
      </div>
    </div>
  );
};

export default SpaceStaion;
