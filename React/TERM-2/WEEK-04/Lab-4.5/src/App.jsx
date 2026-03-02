import './App.css'

const TaskItem = ({ name, onRemove }) => (
  <li>
    {name} <button onClick={onRemove}>Delete</button>
  </li>
);


function App() {
  const [tasks, setTasks] = useState(["React", "JSX", "Props"]);

  // Remove task by index
  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div>
      <ul>
        {tasks.map((t, i) => (
          <TaskItem key={i} name={t} onRemove={() => removeTask(i)} />
        ))}
      </ul>
    </div>
  );
}

export default App