import './App.css'

const StatusBadge = ({ active, onToggle }) => (
  <button onClick={onToggle}>
    {active ? "Done" : "Pending"}
  </button>
);

function App() {
  const [isDone, setIsDone] = useState(false);

  const handleToggle = () => setIsDone(!isDone);

  return <StatusBadge active={isDone} onToggle={handleToggle} />;
}

export default App