import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const restaurantSchema = new Schema(
	{
		name: {
			type: "String",
			lowercase: true,
			unique: true,
			required: true,
			trim: true,
		},
		address: {
			type: "String",
			lowercase: true,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			lowercase: true,
			trim: true,
			required: true,
			unique: true,
		},
		contact: {
			type: String,
			required: true,
		},
		coverImage: {
			type: "String",
			required: true,
		},
		images: [{ url: "String" }],

		ownerId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true
		},
		rating: Number,
		cusines: [
			{
				category: String,
				food: [
					{
						name: String,
						price: Number,
						description: String,
						veg: Boolean,
						images: [
							{
								url: String,
							},
						],
					},
				],
			},
		],
		cusineCategories: [
		    {
		        name: String
		    }
		],
		menu: [
			{
				imageUrl: String,
			},
		],
		reviews: [
			{
				userId: {
					type: mongoose.SchemaTypes.ObjectId,
					ref: "User",
				},
				rating: {
					type: Number,
					default: 1,
				},
				images: [
					{
						url: String,
					},
				],
				message: {
					type: String,
				},
				username: String,
			},
		],
	},
	{
		timestamps: true,
	}
);

const restaurant = mongoose.model("Restaurant", restaurantSchema);
export default restaurant;
