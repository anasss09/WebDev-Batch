import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import userRouter from './routers/user.js'
import cookieParser from "cookie-parser";

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/', userRouter)

mongoose
	.connect("mongodb://127.0.0.1:27017/SELFJWT")
	.then(() => {
		app.listen(PORT, () => {
			console.log("http://localhost" + PORT);
		});
	})
	.catch((err) => {
		console.log(err);
	});
