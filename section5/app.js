const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

//the order matters here as well
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
