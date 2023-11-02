import React from "react";

const Pill = ({ text }) => {
  const bgColor = (text) => {
    switch (text) {
      case "Low":
        return "#7879F1";
      case "Medium":
        return "#9B51E0";
      case "High":
        return "#6148C2";
      default:
        break;
    }
  };
  return (
    <div
      style={{
        display: "inline-block",
        textAlign: "center",
        borderRadius: "20px",
        background: bgColor(text),
        padding: "10px",
        color: "#ffffff",
      }}
    >
      {text}
    </div>
  );
};

export default Pill;
