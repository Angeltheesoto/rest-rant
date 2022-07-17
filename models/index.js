// Where we connect to mongoose
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,  // Optional, will remove warning signs
  useUnifiedTopology: true // Optional, will remove warning signs
})

module.exports.Place = require('./places')

