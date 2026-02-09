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
const { title } = require('process')

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

const SUPABASE_URL = 'https://xteposmfavnnevgqivub.supabase.co'
const SUPABASE_KEY = 'sb_publishable__iD2NyZNQa7HVnreBtYuow__aHIr6ie'
const USER_ID = 'ff1c94f7-b70b-4ae4-aaf1-d02227638ef2'

const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// --- STORE SETTINGS ---
const STORE_SETTINGS = {
    slug: 'acamedia',
    apikey: 'ZU0JBrZtUZSqI8nAqz73zbtgJFtj0tY5',
    expired: 1,
    feePercent: 0.007,
    feeFixed: 340
}

// --- DESIGN SETTINGS ---
const STORE_ICONS = {
    store: '🏪',
    product: '📦',
    category: '📁',
    price: '💰',
    stock: '📊',
    code: '🏷️',
    admin: '🧾',
    time: '⏰',
    payment: '💳',
    qris: '📱',
    cart: '🛒',
    home: '🏠',
    search: '🔍',
    list: '📋',
    add: '➕',
    delete: '🗑️'
}

const memuat = `Tunggu sebentar.....`

// --- STORE FUNCTIONS ---
const loadDB = async () => {
    try {
        const { data, error } = await supabase
            .from('master_data')
            .select('*')
            .eq('user_id', USER_ID)
        
        if (error) {
            console.error('❌ Supabase error:', error)
            return []
        }
        
        if (!data || data.length === 0) {
            console.log('⚠️ No data for user_id:', USER_ID)
            return []
        }
        
        const daftarItem = data[0].daftar_item
        
        if (!daftarItem) {
            console.log('⚠️ daftar_item is empty')
            return []
        }
        
        console.log('✅ Data loaded:', daftarItem.length, 'items')
        return daftarItem
        
    } catch (error) {
        console.error('❌ LoadDB error:', error)
        return []
    }
}

const saveDB = async (data) => {
    try {
        const { error } = await supabase
            .from('master_data')
            .update({ 
                daftar_item: data,
                updated_at: new Date().toISOString()
            })
            .eq('user_id', USER_ID)
        
        if (error) {
            console.error('❌ Save error:', error)
            return false
        }
        
        console.log('✅ Data saved:', data.length, 'items')
        return true
    } catch (error) {
        console.error('❌ SaveDB error:', error)
        return false
    }
}

const getFinalPrice = (price) => {
    let tax = price * STORE_SETTINGS.feePercent
    let total = price + tax + STORE_SETTINGS.feeFixed
    return {
        base: price,
        tax: Math.ceil(tax + STORE_SETTINGS.feeFixed),
        total: Math.ceil(total)
    }
}


// Pastikan formatIDR ada
// Pastikan formatIDR ada
const formatIDR = (num) => {
    if (!num || isNaN(num)) return 'Rp0';
    return 'Rp' + num.toLocaleString('id-ID');
};

const groupByCategory = (products) => {
    const categories = {}
    
    products.forEach((product, index) => {
        const category = product.kategori || 'UMUM'
        if (!categories[category]) {
            categories[category] = {
                products: [],
                total: 0
            }
        }
        categories[category].products.push({...product, globalIndex: index + 1})
        categories[category].total++
    })
    
    return categories
}

// --- PAYMENT API ---
async function createQris(amount, name) {
    const res = await axios.post('https://app.pakasir.com/api/transactioncreate/qris', {
        project: STORE_SETTINGS.slug,
        order_id: 'QR-' + Date.now(),
        amount: parseInt(amount),
        api_key: STORE_SETTINGS.apikey,
    }, { headers: { 'Content-Type': 'application/json' } })
    return res.data.payment
}

async function checkStatus(id, amt) {
    try {
        const res = await axios.get(`https://app.pakasir.com/api/transactiondetail?project=${STORE_SETTINGS.slug}&amount=${amt}&order_id=${id}&api_key=${STORE_SETTINGS.apikey}`)
        return res.data.transaction
    } catch (e) {
        console.error('Error checking status:', e)
        return null
    }
}


