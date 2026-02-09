const { default:
makeWASocket,
fetchLatestBaileysVersion, 
downloadContentFromMessage,
useMultiFileAuthState,
BufferJSON,
WA_DEFAULT_EPHEMERAL,
generateWAMessageFromContent,
proto, generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
areJidsSameUser,
getContentType
} = require('naruyaizumi')

const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const cheerio = require('cheerio')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const pinterest = require('../library/sc/pinterest.js')
const { remini } = require('../library/sc/remini.js');
const readline = require("readline");
const crypto = require('crypto');
const makeid = crypto.randomBytes(3).toString('hex')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('../library/converter.js')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('../library/myfunc.js')
let afk = require("../library/afk.js");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('../library/premiun.js')
const NodeCache = require('node-cache');
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('../library/uploader.js')

let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//——————————[ TIME ]——————————//

const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var neoytimewisher = `sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌌`
 }
 if(time2 < "19:00:00"){
var neoytimewisher = `sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌃`
 }
 if(time2 < "18:00:00"){
var neoytimewisher = `sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ 🌃`
 }
 if(time2 < "15:00:00"){
var neoytimewisher = `sᴇʟᴀᴍᴀᴛ sᴏʀᴇ 🌅`
 }
 if(time2 < "11:00:00"){
var neoytimewisher = `sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ 🌄`
 }
 if(time2 < "05:00:00"){
var neoytimewisher = `sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ 🌄`
 } 
module.exports = asya = async (asya, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
 
//——————————[ Main Menu ]——————————//

const menus = {
  all: require('../command/menu-all.js'),
  ai: require('../command/menu-ai.js'),
  control: require('../command/menu-control.js'),
  csc: require('../command/menu-csc.js'),
  download: require('../command/menu-download.js'),
  grup: require('../command/menu-grup.js'),
  panel: require('../command/menu-panel.js'),
  panel2: require('../command/menu-panel2.js'),
  sticker: require('../command/menu-sticker.js'),
  store: require('../command/menu-store.js'),
  tools: require('../command/menu-tools.js')
};

//——————————[ CONST PELER = DIA ]——————————//
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'interactiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '.'
const budy = (typeof m.text == 'string' ? m.text : '.')
let { allmenu } = require('../message/help.js')
const prefa = global.prefa instanceof Array ? global.prefa : [global.prefa]
const prefix = prefa.find(p => body.startsWith(p))
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "Anomali"
        const botNumber = await asya.decodeJid(asya.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.key.fromMe ? (asya.user.id.split(':')[0]+'@s.whatsapp.net' || asya.user.id) : (m.key.participant || m.key.remoteJid)
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = isGroup 
  ? await asya.groupMetadata(m.chat).catch(() => ({})) 
  : {};
const groupName = groupMetadata.subject || '';
const participants = groupMetadata.participants || [];
const groupAdmins = participants.filter(v => v.admin).map(v => v.id);
const groupOwner = groupMetadata.owner || '';
const groupMembers = groupMetadata.participants || [];
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false


        const neoId = asya.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? asya.user.id.split(':')[0] + "@s.whatsapp.net" || asya.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = neoId.includes(senderId);
        expiredCheck(asya, m, premium);
        
        
//——————————[ DATABASE ]——————————//

const senderNumber = sender.split('@')[0]
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
const OWNER_FILE = path.join(__dirname, '..', 'database', 'owner.json');
const isCreator = ownerNumber.includes(senderNumber) || isBot || senderNumber === ownernumber;
const swebnumber = JSON.parse(fs.readFileSync("./database/sellerweb.json"))

const isSellerWeb = swebnumber.includes(senderNumber) || isBot
const sscnumber = JSON.parse(fs.readFileSync("./database/sellersc.json"))
const sellerpanel = JSON.parse(fs.readFileSync("./database/panelseller.json"))
const isGcPanel = sellerpanel.includes(m.chat)
const sellerpanel2 = JSON.parse(fs.readFileSync("./database/panelseller2.json"))
const isGcPanel2 = sellerpanel2.includes(m.chat)
const sellerpanel3 = JSON.parse(fs.readFileSync("./database/panelseller3.json"))
const isGcPanel3 = sellerpanel3.includes(m.chat)
let db = JSON.parse(fs.readFileSync('./database/set.json'));
const isSellerSc = sscnumber.includes(senderNumber) || isBot

//——————————[ PRESET QUOTED ]——————————//

const qwb = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: `628555`, participant: '0@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: `${pushname}-sann 💬` } }, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "INR" }}}}

const syaa = { key:{ remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message:{ newsletterAdminInviteMessage: { newsletterJid: '120363398785368583@newsletter', newsletterName: global.namach, caption: `${botname} ᴠᴇʀɪғɪᴇᴅ ʙʏ ${ownername}`, inviteExpiration: 0}}}

const qwa = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363398785368583@newsletter',
    newsletterName: global.botname,
    caption: body
}}
}

