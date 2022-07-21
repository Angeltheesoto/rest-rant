const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit place</h1>
            <hr />
            <div className='form-container'>
            <form method='POST' action={`/places/${data.place.id}?_method=PUT`}>
             <div className='form-group'>
              <label htmlFor="name">Place name</label>
              <input className='form-control' type="text" name="name" id="name" value={data.place.name} required />
             </div>

             <div className='form-group'> 
              <label htmlFor="pic">Place Picture</label>
              <input className='form-control' type="url" name="pic" id="pic" value={data.place.pic}/>
             </div>

             <div className='form-group'>
              <label htmlFor="city">City</label>
              <input className='form-control' type="text" name="city" id="city" value={data.place.city}/>
             </div>

             <div className='form-group'>
              <label htmlFor="state">State</label>
              <input className='form-control' type="text" name="state" id="state" value={data.place.state}/>
             </div>

             <div className='form-group'>
              <label htmlFor="cuisines">Cuisines</label>
              <input className='form-control' type="text" name="cuisines" id="cuisines" value={data.place.cuisines} required />
             </div>

            <div className='form-group col-sm-4'>
              <label htmlFor="founded">Founded</label>
              <input 
                className='form-control'
                id='founded'
                name='founded'
                value={data.place.founded}
              />

            </div>

             <input className='btn btn-primary' type="submit" value="Update Place" />

            </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = edit_form
