const app = require('express').Router()
const places = require('../models/places.js')

// FIRST ROUTE
app.get('/', (req, res) => {
  res.render('places/index', { places })
})

app.get('/new', (req, res) => {
  res.render('places/new')
});

// EDIT
app.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id], id })
  }
})

// SHOW PAGE
app.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id})
  }
})

// PUT ROUTE
app.put("/:id", (req, res) => {
  console.log(req.body);
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[req.params.id]) {
    res.render("error404");
  } else {
    //Check for req.body having valid data
    if (!req.body.pic) {
      req.body.pic = "/images/squat.jpg";
    }

    if (!req.body.city) {
      req.body.city = "Yourmomshouse";
    }

    if (!req.body.state) {
      req.body.state = "lmao";
    }

    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

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
  places.push(req.body)
  res.redirect('/places')
});




//DELETE
//prettier-ignore
app.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    //prettier-ignore
    res.status(303).redirect('/places');
  }
});

module.exports = app