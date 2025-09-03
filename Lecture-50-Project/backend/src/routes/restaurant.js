import express from "express";
import {
	postAddRestaurant,
	postCusineCategoryAdd,
	postAddFoodItem,
	postUpdateFoodItem,
	getDeleteFoodItem,
	getFoodItems,
	getFoodItem,
	getAllCusines,
	postAddFoodImages,
	postAddReview,
    postUpdateReview,
    getDeleteReview,
    getAllReviews,
    getReview,
	getRestaurants,
	getRestaurant,
	postOrderVerifyPayment,
	getOrderHistory,
	postCreateOrder,
	getAllFoods
} from "../controller/restaurant.js";


import upload from "../utils/multer.js";
import { getAddCart, getCartItemDecrease, getCartItemDelete, getCartItemIncrease, getCartItems } from "../controller/cart.js";
const router = express.Router();

//CRUD on Restaurant
router.post("/register", upload.single("coverImage"), postAddRestaurant);
router.post("/add-cusine-category", postCusineCategoryAdd);
router.get('/all', getRestaurants)
router.get('/:restaurantId', getRestaurant)
router.get('/all-food', getAllFoods)

//CRUD on Food
router.post("/add-food-item", upload.single("images"), postAddFoodItem);
router.post("/update-food-item/:id", upload.single("images"), postUpdateFoodItem);
router.get("/delete-food-item/:id", getDeleteFoodItem);
router.get('/get-food-items', getFoodItems)
router.get('/get-food-item/:id', getFoodItem)
router.get("/get-all-cusines", getAllCusines);

// Food -> images
router.post("/add-food-images/:id", upload.array("images", 6), postAddFoodImages);

// CRUD on reviews

router.post("/add-review", upload.array("images", 12), postAddReview);
router.post('/update-review/:reviewId', postUpdateReview);
router.get('/delete-review/:reviewId', getDeleteReview)
router.get('/get-all-reviews', getAllReviews);
router.get('/get-review/:reviewId', getReview);

// CART OPERATIONS
router.get("/cart/get-cart", getCartItems);
router.get("/cart/add-cart/:id", getAddCart);
router.get("/cart/increase-cart/:id", getCartItemIncrease);
router.get("/cart/decrease-cart/:id", getCartItemDecrease);
router.get("/cart/delete-cart-item/:id", getCartItemDelete);

// Razor Pay APIs
router.post('/payment/create-order', postCreateOrder)
router.post('/payment/verify-payment', postOrderVerifyPayment)

// Order History
router.get('/order/get-order-history', getOrderHistory)



export default router;
