const User = require("../model/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.getHome = (req, res) => {
	res.render("index");
};

module.exports.getLogin = (req, res) => {
	if (req.session.isLoggedIn == true) return res.redirect("/profile");
	res.render("login");
};

module.exports.getSignup = (req, res) => {
	// if (req.session.isLoggedIn == true) return res.redirect("/profile");
	res.render("signup");
};

module.exports.postSignUp = async (req, res) => {
	// if (req.session.isLoggedIn == true) return res.redirect("/profile");
	let { username, password } = req.body;
	try {
		let user = await User.findOne({ username });

		if (user)
			return res.render("signup", {
				msg: "User Already Exist try another username",
			});

		bcrypt.hash(password, saltRounds).then(async function (hash) {
			user = await User.create({
				username,
				password: hash,
			});
		});
	} catch (err) {
		console.log(err);
	}

	res.render("login", {
		msg: "Account Create Successfully login to continue",
	});
};

module.exports.postLogin = async (req, res, next) => {
	const { username, password } = req.body;
	try {
		let user = await User.findOne({ username });

		if (!user)
			return res.render("login", {
				msg: "Invalid Username",
			});

		bcrypt.compare(password, user.password).then(function (result) {
			if (result == true) {
				req.session.username = username;
				req.session.isLoggedIn = true;
				res.redirect("/profile");
			} else {
				res.render("login", {
					msg: "Invalid Password try again",
				});
			}
		});
	} catch (err) {
		res.send(err);
	}
};

module.exports.getProfile = (req, res) => {
	// if(req.session.isLoggedIn == true) return res.redirect('/profile')
	res.render("profile", {
		username: req.session.username,
	});
};

module.exports.getLogout = (req, res) => {
	req.session.destroy(function (err) {
        if(err) return res.send(err)

        res.redirect('/login')
	});
};


