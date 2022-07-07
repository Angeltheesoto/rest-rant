const React = require('react')
const Def = require('../default')

function new_form() {
 return (
  <Def>
   <h1>Add a New Place</h1>
   <form method='POST' action="/places">
    <div>
     <label htmlFor="name">Place name</label>
     <input type="text" name="name" id="name" required />
    </div>

    <div>
     <label htmlFor="pic">Place Picture</label>
     <input type="url" name="pic" id="pic" />
    </div>

    <div>
     <label htmlFor="city">City</label>
     <input type="url" name="city" id="city" />
    </div>

    <div>
     <label htmlFor="state">State</label>
     <input type="url" name="state" id="state" />
    </div>

    <div>
     <label htmlFor="cuisines">Cuisines</label>
     <input type="url" name="cuisines" id="cuisines" required />
    </div>

    <input type="submit" value="Add Place" />

   </form>
  </Def>
 )
}

module.exports = new_form
