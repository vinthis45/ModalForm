
import React, { useState } from "react";
import Modal from "./Components/Modal/Modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormToggle = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button className="btn-modal" onClick={handleFormToggle}>
        Open Form
      </button>
      {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;
