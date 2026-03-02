import './App.css'
import { useState } from "react";

function TodoItem({ text, onRemove }) {
  return (
    <li>
      {text} <button onClick={onRemove}>Delete</button>
    </li>
  );
}

function App() {
  const [list, setList] = useState(["Task 1", "Task 2"]);

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {list.map((task, index) => (
        <TodoItem
          key={index}
          text={task}
          onRemove={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default App;


