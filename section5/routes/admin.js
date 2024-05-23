const path = require("path");
const express = require("express");

const adminController = require("../controllers/admin");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

// module.exports = router;

module.exports = router;
