const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.use("/", (req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "views", "home.html"));
	// res.send("<h1>Home Page</h1>");
});

module.exports = router;
