const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day-300x300.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://nationaltoday.com/wp-content/uploads/2020/10/Global-Cat-Day-1-300x300.jpg',
    founded: 2020
}])
.then(() => {
 console.log('Success!')
 process.exit()
})
.catch(err => {
 console.log('Failure!', err)
 process.exit()
})