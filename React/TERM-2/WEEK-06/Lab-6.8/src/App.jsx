import './App.css'

import { useState } from "react";

const TaskItem = ({ data, onToggle }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={data.isCompleted}
        onChange={() => onToggle(data.id)}
      />
      <span className={data.isCompleted ? "line-through text-gray-400" : ""}>
        {data.text}
      </span>
    </div>
  );
};

export default App