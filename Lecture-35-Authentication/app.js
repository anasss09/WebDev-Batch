const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const hbs = require("hbs");
const session = require("express-session");
const MongoStore = require('connect-mongo');
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
		store: MongoStore.create({ mongoUrl: 'mongodb+srv://anas:anas@cluster0.zatkkzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' })
	})
);

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "hbs");

const userRouter = require("./routes/user");
app.use("/", userRouter);

mongoose
	.connect("mongodb+srv://anas:anas@cluster0.zatkkzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
	.then(() => {
		app.listen(PORT, () => {
			console.log(`localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
