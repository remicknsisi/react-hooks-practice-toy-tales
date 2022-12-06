import React from "react";

function ToyForm({ onNewToySubmit, setNewToyName, newToyName, newToyURL, setNewToyURL }) {

  function handleSubmit(e){
    e.preventDefault()

    const newToy={
      name: newToyName,
      likes: 0,
      image: newToyURL,
    }

    onNewToySubmit(newToy)
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => setNewToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => setNewToyURL(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
