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
        boxShadow: " 1px 1px 1px black",
        padding: "16px",
      }}
    >
      <h3 style={{ display: "flex", marginBottom: "16px" }}>
        Strategy Performance
      </h3>
      <table style={{ border: "solid #C2C9D1", borderRadius: "10px" }}>
        <thead>
          <tr>
            <th>Strategy</th>
            <th>TVL</th>
            <th>Volatility</th>
            <th>Collateral</th>
            <th>PNL</th>
          </tr>
        </thead>
        <tbody>
          {datasets.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{`$${data.TVL}`}</td>
              <td>{<Pill text={data.volatility} />}</td>
              <td>{`$${data.collateral}`}</td>
              <td
                style={{
                  color: `${Math.sign(data.PNL) === 1 ? "green" : "red"}`,
                }}
              >
                {data.PNL}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
