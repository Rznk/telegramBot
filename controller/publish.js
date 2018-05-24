const token = require("../config/accs").token;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(token, {polling: false});
const chatId = -260151687;

let publish = async (message)=>{
    try {
        let result = await bot.sendMessage(chatId, message, {parse_mode: "Markdown"});
        return !!(result && result.message_id)
    } catch (e) {
        console.log(`{E} in controller/publish:: ${e}`);
        return e
    }
};


exports.publish = publish;
