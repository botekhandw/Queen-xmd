const fs = require('fs');
const config = require('../config');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep , fetchJson } = require('../lib/functions')
const { cmd, commands } = require('../command');
const axios = require('axios');
const footer_Bot = "> *© Powerd By Nithya XMD*"
const path = require('path');
const fetch = require('node-fetch');
const pakaya = "`";
const rushprefix = ".";
const {
  proto,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
} = require('@whiskeysockets/baileys');
const os = require("os");

cmd({
    pattern: "menu",
    react: "📂",
    alias: ["cmd"],
    desc: "Check bot commanda.",
    category: "main",
    filename: __filename
},
async ( conn, mek, m, { from, quoted, q, reply }) => {
    try {

        const alivetharuzz = `*👋 Hellow there i'm \`Nithya XMD\` whatsapp bot 🚀*

*👾 ʙᴏᴛ ɴᴀᴍᴇ : Nithya XMD* 
*👤 ʙᴏᴛ ᴏᴡɴᴇʀ : *
*📁 ᴍᴇᴍᴏʀʏ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}ᴍʙ / ${Math.round(require('os').totalmem / 1024 / 1024)}ᴍʙ*
*🕑 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*

🔢 *${pakaya}ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ɴᴜᴍʙᴇʀ:${pakaya}*

*${pakaya}1${pakaya} | | 📥 ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*
*${pakaya}2${pakaya} | | 👥 ɢʀᴏᴜᴘ ᴍᴇɴᴜ* 
*${pakaya}3${pakaya} | | 😂 ꜰᴜɴ ᴍᴇɴᴜ*
*${pakaya}4${pakaya} | | 👤 ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
*${pakaya}5${pakaya} | | 🤖 ᴀɪ ᴍᴇɴᴜ*
*${pakaya}6${pakaya} | | 🛠️ ᴛᴏᴏʟ ᴍᴇɴᴜ*
*${pakaya}7${pakaya} | | 🌀 ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
*${pakaya}8${pakaya} | | 🚀 ᴏᴛʜᴇʀ ᴍᴇɴᴜ*
*${pakaya}9${pakaya} | | 👀 ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*
*${pakaya}10${pakaya} | | 🍀 ᴍᴀɪɴ ᴍᴇɴᴜ*
*${pakaya}11${pakaya} | | 🗞️ ɴᴇᴡꜱ ᴍᴇɴᴜ*
*${pakaya}12${pakaya} | | 🔍 ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
*${pakaya}13${pakaya} | | 💥 ʙᴜɢ ᴍᴇɴᴜ*

${footer_Bot}`;
    const alivemsg = await conn.sendMessage(from,{
    image: { url: config.MENU_IMAGE_URL },
    caption: alivetharuzz,
    contextInfo: {
      mentionedJid: ['9478531830@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '120363420920178095@newsletter',
          newsletterName: "Nithya XMD",
          serverMessageId: 999
      },
      externalAdReply: {
          title: 'Nithya XMD',
          body: 'Nithya XMD Command List',
          mediaType: 1,
          sourceUrl: "https://github.com/Tharushaaaaa777",
          thumbnailUrl: config.MENU_IMAGE_URL, // This should match the image URL provided above
          renderLargerThumbnail: false,
          showAdAttribution: true
      }
  }
    },{ quoted: mek });
    
        conn.ev.on("messages.upsert", async (msgUpdate) => {
            const tharuzzmsg = msgUpdate.messages[0];
                if (!tharuzzmsg.message || !tharuzzmsg.message.extendedTextMessage) return;

                const selectedOption = tharuzzmsg.message.extendedTextMessage.text.trim();

          // ================
          let menu = {
            download: '', group: '', fun: '', owner: '',
            ai: '', anime: '', convert: '', reaction: '',
            main: '', other: '', news: '', tool: '', search: '', bug: ''
        };

        for (let i = 0; i < commands.length; i++) {
            let cmd = commands[i];
            if (cmd.pattern && !cmd.dontAddCommandList && menu.hasOwnProperty(cmd.category)) {
                menu[cmd.category] += `\n\n*╭────────────────●●►*\n*│ 📌 ${pakaya}¢σммαη∂:${pakaya} ${rushprefix}${cmd.pattern}*\n*│ 📜 ${pakaya}∂єѕ¢яιρтιση:${pakaya} ${rushprefix}${cmd.desc}*\n*╰───────────────────●●►*`;
            }
        }
          // ================

        if (
            tharuzzmsg.message.extendedTextMessage.contextInfo &&
            tharuzzmsg.message.extendedTextMessage.contextInfo.stanzaId === alivemsg.key.id
           ) {
            await conn.sendMessage(from, { react: { text: "🧵", key: tharuzzmsg.key } });

            switch (selectedOption) {
                    case "1":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `📥 *D̶O̶W̶N̶L̶O̶A̶D̶ C̶O̶M̶M̶N̶A̶D̶S̶ 📥${menu.download || 'No commands found'}
                       
${footer_Bot}` },{ quoted: mek });    
                    break;
                    case "2":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `👥 *G̶R̶O̶U̶P̶ C̶O̶M̶M̶N̶A̶D̶S̶ 👥*${menu.group || 'No commands found'}
                      
${footer_Bot}` },{ quoted: mek });    
                    break;
                    case "3":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `😂 *F̶U̶N̶ C̶O̶M̶M̶N̶A̶D̶S̶ 😂*${menu.fun || 'No commands found'}

${footer_Bot}` },{ quoted: mek });    
                    break;
                case "4":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `*👤O̶W̶N̶E̶R̶ C̶O̶M̶M̶N̶A̶D̶S̶ 👤*${menu.owner || 'No commands found'}

${footer_Bot}` },{ quoted: mek });    
                    break;
                case "5":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `🧠 *A̶I̶ C̶O̶M̶M̶N̶A̶D̶S̶ 🧠*${menu.ai || 'No commands found'}
                
${footer_Bot}` },{ quoted: mek });    
                    break;
                case "6":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `🛠️ *T̷O̷O̷L̷ C̶O̶M̶M̶N̶A̶D̶S̶ 🛠️*${menu.tool || 'No commands found'}
                
${footer_Bot}` },{ quoted: mek });    
                    break;
                case "7":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `*🫟 C̶O̶N̶V̶E̶R̶T̶ C̶O̶M̶M̶N̶A̶D̶S̶ 🫟*${menu.convert || 'No commands found'}
                
${footer_Bot}` },{ quoted: mek });    
                    break;
                case "8":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `*🫟 O̶T̶H̶E̶R̶ C̶O̶M̶M̶N̶A̶D̶S̶ 🫟*${menu.other || 'No commands found'}

${footer_Bot}` },{ quoted: mek });    
                    break;
                case "9":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `*🔰 R̶E̶A̶C̶T̶I̶O̶N̶ C̶O̶M̶M̶N̶A̶D̶S̶ 🔰*${menu.reaction || 'No commands found'}

${footer_Bot}` },{ quoted: mek });    
                    break;
                case "10":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `*📁 M̶A̶I̶N̶ C̶O̶M̶M̶N̶A̶D̶S̶ 📁*${menu.main || 'No commands found'}
                
${footer_Bot}` },{ quoted: mek });    
                    break;
                case "11":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `*🗞️ N̷E̷W̷S̷ C̶O̶M̶M̶N̶A̶D̶S̶ 🗞️*${menu.news || 'No commands found'}
                
${footer_Bot}` },{ quoted: mek });    
                    break;
                case "12":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `*🔍 S̴E̴A̴R̴C̴H̴ C̶O̶M̶M̶N̶A̶D̶S̶ 🔍*${menu.search || 'No commands found'}
                
${footer_Bot}` },{ quoted: mek });    
                    break;
                case "13":        
                       await conn.sendMessage(from,{ image: { url: config.MENU_IMAGE_URL },caption: `*💥 B̷U̷G̷ C̶O̶M̶M̶N̶A̶D̶S̶ 🔍*

*👤 This is only owner working commands.*${menu.bug || 'No commands found'}
                
${footer_Bot}` },{ quoted: mek });    
                    break;
                    default:
                            await conn.sendMessage(from,{text: "*❌ Please enter valid number (1-13).*" }, { quoted: tharuzzmsg });
            }
           }          
        });

    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});
