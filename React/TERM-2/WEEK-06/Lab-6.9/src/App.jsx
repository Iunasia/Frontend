import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    const filtered = items.filter(item => item.id !== id);
    setItems(filtered);
    localStorage.setItem("todo_data", JSON.stringify(filtered));
  };
}

export default App