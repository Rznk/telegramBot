const token = require("../config/accs").token;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, {polling: false});


let publish = async (message)=>{


};


exports.publish = publish;

