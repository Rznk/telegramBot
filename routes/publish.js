let publishDomain = require("../controller/publish").publish;



let publishMessage = async(req, res)=>{
  let msg = req.body.text;
  let results = await publishDomain(msg);
  res.json("1");
};

exports.publishMessage = publishMessage;
