const fs = require('fs');

module.exports = async (m, { pushname, prefix, neo }) => {
const message = `_*ʜᴀᴜ ${pushname} 👋🏻*_\n\n> \`➲ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂\`\n┏ ━━━━━━━━━━━━━━━━━━ •`;
const list = [
'ᴍᴇᴅɪᴀғɪʀᴇ',
'ᴛɪᴋᴛᴏᴋ',
'ɪɴsᴛᴀɢʀᴀᴍ',
'ᴘʟᴀʏ',
'ʏᴛᴍᴘ3',
'ʏᴛᴍᴘ4'
];

let menuText = '';
list.forEach(cmd => {
menuText += `ᢀ${hias} ${prefix}${cmd}\n`;
});

const fullMessage = `${message}\n${menuText}┗ ━━━━━━━━━━━━━━━━━━ •`;

await neo.sendMessage(m.chat, {
footer: global.foot,
buttons: [
{
buttonId: ".menu all",
buttonText: { displayText: 'ᴀʟʟ ᴍᴇɴᴜ' },
type: 1
},
],
headerType: 1,
viewOnce: true,
document: fs.readFileSync("./package.json"),
fileName: "ʜᴀɪᴅᴀʀ ʀᴠx",
mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
fileLength: 99999999,
caption: fullMessage,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
externalAdReply: {
title: "ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ",
body: "ᴛᴇʀᴠᴇʀɪғɪᴋᴀsɪ ᴏʟᴇʜ ᴡʜᴀᴛsᴀᴘᴘ",
mediaType: 1,
thumbnailUrl: global.imgmenu,
sourceUrl: '',
renderLargerThumbnail: true
}
}
});
};