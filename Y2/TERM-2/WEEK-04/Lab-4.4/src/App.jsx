import './App.css'

function App() {
  const [list, setList] = useState(["Task 1"]);

  const handleAdd = () => {
    setList([...list, "New Task"]);
  };

  return (
    <div>
      <ul>
        {list.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
}

export default App