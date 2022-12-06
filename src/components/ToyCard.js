import React, { useState } from "react";

function ToyCard({ name, image, likes, alt, id, onLike }) {

  const [numLikes, setNumLikes] = useState(likes)

  function handleDonate(e){
    e.target.parentNode.remove()

    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE"
    })
    .then(response => response.json())
  }

  function handleLike(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "likes": likes++
      })
    })
    .then(response => response.json())
    .then((updatedToyObj) => {
      setNumLikes(numLikes => numLikes + 1)
      onLike(updatedToyObj)
    })
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={alt}
        className="toy-avatar"
      />
      <p>{numLikes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
