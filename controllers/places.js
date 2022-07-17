const app = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')

// FIRST/ GET ROUTE
app.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// POST ROUTE (update places after edit form)
app.post('/', (req, res) => {
  // Default info if nothing is input
  if (!req.body.pic) {
    req.body.pic = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*'
  }
  if (!req.body.city) {
    req.body.city = 'Unknown city'
  }
  if (!req.body.state) {
    req.body.state = 'Unknown state'
  };
  // places.push(req.body)
  // res.redirect('/places')
  db.Place.create(req.body)
  .then(() =>
    res.redirect('/places')
  )
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
});

// SHOW place by id
app.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

// STUBS -
// NEW place
app.get('/new', (req, res) => {
  res.render('places/new')
})

// PUT /:id
app.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// DELETE rants
app.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// EDIT rants
app.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

// Get rants
app.get('/:id', (req, res) => {
  res.send('GET /places/:id stub')
})

// Post rants
app.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

// Delete rants
app.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = app



// EDIT PAGE
// app.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id], id })
//   }
// })

// // SHOW PAGE
// app.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id], id})
//   }
// })

// PUT ROUTE
// app.put("/:id", (req, res) => {
//   console.log(req.body);
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[req.params.id]) {
//     res.render("error404");
//   } else {
//     //Check for req.body having valid data
//     if (!req.body.pic) {
//       req.body.pic = "/images/squat.jpg";
//     }

//     if (!req.body.city) {
//       req.body.city = "Yourmomshouse";
//     }

//     if (!req.body.state) {
//       req.body.state = "lmao";
//     }

//     places[id] = req.body;
//     res.redirect(`/places/${id}`);
//   }
// });

//DELETE ROUTE
//prettier-ignore
// app.delete('/:id', (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     places.splice(id, 1);
//     //prettier-ignore
//     res.status(303).redirect('/places');
//   }
// });