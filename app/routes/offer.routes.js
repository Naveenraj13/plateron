module.exports = app => {
  const offer = require("../controllers/offer.controller.js");
  var router = require("express").Router();

  router.post("/create", offer.create);

  app.use("/api", router);
};
