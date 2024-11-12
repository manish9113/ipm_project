import express from 'express'

import {getProductsSlider,getProductById} from '../controllers/productController.js'
import setSignup from '../controllers/signupController.js'
import setSingin from '../controllers/signinController.js'



const router=express.Router()




router.post('/signup',setSignup)
router.post('/signin',setSingin)
router.get('/products',getProductsSlider)
router.get('/products/:id',getProductById)


export default router