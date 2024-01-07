
import React, { useState, useEffect } from "react";
import Modal from "./Components/Modal/Modal";
import "./App.css"


function App() {

  const [modal, setModal] = useState(false);

  const handleFormToggle = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button className='btn-modal' onClick={handleFormToggle}>Open Form</button>

      {modal &&
        <div className="modal-overlay">
          <Modal />
        </div>

      }

    </div>
  );
}

export default App;
