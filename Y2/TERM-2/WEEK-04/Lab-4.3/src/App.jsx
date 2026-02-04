import './App.css'
import { useState } from "react";


function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <form>
      <input
        placeholder="Title"
        value={title}          // bind value to state
        onChange={(e) => setTitle(e.target.value)} // update state on typing
      />
      <input
        placeholder="Description"
        value={desc}           // bind value to state
        onChange={(e) => setDesc(e.target.value)} // update state on typing
      />
      <p>Preview: {title} - {desc}</p>
    </form>
  );
}

export default App