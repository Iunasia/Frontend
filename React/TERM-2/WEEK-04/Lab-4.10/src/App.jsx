import './App.css'

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const items = ["Apple", "Banana", "Cherry"];

  const filteredItems = items.filter((item) => item.includes(search));

  return (
    <div>
      <input
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

export default App;
