import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const items = ["React", "JavaScript", "Tailwind"];

  // Task: Create filteredItems variable before mapping
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}