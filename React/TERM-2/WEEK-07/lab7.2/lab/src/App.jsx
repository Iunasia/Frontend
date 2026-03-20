import { useState } from "react";

function App() {
  const [profile, setProfile] = useState({ name: "Ronan", isOnline: false });

  const toggleStatus = () => {
    const updatedProfile = { ...profile, isOnline: !profile.isOnline };

    setProfile(updatedProfile);

    localStorage.setItem("profile", JSON.stringify(updatedProfile));
  };

  return (
    <div className="p-10">
      <h2 className={profile.isOnline ? "text-green-500" : "text-gray-500"}>
        User is {profile.isOnline ? "Online" : "Offline"}
      </h2>

      <button onClick={toggleStatus} className="border p-2">
        Change Status
      </button>
    </div>
  );
}

export default App;