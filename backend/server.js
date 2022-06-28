import express from 'express'
const app = express()
import 'dotenv/config'
import connectDb from './config/db.js'
import createError from 'http-errors'
import authRouter from './routes/user.js'
import productRouter from './routes/product.js'
import cors from 'cors'

app.use(express.json())

app.use(cors())

app.use('/auth', authRouter)

app.use('/product', productRouter)

app.use((req, res, next)=>{
    next(createError(404, "Not Found"))
})

app.use((err, req, res, next)=>{
    err.status = err.status || 500;
    err.message = err.message || "Internal Server Error";
    err.success = false
    res.send(err)
})

app.listen(process.env.PORT, ()=>{
    console.log("Server connected")
    connectDb()
})