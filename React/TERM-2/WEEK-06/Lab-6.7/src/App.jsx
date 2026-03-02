import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = list.filter(item =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5">
      <input
        className="border px-2 py-1 mb-3"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredList.map(item => (
        <p key={item.id}>{item.text}</p>
      ))}
    </div>
  );
}