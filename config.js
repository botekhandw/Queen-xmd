const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DT~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVBLb2YxS3lRZEF5VzJ3VWh3UG5ZaVRjYSs3QTI1TjgrRTJOMFVCMk1VND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjZsRm5YWVllZGkvVGRxeWlOWEo1TDZUcGU1L0IxcFdQV2hBaU5kKy94TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSmg3eWYzY2ZqMmlOK0JZbktpWlh6aERYT3hSVURGT00yTWlkUDhwZzBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVNllhenVmZThLelNmN1MrWG9vK2ZVV2MyQ0E5WXhnMzVuMEo0YU1Lam5RPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIcGw1ZENubktjam1tRVRnaThPMkZDakxPS05ZbkFGTzA1ZXljb2FTMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNLYWF5U3BKU0pSVklleFAwTnZxNmVtQThiWjVOQkp3cU9DRkV4QW9yRWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUd5OUxkN1dvV05kaWI1VEpET3JiajEwcEpzdU5FZnZWa0c1N0RpV05rUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMll2UTFadUhhRWM4ODB4UGUzU0V2UjJjN0tpRys5OXlqdGpJQjBJNk14az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRXRXYzTGJHZmJ1TTBCWVQyRmZ3bVBrLzJ3K2MvRzZTSGd6OHZiYTJRYnV0TjluUGw2TmprRzV2YzhLNmJTUUJkdHp6MUFvand1T0xIdk4xcG5VbWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJHTmYzNVRSTGNpTENRSUwvWEpxWEs4UHU3UlM0VXZ3TEQ4V0w1K05VU0V3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFVllSQVdEOSIsIm1lIjp7ImlkIjoiNTg0MTYyMTIxNjg3OjE5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiOTM4OTI5ODQ3NTAzMTk6MTlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNkh5T2NCRUxHUm1NWUdHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6VTArdVAwZG5lSnJHUGFuNDlmSTg2WTgyV0pFSXZWRmRuTE9FNk90MWhJPSIsImFjY291bnRTaWduYXR1cmUiOiJSUVFTd0haeStqZElZR3BIeS9sVFRMazViNkRtN29LVzhSaGk4ZWMwWWhpbXNjMis2VEVXa3d0SC8zTHVXY2R6dE5SYVNkdVF5YmxPcEdKcEVzK0tCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMGVZV2VLYUNNK3hROUFvb3d1dFVMblZ0L2FaZTA0OWVPNEkrWG52Kzhib2xsOGdWcVhQR3h0eGo3Syt5OXN1Ujc2Y0swcXZ3NXIwUDM4Wk0wNDZYamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1ODQxNjIxMjE2ODc6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzFOUHJqOUhaM2lheGoycCtQWHlQT21QTmxpUkNMMVJYWnl6aE9qcmRZUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3ODA4ODMwLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9zaiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY NITHYA-XMD ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/iyudhj.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "NITHYA-XMD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "DileepaTech,-YT",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94785316830",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Dileepa Tech Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Dileepa Tech Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iyudhj.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94785316830",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
