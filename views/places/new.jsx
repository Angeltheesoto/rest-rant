const React = require('react')
const Def = require('../default')

function new_form() {
 return (
  <Def>
   <h1>Add a New Place</h1>
   <hr />
   <div className='form-container'>
   <form method='POST' action="/places">
    <div className='form-group'>
     <label htmlFor="name">Place name</label>
     <input className='form-control' type="text" name="name" id="name" required />
    </div>

    <div className='form-group'> 
     <label htmlFor="pic">Place Picture</label>
     <input className='form-control' type="url" name="pic" id="pic" />
    </div>

    <div className='form-group'>
     <label htmlFor="city">City</label>
     <input className='form-control' type="text" name="city" id="city" />
    </div>

    <div className='form-group'>
     <label htmlFor="state">State</label>
     <input className='form-control' type="text" name="state" id="state" />
    </div>

    <div className='form-group'>
     <label htmlFor="cuisines">Cuisines</label>
     <input className='form-control' type="text" name="cuisines" id="cuisines" required />
    </div>

    <div className="form-group">
      <label for="founded">Founded Year</label>
      <input type='number' className="form-control" id="founded" name="founded" value={new Date().getFullYear()} />
    </div>

    <input className='btn btn-primary' type="submit" value="Add Place" />

   </form>
   </div>

  </Def>
 )
}

module.exports = new_form
