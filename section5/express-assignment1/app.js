const express = require("express");
const app = express();

app.use("/users", (req, res, next) => {
	console.log("This is the users request");
});

app.use("/", (req, res, next) => {
	console.log("This is the generic request");
});

app.listen(4000);
