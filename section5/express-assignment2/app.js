const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

const homeRoutes = require("./routes/home");
app.use("/home", homeRoutes);

// app.use("/home", (req, res, next) => {
// 	res.send("<h1>Home Page</h1>");
// });

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

// app.use("/users", (req, res, next) => {
// 	res.send("<h1>Users Page</h1>");
// });

app.use((req, res) => {
	res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000);
