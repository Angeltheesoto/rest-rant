require('dotenv').config()
const express = require('express');
const app = express();

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
 res.send('Hello World!')
})

app.get('*', (req, res) => {
 res.status(404).send(`
 <h1>Error 404:</h1>
 <h2>Sorry the page you are looking for is not available</h2>
 `)
})

app.listen(process.env.PORT)
