//——————————[ FUNCTION ]——————————//

        async function balas(teks) {
          asya.sendMessage(m.chat, {text: text}, {quoted: m})
        };
        
        async function reply(teks) {
        const mek = { text: teks };
        return asya.sendMessage(m.chat, mek, { quoted: m }
        );
        };

        asya.sendPresenceUpdate('uavailable', from)
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await asya.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await asya.getName(i)}\nFN:${await asya.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:'https://www.youtube.com/channel/UCZzt-Qw0zTYc8UP-LL2G5fA'\nitem2.X-ABLabel:YouTube\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	function saveDb() {
    fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
}
let ownerList = [];
if (fs.existsSync(OWNER_FILE)) {
    try {
        ownerList = JSON.parse(fs.readFileSync(OWNER_FILE));
    } catch (e) {
        console.error("ɢᴀɢᴀʟ ᴍᴇᴍʙᴀᴄᴀ ᴏᴡɴᴇʀ.ᴊsᴏɴ:", e);
        ownerList = [];
    }
} else {
    fs.writeFileSync(OWNER_FILE, JSON.stringify([], null, 2));
}
async function saveOwnerList() {
    fs.writeFileSync(OWNER_FILE, JSON.stringify(ownerList, null, 2));
}
        const func = {
  capital: (text) => {
    return text ? text.replace(/\b\w/g, l => l.toUpperCase()) : '';
  }
};
const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}
const axios = require("axios");

asya.sendButtonDoc = async (chat, judul, teks, button, quot) => {

  let msg = await generateWAMessageFromContent(chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
                mentionedJid: ments(teks),
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363398785368583@newsletter',
              serverMessageId: null,
              newsletterName: `${namach}`
            },
            externalAdReply: {
              showAdAttribution: true,
              containsAutoReply: true,
              title: `ʜᴀɪᴅᴀʀ ʀᴠx`,
              body: `ᴠᴇʀsɪ ${versi}`,
              thumbnailUrl: global.imgthumb,
              sourceUrl: '',
              mediaType: 1,
              renderLargerThumbnail: true
                }
            },
          body: proto.Message.InteractiveMessage.Body.create({
            text: teks
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: foot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: judul,
            subtitle: global.ownername,
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({
              document: fs.readFileSync("./package.json"),
              mimetype: "application/pdf",
              fileLength: 10000000000,
              fileName: `ʜᴀɪᴅᴀʀ ʀᴠx`
            }, { upload: await asya.waUploadToServer }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: button
          })
          })
      }
    }
  }, { quoted: quot });

  await asya.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
};
const font = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
        const separator = chalk.hex("#00ffd5")("\n<================= Haidar Space =================>\n")
        const neoLabel = chalk.hex("#ff00c8")("[ Haidar Smg ]")
        const neoTime = chalk.hex("#00ffff")(new Date().toLocaleString())

if (m.message && m.isGroup && m.text.startsWith('.')) {
     console.log(separator)
     console.log(chalk.hex("#00ff88")(">> Group Detected"))
     console.log(
        neoLabel, chalk.bgHex("#101010").white(neoTime),
        chalk.bgHex("#0055ff").white(` ${budy || m.mtype} `)
    )
    console.log(chalk.hex("#ffaa00")("↳ From:"), chalk.hex("#00ff00")(pushname), chalk.hex("#999999")(m.sender))
    console.log(chalk.hex("#ffaa00")("↳ In Group:"), chalk.hex("#00ffcc")(groupName), chalk.hex("#666666")(m.chat))
} else {
    console.log(separator)
    console.log(chalk.hex("#00ff88")(">> Private Chat"))
    console.log(
        neoLabel, chalk.bgHex("#101010").white(neoTime),
        chalk.bgHex("#0055ff").white(` ${budy || m.mtype} `)
    )
    console.log(chalk.hex("#ffaa00")("↳ From:"), chalk.hex("#00ff00")(pushname), chalk.hex("#999999")(m.sender))
}

let pinterestSession = {};
const cooldowns = {}; // Format: { commandName: timestamp }
const cooldownTime = 60000; // 60 detik jeda, ubah sesuai kebutuhan
const globalCooldown = new Map();
const globalCooldownTime = 30 * 1000; // 30 detik (ubah sesuai kebutuhan)
//——————————[ VALIDASI ]——————————//

global.reactLoading = async (m) => {
  try {
    const msg = await asya.sendMessage(m.chat, {
      react: {
        text: global.loadreact,
        key: m.key
      }
    });
    setTimeout(() => {
      asya.sendMessage(m.chat, {
        react: {
          text: '',
          key: m.key
        }
      });
    }, 3000);

  } catch (err) {
    console.error('[ x ] reactLoading error:', err);
  }
};

const example = async (teks) => {
  const commander = `*ᴄᴏɴᴛᴏʜ ᴄᴏᴍᴍᴀɴᴅ:*
➤ *${prefix + command}* ${teks}`;

  const po = {
    text: commander,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363398785368583@newsletter',
        newsletterName: global.namach,
      },
      externalAdReply: {
        showAdAttribution: true,
        title: '- sɪsᴛᴇᴍ ᴡʜᴀᴛsᴀᴘᴘ -',
        body: `ᴅᴀʀɪ ᴘᴇɴɢɢᴜɴᴀ ${pushname}`,
        thumbnailUrl: global.imgmenu,
        sourceUrl: global.web,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  };
  return asya.sendMessage(m.chat, po, { quoted: syaa });
};

//——————————[ Z ]——————————//
  
