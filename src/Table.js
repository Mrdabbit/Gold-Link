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
        overflow: "hidden",
      }}
    >
      <h3 style={{ display: "flex", marginBottom: "16px" }}>
        Strategy Performance
      </h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "seperate",
          border: "1px solid #C2C9D1",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "8px 0px" }}>Strategy</th>
            <th style={{ padding: "8px 0px" }}>TVL</th>
            <th style={{ padding: "8px 0px" }}>Volatility</th>
            <th style={{ padding: "8px 0px" }}>Collateral</th>
            <th style={{ padding: "8px 0px" }}>PNL</th>
          </tr>
        </thead>
        <tbody>
          {datasets.map((data, index) => (
            <tr key={index}>
              <td
                style={{
                  borderTop: "1px solid #C2C9D1",
                  padding: "8px 0px",
                }}
              >
                {data.name}
              </td>
              <td
                style={{
                  borderTop: "1px solid #C2C9D1",
                  padding: "8px 0px",
                }}
              >{`$${data.TVL.toLocaleString()}`}</td>
              <td
                style={{
                  borderTop: "1px solid #C2C9D1",
                  padding: "8px 0px",
                }}
              >
                {<Pill text={data.volatility} />}
              </td>
              <td
                style={{
                  borderTop: "1px solid #C2C9D1",
                  padding: "8px 0px",
                }}
              >{`$${data.collateral.toLocaleString()}`}</td>
              <td
                style={{
                  borderTop: "1px solid #C2C9D1",
                  padding: "8px",
                  color: Math.sign(data.PNL) === 1 ? "green" : "red",
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
