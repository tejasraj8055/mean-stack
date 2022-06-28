
import createError from 'http-errors';
import jwt from 'jsonwebtoken'
import User from '../modals/user.js'

const protect = async (req, res, next)=>{
    let token;
    try {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }
    if(!token){
        console.log("No token present!!!")
        return next(new ErrorResponse("Unauthorized Request", 401))
    }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        req.user = await User.findById(decoded.id)
        console.log(req.user.role)
        next()
    } catch (error) {
        console.log(error)
         next(createError(401, "Unauthorized Request"))
    }
}

export default protect

