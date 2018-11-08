//testing stuff, not part of the exercise
//I guess async functions can't really be pure functions. they need side effects to be useful.
//ie. you can't write an async function that returns an object. At least, I don't know how to...
let shipArray = [];
async function getShip(shipId){
  const response = await fetch('https://swapi.co/api/starships/' + shipId + '/')
  const data = await response.json()
  if( data.detail === "Not found"){
    //do nothing
  } else {
      shipArray.push({
        name: data.name,
        model: data.model,
        manufacturer: data.manufacturer,
        cost: data.cost_in_credits
      })
  }
}

shipArray.length = 0;
for(i = 1; i < 5; i++){
  getShip(i);
}