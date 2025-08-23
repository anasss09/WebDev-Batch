import User from "../model/user.js";
import jwt from 'jsonwebtoken'

export const postSignup = async (req, res, next) => {
	const { username, email, password } = req.body;
	try {
		const user = await User.create({
			username,
			email,
			password,
		});

		res.status(200).json({
			message: "Sign Up Successfull",
			user: user,
		});
	} catch (error) {
		next(error);
	}
}

export const postLogin = async (req, res, next) => {
	const { password } = req.body;
	try {
		const user = await User.findOne({
			$or: [{ username: req.body.username }, { email: req.body.email }],
		});

		if (!user) {
			throw new Error("Un Authorised !!");
		}

		//Password Check
		const checkPsd = await user.checkPassword(password)
        if(!checkPsd) {
            throw new Error("Wrong Password")
        }

		const token = await user.generateToken();
		res.status(200)
        .cookie('jwt', token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 7
        })
        .json({
            message: "Logged In",
			token: token,
		});
	} catch (error) {
		next(error);
	}
}

export const getHome = async (req, res, next) => {
    const token = req.cookies.jwt
    
    if(!token) {
        throw new Error("Un Authorized")
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await User.findOne({
        _id: decoded._id
    })

    if(!user) {
        throw new Error("User Not Found")
    }

    const tokenID = await user.generateToken()

    res.status(200).json({
        message: "Got Home Page",
        user: user,
        token: tokenID
    })
}

export const getLogout = (req, res, next) => {
    
    res.status(200).cookie('jwt', "", {
        maxAge: 0
    }).json({
        message: "Log Out Successfull"
    })
}