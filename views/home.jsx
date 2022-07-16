
const React = require('react')
const Def = require('./default')

function home () {
 return (
  <Def>
   <main>
    <h1>REST-Rant App</h1>
    <hr />
    <div className='banner-container'>
     <img src="/css/images/rainbow-food.jpg" alt="rainbow food" className='home-banner'/>
     <div>
      Photo by <a href="AUTHOR_LINK">JIMMY DEAN</a> on <a href="https://unsplash.com/photos/Yn0l7uwBrpw">Unsplash</a>
     </div>
    </div>
   </main>
  </Def>
 )
}

module.exports = home
