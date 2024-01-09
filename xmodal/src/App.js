
import React, { useState } from "react";
import User from "./Components/Modal/User";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormToggle = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button className="submit-button" onClick={handleFormToggle}>
        Open Form
      </button>
      {isModalOpen && <User isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;
