const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.offer = require("./offer.model.js")(mongoose);
db.menu = require("./menu.model.js")(mongoose);

module.exports = db;
