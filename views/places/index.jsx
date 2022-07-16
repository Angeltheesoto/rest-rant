
const React = require('react')
const Def = require('../default')

function index(data) {
 
 let placesFormatted = data.places.map((place, index) => {
  return (
   <div className='col-sm-6'>
    <h2>
     <a href={`/places/${index}`}>
      {place.name}
     </a>
     </h2>
    <hr />
    <p className="text-left">
     {place.cuisines}
    </p>
    <img src={place.pic} alt={place.name} width={place.width} height={place.height}/>
    <p className="text-left">
     Located in {place.city}, {place.state}
    </p>
   </div>
  )
 })

 return (
 <Def>
  <main>
   <h1>Places to Rant or Rave About</h1>
   <hr />
   <div className="row">
   {placesFormatted}
   </div>
  </main>
 </Def>
 )
}

module.exports = index