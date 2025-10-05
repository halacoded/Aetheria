import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const StartupPage = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showLogo, setShowLogo] = useState(false);
  const [hideText, setHideText] = useState(false);
  const typingIntervalRef = useRef(null);
  const navigate = useNavigate();

  const lines = useMemo(
    () => [
      "FOR CENTURIES...",
      "We looked up at the stars and dreamed.",
      "WHAT IF...",
      "Your next vacation was 250 miles up?",
      "TODAY...",
      "That dream is within reach.",
    ],
    []
  );

  useEffect(() => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    if (currentLine >= lines.length) {
      setHideText(true);
      const logoTimer = setTimeout(() => setShowLogo(true), 1000);
      const navTimer = setTimeout(() => navigate("/SpacePage"), 6000);

      return () => {
        clearTimeout(logoTimer);
        clearTimeout(navTimer);
      };
    }

    const currentLineText = lines[currentLine];
    setDisplayText("");
    setShowCursor(true);
    let i = 0;

    typingIntervalRef.current = setInterval(() => {
      if (i < currentLineText.length) {
        setDisplayText(currentLineText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingIntervalRef.current);
        setShowCursor(false);
        setTimeout(() => setCurrentLine((prev) => prev + 1), 2000);
      }
    }, 100);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [currentLine, navigate, lines]);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "'Courier New', monospace",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        position: "relative",
      }}
    >
      {!hideText && (
        <div
          style={{
            fontSize: "28px",
            lineHeight: "1.8",
            minHeight: "40px",
            whiteSpace: "pre-wrap",
          }}
        >
          {displayText}
          {showCursor && (
            <span
              style={{
                animation: "blink 1s infinite",
                marginLeft: "2px",
              }}
            >
              |
            </span>
          )}
        </div>
      )}
      {showLogo && (
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "200px",
            position: "absolute",
            top: "28vh",
            animation: "scaleUpFadeOut 6s ease-in-out",
          }}
        />
      )}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          @keyframes scaleUpFadeOut {
            0% { opacity: 0; transform: scale(0.4); }
            30% { opacity: 1; transform: scale(1.5); }
            70% { opacity: 1; transform: scale(2); }
            100% { opacity: 0; transform: scale(3); }
          }
        `}
      </style>
    </div>
  );
};

export default StartupPage;
