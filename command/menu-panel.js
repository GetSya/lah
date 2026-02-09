const fs = require('fs');

module.exports = async (m, { pushname, prefix, neo }) => {
const message = `_*ʜᴀɪ ${pushname} 👋🏻*_\n\n> \`➲ 𝗣𝗮𝗻𝗲𝗹 𝗠𝗮𝗻𝗮𝗴𝗲𝗿 𝗩𝟭\`\n┏ ━━━━━━━━━━━━━━━━━━ •`;
const list = [
'1ɢʙ',
'2ɢʙ',
'3ɢʙ',
'4ɢʙ',
'5ɢʙ',
'6ɢʙ',
'7ɢʙ',
'8ɢʙ',
'9ɢʙ',
'10ɢʙ',
'ᴜɴʟɪ',
'ᴀᴅᴅᴀᴋsᴇs',
'ᴅᴇʟᴀᴋsᴇs',
'ʟɪsᴛᴀᴋsᴇs',
'ᴅᴇʟᴜsᴇʀ',
'ʟɪsᴛᴘᴀɴᴇʟ',
'ᴅᴇʟᴘᴀɴᴇʟ',
'ᴄʟᴇᴀʀᴘᴀɴᴇʟ',
'ᴄᴀᴅᴍɪɴ',
'ᴅᴇʟᴀᴅᴍɪɴ',
'ʟɪsᴛᴀᴅᴍɪɴ'
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
title: "ᴘᴀɴᴇʟ ᴠ1 ᴍᴇɴᴜ",
body: "ᴛᴇʀᴠᴇʀɪғɪᴋᴀsɪ ᴏʟᴇʜ ᴡʜᴀᴛsᴀᴘᴘ",
mediaType: 1,
thumbnailUrl: global.imgmenu,
sourceUrl: '',
renderLargerThumbnail: true
}
}
});
};