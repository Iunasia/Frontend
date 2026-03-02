import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputValue
    };

    onAdd(newTask);

    setInputValue("");

    const existing = JSON.parse(localStorage.getItem("todo_data")) || [];
    const updated = [...existing, newTask];
    localStorage.setItem("todo_data", JSON.stringify(updated));
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        className="border px-2 py-1 flex-1"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter task..."
      />

      <button
        className="bg-blue-500 text-white px-4 py-1 rounded"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};