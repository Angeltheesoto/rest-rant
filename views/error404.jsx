
const React = require('react')
const Def = require('./default')

function error404() {
 return (
 <Def>
  <main>
   <h1>404: PAGE NOT FOUND</h1>
   <p>Oops, sorry, we can't find this page!</p>
   <div>
    <img src="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1506709524-cola-0247.jpg?crop=1.00xw:0.750xh;0,0.226xh&resize=480:*" alt="cute dog" className='home-banner'/>
   </div>
  </main>
 </Def>
 )
}

module.exports = error404
