import './App.css'
import { useState } from 'react';

function ProfileIcon({ user }) {
  return (
    <div>
      User: {user}
    </div>
  );
}

function Header({ user }) {
  return (
    <header>
      <ProfileIcon user={user} />
    </header>
  );
}

function App() {
  const user = "John Doe";

  return (
    <div>
      <Header user={user} />
    </div>
  );
}

export default App;
