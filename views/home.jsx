
const React = require('react')
const Def = require('./default')

function home () {
 return (
  <Def>
   <main>
    <h1>REST-Rant</h1>
    <div>
     <img src="/css/images/rainbow-food.jpg" alt="rainbow food" className='home-banner'/>
     <div>
      Photo by <a href="AUTHOR_LINK">JIMMY DEAN</a> on <a href="https://unsplash.com/photos/Yn0l7uwBrpw">Unsplash</a>
     </div>
    </div>
    <a href="/places">
     <button className='btn-primary'>Places Page</button>
    </a>
   </main>
  </Def>
 )
}

module.exports = home
