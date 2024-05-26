const express = require("express");
const path = require("path");

const errorController = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
	// User.findByPk(1)
	// 	.then((user) => {
	// 		req.user = user;
	// 		next();
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
	next();
});

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// const invalidRoutes = require("./routes/404");

//the order matters here as well
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// app.use(invalidRoutes);
app.use(errorController.get404);

mongoConnect((client) => {
	console.log(client);
	app.listen(3000);
});
