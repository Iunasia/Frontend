import React from "react";

export const userData = {
  firstName: "IN", 
  lastName: "UDDAM DARREN", 
  title: "PN React JS Killer", 
};

/**
 * The User component outputs data from the userData object
 * using dot notation inside curly braces.
 */
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course ? You got this 💪</p>
      <User />
    </div>
  );
}

export default App;