if (db.settings.gconly && !mek.key.remoteJid.endsWith('@g.us') && !isCreator) return;
if (global.selfmode && !isCreator) return;
if (mek.mimetype === 'image/webp') {
    let media = await mek.download();
    let hash = crypto.createHash('md5').update(media).digest('hex');
    if (db.stickcmd[hash]) {
        let fakeMessage = { ...mek, message: { conversation: db.stickcmd[hash] } };
        require('../system/riifinity.js')(neo, fakeMessage, store);
    }
}
const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }
        function monospace(string) {
            return '```' + string + '```'
        }
        function randomNomor(min, max = null) {
            if (max !== null) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min + 1)) + min;
            } else {
              return Math.floor(Math.random() * min) + 1
            }
          }
        async function getType(url) { //@rifza.p.p
            return new Promise((resolve, reject) => {
                axios.get(url).then(z => {
                    let a = z.request.res.responseUrl;
                    if (a.includes('/photo/')) {
                        resolve('image');
                    } else {
                        resolve('video');
                    }
                }).catch(reject);
            });
        }
async function tiksave(url) {
            let res = {};
            res.type = await getType(url);

            let { data } = await axios.request({
                url: "https://tiksave.io/api/ajaxSearch",
                method: "POST",
                data: new URLSearchParams({
                    q: url,
                    lang: "en"
                })
            });

            const $ = cheerio.load(data.data);

            let dlbutton = Array.from($('.tik-button-dl')).map((element) => {
                const url = $(element).attr('href');
                const text = $(element).text().trim();
                const description = text.replace(/\s+/g, ' ').trim();
                return { description, url };
            });

            res.media = res.type == "image" ? $('.photo-list .download-box li').map((index, element) => {
                let url = $(element).find('.download-items__thumb img').attr('src');
                return { url };
            }).get() : dlbutton;

            res.audio = res.type == "video" ?
                { url: res.media[3].url } :
                { url: dlbutton[1].url };

            return res;
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    balas(`ᴊᴀɴɢᴀɴ ᴛᴀɢ ᴅɪᴀ, ᴅɪᴀ sᴇᴅᴀɴɢ ᴀғᴋ\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                asya.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴋᴇᴍʙᴀʟɪ sᴇᴛᴇʟᴀʜ ᴀғᴋ`, m)
            }
        }
      
//——————————[ COMMAND CASE ]——————————//

switch (command) {
case 'menu':{
    var data = allmenu(sender, prefix)
    asya.sendTextWithMentions(m.chat, data, qwb)
}
break

/* ========================== MAIN MENU ==================================== */
case 'tourl': {
await reactLoading(m);
    let media = await asya.downloadAndSaveMediaMessage(qmsg)
    if (/image/.test(mime)) {
        let anu = await UploadFileUgu(media)
        reply(util.format(anu))
    } else if (!/image/.test(mime)) {
        let anu = await UploadFileUgu(media)
        reply(util.format(anu))
    }
    await fs.unlinkSync(media)
}
    break
case 'brat': {
  if (!text) return example(`ʜᴀʟᴏ ʙʀᴏ`);
  if (text.length > 500) return balas(`Karakter Terbatas!, maksimal 500 Huruf!`);
await reactLoading(m);
  try {
    const res = await fetch(`https://api.siputzx.my.id/api/m/brat?text=${text}&isAnimated=false&delay=500`);
    if (!res.ok) throw 'API error';

    const buffer = await res.buffer();

    await asya.sendImageAsSticker(m.chat, buffer, m, { packname: global.packname, author: global.author });
  } catch (err) {
    console.error(err);
    reply(`Error!`)
  }
}
break;
        case 'sticker':
case 'stiker':
case 's': {
  if (!quoted || (!/image/.test(mime) && !/video/.test(mime))) return example(`ᴋɪʀɪᴍ ᴀᴛᴀᴜ ʀᴇᴘʟʏ ғᴏᴛᴏ/ᴠɪᴅᴇᴏ`);
await reactLoading(m);
  let media = await asya.downloadAndSaveMediaMessage(quoted);
  let stickerOptions = {
    packname: global.packname || 'ʜᴀɪᴅᴀʀ',
    author: global.author || 'ʜᴀɪᴅᴀʀ ʀᴠx'
  };

  try {
    await asya.sendImageAsSticker(m.chat, media, m, stickerOptions);
  } catch {
    try {
      await asya.sendVideoAsSticker(m.chat, media, m, {
        ...stickerOptions,
        fps: 10,
        loop: 0
      });
    } catch (err) {
      console.error(err);
      balas('[ x ] ɢᴀɢᴀʟ ᴍᴇᴍʙᴜᴀᴛ sᴛɪᴄᴋᴇʀ.');
    }
  }

  fs.unlinkSync(media);
}
break;
//——————————[ Grup Manage ]——————————//
case 'buka':
case 'tutup': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isBotAdmins) return balas(mesg.botadm);
  if (!isAdmins) return balas(mesg.adm);

  const isClose = command.toLowerCase() === 'tutup';
  const actionText = isClose ? 'menutup' : 'membuka';
  const doneText = isClose ? '[ x ] ɢʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪᴛᴜᴛᴜᴘ.' : '[ ✓ ] ɢʀᴜᴘ ᴛᴇʟᴀʜ ᴅɪʙᴜᴋᴀ!';

  await asya.groupSettingUpdate(m.chat, isClose ? 'announcement' : 'not_announcement')
    .then(() => balas(`🔧 *ʙᴇʀʜᴀsɪʟ ${actionText} ɢʀᴜᴘ.*\n\n${doneText}`))
    .catch((err) => {
      console.error(err);
      m.reply('⚠️ ɢᴀɢᴀʟ ᴍᴇɴɢᴜʙᴀʜ ᴘᴇɴɢᴀᴛᴜʀᴀɴ ɢʀᴜᴘ. ᴘᴀsᴛɪᴋᴀɴ ʙᴏᴛ ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ!');
    });
}
break;

