import './App.css'
import { useState } from "react";

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <nav>Navbar</nav>
      <main className="content">{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

const PostImage = ({ url }) => {
  return (
    <div className="img-wrapper">
      {url ? (
        <img src={url} alt="Post content" />
      ) : (
        <div
          className="gray-placeholder"
          style={{ backgroundColor: 'gray', height: '200px', width: '100%' }}
        >
          No Image Available
        </div>
      )}
    </div>
  );
};

function App() {
  const [posts] = useState([
    { id: 1, title: "Asa Mitaka", imageUrl: "https://i.pinimg.com/736x/66/cc/27/66cc277055ee6edf13bce757b4144be2.jpg" },
    { id: 2, title: "A Post with no image", imageUrl: null },
  ]);

  return (
    <Layout>
      <h1>My Feed</h1>
      <div className="feed">
        {posts.map(post => (
          <div
            key={post.id}
            className="post-card"
            style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '15px' }}
          >
            <h2>{post.title}</h2>
            <PostImage url={post.imageUrl} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default App;
