import React, { useState } from "react";

function App() {
  // states
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  // handle input A
  function onA(e) {
    setA(e.target.value);
  }

  // handle input B
  function onB(e) {
    setB(e.target.value);
  }

  // compute button
  function compute() {
    if (isNaN(a) || isNaN(b) || a === "" || b === "") {
      setResult("A and B must be numbers");
      setIsError(true);
    } else {
      setResult(Number(a) + Number(b));
      setIsError(false);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      <input
        disabled
        value={result}
        style={{ color: isError ? "red" : "black" }}
      />

      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;