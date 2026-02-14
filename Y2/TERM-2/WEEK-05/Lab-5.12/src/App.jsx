import React from "react";

export const vinhData = {
  firstName: "Vinh",
  lastName: "Hoang Nhu",
  title: "PN Training Manager",
};

export const myData = {
  firstName: "My",
  lastName: "Ngo",
  title: "PN Trainer",
};

// The User component now accepts 'props' as an argument
export function User(props) {
  return (
    <div id="user" data-testid="user">
      <h2>
        {props.firstName} {props.lastName}
      </h2>
      <p>{props.title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>PNV React Team !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
      
      {/* Pass the specific data objects as props to each User instance */}
      <User 
        firstName={vinhData.firstName} 
        lastName={vinhData.lastName} 
        title={vinhData.title} 
      />
      
      <User 
        firstName={myData.firstName} 
        lastName={myData.lastName} 
        title={myData.title} 
      />
    </div>
  );
}

export default App;