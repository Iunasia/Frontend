import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TaskItem = (props) => {

  const { name, priority } = props.info;

  return (
    <div style={{ border: '1px solid black', margin: '5px', padding: '5px' }}>
      <p>Name: {name}</p>
      <p>Priority: {priority}</p>
    </div>
  );
};


function App() {
  const taskData = { id: 101, name: "Buy Milk", priority: "High" };
  return <TaskItem info={taskData} />;
}

export default App
