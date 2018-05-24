let publishCtrl = require("../controller/publish").publish;



let publishMessage = async(req, res)=>{
  let msg = req.body.text;
  let result = await publishCtrl(msg);
  res.json(result);
};

exports.publishMessage = publishMessage;
