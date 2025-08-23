const express = require("express");
const app = express();
const PORT = process.env.PORT || 4444;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

// Middleware
app.use(express.json());

app.use("/admin", require('./routers/admin'));

require("mongoose")
	.connect("mongodb://127.0.0.1:27017/test")
	.then(() => {
		// Start server
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
