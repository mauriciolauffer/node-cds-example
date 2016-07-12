"use strict";

module.exports = function(app) {
	app.use("/node/cds", require("./routes/cds")());
};