require('../settings')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../library/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize, loadModule } = require('../library/myfunc')
const matrix = require('../library/sc/matrix');
const { default: neoConnect, delay, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, Browsers} = require("naruyaizumi")
const NodeCache = require("node-cache")
const Pino = require("pino")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const makeWASocket = require("naruyaizumi").default
const { execSync } = require("child_process");

const requiredModules = [
  "naruyaizumi",
  "pino",
  "chalk",
  "figlet",
  "ora"
];

for (const mod of requiredModules) {
  try {
    require.resolve(mod);
  } catch (err) {
    console.log(`[ Auto Installer By Riifinity ] Module ${mod} belum ada. Menginstall...`);
    execSync(`npm install ${mod}`, { stdio: "inherit" });
  }
}
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})

let phoneNumber = null
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let db = JSON.parse(fs.readFileSync('./database/set.json'));

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function startneo() {
  await matrix(); // opsional animasi

  const { version } = await fetchLatestBaileysVersion();
  const { state, saveCreds } = await useMultiFileAuthState('./session');
  const msgRetryCounterCache = new NodeCache();

  const asya = makeWASocket({
    version,
    logger: Pino({ level: 'silent' }),
    browser: ['Windows', 'Firefox'],
    msgRetryCounterCache,
    syncFullHistory: true, 
    markOnlineOnConnect: true,
    printQRInTerminal: !process.argv.includes("--pairing-code"),
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" })),
    },
    msgRetryCounterCache,
    generateHighQualityLinkPreview: true,
    markOnlineOnConnect: true,
getMessage: async (key) => {
    if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id)
        return msg?.message || undefined
    }
    return {
        conversation: "Halo, saya adalah bot!" // Fallback pesan default
    }
},
  });

  store.bind(asya.ev);

  const isPairing = process.argv.includes("--pairing-code");
  const pairingName = "rsyarafi";

  if (isPairing && !asya.authState.creds.registered) {
    console.log(chalk.cyan(`\nMasukkan Code Pairing :`));
    let nomor = await question(chalk.cyan(`Contoh: +62xxx : `));
    nomor = nomor.replace(/[^0-9]/g, '');

    console.log(chalk.green(`\nNomor Lu: ${chalk.bold(nomor)}`));

    setTimeout(async () => {
      try {
        const code = await asya.requestPairingCode(nomor, pairingName);
        const format = code?.match(/.{1,4}/g)?.join("-") || code;
        console.log(chalk.bgGreen.black(" Nih Code Pairing Lu "), chalk.white.bold(format));
      } catch (err) {
        console.error(chalk.red("Gagal mengambil pairing code!"), err);
      }
    }, 3000);
  }

    asya.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            await asya.readMessages([mek.key])
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast' )
            if (!asya.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            const m = smsg(asya, mek, store)
            require("./riifinity")(asya, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })

    asya.ev.on('messages.upsert', async chatUpdate => {
        try {
        mek = chatUpdate.messages[0];
        if (!mek || !mek.key) return;

        // Auto view status jika aktif
        if (mek.key.remoteJid === 'status@broadcast' && !db.settings.autoview) {
            await asya.readMessages([mek.key]);
        }
    } catch (err) {
        console.error('AutoView Error:', err);
    }
});


//////////// WELCOME!!
asya.ev.on('group-participants.update', async (anu) => {
    try {
        // Load database
        let welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
        let t_welcome = JSON.parse(fs.readFileSync('./database/teks_welcome.json'))
        let t_left = JSON.parse(fs.readFileSync('./database/teks_left.json'))
        
        // Filter: Hanya jalan jika fitur welcome aktif di grup tersebut
        if (!welcome.includes(anu.id)) return 

        let metadata = await asya.groupMetadata(anu.id)
        let participants = anu.participants

        for (let num of participants) {
            let msg = ""
            
            if (anu.action == 'add') {
                // Ambil teks kustom atau gunakan default
                let teksKustom = t_welcome[anu.id] || "Selamat datang @user di grup @group!"
                msg = teksKustom
                    .replace(/@user/g, `@${num.split('@')[0]}`)
                    .replace(/@group/g, metadata.subject)

                // Kirim pesan teks saja
                await asya.sendMessage(anu.id, {
                    text: msg,
                    mentions: [num]
                })
            } 
            else if (anu.action == 'remove') {
                let teksKustom = t_left[anu.id] || "Selamat tinggal @user, semoga tenang di luar sana."
                msg = teksKustom
                    .replace(/@user/g, `@${num.split('@')[0]}`)
                    .replace(/@group/g, metadata.subject)

                // Kirim pesan teks saja
                await asya.sendMessage(anu.id, {
                    text: msg,
                    mentions: [num]
                })
            }
        }
    } catch (err) {
        console.log("Error Welcome:", err)
    }
})
    asya.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    asya.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = asya.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    asya.getName = (jid, withoutContact = false) => {
        id = asya.decodeJid(jid)
        withoutContact = asya.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = asya.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === asya.decodeJid(asya.user.id) ?
            asya.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    global.selfmode = false
    asya.public = true

    asya.serializeM = (m) => smsg(asya, m, store)

asya.ev.on("connection.update",async  (s) => {
        const { connection, lastDisconnect } = s
            if (connection == "open") {
            console.log(chalk.magenta(`< # > Bot Berhasil Tersambung!`))
        }
        if (
            connection === "close" &&
            lastDisconnect &&
            lastDisconnect.error &&
            lastDisconnect.error.output.statusCode != 401
        ) {
            startneo()
        }
    })
    asya.ev.on('creds.update', saveCreds)
    asya.ev.on("messages.upsert",  () => { })

    asya.sendText = (jid, text, quoted = '', options) => asya.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    asya.sendTextWithMentions = async (jid, text, quoted, options = {}) => asya.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
    //button
    asya.sendListMessage = async (jid, text, title, buttonText, sections, quoted) => {
    const listMessage = {
        text: text,
        footer: "© ACAMEDIA STORE",
        title: title,
        buttonText: buttonText,
        sections: sections
    };
    
    return await asya.sendMessage(jid, listMessage, { quoted: quoted });
};

    asya.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await asya.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    asya.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await asya.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    asya.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    asya.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename,
        data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    asya.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await asya.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;
  
  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await asya.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await asya.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

    asya.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    }
return startneo()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
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