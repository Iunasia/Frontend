import React, { useState } from "react";

function App() {
  const [list, setList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  const removeItem = (id) => {
    // Task: setList using filter
    // Keep only the items whose ID is NOT equal to the one passed in
    const filteredList = list.filter((item) => item.id !== id);
    
    setList(filteredList);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Items List</h3>
      {list.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <span>Item ID: {item.id}</span>
          <button onClick={() => removeItem(item.id)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}