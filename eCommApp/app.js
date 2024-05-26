const express = require("express");
const path = require("path");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
	User.findByPk(1)
		.then((user) => {
			req.user = user;
			next();
		})
		.catch((err) => {
			console.log(err);
		});
});

const Product = require("./models/product");
const User = require("./models/user");

const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

const Order = require("./models/order");
const OrderItem = require("./models/order-item");

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
Product.belongsTo(User, {
	constraints: true,
	onDelete: "CASCADE",
});
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });

sequelize
	// .sync({ force: true })
	.sync()
	.then((result) => {
		return User.findByPk(1);
		// console.log(result);
	})
	.then((user) => {
		if (!user) return User.create({ name: "Max", email: "test@test.com" });
		return user;
	})
	.then((user) => {
		return user.getCart().then((cart) => {
			// console.log("LETs CHECK CART BEFORE CREATING: " + cart);
			if (!cart) {
				// console.log("USER AVAILABLE INSIDE a PROMISE: " + user.id);
				return user.createCart();
			}
		});
	})
	.then((cart) => {
		app.listen(3000);
	})
	.catch((err) => {
		console.log(err);
	});
