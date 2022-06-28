import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    cost:{
        type:Number,
        required:true
    },
    info:{
        type:String,
    },
    image:{
        type:String,
    }
},{
    timestamps:true
})

const userModal = mongoose.model('product', productSchema)

export default userModal;