import { useState, createContext, useContext } from 'react';
import './App.css';

// 1. Create the Context (defined outside the components)
const UserContext = createContext();

const AuthorInfo = () => {
  // 3. Consume the data directly
  const user = useContext(UserContext);
  
  // Guard clause in case user is undefined
  if (!user) return null;

  return (
    <div>
      <strong>Author:</strong> {user.name} | <strong>Role:</strong> {user.role}
    </div>
  );
};

const PostHeader = () => <AuthorInfo />;
const PostItem = () => <PostHeader />;
const FeedList = () => <PostItem />;

function App() {
  const [user] = useState({ name: "Ronan", role: "Admin" });

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <h1>Feed</h1>
        <FeedList />
      </div>
    </UserContext.Provider>
  );
}

export default App;