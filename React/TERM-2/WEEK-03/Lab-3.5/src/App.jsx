import './App.css'

function Todoitem(){
  return <li>A Single Task</li>;
}

function App() {
  const tasks = ["Learn JSX", "Create Components", "Master State"];
  return (
    <div>
      <ul>
        <Todoitem />
        <Todoitem />
        <Todoitem />
        <Todoitem />
      </ul>
    </div>
  );
}

export default App