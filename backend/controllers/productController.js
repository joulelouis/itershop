import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// controller to get all products
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
    // get the products from the database (MongoDB)
    // by default, find({}) will retrieve all the products in the database
    const products = await Product.find({});
    // it sends the retrieved products as JSON in the response
    res.json(products);
});

// controller to get a single product by ID
// @desc    Fetch a product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
    // it attempts to find a specific product by its ID using 'Product.findById()'. This is likely querying the database for a specific product based on the provided ID.
    const product = await Product.findById(req.params.id);

    // if a product with the given ID is found, it responds with that product's data in JSON format.
    if (product) {
        return res.json(product);
    } else {
        // if the product is not found, it responds with a 404 status code 
        res.status(404);
        // throws a JavaScript error with the message 'Resource not found'. This error will be caught by the 'asyncHandler' middleware (if configured). This approach is used to propagate the error to the appropriate error handling middleware, ensuring that the response is handled consistently as an error response with a 404 status code and an error message
        throw new Error('Resource not found')
    }
});

export { getProducts, getProductById };