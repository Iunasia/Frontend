import React, { useState } from "react";

function App() {
  // state to keep the text entered
  const [text, setText] = useState("");

  // function to handle typing in the first input
  function handleKeyPress(e) {
    setText(e.target.value);
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onChange={handleKeyPress} />

      <p>
        <label>Here is the text in upper case</label>

        {/* display text in uppercase */}
        <input value={text.toUpperCase()} disabled />
      </p>
    </main>
  );
}

export default App;