import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';
const port = process.env.PORT || 5000;

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...');
});

// get all products in json format
app.get('/api/products', (req, res) => {
    res.json(products);
});

// get specific product using the product id
app.get('/api/products/:id', (req, res) => {
    //req.params.id is the id in the URL
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});


app.listen(port, () => console.log(`Server running on port ${port}`));