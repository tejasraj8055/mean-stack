import User from '../modals/user.js';
import createError from 'http-errors'

export const register = async(req, res, next)=>{
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const login = async(req, res, next)=>{
    try {
        const password = req.body.password
        const user = await User.findOne({email:req.body.email}).select('+password')

        const isPasswordMatch = await user.matchPassword(password)
        console.log(isPasswordMatch)

        if(isPasswordMatch == false){
            next(createError(404,"Bad Request" ))
        }else {
            const token = user.getSignedToken()
            res.status(201).json({data:{id:user._id, name:user.name,
                role:user.role}, success:true,
            token:token})
        }       

    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const authenticate = async(req, res, next)=>{
    try {
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
           const token = req.headers.authorization.split(' ')[1];
            res.send(token)
        }
        else{
            res.send(error)
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}