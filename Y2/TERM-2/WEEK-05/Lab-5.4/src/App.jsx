import './App.css'

const PostActions = ({ onLike, onShare }) => {
  return (
    <div>
      <button onClick={onLike}>Like</button>
      <button onClick={onShare}>Share</button>
    </div>
  );
};

/**
 * Parent Component
 */
function App() {
  const [likeCount, setLikeCount] = useState(0);

  // 1. Define the functions in the parent
  const handleLike = () => {
    setLikeCount(prev => prev + 1);
    console.log("Post Liked!");
  };

  const handleShare = () => {
    alert("Post shared to your profile!");
  };

  return (
    <div className="post-container">
      <h2>Post Title</h2>
      <p>Likes: {likeCount}</p>
      
      {/* 2. Pass the functions down as props */}
      <PostActions 
        onLike={handleLike} 
        onShare={handleShare} 
      />
    </div>
  );
}

export default App