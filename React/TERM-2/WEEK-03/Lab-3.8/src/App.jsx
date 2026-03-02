import './App.css'

import { useState } from "react";

function App() {
  const [list, setList] = useState(["Task 1"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    // Add the new task to the list using spread operator
    setList([...list, input]);
    setInput(""); // optional: clear input after adding
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}



export default App