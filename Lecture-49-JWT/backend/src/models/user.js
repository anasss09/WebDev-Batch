import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
	username: {
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
	email: {
		type: String,
		require: true,
		trim: true,
		unique: true,
	},
	token: {
		type: String,
		default: undefined,
	},
});

userSchema.pre("save", async function (next) {
	try {
		const user = this;
		const hash = await bcrypt.hash(user.password, 10);
		user.password = hash;
		next();
	} catch (error) {
		throw new Error("Error in Bcrypt package", error);
	}
});

userSchema.methods.checkPassword = async function (password) {
	try {
		const user = this;
		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		return isPasswordCorrect;
	} catch (error) {
		throw new Error("Error on Check Password in user Model");
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
	return token
};

const User = mongoose.model("User", userSchema);
export default User;
