import express from 'express'
const router = express.Router()
import {createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct} from '../controllers/product.js'

import protect from '../midlewares/auth.js'
router.post('/',createProduct )

router.get('/', getAllProducts)

router.get('/:id',protect, getProductById)

router.patch('/:id', updateProduct)

router.delete('/:id',deleteProduct )



export default router;