import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toysToDisplay, onToyDelete, onLike }) {
  
  return (
    <div id="toy-collection">
      {toysToDisplay.map(toyToDisplay => {
        return (
          <ToyCard 
          onLike={onLike}
          onToyDelete={onToyDelete} 
          key={toyToDisplay.name} 
          name={toyToDisplay.name} 
          likes={toyToDisplay.likes} 
          image={toyToDisplay.image} 
          alt={toyToDisplay.name} 
          id={toyToDisplay.id}/>
        )
      })}
    </div>
  );
}

export default ToyContainer;
