import React from "react";
import { STUDENTS } from "./data.js";

// Card Component
function Card({ item }) {
  return (
    <div className="card" style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center", width: "150px" }}>
      <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "5px" }} />
      <h3>{item.name}</h3>
      <p>{item.class}</p>
      <small><i>{item.hobby}</i></small>
    </div>
  );
}

// App Component
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>PNV Student List</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {STUDENTS.map((student) => (
          <Card key={student.id} item={student} />
        ))}
      </div>
    </div>
  );
}

export default App;