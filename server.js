const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const routes = require("./routes/routes");
const cfg = require("./config/config");

app.use(bodyparser.json());



app.use('/', routes);


app.listen(cfg.serverPort, ()=>{
    console.log(`{I} Server listening on ${cfg.serverPort} port`)
});