//——————————[ CONST PELER = DIA ]——————————//
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == "interactiveResponseMessage") ? JSON.parse(m.message[m.mtype].nativeFlowResponseMessage?.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
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


//——————————[ BISMILLAH ]——————————//

asya.sendListButtonv2 = async (jid, text, list, footer, image, quoted, options = {}) => {
    let msg000 = generateWAMessageFromContent(jid, {viewOnceMessage: {
        message: {
            "messageContextInfo": {
              "deviceListMetadata": {},
              "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              body: proto.Message.InteractiveMessage.Body.create({
                text: text, 
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: footer, 
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [{
                    name: "single_select",
                    buttonParamsJson: JSON.stringify(list)
                  }
               ],
              }), 
              contextInfo: {
                      mentionedJid: [m.sender], 
                      forwardingScore: 999,
                      isForwarded: true
                    }
            })
        }
      }
    }, {userJid: m.chat, quoted: m})
    asya.relayMessage(msg000.key.remoteJid, msg000.message, {
      messageId: msg000.key.id, quoted: m,
      })
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

        const vcards = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n'
            + 'FN:Arasya Rafi\n' // full name
            + 'ORG:Developer of Acamedia;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=6288214772441:+62 882-1477-2441\n' // WhatsApp ID + phone number
            + 'END:VCARD'

        let list = []
        for (let i of ownerNumber) {
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
        const separator = chalk.hex("#00ffd5")("\n<================= SPASI =================>\n")
        const neoLabel = chalk.hex("#ff00c8")("[ ADA YANG CHAT ]")
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
// TAMBAHKAN DI ATAS SWITCH CASE
const makeInteractiveStore = (title, products, footerText, buttonTitle = "Pilih Produk") => {
    // Bagi produk menjadi chunks (maksimal 10 per section)
    const chunkSize = 10;
    const productChunks = [];
    
    for (let i = 0; i < products.length; i += chunkSize) {
        productChunks.push(products.slice(i, i + chunkSize));
    }
    
    // Buat sections untuk setiap chunk
    const sections = productChunks.map((chunk, chunkIndex) => ({
        title: `📦 DAFTAR PRODUK - HALAMAN ${chunkIndex + 1}`,
        highlight_label: `Halaman ${chunkIndex + 1} dari ${productChunks.length}`,
        rows: chunk.map((product, index) => {
            // Hitung index global
            const globalIndex = (chunkIndex * chunkSize) + index;
            return {
                title: `${globalIndex + 1}. ${product.nama_barang}`,
                description: `💰 ${formatIDR(product.harga_jual)} | 📊 ${product.stok} stok`,
                id: `/pilih ${globalIndex + 1}`
            };
        })
    }));
    
    // Tambahkan navigation buttons untuk berpindah halaman
    const navigationButtons = [];
    
    if (productChunks.length > 1) {
        // Tambahkan tombol navigasi halaman
        for (let i = 0; i < productChunks.length; i++) {
            if (i < 3) { // Maksimal 3 tombol halaman
                navigationButtons.push({
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: `📄 Halaman ${i + 1}`,
                        id: `/page ${i + 1}`
                    })
                });
            }
        }
        
        // Tambahkan tombol navigasi next/prev jika lebih dari 3 halaman
        if (productChunks.length > 3) {
            navigationButtons.push({
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "⏭️ Halaman Selanjutnya",
                    id: "/nextpage"
                })
            });
        }
    }
    
    return {
        interactiveMessage: {
            header: title,
            title: `ACAMEDIA STORE • ${products.length} Produk`,
            footer: `${footerText} • Halaman 1 dari ${productChunks.length}`,
            image: fs.readFileSync('./media/acaku.png'),
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "🕒 Promo terbatas!",
                        url: "https://t.me/yumevtc"
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "Menu Produk",
                        button_title: buttonTitle
                    },
                    tap_target_configuration: {
                        title: "ℹ️",
                        description: "Info Store",
                        canonical_url: "https://t.me/yumevtc",
                        domain: "https://store.arasyarafi.xyz",
                        button_index: 0
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: buttonTitle,
                            sections: sections.slice(0, 1), // Hanya tampilkan halaman pertama
                            has_multiple_buttons: true
                        })
                    },
                    ...navigationButtons,
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "📞 Kontak Admin",
                            id: "contact_admin",
                            copy_code: "Admin: wa.me/6288214772441"
                        })
                    },
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "🏠 Menu Utama",
                            id: "/store"
                        })
                    }
                ]
            }
        }
    };
};


