import React from 'react';

const Ship = ({name, model, manufacturer, cost}) => {
  return(
    <div className='tc bg-dark-gray white dib pa2 ma2 grow ba bw1 cardSize'>
      <h2 className='jedi gold'>{name}</h2>
      <div className='containerV'>
        <div><p>Model: {model}</p></div>
        <div><p>Manufacturer: {manufacturer}</p></div>
        <div className='f4'><p>Cost: {cost}</p></div>
      </div>
    </div>
  )
}

export default Ship;