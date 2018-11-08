import React from 'react'
import Ship from './Ship'

const ShipList = ({ ships }) => {
  const shipsArray = ships.map((ship, i) => {
    return(
      <Ship
        key={i}
        name={ships[i].name}
        model={ships[i].model}
        manufacturer={ships[i].manufacturer}
        cost={ships[i].cost}
      />
    );
  })

  return(
    <div>
      {shipsArray}
    </div> 
  );
}

export default ShipList;