// VERSI PAGINATION: Dengan sistem halaman terpisah
const makePaginatedStore = async (asya, m, products, page = 1, title = "SEMUA PRODUK") => {
    const itemsPerPage = 10;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const currentPage = Math.max(1, Math.min(page, totalPages));
    
    // Hitung indeks awal dan akhir
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, products.length);
    
    // Ambil produk untuk halaman saat ini
    const currentProducts = products.slice(startIndex, endIndex);
    
    const sections = [{
        title: `📦 HALAMAN ${currentPage}/${totalPages}`,
        highlight_label: `Produk ${startIndex + 1} - ${endIndex} dari ${products.length}`,
        rows: currentProducts.map((product, index) => {
            const globalIndex = startIndex + index;
            return {
                title: `${globalIndex + 1}. ${product.nama_barang}`,
                description: `💰 ${formatIDR(product.harga_jual)} | 📊 ${product.stok} stok`,
                id: `/pilih ${globalIndex + 1}`
            };
        })
    }];
    
    // Buat tombol navigasi
    const navigationButtons = [];
    
    if (currentPage > 1) {
        navigationButtons.push({
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "⬅️ Sebelumnya",
                id: `/page ${currentPage - 1}`
            })
        });
    }
    
    if (currentPage < totalPages) {
        navigationButtons.push({
            name: "quick_reply",
            buttonParamsJson: JSON.stringify({
                display_text: "Selanjutnya ➡️",
                id: `/page ${currentPage + 1}`
            })
        });
    }
    
    const msg = {
        interactiveMessage: {
            header: title,
            title: `Halaman ${currentPage}/${totalPages}`,
            footer: `📊 ${products.length} produk • 🔢 ${startIndex + 1}-${endIndex}`,
            image: fs.readFileSync('./media/acaku.png'),
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: `Halaman ${currentPage} dari ${totalPages}`,
                        url: "https://t.me/yumevtc"
                    }
                }),
                buttons: [
                    {
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "📋 PILIH PRODUK",
                            sections: sections,
                            has_multiple_buttons: true
                        })
                    },
                    ...navigationButtons,
                    {
                        name: "quick_reply",
                        buttonParamsJson: JSON.stringify({
                            display_text: "🏠 Menu Utama",
                            id: "/store"
                        })
                    }
                ]
            }
        }
    };
    
    return await asya.sendMessage(m.chat, msg, { quoted: m });
};
const createStorePage = (products, page = 1, title = "Daftar Produk") => {
    const itemsPerPage = 10;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const currentPage = Math.min(page, totalPages);
    
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = Math.min(startIdx + itemsPerPage, products.length);
    
    const currentProducts = products.slice(startIdx, endIdx);
    
    const sections = [{
        title: `${title} - Halaman ${currentPage}/${totalPages}`,
        highlight_label: `Produk ${startIdx + 1} sampai ${endIdx}`,
        rows: currentProducts.map((product, idx) => {
            const globalIdx = startIdx + idx;
            return {
                title: `${globalIdx + 1}. ${product.nama_barang}`,
                description: `💰 ${formatIDR(product.harga_jual)} | 📊 ${product.stok} stok`,
                id: `/pilih ${globalIdx + 1}`
            };
        })
    }];
    
    // Buat tombol navigasi sebagai rows tambahan
    if (totalPages > 1) {
        const navRows = [];
        
        if (currentPage > 1) {
            navRows.push({
                title: "⬅️ Halaman Sebelumnya",
                description: `Ke halaman ${currentPage - 1}`,
                id: `/storepage ${currentPage - 1}`
            });
        }
        
        if (currentPage < totalPages) {
            navRows.push({
                title: "Halaman Selanjutnya ➡️",
                description: `Ke halaman ${currentPage + 1}`,
                id: `/storepage ${currentPage + 1}`
            });
        }
        
        sections[0].rows.push(...navRows);
    }
    
    return sections;
};


