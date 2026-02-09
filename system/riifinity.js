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
    const pinterest = require('../library/sc/pinterest')
    const { remini } = require('../library/sc/remini');
    const readline = require("readline");
    const yts = require("yt-search");
    const crypto = require('crypto');
    const makeid = crypto.randomBytes(3).toString('hex')
    const { exec, spawn, execSync } = require("child_process")
    const { performance } = require('perf_hooks')
    const more = String.fromCharCode(8206)
    const readmore = more.repeat(4001)
    const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('../library/converter')
    const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit.js");
    const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('../library/myfunc')
    let afk = require("../library/afk");
    const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('../library/premiun')
    const NodeCache = require('node-cache');
    const {
        TelegraPh,
        UploadFileUgu,
        webp2mp4File,
        floNime
    } = require('../library/uploader')
    
    
    //——————————[ ANTI ANTIAN ]——————————//
    let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
    ///POIN DAN BALANCE
    let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
    let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
    let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
    ///MAIN
    let teks_welcome = JSON.parse(fs.readFileSync('./database/teks_welcome.json'))
    let teks_left = JSON.parse(fs.readFileSync('./database/teks_left.json'))
    let welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
    let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
    let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
    let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
    let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
    let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))
    
    
    /// ---------------- REPLY MESSAGE ---- /////
    const jojoh = `Tunggu sebentar yah kak!\nSedang Jojo Proses!`
    

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
      all: require('../command/menu-all'),
      ai: require('../command/menu-ai'),
      control: require('../command/menu-control'),
      csc: require('../command/menu-csc'),
      download: require('../command/menu-download'),
      grup: require('../command/menu-grup'),
      panel: require('../command/menu-panel'),
      panel2: require('../command/menu-panel2'),
      sticker: require('../command/menu-sticker'),
      store: require('../command/menu-store'),
      tools: require('../command/menu-tools')
    };
    
    //——————————[ GAME ]——————————//
    if (!asya.game) asya.game = {}
    const gameSiapakahAku = JSON.parse(fs.readFileSync('./database/game/siapakahaku.json'))
    const susunkata = JSON.parse(fs.readFileSync('./database/game/susunkata.json'))
    const tebaktebakan = JSON.parse(fs.readFileSync('./database/game/tebaktebakan.json'))
    const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
    const tebaklirik = JSON.parse(fs.readFileSync('./database/game/tebaklirik.json'))
    const tebaklogo = JSON.parse(fs.readFileSync('./database/game/tebaklogo.json'))
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
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
    const groupOwner = groupMetadata.owner || '';
    const groupMembers = groupMetadata.participants || [];
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
    
    
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
    const isPremium = isCreator || checkPremiumUser(m.sender, premium)
    
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
    const gcounti = [{"prem": 100000000000,"user": 20}]
    const gcount = isPremium ? gcounti.prem : gcounti.user
    
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
              asya.sendMessage(m.chat, {text: teks}, {quoted: m})
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

    function mentions(teks, mems = [], id) {
        if (id == null || id == undefined || id == false) {
          let res = asya.sendMessage(m.chat, { text: teks, mentions: mems })
          return res
        } else {
          let res = asya.sendMessage(m.chat, { text: teks, mentions: mems }, { quoted: qwb })
          return res
         }
    }

    async function sendButton(jid, text, footer, buttons, quoted) {
      const listButtons = buttons.map(btn => ({
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
              display_text: btn.text,
              id: btn.id
          })
      }));
  
      // Otomatis mencari nomor yang ada di teks untuk di-mention (format @62xxx)
      const mentions = [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net');
  
      const messageContent = {
          viewOnceMessage: {
              message: {
                  interactiveMessage: {
                      body: { text: text },
                      footer: { text: footer },
                      header: {
                          hasMediaAttachment: false
                      },
                      nativeFlowMessage: {
                          buttons: listButtons
                      },
                      contextInfo: {
                          mentionedJid: mentions, // Menampilkan tag biru
                          quotedMessage: quoted ? quoted.message : null, // Untuk fitur reply
                          participant: quoted ? quoted.sender : null,
                          remoteJid: jid
                      }
                  }
              }
          }
      };
  
      return await asya.relayMessage(jid, messageContent, { messageId: asya.generateMessageTag() });
  }
