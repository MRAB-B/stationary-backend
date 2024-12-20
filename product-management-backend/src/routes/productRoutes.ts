import express from 'express';
import { getProducts, addProducts, deleteProduct } from '../controllers/productController';

const router = express.Router();

router.get('/', getProducts);
router.post('/', addProducts);
router.delete('/:id', deleteProduct);

export default router;
