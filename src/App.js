import "./App.css";
import PieChart from "./PieChart";
import Table from "./Table";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", gap: "30px", padding: "30px 40px" }}
    >
      <PieChart />
      <Table />
    </div>
  );
}

export default App;
