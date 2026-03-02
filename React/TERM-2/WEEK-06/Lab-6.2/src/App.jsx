import React, { useState } from 'react';

const AlertBox = ({ type, message }) => {
  const typeStyles =
    type === "error"
      ? "bg-red-500 text-white"
      : type === "success"
      ? "bg-green-500 text-white"
      : type === "warning"
      ? "bg-yellow-400 text-black"
      : "bg-gray-200 text-black";

  return (

    <div className={`p-4 rounded-lg ${typeStyles}`}>
      {message}
    </div>
  );
};

function App() {
  return (
    <div className="space-y-2">
      <AlertBox type="error" message="This is an error message." />
      <AlertBox type="success" message="This is a success message." />
      <AlertBox type="warning" message="This is a warning message." />
    </div>
  );
}

export default App;