case 'kick': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isBotAdmins) return balas(mesg.botadm);
  if (!isAdmins) return balas(mesg.adm);

  let targets = [];

  if (m.quoted) targets.push(m.quoted.sender);
  if (m.mentionedJid.length) targets.push(...m.mentionedJid);
  if (targets.length === 0) return balas('❗ *ᴛᴀɢ ᴀᴛᴀᴜ ʀᴇᴘʟʏ ᴍᴇᴍʙᴇʀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴋɪᴄᴋ!*');

  targets = [...new Set(targets)];

  for (let user of targets) {
    if (user === m.sender) continue; // Jangan kick yang ngeksekusi
    if (user === asya.user.jid) continue; // Jangan kick bot
    if (typeof global.owner === 'object' && global.owner.map ? global.owner.map(v => v + "@s.whatsapp.net").includes(user) : global.owner + "@s.whatsapp.net" === user) {
      m.reply(`⚠️ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴍᴇɴɢᴇʟᴜᴀʀᴋᴀɴ ᴏᴡɴᴇʀ: @${user.split("@")[0]}`, { mentions: [user] });
      continue;
    }

    await asya.groupParticipantsUpdate(m.chat, [user], 'remove')
      .then(() => balas(`[ ✓ ] ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢᴇʟᴜᴀʀᴋᴀɴ: @${user.split("@")[0]}`, { mentions: [user] }))
      .catch((err) => {
        console.error(err);
        balas(`[ x ] ɢᴀɢᴀʟ ᴍᴇɴɢᴇʟᴜᴀʀᴋᴀɴ: @${user.split("@")[0]}`, { mentions: [user] });
      });
  }
}
break;

