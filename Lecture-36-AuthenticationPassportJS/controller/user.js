const User = require("../model/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.getHome = (req, res, next) => {
	res.render("home");
};

module.exports.getLogin = (req, res, next) => {
	res.render("login");
};

module.exports.getSignup = (req, res, next) => {
	res.render("signup");
};

module.exports.postSignup = async (req, res, next) => {
	let { username, password } = req.body;
	try {
		let user = await User.findOne({ username });

		if (user)
			return res.render("signup", {
				msg: "This user already exist try another",
			});

		bcrypt.hash(password, saltRounds, async function (err, hash) {
			user = await User.create({
				username,
				password: hash
			});
		});

		res.redirect("/login");
	} catch (err) {
		next(err)
	}
};

module.exports.getProfile = async (req, res, next) => {
	console.log("Accessed /profile. Authenticated?", req.isAuthenticated());
	if(req.isAuthenticated()) {
		res.render('profile', {
			user: req.user
		})
	} else {
		res.redirect('/login')
	}
}