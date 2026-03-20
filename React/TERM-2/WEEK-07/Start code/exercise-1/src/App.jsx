import React, { useState } from "react";

function App() {
  // Boolean state
  const [isRaining, setIsRaining] = useState(false);

  function onSunClick() {
    // Sunny weather
    setIsRaining(false);
  }

  function onRainClick() {
    // Rain weather
    setIsRaining(true);
  }

  function getTitle() {
    // Change title depending on weather
    return isRaining ? "RAIN TIME!" : "SUN TIME!";
  }

  function getBackgroundColor() {
    // Change background class
    return isRaining ? "rainy" : "sunny";
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>

      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;