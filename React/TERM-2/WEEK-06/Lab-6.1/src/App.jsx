import React, { useState } from 'react'; // 1. Crucial Import

const Avatar = ({ config }) => {
  return (
    <div className="p-2 border">
      {/* 2. Accessing the properties correctly */}
      <h3>User: {config.username}</h3>
      <p>Status: {config.status}</p>
    </div>
  );
};

const UserProfile = ({ config }) => <Avatar config={config} />;
const Sidebar = ({ config }) => <UserProfile config={config} />;
const Dashboard = ({ config }) => <Sidebar config={config} />;

export default function App() {
  // 3. Destructuring the state correctly
  const [userConfig] = useState({ 
    username: "DevMaster", 
    status: "Online" 
  });

  return (
    <div className="App">
      <h1>Dashboard View</h1>
      <Dashboard config={userConfig} />
    </div>
  );
}