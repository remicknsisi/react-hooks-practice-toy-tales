import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const [newToyName, setNewToyName] = useState('');
  const [newToyURL, setNewToyURL] = useState('');
  const [toysToDisplay, setToysToDisplay] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(response => response.json())
    .then(toys => {
      setToys(toys)
      setToysToDisplay(toys)})
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToySubmit(newToyObj){
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newToyObj)
    })
    .then(response => response.json())
    .then(newToy => setToysToDisplay([...toys, newToy]))
  }

  function handleToyLike(newToyObj){
    const updatedToysToDisplay = toysToDisplay.filter(toy => {
      if (toy.name !== newToyObj.name){
        return toy
      }
    })
    setToysToDisplay([...updatedToysToDisplay, newToyObj])
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm onNewToySubmit={handleNewToySubmit} setNewToyName={setNewToyName} newToyName={newToyName} newToyURL={newToyURL} setNewToyURL={setNewToyURL}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onLike={handleToyLike} toysToDisplay={toysToDisplay}/>
    </>
  );
}

export default App;
