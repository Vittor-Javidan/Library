const express = require('express')
const app = express()
const { products, people } = require('./data')

app.get('/', (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <a href= "/api/products">products</a>
    `)
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) =>{
        const {id, name, image} = product;
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params
    const singleProduct = products.find((product) => product.id === Number(id))
    if(!singleProduct){
        return res.status(404).send('<h1>Product Does Not Exists</h1>')
    } else {
        res.json(singleProduct)
    }
})

app.get('/api/v1/query', (req, res) => {
    
    //example "http://localhost:5000/api/v1/query?search=a&limit=1"

    const {search, limit} = req.query
    let sortedProducts = [...products]

    //search filter
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    //checks if sortedProducts is empty
    if(sortedProducts.length < 1){
        /* You have 2 aproachs:*/

        //first:    res.status(200).send('no products matched your search')
        //second:   res.status(200).json({sucess:true, data:[]})
    } else {
        res.status(200).json(sortedProducts)
    }
})

app.listen(5000, () => {
    console.log(`Server is listening on port 5000`)
})