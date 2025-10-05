import React from "react";
import "../style/GreenRoomstyle.css";
import greenImg from "../assets/green.jpeg";
import { useNavigate } from "react-router-dom";

const GreenRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="green-room" style={{ backgroundImage: `url(${greenImg})` }}>
      <div className="room-buttons">
        <button onClick={() => navigate("/Hall")}>← Hall</button>
        <button onClick={() => navigate("/Lab")}> Lab →</button>
      </div>
    </div>
  );
};

export default GreenRoom;