// DALAM SWITCH CASE:
switch (command) {
    case 'store':
    case 'toko':
        case 'start':
            case 'menu':
                case 'help':
        {
            reply(memuat)
            let db = await loadDB();
            if (db.length === 0) {
                return await asya.sendMessage(m.chat, { 
                    text: `${STORE_ICONS.store} *ACAMEDIA STORE*\n\n${STORE_ICONS.product} Belum ada produk tersedia.` 
                }, { quoted: m });
            }
            
            const totalProducts = db.length;
            const categories = groupByCategory(db);
            const categoryList = Object.keys(categories);
            
            // Buat sections untuk kategori
            const sections = [{
                title: "📁 PILIH KATEGORI",
                highlight_label: "Pilih kategori produk",
                rows: [
                    {
                        title: "📦 SEMUA PRODUK",
                        description: `Lihat semua ${totalProducts} produk`,
                        id: "/storeall"
                    },
                    {
                        title: "🔍 CARI PRODUK",
                        description: "Cari produk berdasarkan nama",
                        id: "/search"
                    }
                ]
            }];

            var teks = `[ ACAMEDIA STORE ]\n\n`
            var titlenya = "Selamat datang di ACAMEDIA.\n\n" +
  "Kami menyambut Anda di platform digital resmi ACAMEDIA yang menyediakan berbagai produk dan layanan berkualitas untuk mendukung kebutuhan Anda. ACAMEDIA dirancang agar mudah digunakan, informatif, dan memberikan pengalaman terbaik bagi setiap pengguna.\n\n" +
  "Untuk melihat seluruh produk, fitur, serta layanan yang tersedia, silakan klik Menu Utama dan jelajahi setiap kategori yang kami sediakan.\n\n" +
  "Website resmi kami dapat diakses melalui https://store.arasyarafi.xyz,\n" +
  "dengan informasi lengkap mengenai pemilik dan pengelola tersedia di https://www.arasyarafi.xyz.\n\n" +
  "Ikuti juga Instagram kami di @acamediaku untuk mendapatkan update terbaru, promo, dan informasi menarik lainnya.\n\n" +
  "Jika Anda membutuhkan bantuan, pertanyaan, atau ingin berkonsultasi langsung, silakan hubungi kami melalui WhatsApp di nomor 085183221210.\n\n" +
  "Terima kasih telah mempercayai ACAMEDIA sebagai solusi digital Anda.";
            
            const msg = {
                interactiveMessage: {
                    header: teks,
                    title: titlenya,
                    footer: `📊 Total ${totalProducts} produk | 📁 ${categoryList.length} kategori`,
                    image: fs.readFileSync('./media/acaku.png'),
                    nativeFlowMessage: {
                        messageParamsJson: JSON.stringify({
                            limited_time_offer: {
                                text: "🕒 Promo terbatas!",
                                url: "https://store.arasyarafi.xyz",
                            },
                            tap_target_configuration: {
                                title: "🏪",
                                description: "ACAMEDIA STORE",
                                canonical_url: "https://t.me/yumevtc",
                                domain: "https://store.arasyarafi.xyz",
                                button_index: 0
                            }
                        }),
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "📋 MENU UTAMA",
                                    sections: sections,
                                    has_multiple_buttons: true
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "📞 Kontak Admin",
                                    url: "https://wa.me/6288214772441?text=hallo%20kak"
                                })
                            },/*
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Website",
                                    url: "https://store.arasyarafi.xyz",
                                })
                            }**/
                        ]
                    }
                }
            };
            
            return await asya.sendMessage(m.chat, msg, { quoted: m });
        }
        break;

    case 'storeall':
