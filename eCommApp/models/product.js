const fs = require("fs");
const path = require("path");
const db = require("../util/database");
const p = path.join(
	path.dirname(require.main.filename),
	"data",
	"products.json"
);

const Cart = require("./cart");

const getProductsFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			let products;
			try {
				products = JSON.parse(fileContent);
			} catch {
				products = [];
			}
			cb(products);
		}
	});
};

module.exports = class Product {
	constructor(id, title, imageUrl, description, price) {
		this.id = id;
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
	}

	save() {
		return db.execute(
			"INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)",
			[this.title, this.price, this.imageUrl, this.description]
		);
	}

	static deleteById(id) {}

	static fetchAll() {
		return db.execute("SELECT * FROM products");
	}

	static findById(id) {
		return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
	}
};