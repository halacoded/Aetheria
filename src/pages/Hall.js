import "../style/SpaceStaionstyle.css";
import hallImg from "../assets/Halll.jpeg"; // Replace with your actual hall image
import { useNavigate } from "react-router-dom";

const Hall = () => {
  const navigate = useNavigate();

  return (
    <div
      className="space-station"
      style={{ backgroundImage: `url(${hallImg})` }}
    >
      <div className="room-buttons">
        <button onClick={() => navigate("/Bedroom")}>← Bedroom</button>
        <button onClick={() => navigate("/GreenRoom")}> GreenRoom →</button>
      </div>
    </div>
  );
};

export default Hall;
