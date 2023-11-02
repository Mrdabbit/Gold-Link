import React from "react";
import Pill from "./Pill";
const Table = () => {
  const datasets = [
    {
      name: "Strategy 1",
      TVL: 100000,
      volatility: "Low",
      collateral: 1000,
      PNL: 100.84,
    },
    {
      name: "Strategy 2",
      TVL: 12500,
      volatility: "Medium",
      collateral: 1000,
      PNL: -84.23,
    },
    {
      name: "Strategy 1",
      TVL: 12500,
      volatility: "Medium",
      collateral: 1000,
      PNL: 24.53,
    },
    {
      name: "Strategy 4",
      TVL: 25000,
      volatility: "High",
      collateral: 1000,
      PNL: 45.98,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "425px",
        width: "850px",
        borderRadius: "10px",
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.05)",
        padding: "16px",
      }}
    >
      <h3 style={{ display: "flex", marginBottom: "16px" }}>
        Strategy Performance
      </h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #C2C9D1",
          borderRadius: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #C2C9D1" }}>Strategy</th>
            <th style={{ borderBottom: "1px solid #C2C9D1" }}>TVL</th>
            <th style={{ borderBottom: "1px solid #C2C9D1" }}>Volatility</th>
            <th style={{ borderBottom: "1px solid #C2C9D1" }}>Collateral</th>
            <th style={{ borderBottom: "1px solid #C2C9D1" }}>PNL</th>
          </tr>
        </thead>
        <tbody>
          {datasets.map((data, index) => (
            <tr key={index}>
              <td style={{ borderBottom: "1px solid #C2C9D1" }}>{data.name}</td>
              <td
                style={{ borderBottom: "1px solid #C2C9D1" }}
              >{`$${data.TVL}`}</td>
              <td style={{ borderBottom: "1px solid #C2C9D1" }}>
                {<Pill text={data.volatility} />}
              </td>
              <td
                style={{ borderBottom: "1px solid #C2C9D1" }}
              >{`$${data.collateral}`}</td>
              <td
                style={{
                  color: `${Math.sign(data.PNL) === 1 ? "green" : "red"}`,
                  borderBottom: "1px solid #C2C9D1",
                }}
              >
                {data.PNL.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
