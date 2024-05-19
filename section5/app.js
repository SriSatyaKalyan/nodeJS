const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const invalidRoutes = require("./routes/404");

//the order matters here as well
app.use("/admin", adminData.routes);
app.use(shopRoutes);

// app.use(invalidRoutes);
app.use((req, res, next) => {
	res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
