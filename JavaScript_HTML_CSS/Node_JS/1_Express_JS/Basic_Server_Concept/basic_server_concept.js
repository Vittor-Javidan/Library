const express = require('express')
const app = express();
const path = require('path')

/*
    STATIC FILES: These are files that if requested by the user, will be free given to then.
    All files here are considerer public, so its usefull to for common usage, but not the right
    place to store private data.
*/
app.use(express.static('./public'))

//404
app.all('*', (req, res) => {
    console.log(`Method: ${req.method}\t URL: ${req.url}`)
    res.status(404).send('<h1>Resource not found </h1>')
})

//Server Listener
app.listen(5000, () => {
    console.log('Server is listenig on port 5000')
})