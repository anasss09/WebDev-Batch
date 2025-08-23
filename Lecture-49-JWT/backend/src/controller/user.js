import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.js";

export const postSignup = async (req, res, next) => {
	const { username, password, email } = req.body;
	if (!username || !password || !email) {
		if (!username) {
			throw new Error("Missing Username");
		}

		if (!password) {
			throw new Error("Missing password");
		}

		if (!email) {
			throw new Error("Missing email");
		}
	}
	try {
		let newUser = await User.create({
			username,
			password,
			email,
		});

		res.status(200).json({
			message: "SuccessFull",
			newUser,
		});
	} catch (error) {
		// next(error)
		throw new Error("Error While Signup ", error);
	}
};

export const postLogin = async (req, res, next) => {
	const { username, password, email } = req.body;
	try {
		const user = await User.findOne({
			$or: [{ username: username }, { email: email }],
		});

		if (!user) {
			throw new Error("User not found !! Wrong username or emailID");
		}

		// const isPasswordCorrect = await user.checkPassword(password)
		// console.log(isPasswordCorrect);

		// if(!isPasswordCorrect) {
		//     throw new Error("Wrong Password")
		// }

		const token = await user.generateToken();

		res.status(200)
			.cookie("jwt", token, {
				httpOnly: true,
				secure: true,
				// maxAge: 60 * 60 * 24
			})
			.json({
				message: "Success",
				token: token,
			});
	} catch (error) {
		next(error);
		// throw new Error("Error while Login!")
	}
};

export const getHome = async (req, res) => {
	const token = req.cookies.jwt;

	if (!token) {
		res.status(401).json("Unaithorisez")
	}

	const decode = jwt.verify(token, process.env.TOKEN_SECRET);

	const user = await User.findOne({
		_id: decode._id,
	});

	if (!user) {
		throw new Error("User Not Found!!");
	}

	const newToken = await user.generateToken();

	return res.status(200).json({
		message: "New Token Generated ",
		user,
		newToken,
	});
};

export const getLogout = (req, res) => {
		res.status(200).cookie("jwt", "").json("Logout SuccessFull");
};