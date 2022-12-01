const db = require("../models");
const Offer = db.offers;
const Menu = db.menu;

exports.create = (req, res) => {
  const dateValue = req.body.dateValue;
  const isExist = Menu.findOne(dateValue);
  if(!isExist){
    const offer = new Offer({
      happyHour: req.body.happyHour,
      offerType: req.body.offerType,
      dateValue: req.body.dateValue,
      isEveryDay: req.body.isEveryDay,
      dayValue: req.body.dayValue,
    });
  
    Offer.save(offer).then(data => { res.send(data) })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating"
        });
      });
  }
};

