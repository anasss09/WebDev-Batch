const router = require("express").Router();
const userController = require("../controller/user");
const passport = require("../authentication/passport");

router.get("/", userController.getHome);
router.get("/login", userController.getLogin);
router.get("/signup", userController.getSignup);
router.get("/profile", userController.getProfile);

// router.post('/login', userController.postLogin)

router.post(
	"/login",
	passport.authenticate("local", { failureRedirect: "/login" }),
	function (req, res) {
		console.log("Login Success: ", req.user);
		res.redirect("/profile");
	}
);

router.get("/logout", function (req, res, next) {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.redirect("/");
	});
});

router.post("/signup", userController.postSignup);

module.exports = router;
