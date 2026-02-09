const fs = require('fs');

module.exports = async (m, { pushname, prefix, neo }) => {
const message = `_*ʜᴀɪ ${pushname} 👋🏻*_\n\n> \`➲ 𝗧𝗼𝗼𝗹𝘀\`\n┏ ━━━━━━━━━━━━━━━━━━ •`;
const list = [
'sᴛʏʟᴇ',
'ʜᴅ',
'ɪǫᴄ',
'sᴜᴘᴇʀʜᴅ',
'ᴛᴏᴜʀʟ',
'ʀᴇᴀᴄᴛᴄʜ',
'ʀᴇᴍᴏᴠᴇʙɢ',
'ᴘɪɴ',
'ᴛᴏᴀɴɪᴍᴇ'
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
title: "ᴛᴏᴏʟs ᴍᴇɴᴜ",
body: "ᴛᴇʀᴠᴇʀɪғɪᴋᴀsɪ ᴏʟᴇʜ ᴡʜᴀᴛsᴀᴘᴘ",
mediaType: 1,
thumbnailUrl: global.imgmenu,
sourceUrl: '',
renderLargerThumbnail: true
}
}
});
};