import './App.css'
import { useState } from "react";

function Header() {
  return (
    <header>
      <h1>WELCOME TO THIS WEB DEV COURSE!</h1>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source
        </p>
        <p>
          Here is a link: <a href="https://react.dev/">https://react.dev/</a>
        </p>
      </main>
    </div>
  );
}

export default App;