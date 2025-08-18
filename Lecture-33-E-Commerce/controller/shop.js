const products = require("../model/products");
const Users = require("../model/user");

module.exports.getProductAll = async (req, res) => {
	try {
		let product = await products.find();
		const { getPtoductCategoryWise } = require("../utils/library");
		let categoryProduct = getPtoductCategoryWise(product);
	} catch (err) {}
};

module.exports.getHome = async (req, res) => {
	try {
		let product = await products.find();
		const { getPtoductCategoryWise } = require("../utils/library");
		let categoryProduct = getPtoductCategoryWise(product);
		console.log(req.user);
		res.render("shop/home", {
			Product: categoryProduct,
		});
	} catch (err) {}
};

module.exports.getProductsById = async (req, res) => {
	try {
		let { id } = req.params;
		let product = await products.findOne({ _id: id });
		res.render("shop/product-details", {
			Product: product,
		});
	} catch (err) {}
};

module.exports.getAddToCartById = async (req, res, next) => {
	try {
		let { id } = req.params;
		let cart = req.user.cart;
		let indx = -1;
		cart.forEach((item, i) => {
			if (item.id == id) {
				indx = i;
			}
		});

		if (indx == -1) {
			cart.unshift({
				id: id,
				quantity: 1,
			});
		} else {
			cart[indx].quantity++;
		}

		await req.user.save();
		res.redirect("/shop/cart");
	} catch (err) {
		next(err);
	}
};

module.exports.getCart = async (req, res, next) => {
	try {
		let { id } = req.params;
		let user = await Users.findOne({ _id: req.user._id }).populate("cart.id");

		let totalPrice = 0;
		user.cart.forEach((item) => {
			totalPrice += item.id.price * item.quantity;
		});
		res.render("shop/cart", {
			cart: user.cart,
			totalPrice,
		});
	} catch (err) {
		next(err);
	}
};

module.exports.getIncrease = async (req, res, next) => {
	const { id } = req.params;
	const cart = req.user.cart;
	let indx;
	cart.forEach((item, i) => {
		if (item.id == id) {
			indx = i;
		}
	});

	cart[indx].quantity++;
	await req.user.save();
	try {
		let user = await Users.findOne({ _id: req.user.id }).populate("cart.id");
		let totalPrice = 0;
		user.cart.forEach((item) => {
			totalPrice += item.id.price * item.quantity;
		});
		res.send({
			id: user.cart,
			totalPrice,
		});
	} catch (err) {
		next(err);
	}
};

module.exports.getDecrease = async (req, res, next) => {
	const { id } = req.params;
	const cart = req.user.cart;
	let indx;
	cart.forEach((item, i) => {
		if (item.id == id) {
			indx = i;
		}
	});

	if (cart[indx].quantity > 1) cart[indx].quantity--;
	else if (cart[indx].quantity == 1) cart.splice(indx, 1);

	await req.user.save();
	try {
		let user = await Users.findOne({ _id: req.user.id }).populate("cart.id");
		let totalPrice = 0;
		user.cart.forEach((item) => {
			totalPrice += item.id.price * item.quantity;
		});
		res.send({
			id: user.cart,
			totalPrice,
		});
	} catch (err) {
		next(err);
	}
};

module.exports.getCartBuy = async (req, res, next) => {
	try {
		let user = await Users.findOne({_id: req.user.id}).populate('cart.id')
		let cart = user.cart;
		let newOrder = []

		cart.forEach((item) => {
			let order = {}
			order.product = item.id;
			order.quantity = item.quantity;
			order.price = order.product.price * item.quantity;
			// console.log("Order", order);
			newOrder.push(order)
			console.log(newOrder);
			
		})

		await Users.findByIdAndUpdate(req.user.id, {
			orders: newOrder ,
			cart: []
		})
		await req.user.save()

		res.send({
			message: "Order Placed Successfully",
			newOrder
		})
		
	} catch(err) {
		next(err)
	}
} 