//end

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
            addBalance(sender, randomNomor(60), balance)
    } else {
        console.log(separator)
        console.log(chalk.hex("#00ff88")(">> Private Chat"))
        addBalance(sender, randomNomor(60), balance)
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
    return asya.sendMessage(m.chat, {text: commander}, {quoted: m})
    };
    
    //——————————[ Z ]——————————//
      
    if (db.settings.gconly && !mek.key.remoteJid.endsWith('@g.us') && !isCreator) return;
    if (global.selfmode && !isCreator) return;
    if (mek.mimetype === 'image/webp') {
        let media = await mek.download();
        let hash = crypto.createHash('md5').update(media).digest('hex');
        if (db.stickcmd[hash]) {
            let fakeMessage = { ...mek, message: { conversation: db.stickcmd[hash] } };
            require('./riifinity.js')(neo, fakeMessage, store);
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

            /// PAKASIR
            async function createQris(project, apikey, amount) {
              const res = await axios.post('https://app.pakasir.com/api/transactioncreate/qris', {
                  project,
                  order_id: 'PREM-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
                  amount,
                  api_key: apikey,
              }, { headers: { 'Content-Type': 'application/json' } });
              return res.data.payment;
          }
          
          async function checkStatus(project, apikey, orderId, amount) {
              const res = await axios.get(`https://app.pakasir.com/api/transactiondetail?project=${project}&amount=${amount}&order_id=${orderId}&api_key=${apikey}`);
              return res.data.transaction;
          }
          //ANON
          if (!asya.anonymous) asya.anonymous = {}
          // --- LOGIKA JEMBATAN ANONYMOUS ---
const room = asya.anonymous[sender]
if (room && room.status === 'chatting' && !isCmd) {
    let target = room.peer
    
    // VALIDASI VIEW ONCE (Anti-Read ViewOnce)
    // Jika pesan mengandung viewOnce, bot akan menolak meneruskan
    const isViewOnce = m.mtype === 'viewOnceMessageV2' || 
                       m.msg?.viewOnce || 
                       m.message?.viewOnceMessage || 
                       m.message?.viewOnceMessageV2

    if (isViewOnce) {
        return reply('Maaf, pengiriman pesan "Sekali Lihat" tidak diizinkan di fitur Anonymous demi keamanan.')
    }

    // TERUSKAN PESAN MULTIMEDIA
    if (m.mtype === 'conversation') {
        await asya.sendMessage(target, { text: budy })
    } else if (isMedia || m.mtype === 'documentMessage') {
        let media = await m.download()
        await asya.sendFile(target, media, '', m.msg.caption || '', null)
    } else if (m.mtype === 'stickerMessage') {
        let sc = await m.download()
        await asya.sendImageAsSticker(target, sc, null, { packname: "Anonymous", author: "Bot" })
    }
}
          // GAME
          if (!asya.typing) asya.typing = {}
            const kalimatRace = JSON.parse(fs.readFileSync('./database/game/kalimatrace.json'))
            // Logic Typing Race (Tanpa Reply)
            if (asya.typing && asya.typing[m.chat]) {
                let race = asya.typing[m.chat]
                let input = (m.text || '').trim()

                // Cek apakah input sama persis dengan soal (Case Sensitive bisa diatur)
                if (input === race.soal) {
                    let reward = 250
                    addBalance(m.sender, reward, balance) // Tambah uang ke database

                    let teks = `*── 「 RACE FINISHED 」 ──*\n\n`
                    teks += `🏆 *Pemenang:* @${m.sender.split('@')[0]}\n`
                    teks += `⏱️ *Status:* Tercepat & Terakurat\n`
                    teks += `💰 *Hadiah:* $${reward} Uang\n\n`
                    teks += `_Kalimat: "${race.soal}"_`

                    await asya.sendTextWithMentions(m.chat, teks, m)
                    
                    clearTimeout(race.waktu)
                    delete asya.typing[m.chat]
                }
            }
          if (!asya.suit) asya.suit = {}
          // Logic untuk menangani jawaban, hint, dan nyerah
          if (asya.game && asya.game[m.chat]) {
            let gameSession = asya.game[m.chat]
            let body = (text || m.text || '').toLowerCase().trim()

            // 1. FITUR NYERAH
            if (body === 'nyerah') {
                let durasiBerjalan = (Date.now() - gameSession.waktu_mulai) / 1000
                if (durasiBerjalan < 30) {
                    return reply(`Kamu baru bisa menyerah setelah 30 detik permainan. (Sisa ${Math.ceil(30 - durasiBerjalan)} detik lagi)`)
                } else {
                    reply(`Yahhh payah... Jawabannya adalah: *${gameSession.jawaban.toUpperCase()}*`)
                    clearTimeout(gameSession.timeout)
                    delete asya.game[m.chat]
                    return
                }
            }

            // 2. FITUR HINT
            if (body === 'hint') {
                let jwb = gameSession.jawaban
                // Ambil huruf pertama dan huruf terakhir, tengahnya dikasih titik-titik
                let clue = jwb.replace(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZaiueoAIUEO]/g, '_')
                // Tampilkan 1 atau 2 huruf asli sebagai bantuan
                let hintFinal = jwb[0] + jwb.slice(1).replace(/./g, (m, i) => Math.random() < 0.3 ? m : '_')
                
                return reply(`*Bantuan:* \`\`\`${hintFinal.toUpperCase()}\`\`\``)
            }

            // 3. CEK JAWABAN BENAR
            if (body === gameSession.jawaban) {
                let reward = 400
                addBalance(m.sender, reward, balance) 
                
                await reply(`✅ *SELAMAT!* Jawaban kamu benar!\n\nJawaban: *${gameSession.jawaban.toUpperCase()}*\nHadiah: *$${reward}*`)
                
                clearTimeout(gameSession.timeout)
                delete asya.game[m.chat]
            }
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
if (m.isGroup && isAntiLink && !isCreator && !isAdmins) {
    if (budy.includes(`chat.whatsapp.com/`)) {
        if (!isBotAdmins) return asya.sendMessage(m.chat, { text: `Gagal kick! Jadikan bot admin dulu.` })
        await asya.sendMessage(m.chat, { 
            text: `*「 GROUP LINK DETECTOR 」*\n\nMaaf @${m.sender.split('@')[0]}, kamu mengirim link grup lain. Kamu akan dikeluarkan!`,
            mentions: [m.sender] 
        })
        
        // Eksekusi kick
        await asya.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
}

          
    //——————————[ COMMAND CASE ]——————————//
    
    switch (command) {
    case 'menu':{
        var data = allmenu(sender, prefix)
        var buttons = [{text: "Nomor Owner", id: "/owner"}]
        await sendButton(m.chat, data, jam(), buttons, m)
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
      case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
            if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
                try {
            let set
            if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
            if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
            if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
            if (/earrape/.test(command)) set = '-af volume=12'
            if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
            if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
            if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
            if (/reverse/.test(command)) set = '-filter_complex "areverse"'
            if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
            if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
            if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
            if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
            if (/audio/.test(mime)) {
                  reply(jojoh)
                  let media = await asya.downloadAndSaveMediaMessage(quoted)
                  let ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                      fs.unlinkSync(media)
                      if (err) return reply(err)
                          let buff = fs.readFileSync(ran)
                      asya.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
                      fs.unlinkSync(ran)
                  })
              } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
              limitAdd(sender, limit)
          } catch (e) {
                          reply(e)
                      }
    break
    case 'slot':
        if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
      const pepekk = [
            '🍊 : 🍒 : 🍐',
            '🍒 : 🔔 : 🍊',
            '🍇 : 🍇 : 🍐',
            '🍊 : 🍋 : 🔔', //Arasya
            '🔔 : 🍒 : 🍐',
            '🔔 : 🍒 : 🍊',
            '🍊 : 🍋 : 🔔',        
            '🍐 : 🍒 : 🍋',
            '🍐 : 🍒 : 🍐',
            '🍊 : 🍒 : 🍒',
            '🔔 : 🔔 : 🍇',
            '🍌 : 🍌 : 🔔',
            '🥑 : 🥑 : 🥑 Win👑',
            '🍐 : 🔔 : 🔔',
            '🍊 : 🍋 : 🍒',
            '🌶️ : 🌶️ : 🌶️ Win👑',
            '🍋 : 🍋 : 🍋 Win👑',
            '🔔 : 🔔 : 🍇',
            '🔔 : 🍇 : 🍇', 
            '🔔 : 🍐 : 🔔',
            '🍌 : 🍌 : 🍌 Win👑'
            ]
      const kalah = [
            '🍊 : 🍒 : 🍐',
            '🍒 : 🔔 : 🍊',
            '🍇 : 🍇 : 🍐',
            '🍊 : 🍋 : 🔔', //Arasya
            '🔔 : 🍒 : 🍐',
            '🔔 : 🍒 : 🍊',
            '🍊 : 🍋 : 🔔',        
            '🍐 : 🍒 : 🍋',
            '🍐 : 🍒 : 🍐',
            '🍊 : 🍒 : 🍒',
            '🔔 : 🔔 : 🍇',
            '🍌 : 🍌 : 🔔',
            '🍐 : 🔔 : 🔔',
            '🍊 : 🍋 : 🍒',
            '🔔 : 🔔 : 🍇',
            '🔔 : 🍇 : 🍇', 
            '🔔 : 🍐 : 🔔',
            ]
      const kalah2 = [
            '🍊 : 🍒 : 🍐',
            '🍒 : 🔔 : 🍊',
            '🍇 : 🍇 : 🍐',
            '🍊 : 🍋 : 🔔', //Arasya
            '🔔 : 🍒 : 🍐',
            '🔔 : 🍒 : 🍊',
            '🍊 : 🍋 : 🔔',        
            '🍐 : 🍒 : 🍋',
            '🍐 : 🍒 : 🍐',
            '🍊 : 🍒 : 🍒',
            '🔔 : 🔔 : 🍇',
            '🍌 : 🍌 : 🔔',
            '🍐 : 🔔 : 🔔',
            '🍊 : 🍋 : 🍒',
            '🔔 : 🔔 : 🍇',
            '🔔 : 🍇 : 🍇', 
            '🔔 : 🍐 : 🔔',
            ]
            const selot = pepekk[Math.floor(Math.random() * pepekk.length)]
            const kalahnya = kalah[Math.floor(Math.random() * kalah.length)]
            const kalahnya2 = kalah2[Math.floor(Math.random() * kalah2.length)]
            var slotnya = `*[ 🎰 GAME SLOT 🎰 ]*
    
${kalahnya}
${selot}
${kalahnya2}

Note : Jika Kamu Mendapatkan Item Yang Sama, Kamu Menang!!!
Contoh : 🔔 : 🔔 : 🔔`
    asya.sendMessage(m.chat, {
    interactiveMessage: {
        header: "[ GAME JADUL ]",
        title: slotnya,
        footer: jam(),
        buttons: [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "Try Again",
                    id: "/slot",              
                })
            }
        ]
    }
}, { quoted: m });
    limitAdd(sender, limit)
            break
            case 'editimg': {
              if (!isPremium) return reply(mesg.prem)
              try {
                  let mime = (qmsg).mimetype || ''
                  let prompt = (text || '').trim()
                  if (!prompt) prompt = 'Edit karakter ini jadi tersenyum'
          
                  let imageUrl = null
          
                  if (/image/.test(mime)) {
                      await reactLoading(m) 
                      
                      let media = await asya.downloadAndSaveMediaMessage(qmsg)
                      
                      let upload = await UploadFileUgu(media)
                      imageUrl = upload.url
                      
                      if (fs.existsSync(media)) fs.unlinkSync(media)
                      
                      if (!imageUrl) return reply('Gagal mengupload gambar ke server uploader.')
                  } 
                  else {
                      let urlMatch = (text || '').match(/https?:\/\/\S+/)
                      if (urlMatch) {
                          imageUrl = urlMatch[0]
                          prompt = text.replace(imageUrl, '').trim() || 'Edit karakter ini jadi tersenyum'
                      }
                  }
          
                  if (!imageUrl) {
                      return reply(`Kirim atau reply foto yang mau diedit dengan caption:\n*${prefix + command}* <prompt>\n\nContoh:\n*${prefix + command}* ubah jadi zombie`)
                  }
          
                  await reply(jojoh)
          
                  // 4. Proses API Edit Foto
                  let apiUrl = `https://api-faa.my.id/faa/editfoto?url=${encodeURIComponent(imageUrl)}&prompt=${encodeURIComponent(prompt)}`
                  
                  const response = await axios.get(apiUrl, { responseType: 'arraybuffer' })
                  
                  if (response.status !== 200) return reply('Gagal menghubungi server edit foto.')
          
                  await asya.sendMessage(m.chat, { 
                      image: Buffer.from(response.data), 
                      caption: `✨ *Hasil Edit Foto*\n\n*Prompt:* ${prompt}` 
                  }, { quoted: m })
          
              } catch (e) {
                  console.error(e)
                  reply('Terjadi kesalahan saat memproses gambar. Pastikan API aktif atau coba prompt lain.')
              }
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
    /// ANON
    case 'start': {
      if (Object.values(asya.anonymous).find(user => user.id === sender)) return reply('Kamu masih berada dalam sesi chat!')
      reply('Mencari partner anonymous...')
      // Cari user yang sedang 'waiting'
      let room = Object.values(asya.anonymous).find(user => user.status === 'waiting' && user.id !== sender)
      if (room) {
          // Jika ketemu partner
          asya.anonymous[room.id].status = 'chatting'
          asya.anonymous[room.id].peer = sender
          asya.anonymous[sender] = {
              id: sender,
              status: 'chatting',
              peer: room.id
          }
          asya.sendMessage(room.id, { text: '_Partner ditemukan! Silahkan chat._' })
          asya.sendMessage(sender, { text: '_Partner ditemukan! Silahkan chat._' })
      } else {
          // Jika tidak ada, masuk antrian
          asya.anonymous[sender] = {
              id: sender,
              status: 'waiting',
              peer: ''
          }
      }
  }
  break

  case 'stop': {
      let room = asya.anonymous[sender]
      if (!room) return reply('Kamu tidak sedang dalam sesi chat.')
      if (room.peer !== '') {
          asya.sendMessage(room.peer, { text: '_Partner telah menghentikan chat._' })
          delete asya.anonymous[room.peer]
      }
      delete asya.anonymous[sender]
      reply('Sesi anonymous dihentikan.')
  }
  break

  case 'next': {
      let room = asya.anonymous[sender]
      if (!room) return reply('Gunakan .start untuk memulai.')
      if (room.peer !== '') {
          asya.sendMessage(room.peer, { text: '_Partner telah menghentikan chat._' })
          delete asya.anonymous[room.peer]
      }
      delete asya.anonymous[sender]
      // Otomatis panggil start lagi
      asya.anonymous[sender] = { id: sender, status: 'waiting', peer: '' }
      reply('Mencari partner baru...')
      let newPartner = Object.values(asya.anonymous).find(user => user.status === 'waiting' && user.id !== sender)
      if (newPartner) {
          asya.anonymous[newPartner.id].status = 'chatting'
          asya.anonymous[newPartner.id].peer = sender
          asya.anonymous[sender].status = 'chatting'
          asya.anonymous[sender].peer = newPartner.id
          asya.sendMessage(newPartner.id, { text: '_Partner ditemukan!_' })
          asya.sendMessage(sender, { text: '_Partner ditemukan!_' })
      }
  }
  break
            case 'sticker':
    case 'stiker':
    case 's': {
      if (!quoted || (!/image/.test(mime) && !/video/.test(mime))) return example(`ᴋɪʀɪᴍ ᴀᴛᴀᴜ ʀᴇᴘʟʏ ғᴏᴛᴏ/ᴠɪᴅᴇᴏ`);
    await reactLoading(m);
      let media = await asya.downloadAndSaveMediaMessage(quoted);
      let stickerOptions = {
        packname: global.packname || 'syaa',
        author: global.author || 'Arasyaaa'
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
    //——————————[ SISTEM POIN & UANG ]——————————//
    case 'transfer': case 'tf':{
        let target
        if (m.quoted && m.quoted.sender) {
            target = m.quoted.sender
        } else if (m.mentionedJid && m.mentionedJid.length > 0) {
            target = m.mentionedJid[0]
        } else {
            return reply('Tag atau reply user yang mau ditransfer')
        }
        if (target === sender) {
            return reply('Tidak bisa transfer ke diri sendiri')
        }
        const swn = args.join(" ")
        const jumlah = swn.split("|")[1]
        if (!jumlah) return reply('Masukkan jumlah\nContoh: /transfer @user|1000')
        if (isNaN(jumlah)) return reply('Jumlah harus angka')
        const nominal = parseInt(jumlah)
        const saldoPengirim = getBalance(sender, balance)
        if (saldoPengirim < nominal) {
            return reply(`Saldo tidak cukup ❌\nSaldo kamu: $${saldoPengirim}`)
        }
        kurangBalance(sender, nominal, balance)
        addBalance(target, nominal, balance)
        reply(monospace(
            `✅ Transfer berhasil\n\n` +
            `Ke: @${target.split('@')[0]}\n` +
            `Jumlah: $${nominal}\n` +
            `Sisa saldo: $${getBalance(sender, balance)}`,
            { mentions: [target] }
        ))
    }
    break
    
    
    case 'uang':
      case 'duit':
      case 'poin': {
          let target;
          
          if (m.quoted) {
              target = m.quoted.sender;
          } else if (m.mentionedJid?.length) {
              target = m.mentionedJid[0];
          } else {
              target = m.sender;
          }
      
          // Ambil nomor saja tanpa @s.whatsapp.net untuk cek di database owner
          const targetNumber = target.split('@')[0];
      
          // Cek apakah target adalah Owner atau Premium
          const isOwner = ownerNumber.includes(targetNumber);
          const isPrim = isOwner || checkPremiumUser(target, premium);
      
          // Jika Owner atau Premium, tampilkan Unlimited
          let limitUser = isPrim ? 'Unlimited' : `${getLimit(target, limitCount, limit)}/${limitCount}`;
          let balanceUser = isPrim ? 'Unlimited' : `$${getBalance(target, balance)}`;
      
          let teks = `*── 「 USER INFO 」 ──*\n\n`
              teks += ` @${targetNumber}\n`
              teks += ` Status : ${isOwner ? 'Owner' : (isPrim ? 'Premium' : 'Free User')}\n`
              teks += ` Poin : ${limitUser}\n`
              teks += ` Uang : ${balanceUser}\n\n`
              teks += `Kamu dapat membeli Poin dengan ${prefix}buypoin`
      
          asya.sendTextWithMentions(m.chat, teks, m);
      }
      break

    case 'buypoin':{
        if (!text) return reply(`Kirim perintah *${prefix}buypoin* jumlah Poin yang ingin dibeli\nContoh : ${prefix + command} 2\n\nHarga 1 Poin = $150 balance`)
            if (text.includes('-')) return reply(`Jangan menggunakan -`)
            if (isNaN(text)) return reply(`Harus berupa angka`)
            if (text.toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
            let ane = parseInt(q) * 150
            let hasil = ane
            if (getBalance(sender, balance) < ane) return reply(`Uang kamu tidak mencukupi untuk pembelian ini`)
            kurangBalance(sender, hasil, balance)
            giveLimit(sender, parseInt(q), limit)
            reply(monospace(`Pembeliaan Poin sebanyak ${q} berhasil\n\nSisa Uang : $${getBalance(sender, balance)}\nSisa Poin : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
    }
        break
        case 'limit':{
            reply(`Jojo tidak menggunakan limit, tapi menggunakan Poin, silahkan ketik /poin untuk melihat poin yang tersedia`)
        }
        break
        
        case 'topuang':{
            balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
            let top = '*── 「 TOP PALING KAYA 」 ──*\n\n'
            let arrTop = []
            var total = 10
            if (balance.length < 10) total = balance.length
            for (let i = 0; i < total; i ++){
                top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                arrTop.push(balance[i].id)
            }
            mentions(top, arrTop, true)
        }
            break
    
    //——————————[ Grup Manage ]——————————//
    // CASE WELCOME (ON/OFF)
    case 'welcome': {
      if (!m.isGroup) return reply('Fitur ini hanya untuk di grup!')
      if (!isAdmins && !isCreator) return reply('Khusus Admin!')
  
      // welcome adalah variabel array dari JSON.parse
      const isWelcome = welcome.includes(m.chat)
  
      if (args[0] === 'on') {
          if (isWelcome) return reply('Welcome sudah aktif di grup ini.')
          welcome.push(m.chat)
          fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
          reply('✅ Berhasil mengaktifkan Welcome di grup ini.')
      } else if (args[0] === 'off') {
          if (!isWelcome) return reply('Welcome memang tidak aktif di grup ini.')
          let index = welcome.indexOf(m.chat)
          welcome.splice(index, 1)
          fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
          reply('❌ Berhasil mematikan Welcome di grup ini.')
      } else {
          let buttons = [
              { text: 'On ✅', id: `${prefix}welcome on` },
              { text: 'Off ❌', id: `${prefix}welcome off` }
          ]
          await sendButton(m.chat, `*WELCOME CONFIG*\n\nStatus di grup ini: ${isWelcome ? 'ON' : 'OFF'}`, jam(), buttons, m)
      }
  }
  break

case 'setwelcome': {
  if (!m.isGroup) return reply('Hanya untuk di dalam grup!')
  if (!isAdmins && !isCreator) return reply('Khusus Admin!')
  if (!text) return reply(`Contoh: ${prefix + command} Selamat datang @user di grup @group`)

  try {
      let t_welcome = JSON.parse(fs.readFileSync('./database/teks_welcome.json'))
      
      // JIKA ISI FILE ADALAH ARRAY [], UBAH JADI OBJECT {}
      if (Array.isArray(t_welcome)) t_welcome = {}

      t_welcome[m.chat] = text
      fs.writeFileSync('./database/teks_welcome.json', JSON.stringify(t_welcome, null, 2))
      
      reply(`✅ Teks welcome berhasil disimpan untuk grup ini.\n\n*Teks:* ${text}`)
  } catch (err) {
      // Jika file error/kosong, buat baru sebagai object
      let t_welcome = {}
      t_welcome[m.chat] = text
      fs.writeFileSync('./database/teks_welcome.json', JSON.stringify(t_welcome, null, 2))
      reply(`✅ Teks welcome berhasil disimpan (File Reset).`)
  }
}
break

case 'setleft': {
  if (!m.isGroup) return reply('Hanya untuk di dalam grup!')
  if (!isAdmins && !isCreator) return reply('Khusus Admin!')
  if (!text) return reply(`Contoh: ${prefix + command} @user Keluar grup @group`)

  try {
      let t_left = JSON.parse(fs.readFileSync('./database/teks_left.json'))
      
      if (Array.isArray(t_left)) t_left = {}

      t_left[m.chat] = text
      fs.writeFileSync('./database/teks_left.json', JSON.stringify(t_left, null, 2))
      
      reply(`✅ Teks left berhasil disimpan untuk grup ini.`)
  } catch (err) {
      let t_left = {}
      t_left[m.chat] = text
      fs.writeFileSync('./database/teks_left.json', JSON.stringify(t_left, null, 2))
      reply(`✅ Teks left berhasil disimpan.`)
  }
}
break
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
    case 'add': {
    if (!m.isGroup) return balas(mesg.gc);
    if (!isBotAdmins) return balas(mesg.botadm);
    if (!isAdmins) return balas(mesg.adm);

    let users = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : q ? q.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : null;
    if (!users) return balas('❗ *ᴛᴀɢ, ʀᴇᴘʟʏ, ᴀᴛᴀᴜ ᴛᴜʟɪs ɴᴏᴍᴏʀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ ᴛᴀᴍʙᴀʜ!*');

    const groupMetadata = await asya.groupMetadata(m.chat);
    const inGc = groupMetadata.participants.some(p => p.id === users);
    if (inGc) return balas('⚠️ *ᴜsᴇʀ sᴜᴅᴀʜ ᴀᴅᴀ ᴅɪ ᴅᴀʟᴀᴍ ɢʀᴜᴘ!*');

    const response = await asya.groupParticipantsUpdate(m.chat, [users], 'add');
    const jpegThumbnail = await asya.profilePictureUrl(m.chat, 'image').catch(_ => null);

    for (const participant of response) {
        const jid = participant.jid || users;
        const status = participant.status;

        if (status === '408') {
            balas(`[ ! ] ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴᴀᴍʙᴀʜᴋᴀɴ @${jid.split('@')[0]}!\nᴍᴜɴɢᴋɪɴ ɪᴀ ʙᴀʀᴜ sᴀᴊᴀ ᴋᴇʟᴜᴀʀ ᴀᴛᴀᴜ ᴅɪ-ᴋɪᴄᴋ.`, { mentions: [jid] });
        } else if (status === '403') {
            const inviteCode = participant.content.content[0].attrs.code;
            const inviteExp = participant.content.content[0].attrs.expiration;
            
            balas(`[ ! ] @${jid.split('@')[0]} ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴘʀɪᴠᴀsɪ.\nᴍᴇɴɢɪʀɪᴍᴋᴀɴ ᴜɴᴅᴀɴɢᴀɴ ɢʀᴜᴘ (V4)...`, { mentions: [jid] });

            await asya.sendGroupV4Invite(
                m.chat, 
                jid, 
                inviteCode, 
                inviteExp, 
                groupMetadata.subject, 
                'Undangan untuk bergabung ke grup WhatsApp saya', 
                jpegThumbnail
            );
        } else if (status === '200') {
            balas(`[ ✓ ] ʙᴇʀʜᴀsɪʟ ᴍᴇɴᴀᴍʙᴀʜᴋᴀɴ: @${jid.split('@')[0]}`, { mentions: [jid] });
        } else {
            balas(`[ x ] ɢᴀɢᴀʟ ᴍᴇɴᴀᴍʙᴀʜᴋᴀɴ: @${jid.split('@')[0]} (Status: ${status})`, { mentions: [jid] });
        }
    }
}
break;
    
    case 'promote':
    case 'demote': {
      if (!m.isGroup) return reply(mesg.gc);
      if (!isBotAdmins) return reply(mesg.botadm);
      if (!isAdmins) return reply(mesg.adm);
    
      const isPromote = command === 'promote';
      let target;
    
      if (m.quoted) {
        target = m.quoted.sender;
      } else if (m.mentionedJid?.length) {
        target = m.mentionedJid[0];
      } else {
        return reply(`🔖 *Tag atau reply member yang ingin di-${isPromote ? 'Jadikan' : 'Cabut'} Admin.*`);
      }
    
      try {
        await asya.groupParticipantsUpdate(m.chat, [target], isPromote ? 'promote' : 'demote');
        reply(`[ ✓ ] *Berhasil ${isPromote ? 'Menjadikan' : 'Mencabut'} Admin!*`);
      } catch (e) {
        console.error(e);
        reply(mesg.err);
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
      case 'antilink': {
      if (!m.isGroup) return balas(mesg.gc);
      if (!isBotAdmins) return balas(mesg.botadm);
      if (!isAdmins) return balas(mesg.adm);
          if (q.toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Status Sudah Aktif.`)
              antilink.push(m.chat)
    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
    reply('Sukses Menyalakan Antilink Grup, Jika Ada Member Yg Send Link GC, BOT Akan KICK!')
          } else if (q.toLowerCase() === 'disable'){
              let anu = antilink.indexOf(m.chat)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('Nonaktif.')
          } else {
              reply(`Pilih enable atau disable\nContoh : ${prefix}antilink enable`)
          }
      }
                break
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
    /* ========================== GAME ==================================*/
    case 'typingrace':
case 'tr': {
    if (m.chat in asya.typing) return reply('Masih ada sesi Typing Race yang berlangsung di chat ini!')
    
    // Pilih kalimat acak
    let teks = kalimatRace[Math.floor(Math.random() * kalimatRace.length)]
    
    let caption = `*── 「 TYPING RACE 」 ──*\n\n`
    caption += `Siapa cepat dia dapat! Ketik kalimat di bawah ini secepat mungkin:\n\n`
    caption += `*“ ${teks} ”*\n\n`
    caption += `🎁 Hadiah: $250 Uang\n`
    caption += `⏳ Waktu: 45 Detik`

    asya.typing[m.chat] = {
        soal: teks,
        pemenang: false,
        waktu: setTimeout(() => {
            if (asya.typing[m.chat]) {
                reply(`*Waktu Habis!*\nTidak ada yang berhasil mengetik dengan cepat. Jawabannya adalah:\n_"${teks}"_`)
                delete asya.typing[m.chat]
            }
        }, 45000)
    }
    
    await reply(caption)
}
break
    case 'suit': {
      // Ambil target dari reply
      let target = m.quoted ? m.quoted.sender : null
      
      // --- MODE PLAYER VS BOT (Jika tidak reply siapapun) ---
      if (!target) {
          let buttons = [
              { text: '✌️ Gunting', id: `${prefix}suitpvb gunting` },
              { text: '✊ Batu', id: `${prefix}suitpvb batu` },
              { text: '🖐️ Kertas', id: `${prefix}suitpvb kertas` }
          ]
          return await sendButton(m.chat, `*SUIT VS BOT*\n\nSilahkan pilih kartu kamu di bawah ini untuk melawan bot:`, jam(), buttons, m)
      }
  
      // --- MODE PLAYER VS PLAYER (Jika reply pesan seseorang) ---
      if (m.chat in asya.suit) return reply('Masih ada sesi suit yang berlangsung di grup ini!')
      if (target === m.sender) return reply('Masa mau suit sama diri sendiri?')
      if (target === botNumber) return reply('Kalau mau lawan bot, jangan di-reply, langsung ketik /suit saja.')
  
      let nominal = text.replace(/[^0-9]/g, '') || 100 // Default taruhan 100 jika tidak isi nominal
      if (getBalance(m.sender, balance) < nominal) return reply('Uang kamu tidak cukup untuk taruhan ini!')
      if (getBalance(target, balance) < nominal) return reply('Uang lawan tidak cukup untuk taruhan ini!')
  
      asya.suit[m.chat] = {
          p1: m.sender,
          p2: target,
          status: 'WAITING',
          taruhan: parseInt(nominal),
          pilih1: '',
          pilih2: '',
          waktu: setTimeout(() => {
              if (asya.suit[m.chat]) {
                  asya.sendMessage(m.chat, { text: 'Waktu habis, tantangan suit dibatalkan.' })
                  delete asya.suit[m.chat]
              }
          }, 60000)
      }
  
      let buttons = [
          { text: 'Terima ✅', id: `${prefix}suitsetuju` },
          { text: 'Tolak ❌', id: `${prefix}suitbatal` }
      ]
      
      let txt = `*TANTANGAN SUIT (PVP)*\n\n`
          txt += `👉 *Penantang:* @${m.sender.split('@')[0]}\n`
          txt += `👉 *Lawan:* @${target.split('@')[0]}\n`
          txt += `💰 *Taruhan:* $${nominal}\n\n`
          txt += `Silahkan klik *Terima* untuk memulai. Pilihan suit akan dikirim lewat Chat Pribadi (PC) Bot!`
  
      await asya.sendTextWithMentions(m.chat, txt, m)
      await sendButton(m.chat, `Apakah @${target.split('@')[0]} menerima?`, jam(), buttons, m)
  }
  break
  
  case 'suitbatal': {
      let room = asya.suit[m.chat]
      if (!room) return
      if (m.sender !== room.p2 && m.sender !== room.p1) return reply('Bukan urusanmu!')
      
      reply(`Sesi suit dibatalkan oleh @${m.sender.split('@')[0]}`)
      clearTimeout(room.waktu)
      delete asya.suit[m.chat]
  }
  break
  
  // Helper untuk pilihan PVB
  case 'suitpvb': {
      let userChoice = args[0]
      let choices = ['gunting', 'batu', 'kertas']
      let botChoice = choices[Math.floor(Math.random() * 3)]
      
      let menang = false
      let seri = false
      if (userChoice === botChoice) seri = true
      else if (
          (userChoice === 'gunting' && botChoice === 'kertas') ||
          (userChoice === 'batu' && botChoice === 'gunting') ||
          (userChoice === 'kertas' && botChoice === 'batu')
      ) menang = true
  
      let hasil = `*USER:* ${userChoice.toUpperCase()}\n*BOT:* ${botChoice.toUpperCase()}\n\n`
      if (seri) hasil += 'Hasil: *SERI* 🤝'
      else if (menang) {
          hasil += 'Hasil: *KAMU MENANG* 🎉'
          addBalance(m.sender, 50, balance)
      } else hasil += 'Hasil: *KAMU KALAH* 💀'
      
      reply(hasil)
  }
  break
  
  case 'suitsetuju': {
    let room = asya.suit[m.chat]
    if (!room) return reply('Sesi suit tidak ditemukan.')
    if (m.sender !== room.p2) return reply('Bukan kamu yang ditantang!')
    
    room.status = 'PLAYING'
    reply('Tantangan diterima! Silahkan cek Chat Pribadi (PC) bot untuk memilih.')

    // Fungsi kirim pilihan ke PC masing-masing
    const kirimPilihan = async (targetJid) => {
        let buttons = [
            { text: '✌️ Gunting', id: `${prefix}suitpilih ${m.chat} gunting` },
            { text: '✊ Batu', id: `${prefix}suitpilih ${m.chat} batu` },
            { text: '🖐️ Kertas', id: `${prefix}suitpilih ${m.chat} kertas` }
        ]
        // Pastikan sendButton kamu bisa mengirim ke JID tertentu (targetJid)
        await sendButton(targetJid, `Silahkan pilih suit kamu untuk room di grup:\n${m.chat}`, jam(), buttons)
    }

    await kirimPilihan(room.p1)
    await kirimPilihan(room.p2)
}
break
  
case 'suitpilih': {
  // PENTING: Jika di PC, ID grup ada di args[0]
  // Tapi terkadang Baileys memisahkan ID grup yang mengandung '-' menjadi beberapa args
  // Kita gabungkan kembali jika perlu, atau pastikan pengambilan args benar
  let roomID = args[0] 
  let pilihan = args.pop() // Ambil pilihan (paling terakhir: gunting/batu/kertas)
  
  let room = asya.suit[roomID]
  
  if (!room) return reply('Sesi suit sudah berakhir atau tidak ditemukan.')
  
  // Logika pemilihan
  if (m.sender === room.p1) {
      if (room.pilih1) return reply('Kamu sudah memilih!')
      room.pilih1 = pilihan
      reply(`Kamu memilih *${pilihan.toUpperCase()}*. Menunggu lawan...`)
  } else if (m.sender === room.p2) {
      if (room.pilih2) return reply('Kamu sudah memilih!')
      room.pilih2 = pilihan
      reply(`Kamu memilih *${pilihan.toUpperCase()}*. Menunggu lawan...`)
  }

  // CEK: Jika keduanya sudah memilih
  if (room.pilih1 && room.pilih2) {
      let { p1, p2, pilih1, pilih2, taruhan, waktu } = room
      let win = ''

      if (pilih1 === pilih2) win = 'SERI'
      else if ((pilih1 === 'gunting' && pilih2 === 'kertas') || (pilih1 === 'batu' && pilih2 === 'gunting') || (pilih1 === 'kertas' && pilih2 === 'batu')) win = p1
      else win = p2

      let teks = `*── 「 HASIL SUIT PVP 」 ──*\n\n`
          teks += `👤 @${p1.split('@')[0]} : ${pilih1.toUpperCase()}\n`
          teks += `👤 @${p2.split('@')[0]} : ${pilih2.toUpperCase()}\n\n`
      
      if (win === 'SERI') {
          teks += `Status: *HASIL SERI* 🤝`
      } else {
          let kalah = (win === p1) ? p2 : p1
          teks += `Pemenang: @${win.split('@')[0]} 🎉\n`
          teks += `Hadiah: $${taruhan.toLocaleString()}`
          
          // Eksekusi saldo
          if (typeof addBalance === 'function') addBalance(win, taruhan, balance)
          if (typeof subtractBalance === 'function') subtractBalance(kalah, taruhan, balance)
      }

      // KIRIM KE GRUP (Bukan ke m.chat karena m.chat saat ini adalah PC user)
      await asya.sendMessage(roomID, { 
          text: teks, 
          mentions: [p1, p2] 
      }).catch(err => {
          console.log("Gagal kirim ke grup, mencoba fallback...")
          // Jika gagal, kirim ke salah satu player sebagai info
          reply("Gagal mengirim hasil ke grup. Silahkan cek saldo masing-masing.")
      })

      clearTimeout(waktu)
      delete asya.suit[roomID]
  }
}
break
    case 'tebaklirik': {
        if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
          if (m.chat in asya.game) return reply(`Ada permainan yang belum selesai di chat ini!`)
      
      let data = tebaklirik[Math.floor(Math.random() * tebaklirik.length)]
      let soal = `*TEBAK LIRIK!*\n\n`
      soal += `Soal: ${data.soal}\n\n`
      soal += `Waktu: 60 detik\n`
      soal += `Hadiah: $400 Uang\n\n`
      soal += `Ketik *hint* untuk bantuan\n`
      soal += `Ketik *nyerah* untuk berhenti (setelah 30 detik)`
  
      asya.game[m.chat] = {
          jawaban: data.jawaban.toLowerCase(),
          waktu_mulai: Date.now(), // Untuk cek 30 detik nyerah
          hint_count: 0,
          msg: await reply(soal),
          timeout: setTimeout(() => {
              if (asya.game[m.chat]) {
                  reply(`Waktu habis! Jawabannya adalah: *${data.jawaban}*`)
                  delete asya.game[m.chat]
              }
          }, 60000)
      }
  }
  break
    case 'siapakahaku': {
        if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
          if (m.chat in asya.game) return reply(`Ada permainan yang belum selesai di chat ini!`)
      
      let data = gameSiapakahAku[Math.floor(Math.random() * gameSiapakahAku.length)]
      let soal = `*GAME SIAPAKAH AKU*\n\n`
      soal += `Soal: ${data.soal}\n\n`
      soal += `Waktu: 60 detik\n`
      soal += `Hadiah: $400 Uang\n\n`
      soal += `Ketik *hint* untuk bantuan\n`
      soal += `Ketik *nyerah* untuk berhenti (setelah 30 detik)`
  
      asya.game[m.chat] = {
          jawaban: data.jawaban.toLowerCase(),
          waktu_mulai: Date.now(), // Untuk cek 30 detik nyerah
          hint_count: 0,
          msg: await reply(soal),
          timeout: setTimeout(() => {
              if (asya.game[m.chat]) {
                  reply(`Waktu habis! Jawabannya adalah: *${data.jawaban}*`)
                  delete asya.game[m.chat]
              }
          }, 60000)
      }
  }
  break
    case 'susunkata': {
        if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
          if (m.chat in asya.game) return reply(`Ada permainan yang belum selesai di chat ini!`)
      
      let data = susunkata[Math.floor(Math.random() * susunkata.length)]
      let soal = `*GAME SUSUN KATA*\n\n`
      soal += `Soal: ${data.soal}\n\n`
      soal += `Waktu: 60 detik\n`
      soal += `Hadiah: $400 Uang\n\n`
      soal += `Ketik *hint* untuk bantuan\n`
      soal += `Ketik *nyerah* untuk berhenti (setelah 30 detik)`
  
      asya.game[m.chat] = {
          jawaban: data.jawaban.toLowerCase(),
          waktu_mulai: Date.now(), // Untuk cek 30 detik nyerah
          hint_count: 0,
          msg: await reply(soal),
          timeout: setTimeout(() => {
              if (asya.game[m.chat]) {
                  reply(`Waktu habis! Jawabannya adalah: *${data.jawaban}*`)
                  delete asya.game[m.chat]
              }
          }, 60000)
      }
  }
  break
  case 'tebaktebakan': {
        if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
          if (m.chat in asya.game) return reply(`Ada permainan yang belum selesai di chat ini!`)
    
    let data = tebaktebakan[Math.floor(Math.random() * tebaktebakan.length)]
    let soal = `*GAME TEBAK TEBAKAN*\n\n`
    soal += `Soal: ${data.soal}\n\n`
    soal += `Waktu: 60 detik\n`
    soal += `Hadiah: $400 Uang\n\n`
    soal += `Ketik *hint* untuk bantuan\n`
    soal += `Ketik *nyerah* untuk berhenti (setelah 30 detik)`

    asya.game[m.chat] = {
        jawaban: data.jawaban.toLowerCase(),
        waktu_mulai: Date.now(), // Untuk cek 30 detik nyerah
        hint_count: 0,
        msg: await reply(soal),
        timeout: setTimeout(() => {
            if (asya.game[m.chat]) {
                reply(`Waktu habis! Jawabannya adalah: *${data.jawaban}*`)
                delete asya.game[m.chat]
            }
        }, 60000)
    }
}
break
  case 'tebakgambar': {
        if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
          if (m.chat in asya.game) return reply(`Ada permainan yang belum selesai di chat ini!`)
    
    let data = tebakgambar[Math.floor(Math.random() * tebakgambar.length)]
    var gambarnya = data.img
    let soal = `*GAME TEBAK GAMBAR*\n\n`
    soal += `Waktu: 60 detik\n`
    soal += `Hadiah: $400 Uang\n\n`
    soal += `Ketik *hint* untuk bantuan\n`
    soal += `Ketik *nyerah* untuk berhenti (setelah 30 detik)`

    asya.game[m.chat] = {
        jawaban: data.jawaban.toLowerCase(),
        waktu_mulai: Date.now(), // Untuk cek 30 detik nyerah
        hint_count: 0,
        msg: await asya.sendMessage(m.chat, {image: {url: gambarnya}, caption: soal}),
        timeout: setTimeout(() => {
            if (asya.game[m.chat]) {
                reply(`Waktu habis! Jawabannya adalah: *${data.jawaban}*`)
                delete asya.game[m.chat]
            }
        }, 60000)
    }
}
break
    /* ========================== DOWNLOADER ==================================*/
    case 'igdl': case 'ig': case 'instagram': {
        if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply(`Poin kamu sudah habis!`)
        if (!text) return example(`https://www.instagram.com/p/xxxx/`)
        reply(jojoh)
        try {
            let data = await fetchJson(`https://api-faa.my.id/faa/igdl?url=${text}`)
            if (!data || !data.result || !data.result.url) {
                return reply("Gagal mendapatkan data. Link mungkin tidak valid atau API sedang down.")
            }
    
            let gambar = data.result.url
            let isVideo = data.result.metadata?.isVideo || false 
            let caption = data.result.metadata?.caption || "Sukses Mendownload"
    
            if (isVideo) {
                await asya.sendMessage(m.chat, {video: { url: gambar[0] }, caption: caption }, { quoted: m })
            } else {
                // Send images one by one
                for (let url of gambar) {
                    await asya.sendMessage(m.chat, { image: { url: url }})
                }
            }
            
            limitAdd(sender, limit)
        } catch (e) {
            console.error("IGDL Error: ", e)
            reply("Terjadi kesalahan sistem internal.")
        }
    }
    break
case 'minusfitur': {
    // Timpa variabel limit dengan data terbaru hasil kembalian fungsi
    limit = limitAdd(sender, limit) 
    reply(`Okeh limit berkurang satu`)
}
break
    case 'tiktok': case 'tt': case 'ttdl':{
        if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
            if (!text) return example(`https://www.tiktok.com/@arasyarafi/video/7564105558744206610?is_from_webapp=1&sender_device=pc&web_id=7529102582120629781`)
            reply(jojoh)
            var data = await fetchJson(`https://api-faa.my.id/faa/tiktok?url=${text}`)
        if (data.result.type == "video") {
            await asya.sendMessage(m.chat, {video: {url: `https://www.tikwm.com/video/media/play/${data.result.id}.mp4`}, caption: `Sukses`}, {quoted: m})
        } else if (data.result.type == "image") {
            reply(`Tunggu sebentar sedang mendownload ${data.result.data.length} Foto`)
            for (let i of data.result.data) {
            await asya.sendMessage(m.chat, {image: {url: i}})
            }
        }
        limitAdd(sender, limit)
    }
    break
    case 'yta': case 'ytmp3':{
        if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
          if (!text) return example(`https://youtu.be/PT2_F-1esPk?si=Dpfd2PfhHJrHTIvv`)
            if (!text == "youtu.be") return reply(`Itu bukan link youtube`)
              var data = await fetchJson(`https://api-faa.my.id/faa/ytmp3?url=${text}`)
            reply(jojoh)
            asya.sendMessage(m.chat, {document: {url: data.result.mp3}, fileName: data.result.title + `.mp3`, mimetype: 'audio/mp3'}, {quoted: m})
            limitAdd(sender, limit)
          }
          break
          case 'ytv': case 'ytmp4':{
            if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
              if (!text) return example(`https://youtu.be/PT2_F-1esPk?si=Dpfd2PfhHJrHTIvv`)
                if (!text == "youtu.be") return reply(`Itu bukan link youtube`)
                  reply(jojoh)
                var data = await fetchJson(`https://api-faa.my.id/faa/ytmp4?url=${text}`)
                asya.sendMessage(m.chat, {video: {url: data.result.download_url}, caption: `Sukses`}, {quoted: m})
                limitAdd(sender, limit)
              }
              break
              case 'play':{
          if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (`Poin kamu sudah habis silahkan kirim ${prefix}poin untuk mengecek poin`)
          if (!text) return example(`Closer`)
            reply(jojoh)
            var search_yt = await yts(text)
            var thumbnail = search_yt.all[0].thumbnail
            var title = search_yt.all[0].title
            var url = search_yt.all[0].url
            var desc = search_yt.all[0].description
            var caption = `*[ YOUTUBE PLAY ]*\n\n` + monospace(`Title: ${title}\nLink: ${url}\nDeskripsi: ${desc}\n\nSedang mendownload.....`)
            var data = await fetchJson(`https://api-faa.my.id/faa/ytmp3?url=${url}`)
            asya.sendMessage(m.chat, {image: {url: thumbnail}, caption: caption}, {quoted: m})
            asya.sendMessage(m.chat, {audio: {url: data.result.mp3}, mimetype: `audio/mp4`, ptt: true}, {quoted: m})
            limitAdd(sender, limit)
            } 
    break
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
     }, { quoted: m });
    
     fs.unlinkSync(zipFilePath);
     } catch (err) {
     console.error(err);
     balas("[ ✓ ] ɢᴀɢᴀʟ ʙᴀᴄᴋᴜᴘ sᴄ!");
     }
    }
    break;
    
    //——————————[ FEATURE PREMIUM ]——————————//

