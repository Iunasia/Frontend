import './App.css'

import { useState } from "react";

const ColorPicker = ({ onColorChange }) => (
  <input
    type="color"
    onChange={(e) => onColorChange(e.target.value)} // send new color to parent
  />
);


function App() {
  const [bg, setBg] = useState("#ffffff"); // initial background color

  return (
    <div style={{ backgroundColor: bg, height: "100vh", padding: "20px" }}>
      <h2>Pick a Background Color:</h2>
      <ColorPicker onColorChange={setBg} />
    </div>
  );
}



export default App