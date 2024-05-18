const fs = require("fs");

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === "/") {
		res.write("<html>");
		res.write("<head><title>Enter Message</title></head>");
		res.write(
			'<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>'
		);
		res.write("</html>");
		return res.end();
	}

	if (url === "/message" && method === "POST") {
		const body = [];
		req.on("data", (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});
		return req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			const message = parsedBody.split("=")[1];
			fs.writeFile("message.text", message, (err) => {
				res.statusCode = 302;
				res.setHeader("location", "/");
				return res.end();
			});
		});
	}

	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>My First Page</title></head>");
	res.write("<body>My NodeJS Body</body>");
	res.write("</html>");
	res.end();
};

module.exports = requestHandler;

//other ways to export
// 1.
// module.exports = {
// 	handler: requestHandler,
// 	text: "Some text",
// };

// 2.
// module.exports.handler = requestHandler;
// module.exports.text = "Some text";

// 3.
// exports.handler = requestHandler;
// exports.text = "Some text";