case 'promote':
case 'demote': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isBotAdmins) return balas(mesg.botadm);
  if (!isAdmins) return balas(mesg.adm);

  const isPromote = command === 'promote';
  let target;

  if (m.quoted) {
    target = m.quoted.sender;
  } else if (m.mentionedJid?.length) {

    target = m.mentionedJid[0];
  } else {
    return reply(`🔖 *ᴛᴀɢ ᴀᴛᴀᴜ ʀᴇᴘʟʏ ᴍᴇᴍʙᴇʀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ-${isPromote ? 'ᴊᴀᴅɪᴋᴀɴ' : 'ᴄᴀʙᴜᴛ'} ᴀᴅᴍɪɴ.*`);
  }

  try {
    await asya.groupParticipantsUpdate(m.chat, [target], isPromote ? 'promote' : 'demote');
    balas(`[ ✓ ] *ʙᴇʀʜᴀsɪʟ ${isPromote ? 'ᴍᴇɴᴊᴀᴅɪᴋᴀɴ' : 'ᴍᴇɴᴄᴀʙᴜᴛ'} ᴀᴅᴍɪɴ!*`);
  } catch (e) {
    console.error(e);
    balas(mesg.err);
  }
}
break;
case 'delete': case 'del': case 'piw': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isAdmins && m.key.participant !== m.sender) return balas(mesg.adm);
  if (!m.quoted) return balas('🗑️ *ʀᴇᴘʟʏ ᴘᴇsᴀɴ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪʜᴀᴘᴜs!*');

  try {
    await asya.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.quoted.id,
        participant: m.quoted.sender
      }
    });
  } catch (err) {
    console.error(err);
    reply(mesg.botadm);
  }
}
break;
case 'hidetag': case 'h': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isAdmins && !isCreator) return balas(mesg.adm);

  if (!text) return balas(`📢 *ᴄᴏɴᴛᴏʜ ᴘᴇɴɢɢᴜɴᴀᴀɴ:* ${prefix}${command} ᴘᴇsᴀɴ ʀᴀʜᴀsɪᴀ ᴜɴᴛᴜᴋ sᴇᴍᴜᴀ ᴏʀᴀɴɢ`);

  const groupMetadata = await asya.groupMetadata(m.chat);
  const members = groupMetadata.participants.map(p => p.id);

  await asya.sendMessage(m.chat, {
    text: text,
    mentions: members
  }, { quoted: qwb });
}
break;
case 'pengumuman': case 'p': {
  if (!m.isGroup) return balas(mesg.gc);
  if (!isAdmins && !isCreator) return balas(mesg.adm);

  if (!text) return balas(`📢 *ᴄᴏɴᴛᴏʜ:* ${prefix}${command} 62895326884022 ʜᴀʟᴏ sᴇᴍᴜᴀ`);

  // Pisah nomor dan isi pesan
  const splitIndex = text.indexOf(' ');
  if (splitIndex === -1) return balas(`[ x ] ғᴏʀᴍᴀᴛ sᴀʟᴀʜ!\n\n*ᴄᴏɴᴛᴏʜ:* ${prefix}${command} 628xxx,628ʏʏʏ ʜᴀʟᴏ sᴇᴍᴜᴀ`);

  const numberList = text.slice(0, splitIndex).split(',').map(n => n.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
  const messageText = text.slice(splitIndex + 1);

  if (numberList.length === 0 || !messageText) return balas(`[ x ] ʜᴀʀᴀᴘ ᴍᴀsᴜᴋᴋᴀɴ ɴᴏᴍᴏʀ ᴅᴀɴ ᴘᴇsᴀɴ!\n\n*ᴄᴏɴᴛᴏʜ:* ${prefix}${command} 628xxx,628ʏʏʏ ʜᴀʟᴏ sᴇᴍᴜᴀ`);

  await asya.sendMessage(m.chat, {
    text: messageText,
    mentions: numberList
  }, { quoted: qwb });
}
break;
/* ========================== DOWNLOADER ==================================*/
case 'tt':
                    case 'tiktok': {
                    if (!text) {
                            return reply(`Masukkan linknya\nContoh: /${command} https://vt.tiktok.com/ZSYc8J7ua/`);
                        }
                    
                        tiksave(q)
                            .then(data => {
                                if (!data || !data.type || !data.media || !Array.isArray(data.media)) {
                                    return reply("Data tidak valid atau tidak ditemukan.");
                                }
                    
                                switch (data.type) {
                                    case 'video':
                                        if (data.media.length > 1 && data.media[1].description && data.media[1].url) {
                                            asya.sendMessage(m.chat, {
                                                video: { url: data.media[1].url },
                                                caption: data.media[1].description,
                                            });
                                        } else {
                                            reply("Media video tidak ditemukan atau data tidak valid.");
                                        }
                                        break;
                    
                                    case 'image':
                                        data.media.forEach(item => {
                                            if (item.url) {
                                                asya.sendMessage(m.chat, { image: { url: item.url } });
                                            }
                                        });
                                        break;
                    
                                    default:
                                        reply("Tipe media tidak didukung.");
                                }
                                reply(`Ingin beli views TikTok & Instagram secara gratis?\n` + monospace("Yuk ketik /order"))
                            })
                            .catch(err => {
                                console.error(err);
                                reply("Terjadi kesalahan saat memproses permintaan.");
                            });
                        break;
                    }
/* ========================== BOT CONTROL =================================*/

case 'donasi': {
  const teks = `
𝗗𝗼𝗻𝗮𝘀𝗶 𝗔𝘁𝗮𝘂 𝗗𝘂𝗸𝘂𝗻𝗴𝗮𝗻 𝗕𝗼𝘁

_"ᴘᴇʀᴜᴍᴘᴀᴍᴀᴀɴ (ɴᴀғᴋᴀʜ ʏᴀɴɢ ᴅɪᴋᴇʟᴜᴀʀᴋᴀɴ ᴏʟᴇʜ) ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇɴᴀғᴋᴀʜᴋᴀɴ ʜᴀʀᴛᴀɴʏᴀ ᴅɪᴊᴀʟᴀɴ ᴀʟʟᴀʜ sᴇᴘᴇʀᴛɪ sᴇʙᴜᴛɪʀ ʙɪᴊɪ ʏᴀɴɢ ᴍᴇɴᴜᴍʙᴜʜᴋᴀɴ ᴛᴜᴊᴜʜ ʙᴜʟɪʀ, ᴘᴀᴅᴀ ᴛɪᴀᴘ ᴛɪᴀᴘ ʙᴜʟɪʀ: sᴇʀᴀᴛᴜs ʙɪᴊɪ. ᴀʟʟᴀʜ ᴍᴇʟɪᴘᴀᴛɢᴀɴᴅᴀᴋᴀɴ (ɢᴀɴᴊᴀʀᴀɴ) ʙᴀɢɪ sɪᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴋᴇʜᴇɴᴅᴀᴋɪ."_ 
*(ǫs. ᴀʟ-ʙᴀǫᴀʀᴀʜ: 261)*

*ᴍᴇᴛᴏᴅᴇ ᴅᴏɴᴀsɪ:*

💸 𝗗𝗮𝗻𝗮/𝗚𝗼𝗽𝗮𝘆/𝗢𝘃𝗼/𝗤𝗿𝗶𝘀 💸
wa.me/${global.ownernumber}

𝗗𝗮𝗻𝗮 : 088213292687
𝗚𝗼𝗽𝗮𝘆 : 088213292687
𝗢𝘃𝗼 : 088213292687
𝗤𝗿𝗶𝘀 : 𝗠𝗶𝗻𝘁𝗮 𝗞𝗲 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿


ᴛᴇʀɪᴍᴀᴋᴀsɪʜ ᴀᴛᴀs ᴅᴜᴋᴜɴɢᴀɴ ᴍᴜ!
  `.trim();

  balas(teks);
}
break;

case 'backupsc': {
 if (!isCreator) return balas(mesg.own);
 const AdmZip = require('adm-zip');
 const fs = require('fs');
 const path = require('path');

 try {
 const folderPath = './';
 const zipFilePath = path.join(__dirname, `../backup_${Date.now()}.zip`);
 const zip = new AdmZip();

 const addFolderToZip = (folder, zipInstance, baseFolder = '') => {
 const files = fs.readdirSync(folder);
 for (const file of files) {
 const fullPath = path.join(folder, file);
 const relativePath = path.join(baseFolder, file);
 const stat = fs.statSync(fullPath);

 // Daftar file/folder yang harus dilewati
 const skip = [
 'node_modules', 'session', '.npm', '.cache', '.config',
 'package-lock.json'
 ];

 const isExcluded =
 skip.includes(file) ||
 file.startsWith('backup_') ||
 file.endsWith('.mp4') ||
 file.endsWith('.zip');

 if (isExcluded) continue;

 if (stat.isDirectory()) {
 zipInstance.addFile(relativePath + '/', Buffer.from(''));
 addFolderToZip(fullPath, zipInstance, relativePath);
 } else {
 zipInstance.addLocalFile(fullPath, baseFolder);
 }
 }
 };

 addFolderToZip(folderPath, zip);

 zip.writeZip(zipFilePath);

 await asya.sendMessage(m.chat, {
 document: fs.readFileSync(zipFilePath),
 fileName: `ʜᴀɪᴅᴀʀ-ʙᴀᴄᴋᴜᴘ-${new Date().toLocaleDateString('id-ID')}.zip`,
 mimetype: 'application/zip',
 caption: '*[ ✓ ] ʙᴀᴄᴋᴜᴘ sᴄ ʙᴇʀʜᴀsɪʟ ᴅɪʙᴜᴀᴛ!*\n\nʙᴀᴄᴋᴜᴘ ɪɴɪ ʜᴀɴʏᴀ ᴅᴀᴘᴀᴛ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ.\nsɪʟᴀʜᴋᴀɴ sɪᴍᴘᴀɴ ʙᴀɪᴋ ʙᴀɪᴋ.'
 }, { quoted: qneo });

 fs.unlinkSync(zipFilePath);
 } catch (err) {
 console.error(err);
 balas("[ ✓ ] ɢᴀɢᴀʟ ʙᴀᴄᴋᴜᴘ sᴄ!");
 }
}
break;


case 'addcase': {
  if (!isCreator) return balas(mesg.own);
  if (!text.includes("case '")) return example('ᴄᴀsᴇɴʏᴀ');

  const fs = require('fs');
  const namaFile = 'system/riifinity.js';
  const caseBaru = `${text.trim()}`;

  try {
    const data = fs.readFileSync(namaFile, 'utf8');
    const posisiTarget = data.indexOf("case 'addcase':");

    if (posisiTarget !== -1) {
      const kodeBaruLengkap = data.slice(0, posisiTarget) + '\n' + caseBaru + '\n' + data.slice(posisiTarget);
      fs.writeFileSync(namaFile, kodeBaruLengkap, 'utf8');
      m.reply(`[ ✓ ] ʙᴇʀʜᴀsɪʟ ᴍᴇɴʏɪsɪᴘᴋᴀɴ ᴄᴀsᴇ ʙᴀʀᴜ!\nsɪʟᴀʜᴋᴀɴ ʀᴇsᴛᴀʀᴛ ʙᴏᴛ ᴀɢᴀʀ ᴄᴀsᴇ ᴀᴋᴛɪғ.`);
    } else {
      m.reply('[ x ] ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ ᴘᴏsɪsɪ ᴛᴀʀɢᴇᴛ ᴜɴᴛᴜᴋ ᴍᴇɴʏɪsɪᴘᴋᴀɴ ᴄᴀᴅᴇ!');
    }
  } catch (err) {
    console.error(err);
    m.reply('[ x ] ᴛᴇʀᴊᴀᴅɪ ᴇʀʀᴏʀ sᴀᴀᴛ ᴍᴇᴍʙᴀᴄᴀ/ᴍᴇɴᴜʟɪs ғɪʟᴇ!');
  }
}
break;

case 'delcase': {
  if (!isCreator) return balas(mesg.own);
  if (!text) return example('ɴᴀᴍᴀ ᴄᴀsᴇ');

  const fs = require('fs');
  const namaFile = 'system/riifinity.js';
  const namaCase = text.trim();

  try {
    let isiFile = fs.readFileSync(namaFile, 'utf8');

    const regex = new RegExp(`case ['"]${namaCase}['"]:[\\s\\S]*?break;`, 'g');
    if (!regex.test(isiFile)) return m.reply(`[ x ] ᴄᴀsᴇ '${namaCase}' ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ!`);

    const isiBaru = isiFile.replace(regex, '');
    fs.writeFileSync(namaFile, isiBaru, 'utf8');

    m.reply(`[ ✓ ] ᴄᴀsᴇ '${namaCase}' ʙᴇʀʜᴀsɪʟ ᴅɪʜᴀᴘᴜs!\nsɪʟᴀʜᴋᴀɴ ʀᴇsᴛᴀʀᴛ ʙᴏᴛ.`);
  } catch (err) {
    console.error(err);
    m.reply('[ x ] ɢᴀɢᴀʟ ᴍᴇɴɢʜᴀᴘᴜs ᴄᴀsᴇ! ᴄᴇᴋ ᴋᴇᴍʙᴀʟɪ sᴛʀᴜᴋᴛᴜʀ ғɪʟᴇ.');
  }
}
break;

case 'getcase': {
  if (!isCreator) return balas(mesg.own);
  if (!text) return example('ɴᴀᴍᴀ ᴄᴀsᴇ');
  
  const namaFile = 'system/riifinity.js';
  const namaCase = text.trim();

  try {
    const isiFile = fs.readFileSync(namaFile, 'utf8');
    const regex = new RegExp(`(case ['"]${namaCase}['"]:[\\s\\S]*?break;)`, 'g');
    const cocok = isiFile.match(regex);

    if (!cocok) return m.reply(`[ x ] ᴄᴀsᴇ '${namaCase}' ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ!`);

    const isiCase = cocok[0];

    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: isiCase
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: 'cta_copy',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'sᴀʟɪɴ ᴄᴀsᴇ',
                    copy_code: isiCase
                  })
                }
              ]
            })
          })
        }
      }
    }, { userJid: m.sender, quoted: m });

    await asya.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

  } catch (err) {
    console.error(err);
    m.reply('[ x ] ɢᴀɢᴀʟ ᴍᴇᴍʙᴀᴄᴀ ᴄᴀsᴇ!');
  }
}
break;

