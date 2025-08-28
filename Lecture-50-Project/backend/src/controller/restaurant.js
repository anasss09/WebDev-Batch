import { error } from "console";
import Restaurant from "../models/restaurant.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ErrorWrapper from "../utils/ErrorWrapper.js";
import uploadOnCloudinary from "../utils/uploadCloudinary.js";
import restaurant from "../models/restaurant.js";

export const postAddRestaurant = ErrorWrapper(async (req, res, next) => {
	const { name, address, contact } = req.body;
	const email = req.user.email;

	if (!email) {
		throw new ErrorHandler(401, "Please verify your email and try again !");
	}

	const incomingFields = Object.keys(req.body);
	const requireFields = ["name", "address", "contact"];
	const missingFields = requireFields.filter(
		(field) => !incomingFields.includes(field)
	);

	if (missingFields.length > 0) {
		throw new ErrorHandler(401, `Enter ${missingFields} Fiels`);
	}

	let restaurant;
	try {
		restaurant = await Restaurant.findOne({
			$or: [{ name }, { address }],
		});
	} catch (error) {
		ErrorHandler(500, error.message);
	}

	if (restaurant) {
		throw new ErrorHandler(401, "Restaurant Already Exist");
	}

	let cloudinaryResponse;
	try {
		cloudinaryResponse = await uploadOnCloudinary(req.file.path);
	} catch (error) {
		throw new ErrorHandler(500, `Cloudinary ${error.message}`);
	}

	try {
		let newRestaurant = await Restaurant.create({
			name,
			address,
			email,
			contact,
			coverImage: cloudinaryResponse.url,
			owner: req.user._id,
		});

		res.status(201).json({
			success: "True",
			message: "Restaurant added successfully",
			newRestaurant,
		});
	} catch (error) {
		throw new ErrorHandler(
			500,
			`Error while adding restaurant: ${error.message}`
		);
	}
});

export const postCusineCategoryAdd = ErrorWrapper(async (req, res, next) => {
	const { category, restaurant_name } = req.body;

	let newCusineCategory = category.split(",");
	newCusineCategory = newCusineCategory.map((c) => c.trim().toLowerCase());

	if (!newCusineCategory)
		throw new ErrorHandler(401, `Enter valid category to add`);

	try {
		let restaurant = await Restaurant.findOne({
			name: restaurant_name,
		});

		if (!restaurant)
			throw new ErrorHandler(
				401,
				`Restaurant not found: ${restaurant_name}`
			);

		if (restaurant.email !== req.user.email) {
			throw new ErrorHandler(
				401,
				"You are not authorise to add cusine to this restaurent."
			);
		}

		let existingCusines = restaurant.cusines;
		if (existingCusines.length) {
			let newCusines = newCusineCategory.filter((cusine) => {
				for (let i = 0; i < existingCusines.length; i++) {
					if (existingCusines[i].category == cusine) return false;
				}
				return true;
			});

			newCusineCategory = newCusines;
		}

		let newCusines = [];
		for (let i = 0; i < newCusineCategory.length; i++) {
			let category = newCusineCategory[i];
			let newCusine = {
				category,
				food: [],
			};
			newCusines.push(newCusine);
		}

		if (newCusines.length) {
			restaurant.cusines = [...newCusines, ...existingCusines];
			restaurant.save();
		}

		res.status(200).json({
			seccess: true,
			message: "Restaurant added successfully",
			data: restaurant,
		});
	} catch (error) {
		throw new ErrorHandler(500, error.message);
	}
});

export const postAddFoodItems = ErrorWrapper(async (req, res, next) => {
	const incomingFields = Object.keys(req.body);
	const requireFields = [
		"category",
		"name",
		"price",
		"description",
		"veg",
		"restaurant_name",
	];
	const missingFields = requireFields.filter(
		(field) => !incomingFields.includes(field)
	);

	if (missingFields.length > 0) {
		throw new ErrorHandler(401, `Fill the ${missingFields}`);
	}

	try {
		let { category, name, price, description, veg, restaurant_name } =
			req.body;
		category = category.toLowerCase();
		description = description.toLowerCase();
		veg = veg.toLowerCase();
		name = name.toLowerCase();
		restaurant_name = restaurant_name.toLowerCase();

		const restaurant = await Restaurant.findOne({
			name: restaurant_name,
		});

		if (!restaurant) {
			throw new ErrorHandler(401, "Restaurent not Found");
		}

		let index = -1;
		for (let i = 0; i < restaurant.cusines.length; i++) {
			if (restaurant.cusines[i].category == category) {
				index = i;
				break;
			}
		}        

		if (index == -1) {
			throw new ErrorHandler(
				401,
				`Please add the category first in which you want to add ${name} eatable`
			);
		}

		let cloudinaryResponse = {
			url: "",
		};
        
		if (req.file.path) {
			cloudinaryResponse = await uploadOnCloudinary(req.file.path);
		}

        let vegValue = (veg === 'true' ? true : false);
		let newFoodItem = {
			name: name,
			price: +price,
			veg: vegValue,
			description: description,
			images: [{
                url: cloudinaryResponse.url
            }]
		};    

		restaurant.cusines[index]["food"].push(newFoodItem);
		await restaurant.save();

		res.status(200).json({
			message: "Food item added successfully!",
			data: restaurant,
		});
	} catch (error) {
		throw new ErrorHandler(error.statusCode || 500, error.message);
	}
});
