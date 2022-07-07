const app = require('express').Router()
const place = require('../models/places.js')

app.get('/new', (req, res) => {
  res.render('places/new')
});

app.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*'
  }
  if (!req.body.city) {
    req.body.city = 'Unknown city'
  }
  if (!req.body.state) {
    req.body.state = 'Unknown state'
  };
  place.push(req.body)
  res.redirect('/places')
});

module.exports = app