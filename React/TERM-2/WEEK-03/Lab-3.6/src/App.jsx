import './App.css'

function TodoItem(){
  return <li>Task</li>;
}

function TodoList(){
  return (
    <ul>
      <TodoItem />
      <TodoItem />
    </ul>
  )
}

function App() {
  return(
    <TodoList />
  );
}

export default App