import React from "react";
import { Pie } from "react-chartjs-2";
const PieChart = () => {
  const data = {
    labels: ["strategy 1", "strategy 2", "strategy 3", "strategy 4"],
    datasets: [
      {
        data: [1000, 2000, 3000, 4000],
        backgroundColor: ["#FF5733", "#FFC300", "#36A2EB", "#4BC0C0"],
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        width: "440px",
        height: "425px",
        flexDirection: "column",
        background: "#ffffff",
        borderRadius: "10px",
        boxShadow: " 1px 1px 1px black",
        padding: "17px 7px 7px 17px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Lendering Allocations</p>
        <p>$5000 USDC</p>
      </div>{" "}
      <div
        style={{
          height: "300px",
          maxHeight: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pie data={data} height="100%" />
      </div>
    </div>
  );
};

export default PieChart;
