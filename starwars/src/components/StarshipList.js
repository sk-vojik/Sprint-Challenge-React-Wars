import React from 'react';
import Starship from './Starship'

function StarshipList(props) {
  return (
    <div className="character-list">
      {props.starshipDataList.map((starship, index) => {
        return <Starship starship={starship} key={index} />
      })}
    </div>
  )
}

export default StarshipList;