import React from "react"

function Starship(props) {
  return (
    <div className="character">
      <h3>{props.starship.name}</h3>
      <p>Model: {props.starship.model}</p>
      <p>Starship Class: {props.starship.class}</p>
      <p>Manufacturer: {props.starship.manufacturer}</p>
      <p>Cost: {props.starship.cost_in_credits}</p>
      <p>Hyperdrive rating: {props.starship.hyperdrive_rating}</p>
      <p>Max Speed: {props.starship.max_atmosphering_speed}</p>
      <p></p>
    </div>
  )
}

export default Starship