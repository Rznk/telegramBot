let publish = require("./publish").publishMessage;
let router = require("express").Router();

router.post('/publish', publish);

module.exports = router;