case "addowner": {
        if (!isCreator) return balas(mesg.own);
        if (!text) return example("628xxx/ᴛᴀɢ!");
        let user = m.mentionedJid[0] || text.replace(/\D/g, '') + "@s.whatsapp.net";
        if (ownerList.includes(user)) return balas(`ɴᴏᴍᴏʀ ${user.split('@')[0]} sᴜᴅᴀʜ ᴍᴇɴᴊᴀᴅɪ ᴏᴡɴᴇʀ!`);
        ownerList.push(user);
        await saveOwnerList();
        balas(`ʙᴇʀʜᴀsɪʟ ᴍᴇɴᴀᴍʙᴀʜᴋᴀɴ ${user.split('@')[0]} sᴇʙᴀɢᴀɪ ᴏᴡɴᴇʀ ʙᴏᴛ.`);
    }
    break;

    case "delowner": {
        if (!isCreator) return balas(mesg.own);
        if (!text) return example("628xxx/ᴛᴀɢ!");
        let user = m.mentionedJid[0] || text.replace(/\D/g, '') + "@s.whatsapp.net";
        if (!ownerList.includes(user)) return balas(`ɴᴏᴍᴏʀ ${user.split('@')[0]} ʙᴜᴋᴀɴ ᴏᴡɴᴇʀ!`);
        ownerList = ownerList.filter(o => o !== user);
        await saveOwnerList();
        balas(`ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢʜᴀᴘᴜs ${user.split('@')[0]} ᴅᴀʀɪ ᴅᴀғᴛᴀʀ ᴏᴡɴᴇʀ ʙᴏᴛ.`);
    }
    break;

