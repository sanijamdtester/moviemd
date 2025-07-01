const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KRtxUTRS#W4D5nCK-QCMLnXgYj8ouR8wyvb61tQv7cEx0KAeyenw", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/2nmi9q.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am nadeen poorna*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "groups", //private or public
AUTO_VOICE:"false", //true or false
MONGODB: "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
CAPTION: "> *NADEEN-MD*",
JIDS: [],
SUDO: ['94711451319','94779483535','94724481155']

};