//——————————[ CASE OWNER PREMIUM ]——————————//
case 'addprem': {
  if (!isCreator) return reply("Khusus Owner!")
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') + '@s.whatsapp.net') : ''
  users = asya.decodeJid(users)

  if (!users || users.length < 10) return reply(`Tag/masukkan nomor!\nContoh: ${prefix + command} @tag 30d`)
  
  let durasi = text.split(' ').pop()
  if (!durasi || !/d|h|m|s/.test(durasi)) return reply("Masukkan durasi! (d/h/m/s). Contoh: 30d")
  
  addPremiumUser(users, durasi, premium)
  asya.sendTextWithMentions(m.chat, `✅ Berhasil menambahkan @${users.split('@')[0]} ke premium selama ${durasi}.`, m)
}
break
case 'cekpremium':
case 'cekprem': {
    if (!checkPremiumUser(m.sender, premium)) return reply("Kamu bukan user premium.");
    let expired = getPremiumExpired(m.sender, premium);
    let sisa = expired - Date.now();
    
    // Gunakan library 'ms' yang sudah kamu import untuk merapikan durasi
    let teks = `*── 「 PREMIUM STATUS 」 ──*\n\n`
    teks += `ID: @${m.sender.split('@')[0]}\n`
    teks += `Sisa Waktu: ${ms(sisa, { long: true })}\n`
    teks += `Expired pada: ${new Date(expired).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB`
    
    asya.sendTextWithMentions(m.chat, teks, m);
}
break;

