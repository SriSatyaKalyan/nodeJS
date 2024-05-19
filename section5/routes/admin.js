const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

const products = [];

router.get("/add-product", (req, res, next) => {
	res.render("add-product", {
		pageTitle: "Add Product",
		path: "/admin/add-product",
	});
});

router.post("/add-product", (req, res) => {
	// console.log(req.body);
	products.push({ title: req.body.title });
	res.redirect("/");
});

// module.exports = router;

exports.routes = router;
exports.products = products;
