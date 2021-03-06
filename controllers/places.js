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

// SOMETHING IS WRONG HERE AND ON LINE 83
//   router.post('/:id/comment', (req, res) => {
//     console.log(req.body)
//     db.Place.findById(req.params.id)
//     .then(place => {
//         db.Comment.create(req.body)
//         .then(comment => {
//             place.comments.push(comment.id)
//             place.save()
//             .then(() => {
//                 res.redirect(`/places/${req.params.id}`)
//             })
//         })
//         .catch(err => {
//             res.render('error404')
//         })
//     })
//     .catch(err => {
//         res.render('error404')
//     })
// })


// SHOW place by id
app.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
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

// SOMETHING IS WRONG HERE AND ON LINE 38
// PUT /:id
// router.put('/:id', (req, res) => {
//     db.Place.findByIdAndUpdate(req.params.id, req.body)
//     .then(() => {
//         res.redirect(`/places/${req.params.id}`)
//     })
//     .catch(err => {
//         console.log('err', err)
//         res.render('error404')
//     })
// })


// DELETE rants
app.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

// EDIT rants
app.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    .catch(err => {
        res.render('error404')
    })
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