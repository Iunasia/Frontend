import React, { useState } from 'react';

function App() {
  // State for the list of objects
  const [posts, setPosts] = useState([]);
  // State for the current text input
  [newContent, setNewContent] = useState("");

  const handleAdd = () => {
    if (newContent.trim() === "") return; // Prevent adding empty posts

    // 1. Create a new post object
    const newPost = { 
      id: Date.now(), 
      text: newContent 
    };

    // 2. Update state by spreading the old array into a new one
    setPosts([...posts, newPost]);

    // 3. Reset the input field
    setNewContent("");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Post Creator</h2>
      
      {/* Input linked to newContent state */}
      <input 
        type="text" 
        value={newContent} 
        onChange={(e) => setNewContent(e.target.value)} 
        placeholder="Write something..."
      />
      <button onClick={handleAdd}>Add Post</button>

      <hr />

      {/* Rendering the list of objects */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;