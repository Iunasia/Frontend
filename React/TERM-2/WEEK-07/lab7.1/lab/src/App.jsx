import {useState} from 'react';

function App() {
  const defaultUser = {name: "Guest", visits: 1}

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user_data");
    return saved ? JSON.parse(saved) : defaultUser;
  });

  return (
    <div className='p-10'>
      <h1>Welcone, {user.name}</h1>
      <p>Visits: {user.visits}</p>
    </div>
  )
}
export default App;