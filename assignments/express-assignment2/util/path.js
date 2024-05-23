const path = require("path");

// module.exports = require.main.path;
module.exports = path.dirname(require.main.filename);
