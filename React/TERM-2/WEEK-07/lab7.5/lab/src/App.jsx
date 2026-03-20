import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("session", JSON.stringify(formData));

    alert("Data Saved to Local Storage!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-4">

      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <button type="submit">Save Session</button>

    </form>
  );
}

export default App;