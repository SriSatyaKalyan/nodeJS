const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class User {
	constructor(username, email) {
		this.username = username;
		this.email = email;
	}

	save() {}

	static findById(userId) {}
}
module.exports = User;