case 'allstore':
case 'semuaproduk':
    {
        reply(memuat)
        let db = await loadDB();
        if (db.length === 0) {
            return await asya.sendMessage(m.chat, { 
                text: `${STORE_ICONS.product} *Tidak ada produk tersedia*` 
            }, { quoted: m });
        }
        
        const page = args[0] ? parseInt(args[0]) : 1;
        const sections = createStorePage(db, page, "📦 SEMUA PRODUK");
        
        var tekslagi = `Silahkan dipilih daftar produk berikut.\nJika ingin berganti halaman teman teman bisa pilih tombol halaman selanjutnya. \n\nHalaman ${page} dari ${Math.ceil(db.length / 10)}`
        const msg = {
            interactiveMessage: {
                header: `📦 SEMUA PRODUK`,
                title: tekslagi,
                footer: `Total ${db.length} produk`,
                image: fs.readFileSync('./media/acaku.png'),
                nativeFlowMessage: {
                    messageParamsJson: JSON.stringify({
                        bottom_sheet: {
                            list_title: "Navigasi",
                            button_title: "Pilih"
                        }
                    }),
                    buttons: [{
                        name: "single_select",
                        buttonParamsJson: JSON.stringify({
                            title: "📋 DAFTAR PRODUK",
                            sections: sections,
                            has_multiple_buttons: true
                        })
                    }]
                }
            }
        };
        
        return await asya.sendMessage(m.chat, msg, { quoted: m });
    }
    break;


    case 'pilih':
    case 'pilih-item':
        {
            reply(memuat)
            if (args.length === 0) {
                return await asya.sendMessage(m.chat, { 
                    text: `${STORE_ICONS.search} *Format:* ${prefix}pilih [nomor]\n${STORE_ICONS.list} *Contoh:* ${prefix}pilih 3` 
                }, { quoted: m });
            }
            
            let index = parseInt(args[0]) - 1;
            let db = await loadDB();
            
            if (isNaN(index) || index < 0 || index >= db.length) {
                return await asya.sendMessage(m.chat, { 
                    text: `❌ *Nomor produk tidak valid*\n\nGunakan ${prefix}storeall untuk melihat daftar produk` 
                }, { quoted: m });
            }
            
            let product = db[index];
            
            if (product.stok <= 0) {
                return await asya.sendMessage(m.chat, { 
                    text: `❌ *STOK HABIS*\n\nProduk "${product.nama_barang}" sedang tidak tersedia.` 
                }, { quoted: m });
            }
            
            let cost = getFinalPrice(product.harga_jual);
            
            // Buat detail produk dengan interactive message
            const sections = [{
                title: "📋 DETAIL PRODUK",
                highlight_label: "Informasi lengkap produk",
                rows: [
                    {
                        title: `💰 HARGA: ${formatIDR(cost.total)}`,
                        description: `Dasar: ${formatIDR(cost.base)} + Admin: ${formatIDR(cost.tax)}`,
                        id: `price_info_${index + 1}`
                    },
                    {
                        title: `📊 STOK: ${product.stok} ${product.satuan}`,
                        description: `Kategori: ${product.kategori}`,
                        id: `stock_info_${index + 1}`
                    },
                    {
                        title: `🏷️ KODE: ${product.kode_barang}`,
                        description: "Kode unik produk",
                        id: `code_info_${index + 1}`
                    }
                ]
            }];
            
            const msg = {
                interactiveMessage: {
                    header: product.nama_barang,
                    title: "DETAIL PRODUK",
                    footer: `ACAMEDIA STORE • No. ${index + 1}`,
                    image: fs.readFileSync('./media/acaku.png'),
                    nativeFlowMessage: {
                        messageParamsJson: JSON.stringify({
                            limited_time_offer: {
                                text: "🕒 Stok terbatas!",
                                url: "https://t.me/yumevtc",
                                copy_code: product.kode_barang
                            },
                            bottom_sheet: {
                                in_thread_buttons_limit: 2,
                                divider_indices: [1, 2, 3, 4, 5, 999],
                                list_title: "Aksi Produk",
                                button_title: "Pilih Aksi"
                            }
                        }),
                        buttons: [
                            {
                                name: "single_select",
                                buttonParamsJson: JSON.stringify({
                                    title: "📋 INFORMASI PRODUK",
                                    sections: sections,
                                    has_multiple_buttons: true
                                })
                            },
                            {
                                name: "cta_copy",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "📋 Salin Kode",
                                    id: `copy_${index + 1}`,
                                    copy_code: product.kode_barang
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "🛒 Beli Sekarang",
                                    id: `/beli ${index + 1}`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "📦 Kembali ke Semua Produk",
                                    id: "/storeall"
                                })
                            }
                        ]
                    }
                }
            };
            
            return await asya.sendMessage(m.chat, msg, { quoted: m });
        }
        break;

    case 'pencarian':
    case 'cari':
    case 'search':
        {
            reply(memuat)
            if (args.length === 0) {
                return await asya.sendMessage(m.chat, { 
                    text: `${STORE_ICONS.search} *Format:* ${prefix}pencarian [nama produk]\n${STORE_ICONS.list} *Contoh:* ${prefix}pencarian Spotify` 
                }, { quoted: m });
            }
            
            let searchTerm = args.join(' ').toLowerCase();
            let db = await loadDB();
            
            let foundProducts = db.filter(product => 
                product.nama_barang.toLowerCase().includes(searchTerm) ||
                product.kode_barang.toLowerCase().includes(searchTerm) ||
                product.kategori.toLowerCase().includes(searchTerm)
            );
            
            if (foundProducts.length === 0) {
                return await asya.sendMessage(m.chat, { 
                    text: `❌ *Tidak ditemukan produk dengan kata kunci "${searchTerm}"*` 
                }, { quoted: m });
            }
            
            const productsToShow = foundProducts.slice(0, 10);
            
            const interactiveMsg = makeInteractiveStore(
                `🔍 HASIL PENCARIAN: "${searchTerm}"`,
                productsToShow,
                `📊 Ditemukan ${foundProducts.length} produk`
            );
            
            return await asya.sendMessage(m.chat, interactiveMsg, { quoted: m });
        }
        break;

    case 'beli':
    case 'buy':
        {
            reply(memuat)
            if (args.length === 0) {
                return await asya.sendMessage(m.chat, { 
                    text: `${STORE_ICONS.cart} *Format:* ${prefix}beli [nomor]\n${STORE_ICONS.list} *Contoh:* ${prefix}beli 3` 
                }, { quoted: m });
            }
            
            let input = args[0];
            let db = await loadDB();
            let item = null;
            let itemIndex = -1;
            
            if (!isNaN(input)) {
                let index = parseInt(input) - 1;
                if (index >= 0 && index < db.length) {
                    item = db[index];
                    itemIndex = index;
                }
            } else {
                item = db.find(product => 
                    product.kode_barang.toLowerCase() === input.toLowerCase() ||
                    product.nama_barang.toLowerCase().includes(input.toLowerCase())
                );
            }
            
            if (!item) {
                return await asya.sendMessage(m.chat, { 
                    text: `❌ *Produk tidak ditemukan*` 
                }, { quoted: m });
            }
            
            if (item.stok <= 0) {
                return await asya.sendMessage(m.chat, { 
                    text: `❌ *STOK HABIS*\n\n"${item.nama_barang}" sedang tidak tersedia.` 
                }, { quoted: m });
            }
            
            let cost = getFinalPrice(item.harga_jual);
            
            await asya.sendMessage(m.chat, { 
                text: `${STORE_ICONS.qris} *Menyiapkan pembayaran...*` 
            }, { quoted: m });
            
            try {
                const res = await createQris(cost.total, item.nama_barang);
                
const paymentBox =
`${STORE_ICONS.payment} PEMBAYARAN

${STORE_ICONS.product} ${item.nama_barang}
${STORE_ICONS.code} ${item.kode_barang}

${STORE_ICONS.price} Harga : ${formatIDR(cost.base)}
${STORE_ICONS.admin} Admin : ${formatIDR(cost.tax)}

💎 Total : ${formatIDR(cost.total)}
${STORE_ICONS.time} Berlaku ${STORE_SETTINGS.expired} menit`;

                
                const caption = `${paymentBox}\n\n${STORE_ICONS.qris} *Scan QR Code untuk pembayaran*`;
                
                let msg = await asya.sendMessage(m.chat, { 
                    image: { 
                        url: `https://quickchart.io/qr?text=${encodeURIComponent(res.payment_number)}&size=300&margin=2`
                    },
                    caption: caption
                }, { quoted: m });
                
                // Check payment status
                let checkInterval = setInterval(async () => {
                    if (Date.now() > new Date(Date.now() + (STORE_SETTINGS.expired * 60000))) {
                        clearInterval(checkInterval);
                        try {
                            await asya.sendMessage(m.chat, { delete: msg.key });
                        } catch (e) {}
                        return;
                    }
                    
                    let status = await checkStatus(res.order_id, cost.total);
                    if (status && status.status === 'completed') {
                        clearInterval(checkInterval);
                        try {
                            await asya.sendMessage(m.chat, { delete: msg.key });
                        } catch (e) {}
                        
                        
                        item.stok = Math.max(0, item.stok - 1);
                        await saveDB(db);
                            var sections = [
                                {
                                    title: `Format Kirim Email`,
                                    id: `/formatmail`
                                },
                                {
                                    title: `Format User Kirim Email`,
                                    id: `/userkirimemail`
                                }
                            ]
                            const unduh = {
                                title: "Klik disini",
                                sections: [
                                    {
                                        title: "LAPOR PAK",
                                        rows: sections,
                                    }
                                ]
                            }
                            asya.sendListButtonv2("6288214772441@s.whatsapp.net", cpap, unduh, "Jojo", { quoted: m })
                        const successMsg = 
`✅ *PEMBAYARAN BERHASIL!*

- ${item.nama_barang}
- ${item.kode_barang}
- ${formatIDR(cost.total)}
- Stok tersisa: ${item.stok}

Mohon ditunggu sedang di proses.....`;
                        
                        await asya.sendMessage(m.chat, {
    productMessage: {
        title: "PEMBAYARAN BERHASIL",
        description: "Ini adalah deskripsi produk",
        thumbnail: fs.readFileSync('./media/acaku.png'),
        productId: item.kode_barang,
        retailerId: item.kode_barang,
        url: "https://example.com/product",
        body: successMsg,
        footer: `Terima kasih sudah berbelanja di store kami ❣`,
        priceAmount1000: cost.total,
        currencyCode: "IDR",
        buttons: [
            {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                    display_text: "Hubungi Admin",
                    url: "https://wa.me/6288214772441"
                })
            }
        ]
    }
}, { quoted: m });
                    }
                }, 7000);
                
            } catch (e) {
                console.error('Payment error:', e);
                return await asya.sendMessage(m.chat, { 
                    text: '❌ *Sistem pembayaran error*' 
                }, { quoted: m });
            }
        }
        break;

        /* ---------owner menu---------- */