case "listowner": {
        if (!isCreator) return balas(mesg.own);
        if (ownerList.length === 0) return balas("ʙᴇʟᴜᴍ ᴀᴅᴀ ᴏᴡɴᴇʀ ʏᴀɴɢ ᴛᴇʀᴅᴀғᴛᴀʀ.");
        let teks = "╭───「 *ʟɪsᴛ ᴏᴡɴᴇʀ ᴛᴀᴍʙᴀʜᴀɴ* 」───\n";
        ownerList.forEach((owner, index) => {
            teks += `├─ ${index + 1}. ${owner.split('@')[0]}\n`;
        });
        teks += "╰───────────────";
        balas(teks);
    }
    break;
case 'owner': {
  const kontakUtama = {
    displayName: '𝗥𝗶𝗳𝗶𝗶𝗻𝗶𝘁𝘆 𝗦𝗽𝗮𝗰𝗲',
    vcard: `BEGIN:VCARD
VERSION:3.0
N:;;;; 
FN:${global.ownername}
item1.TEL;waid=62895383301627:62895383301627
item1.X-ABLabel:ᴅᴇᴠᴇʟᴏᴘᴇʀ
item2.TEL;waid=${global.ownernumber}:${global.ownernumber}
item2.X-ABLabel:ᴍʏ ᴏᴡɴᴇʀ
EMAIL;type=INTERNET:${email}
ORG:ᴏᴡɴᴇʀ ʙᴏᴛ
END:VCARD`
  }
  await asya.sendMessage(from, {
    contacts: { contacts: [kontakUtama] },
    contextInfo: {
      forwardingScore: 999,
      isForwarded: false,
      mentionedJid: [sender],
      externalAdReply: {
        showAdAttribution: true,
        renderLargerThumbnail: true,
        title: font(`ᴏᴡɴᴇʀ ʜᴀɪᴅᴀʀ ʀᴠx`),
        containsAutoReply: true,
        mediaType: 1,
        jpegThumbnail: await getBuffer(global.imglogo),
        mediaUrl: `https://www.youtube.com/channel/UCZzt-Qw0zTYc8UP-LL2G5fA`,
        sourceUrl: `https://www.youtube.com/channel/UCZzt-Qw0zTYc8UP-LL2G5fA`
      }
    }
  }, { quoted: qneo })
}
break;
    
case 'self': 
  if (!isCreator) return balas(mesg.own);
  if (global.selfmode) return balas('ʙᴏᴛ sᴜᴅᴀʜ ᴅᴀʟᴀᴍ ᴍᴏᴅᴇ *sᴇʟғ*.');
  global.selfmode = true;
  balas('ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢɢᴀɴᴛɪ ᴋᴇ ᴍᴏᴅᴇ *sᴇʟғ*.');
  break;

case 'public':
  if (!isCreator) return balas(mesg.own);
  if (!global.selfmode) return balas('ʙᴏᴛ sᴜᴅᴀʜ ᴅᴀʟᴀᴍ ᴍᴏᴅᴇ *ᴘᴜʙʟɪᴄ*.');
  global.selfmode = false;
  balas('ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢɢᴀɴᴛɪ ᴋᴇ ᴍᴏᴅᴇ *ᴘᴜʙʟɪᴄ*.');
  break;
  
