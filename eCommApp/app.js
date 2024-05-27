const express = require("express");
const path = require("path");

const errorController = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;
const User = require("./models/user");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
	User.findById("6653ac69879b630983a603ea")
		.then((user) => {
			console.log("DISPLAY USERCART", user.cart);
			if (!user.cart) {
				console.log("No cart.");
				user.cart = { items: [] };
			}
			req.user = new User(user.name, user.email, user.cart, user._id);
			next();
		})
		.catch((err) => {
			console.log(err);
		});
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
	// if()
	app.listen(3000);
});
