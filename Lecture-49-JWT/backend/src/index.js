import bodyParser from "body-parser";
import express from "express";
import userRouter from "./routers/user.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT;

const app = express();

app.use(express.json({ limit: "4kb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "4kb" }));
app.use(express.static("public"));
app.use(cookieParser())

app.use("/", userRouter);

mongoose
	.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`)
	.then(() => {
		app.listen(PORT, () => {
			console.log("http://localhost:" + PORT);
		});
	})
	.catch((err) => {
		console.log(err);
	});
