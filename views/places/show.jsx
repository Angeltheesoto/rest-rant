const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <hr />
            <div className="container">
            <div className='row'>
            <div className='col-sm-6'>
             <img src={data.place.pic} alt={data.place.name} width={data.place.width} height={data.place.height}/>
            </div>
            <div className='col-sm-6 paddingShow'>
             <p className='showPage'>{data.place.cuisines}</p>
             <p className='showPage'>Located in {data.place.city}, {data.place.state}</p>
            </div>
            </div>
            </div>
            <hr />
            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
             Edit
            </a>
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
             <button type='submit' className='btn btn-danger'>
              Delete
             </button>
            </form>
            
          </main>
        </Def>
    )
}

module.exports = show
