import express from 'express';
import { postAddFoodItems, postAddRestaurant, postCusineCategoryAdd } from '../controller/restaurant.js';
import upload from '../utils/multer.js';

const router = express.Router()

router.post('/register', upload.single('coverImage') , postAddRestaurant);
router.post('/add-cusine-category', postCusineCategoryAdd)
router.post('/add-food-items', upload.single('images') , postAddFoodItems)

export default router;