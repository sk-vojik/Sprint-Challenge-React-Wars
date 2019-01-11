import React from "react";

import './StarWars.css'

function Character (props) {
  return (
    <div className="character">
      <h3>{props.character.name}</h3>
      <p>Birth year: {props.character.birth_year}</p>
      <p>Height: {props.character.height}</p>
      <p>Mass: {props.character.mass}</p>
    </div>
  )
}

export default Character;