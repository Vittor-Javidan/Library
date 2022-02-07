const express = require('express')
const app = express()
const path = require('path')

//middlewares
const logger = require('./logger')
const authorize = require('./authorize')

//app middlewares routes
app.use([logger])
app.use('/api', [authorize])

//app static files
app.use(express.static('./public'))

//Main routes
app.get('/', (req, res) => {
    res.send(path.resolve(__dirname, './public/index.html'))
})
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})
app.get('/api/products', (req, res) => {
    res.send('<h1>Products</h1>')
})
app.get('/api/items', (req, res) => {
    res.send('<h1>Items</h1>')
})

//Server Listener
app.listen(5000, () => {
    console.log(`Server is listening on port 5000`)
})