case 'autoviewsw':
    if (!isCreator) return balas(mesg.own);
    if (!q) return example ('ᴏɴ/ᴏғғ');
    if (q.toLowerCase() === 'on') {
        db.settings.autoview = true;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('ʙᴇʀʜᴀsɪʟ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ.');
    } else if (q.toLowerCase() === 'off') {
        db.settings.autoview = false;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('ʙᴇʀʜsɪʟ ᴅɪɴᴏɴᴀᴋᴛɪғᴋᴀɴ.');
    } else {
        example('ᴏɴ / ᴏғғ');
    }
    break;
 
case 'gconly':
    if (!isCreator) return balas(mesg.own);
    if (!q) return example('ᴏɴ/ᴏғғ');

    if (q.toLowerCase() === 'on') {
        db.settings.gconly = true;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('ᴍᴏᴅᴇ ɢᴄ ᴏɴʟʏ ʙᴇʀʜᴀsɪʟ ᴅɪ ᴀᴋᴛɪғᴋᴀɴ.');
    } else if (q.toLowerCase() === 'off') {
        db.settings.gconly = false;
        fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
        reply('ᴍᴏᴅᴇ ɢᴄ ᴏɴʟʏ ʙᴇʀʜᴀsɪʟ ᴅɪᴍᴀᴛɪᴋᴀɴ.');
    } else {
        reply('ɢᴜɴᴀᴋᴀɴ: .ɢᴄᴏɴʟʏ ᴏɴ / ᴏғғ');
    }
    break;
    
case 'setcmd':
    if (!isCreator) return balas(mesg.own);
    if (!quoted || quoted.mimetype !== 'image/webp') return example('ʀᴇᴘʟʏ sᴛɪᴄᴋᴇʀ ɴʏᴀ!');
    if (!q) return example('ᴍᴀsᴜᴋᴋᴀɴ ᴄᴏᴍᴍᴀɴᴅ ʏᴀɴɢ ᴍᴀᴜ ᴅɪ ᴘɪᴄᴜ\nᴄᴏɴᴛᴏʜ: .sᴇᴛᴄᴍᴅ .1ɢʙ');

    let media = await quoted.download();
    let hash = crypto.createHash('md5').update(media).digest('hex');
    db.stickcmd[hash] = q;
    fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
    reply(`ᴄᴏᴍᴍᴀɴᴅ *${q}* ʙᴇʀʜᴀsɪʟ ᴅɪ ʙɪɴᴅ ᴋᴇ sᴛɪᴄᴋᴇʀ ɪɴɪ!`);
    break;


case 'delcmd':
    if (!isCreator) return balas(mesg.own);
    if (!quoted || quoted.mimetype !== 'image/webp') return example('ʀᴇᴘʟʏ ᴋᴇ sᴛɪᴄᴋᴇʀ ʏᴀɴɢ ᴍᴀᴜ ᴅɪʜᴀᴘᴜs!');

    let media2 = await quoted.download();
    let hash2 = crypto.createHash('md5').update(media2).digest('hex');

    if (!db.stickcmd[hash2]) return reply('sᴛɪᴄᴋᴇʀ ɪɴɪ ʙᴇʟᴜᴍ ᴀᴅᴀ ʙɪɴᴅ ᴄᴏᴍᴍᴀɴᴅ ᴀᴘᴀᴘᴜɴ.');
    delete db.stickcmd[hash2]
    fs.writeFileSync('./database/set.json', JSON.stringify(db, null, 2));
    reply('ᴄᴏᴍᴍᴀɴᴅ ᴅᴀʀɪ sᴛɪᴄᴋᴇʀ ʙᴇʀʜᴀsɪʟ ᴅɪʜᴀᴘᴜs.');
    break;
    
case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
ʀᴇsᴘᴏɴ sᴘᴇᴇᴅ ${latensi.toFixed(4)} _sᴇᴄᴏɴᴅ_ \n ${oldd - neww} _ᴍɪʟɪsᴇᴄᴏɴᴅs_\n\nʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}

💻 ɪɴғᴏ sᴇʀᴠᴇʀ
ʀᴀᴍ: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_ɴᴏᴅᴇ.ᴊs ᴍᴇᴍᴏʀɪ ᴜsᴀɢᴇ_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_ᴛᴏᴛᴀʟ ᴄᴘᴜ ᴜsᴀɢᴇ_
${cpus[0].model.trim()} (${cpu.speed} ᴍʜᴢ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_ᴄᴘᴜ ᴄᴏʀᴇ(s) ᴜsᴀɢᴇ (${cpus.length} ᴄᴏʀᴇ ᴄᴘᴜ)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} ᴍʜᴢ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`
balas(respon);
}
break;
default:
if ((budy.match) && ["bot","tes"].
includes(budy)) {
let teksOn = `━ ⬢ \`ʙᴏᴛ ᴏɴ ᴋᴏᴋ!\` ⬢ ━`
reply(teksOn)
}
                if (budy.startsWith('=>')) {
                    if (!isCreator) return balas(mesg.own)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return balas(bang)
                    }
                    try {
                        balas(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        balas(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return balas(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await balas(evaled)
                    } catch (err) {
                        await balas(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return balas(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return balas(err)
                        if (stdout) return balas(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`ᴜᴘᴅᴀᴛᴇ ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
/*if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return*/
console.log('Caught exception: ', err)
})