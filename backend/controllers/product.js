import Product from '../modals/product.js'
import createError from 'http-errors'

export const createProduct = async(req, res, next)=>{
    try {
        const product = await Product.create(req.body)
        res.send(product)
    } catch (error) {
        console.error
        next(createErrror(error))
    }
}

export const getAllProducts = async(req, res, next)=>{
    try {
        const products = await Product.find()
        res.send(products)
    } catch (error) {
        console.log(error)
        next(createError(error))
    }
}

export const getProductById = async(req, res, next)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.send(product)
    } catch (error) {
        console.log(error)
        next(createError(error))
    }
}

export const updateProduct = async(req, res, next)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
        res.send(product)
    } catch (error) {
        console.log(error)
        next(createError(error))
    }
}

export const deleteProduct = async(req, res, next)=>{
    try {
        const response = await Product.findByIdAndDelete(req.params.id)
        if(!response){
            next(createError(404, 'page not found'))
        }
        res.send({'success':'true'})
    } catch (error) {
        console.log(error)
        next(createError(error))
    }
}