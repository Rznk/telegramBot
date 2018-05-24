let publishCtrl = require("../controller/publish").publish;



let publishMessage = async(req, res)=>{
    try {
        let msg = req.body.text;
        let result = await publishCtrl(msg);
        res.json({success: result, error: false});
    } catch (e) {
      res.json({success: false, error: e.message})
    }
};

exports.publishMessage = publishMessage;