case 'delprem': {
  if (!isCreator) return reply("Khusus Owner!")
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') + '@s.whatsapp.net') : ''
  users = asya.decodeJid(users)

  if (!checkPremiumUser(users, premium)) return reply("User tidak ada di daftar premium.")
  
  let pos = getPremiumPosition(users, premium)
  premium.splice(pos, 1)
  fs.writeFileSync("./database/premium.json", JSON.stringify(premium))
  asya.sendTextWithMentions(m.chat, `✅ Berhasil menghapus @${users.split('@')[0]} dari daftar premium.`, m)
}
break

//——————————[ CASE TOPUP PREMIUM ]——————————//
case 'buyprem': {
  const slug = "acamedia"
  const apikey = "ZU0JBrZtUZSqI8nAqz73zbtgJFtj0tY5"
  
  const hargaDasar = 2000
  const harganya = Math.ceil(hargaDasar + (hargaDasar * 0.007) + 350)
  
  if (checkPremiumUser(m.sender, premium)) return reply("Kamu sudah premium!")

  try {
      await reactLoading(m)
      const cqris = await createQris(slug, apikey, harganya)
      
      // SET DURASI EXPIRED DI SINI (1 Menit dari sekarang)
      const durasiMenit = 1 
      const expiredTimer = Date.now() + (durasiMenit * 60 * 1000)

      let totalFinal = cqris.total_payment + cqris.fee
      let qrisMsg = await asya.sendMessage(m.chat, {
          image: { url: `https://quickchart.io/qr?text=${encodeURIComponent(cqris.payment_number)}` },
          caption: `💳 *PAYMENT QRIS PREMIUM*\n\n` +
                   `💵 *Harga:* Rp${hargaDasar.toLocaleString('id-ID')}\n` +
                   `🔌 *Admin/Pajak:* Rp${(totalFinal - hargaDasar).toLocaleString('id-ID')}\n` +
                   `💰 *Total Scan:* Rp${totalFinal.toLocaleString('id-ID')}\n\n` +
                   `⏳ *Expired:* ${durasiMenit} Menit\n\n` +
                   `_Silahkan scan QR di atas. Nominal akan muncul otomatis._`
      }, { quoted: m })

      let statusInterval = setInterval(async () => {
          const res = await checkStatus(slug, apikey, cqris.order_id, harganya)
          
          // 1. Cek jika berhasil
          if (res && res.status === 'completed') {
              clearInterval(statusInterval)
              addPremiumUser(m.sender, "30d", premium)
              await asya.sendMessage(m.chat, { delete: qrisMsg.key })
              return asya.sendMessage(m.chat, { text: "✅ *Pembayaran Berhasil!*\nPremium 30 hari telah aktif." }, { quoted: m })
          }
          
          // 2. Cek jika waktu habis (1 menit)
          if (Date.now() >= expiredTimer) {
              clearInterval(statusInterval)
              await asya.sendMessage(m.chat, { delete: qrisMsg.key })
              return asya.sendMessage(m.chat, { text: "⚠️ Waktu pembayaran habis (1 menit). Silahkan ketik ulang command jika ingin membeli." }, { quoted: m })
          }
      }, 5000)

  } catch (e) {
      console.error(e)
      reply("Gagal membuat pembayaran.")
  }
}
break
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
      reply(`https://wa.me/6288214772441`)
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
        if (!isCreator) return reply(mesg.own)

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
        if (!isCreator) return reply(mesg.own)
        try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await reply(evaled)
        } catch (err) {
            await reply(String(err))
        }
    }
    if (budy.startsWith('$')) {
        if (!isCreator) return reply(mesg.own)
        exec(budy.slice(2), (err, stdout) => {
            if (err) return reply(err)
            if (stdout) return reply(stdout)
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