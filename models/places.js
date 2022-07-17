
// Keeping for insurance
// module.exports = [{
//   name: 'H-Thai-ML',
//   city: 'Seattle',
//   state: 'WA',
//   cuisines: 'Thai, Pan-Asian',
//   pic: '/css/images/cat.jpg',
//   width: 500,
//   height: 500
//  },
//  {
//   name: 'Coding Cat Cafe',
//   city: 'Phoenix',
//   state: 'AZ',
//   cuisines: 'Coffee, Bakery',
//   pic: 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80',
//   width: 500,
//   height: 500
//  }]


const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)
