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
} from "../controller/restaurant.js";
import upload from "../utils/multer.js";
const router = express.Router();

//CRUD on Restaurant
router.post("/register", upload.single("coverImage"), postAddRestaurant);
router.post("/add-cusine-category", postCusineCategoryAdd);

//CRUD on Food
router.post("/add-food-item", upload.single("images"), postAddFoodItem);
router.post("/update-food-item/:id", upload.single("images"), postUpdateFoodItem);
router.get("/delete-food-item/:id", getDeleteFoodItem);
router.get("/get-food-item", getFoodItems);
router.get("/get-food-item/:id", getFoodItem);
router.get("/get-all-cusines", getAllCusines);

// Food -> images
router.post("/add-food-images/:id", upload.array("images", 6), postAddFoodImages);

// CRUD on reviews

router.post("/add-review", upload.array("images", 12), postAddReview);
router.post('/update-review/:reviewId', postUpdateReview);
router.get('/delete-review/:reviewId', getDeleteReview)
router.get('/get-all-reviews', getAllReviews);
router.get('/get-review/:reviewId', getReview);

export default router;
