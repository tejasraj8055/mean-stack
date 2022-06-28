import express from 'express'
const router = express.Router()
import {register, login, authenticate} from '../controllers/auth.js'

router.post('/register', register)

router.post('/login', login)

router.get('/authenticate', authenticate)

export default router;