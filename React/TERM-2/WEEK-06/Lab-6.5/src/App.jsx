function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("todo_data");

    try {
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Todo List</h1>
      {/* render tasks here */}
    </div>
  );
}