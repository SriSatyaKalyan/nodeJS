const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.use("/", (req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "views", "users.html"));
	// res.send("<h1>Users Page</h1>");
});

module.exports = router;
