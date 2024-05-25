const express = require("express");
const path = require("path");
const app = express();
const errorController = require("./controllers/error");
const sequelize = require("./util/database");
app.use(express.static(path.join(__dirname, "public")));

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

sequelize
	.sync()
	.then((result) => {
		// console.log(result);
		app.listen(3000);
	})
	.catch((err) => {
		console.log(err);
	});

// app.listen(3000);
