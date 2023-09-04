import express from 'express';
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js';

// this route handles HTTP GET request to the root path '/'
router.route('/').get(getProducts);

// this route handles HTTP GET request with a product ID parameter, accessed via 'req.params.id'. For example, if the URL is '/products/123', 'req.params.id' would be '123'.
router.route('/:id').get(getProductById);

export default router;