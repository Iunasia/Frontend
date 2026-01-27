import './App.css'

import { useState } from "react";

function App() {
  const [list, setList] = useState(["Eat", "Sleep", "Code", "kak"]);

  return (
    <div>
      <h1>My Tasks</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