case 'owner': case 'admin':{
    await asya.sendMessage(
    m.chat,
    {
        contacts: {
            displayName: 'Arasyaaaa',
            contacts: [{ vcards }]
        }
    }
)
}
break
case 'test': case 'test':{
                        var cpap = `pppppp`
                            var sections = [
                                {
                                    title: `Respon pesan di tanggapi`,
                                    id: ``
                                },
                                {
                                    title: `Respon pesan tidak di tanggapi`,
                                    id: ``
                                },
                                {
                                    title: `Blokir Pengirim`,
                                    id: ``
                                },
                                {
                                    title: `Beri notifikasi spam pengirim`,
                                    id: `}`
                                }
                            ]
                            const unduh = {
                                title: "Click Here",
                                sections: [
                                    {
                                        title: "LAPOR PAK",
                                        rows: sections,
                                    }
                                ]
                            }
                            asya.sendListButtonv2(m.chat, cpap, unduh, "Joy", { quoted: m })
                            reply(`cekkk`)
                        }
                        break


    // TAMBAHKAN CASE UNTUK HANDLE INTERACTIVE RESPONSE
    default:

                        
                        if (budy.startsWith('=>')) {
                            if (!isCreator) return reply(`Apalu`)
                            function Return(sul) {
                                sat = JSON.stringify(sul, null, 2)
                                bang = util.format(sat)
                                if (sat == undefined) {
                                    bang = util.format(sul)
                                }
                                return reply(bang)
                            }
                            try {
                                reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                            } catch (e) {
                                reply(String(e))
                            }
                        }
        
                        if (budy.startsWith('>')) {
                            if (!isCreator) return reply(`Apalu`)
                            try {
                                let evaled = await eval(budy.slice(2))
                                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                                await reply(evaled)
                            } catch (err) {
                                await reply(String(err))
                            }
                        }
                        if (budy.startsWith('$')) {
                            if (!isCreator) return reply(`Apalu`)
                            exec(budy.slice(2), (err, stdout) => {
                                if (err) return reply(err)
                                if (stdout) return reply(stdout)
                            })
                        }
        if (m.mtype === 'interactiveResponseMessage') {
    try {
        const paramsJson = m.message?.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson;
        if (paramsJson) {
            const params = JSON.parse(paramsJson);
            const id = params.id;
            
            console.log('Interactive Response ID:', id); // Debug log
            
            // Handle pilih produk
             // Handle pagination
            if (id && id.startsWith('/page ')) {
                const pageNum = parseInt(id.replace('/page ', '').trim());
                let db = await loadDB();
                
                if (db.length === 0) {
                    return await asya.sendMessage(m.chat, { 
                        text: `${STORE_ICONS.product} *Tidak ada produk tersedia*` 
                    }, { quoted: m });
                }
                
                return await makePaginatedStore(asya, m, db, pageNum, "SEMUA PRODUK");
            }
            // Tambahkan handler untuk /storepage
if (id && id.startsWith('/storepage ')) {
    const pageNum = parseInt(id.replace('/storepage ', '').trim());
    return await asya.sendMessage(m.chat, {
        text: `${prefix}storeall ${pageNum}`
    }, { quoted: m });
}
            // Handle next page
            if (id === '/nextpage') {
                let db = await loadDB();
                // Simpan current page di session atau parse dari footer
                // Untuk sederhana, kita arahkan ke page 2
                return await makePaginatedStore(asya, m, db, 2, "SEMUA PRODUK");
            }

            if (id && id.startsWith('/pilih ')) {
                const num = id.replace('/pilih ', '').trim();
                return await asya.sendMessage(m.chat, {
                    text: `${prefix}pilih ${num}`
                }, { quoted: m });
            }
            
            // Handle beli produk
            if (id && id.startsWith('/beli ')) {
                const num = id.replace('/beli ', '').trim();
                return await asya.sendMessage(m.chat, {
                    text: `${prefix}beli ${num}`
                }, { quoted: m });
            }
            
            // Handle storeall
            if (id === '/storeall') {
                return await asya.sendMessage(m.chat, {
                    text: `${prefix}storeall`
                }, { quoted: m });
            }
            
            // Handle store menu
            if (id === '/store') {
                return await asya.sendMessage(m.chat, {
                    text: `${prefix}store`
                }, { quoted: m });
            }
            
            // Handle search
            if (id === '/search') {
                return await asya.sendMessage(m.chat, {
                    text: `🔍 *Format Pencarian:*\n${prefix}pencarian [nama produk]\n\nContoh: ${prefix}pencarian Spotify`
                }, { quoted: m });
            }
        }
    } catch (error) {
        console.error('Error handling interactive response:', error);
    }
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