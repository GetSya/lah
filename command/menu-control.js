const fs = require('fs');

module.exports = async (m, { pushname, prefix, neo }) => {
const message = `_*ʜᴀɪ ${pushname} 👋🏻*_\n\n> \`➲ 𝗕𝗼𝘁 𝗖𝗼𝗻𝘁𝗿𝗼𝗹\`\n┏ ━━━━━━━━━━━━━━━━━━ •`;
const list = [
'ʙᴀᴄᴋᴜᴘsᴄ',
'sᴇʟғ',
'sᴄ',
'sᴇᴛ',
'ᴘᴜʙʟɪᴄ',
'ɢᴄᴏɴʟʏ',
'ᴀᴜᴛᴏᴠɪᴇᴡsᴡ',
'ᴀᴅᴅᴏᴡɴᴇʀ',
'ᴅᴇʟᴏᴡɴᴇʀ',
'ʟɪsᴛᴏᴡɴᴇʀ',
'ᴀᴅᴅᴄᴀsᴇ',
'ᴅᴇʟᴄᴀsᴇ',
'ɢᴇᴛᴄᴀsᴇ',
'ᴏᴡɴᴇʀ',
'sᴇᴛᴄᴍᴅ',
'ᴅᴇʟᴄᴍᴅ'
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
title: "ᴄᴏɴᴛʀᴏʟ ᴍᴇɴᴜ",
body: "ᴛᴇʀᴠᴇʀɪғɪᴋᴀsɪ ᴏʟᴇʜ ᴡʜᴀᴛsᴀᴘᴘ",
mediaType: 1,
thumbnailUrl: global.imgmenu,
sourceUrl: '',
renderLargerThumbnail: true
}
}
});
};