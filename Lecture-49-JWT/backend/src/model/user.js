import mongoose, { model, Schema } from "mongoose";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	token: {
		type: String,
		default: "",
	},
});

userSchema.pre("save", async function (next) {
	try {
		const user = this;
		if (!user.isModified("password")) return next();
		const hash = await bcrypt.hash(user.password, 10);
		user.password = hash;
		next();
	} catch (error) {
		next(error);
	}
});

userSchema.methods.checkPassword = async function (password) {
	try {
		const user = this;
		const decodedPassword = await bcrypt.compare(password, user.password);
		return decodedPassword;
	} catch (error) {
		throw new Error("Wrong Password", error);
	}
};

userSchema.methods.generateToken = async function () {
	const user = this;
	const token = jwt.sign(
		{
			_id: user._id,
		},
		process.env.TOKEN_SECRET
	);

	user.token = token;
	await user.save();

	return token;
};

const User = mongoose.model("User", userSchema);
export default User;
