import { useState } from "react";

const CounterControls = ({ onAdd, onReset }) => (
  <div>
    <button onClick={onAdd}>Increase</button>
    <button onClick={onReset}>Reset</button>
  </div>
);

function App() {
  const [stats, setStats] = useState({ clicks: 0, lastUpdated: "" });

  const updateStats = (newClicks) => {
    const newData = {
      clicks: newClicks,
      lastUpdated: new Date().toLocaleTimeString(),
    };

    setStats(newData);
    localStorage.setItem("stats", JSON.stringify(newData));
  };

  const increase = () => updateStats(stats.clicks + 1);
  const reset = () => updateStats(0);

  return (
    <div>
      <h3>Clicks: {stats.clicks}</h3>
      <h3>Last: {stats.lastUpdated}</h3>

      <CounterControls onAdd={increase} onReset={reset} />
    </div>
  );
}

export default App;