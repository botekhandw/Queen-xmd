const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0QyNnQvTmNoLzNaWGo5UUFvb0p0ZGI2eUJhdDYwQjdCZ0JsSzMvdlFWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmhKd0dTS0w4aFFTcDJPV2hKNThrdnh4QVN0Q3FoSmVoNlpOem9wRTRVZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTDdreFo0OUNuU0NkMm03SlZVMmJLcTFTUWdiMG9NYURDQ3hJRGhHbEVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJod1AzTnFvODJhZW5jOEIyeDdGYW1aTjZaUWVYWHNEV0FXSzg5MmYxQVdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJOaktSSml4UlVSZ2JaUFZsdVp0K2s5b2ZVSnIxUDdQSnc4ZUg1K09rbjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlUcXpFOEdBUmI4ZzgyazhqbjJaZ2hpN3JGem1iRUY2OEpSd3dsTTVhMTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUw4WTRLbTR3U3lmRWViTFFWTkRlR21ybGJyclNvVTN4NnhkS3V3eEdGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDEzNzltZHJiaURmV0RMcWw5VkV2RlJPaVZwb0NjZ2U3TkpHcVpWOEhRMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBrMXBNWFlZZHQxc1FNeHpjaGJpZXJ1NTFBTkdNclZQR0tRU2FmWXJjanM5VkRkZ3k5cnZqMCttZ2ttSFF2K1NxWE5UYWlRZmE5SHhTc1VFdTlFR2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJtR0N5RVgwOGUra2hzeHZiZS9PRGNHelFJVXVQVDJXQThtOEQyTHl0Wk9JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjU4NDE2MjEyMTY4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNzBEMjQ0NTQ5NDFCMTI0NjJGNERBQkIwNkE3MTZBRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NjEzMjUzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI1ODQxNjIxMjE2ODdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkI0NkFDQTA1MTdGNEJCNzZFQkFEODFFNjdGRjY1NjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjYxMzI1NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTg0MTYyMTIxNjg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRBQTc3Nzc3QjQ0NEQ4M0I2NkZGQ0U3NDkwN0Q3MzdGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY2MTMyNTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkNGTTFERUpQIiwibWUiOnsiaWQiOiI1ODQxNjIxMjE2ODc6OUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkzODkyOTg0NzUwMzE5OjlAbGlkIiwibmFtZSI6Ik5vIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNMkh5T2NCRUlDVno4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6VTArdVAwZG5lSnJHUGFuNDlmSTg2WTgyV0pFSXZWRmRuTE9FNk90MWhJPSIsImFjY291bnRTaWduYXR1cmUiOiJ0UDFqMWpkMUpDQlBaekpwU2taODc1S29hOGhuOUpjbFBkSVN2d0VSR2Q5Z0pYOE9RbWtCeVhvRWF3eGlBdWdHU2RTRGFjMWZaU3pqQ0RkcmJYK21CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTEc3V2lBRTgySXFoT2lnV1QrcC9DdUJpN2ZKNTFCMWg1WDFvT1d4N0o4T2xjN2NJaXhpRktLRXBuR3ZOVkZya0VxZDhZSi9JK3V3bmRiRlFtVTkxaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1ODQxNjIxMjE2ODc6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjMU5Qcmo5SFozaWF4ajJwK1BYeVBPbVBObGlSQ0wxUlhaeXpoT2pyZFlTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY2MTMyNTEsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGh3In0=",
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
