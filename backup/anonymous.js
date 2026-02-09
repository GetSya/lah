const { default: makeWASocket } = require('naruyaizumi');
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');

//================================================================================
// Data Struktur untuk Anonymous Chat (di luar fungsi utama)
//================================================================================
let anonymous_chat = {}; // Format: { userJid: partnerJid }
let anonymous_waiting = []; // Array pengguna yang sedang menunggu partner
const premium_db = './database/premium.json';

//================================================================================
// FUNGSI HELPER UNTUK MANAJEMEN PREMIUM
//================================================================================
/**
 * Memeriksa apakah seorang pengguna adalah premium.
 * @param {string} userId - JID pengguna (contoh: '6281234567890@s.whatsapp.net')
 * @returns {boolean} - True jika premium, false jika tidak.
 */
const isPremium = (userId) => {
    try {
        if (!fs.existsSync(premium_db)) {
            fs.writeFileSync(premium_db, JSON.stringify([])); // Buat file jika tidak ada
        }
        const premiumUsers = JSON.parse(fs.readFileSync(premium_db));
        return premiumUsers.includes(userId.split('@')[0]);
    } catch (err) {
        console.error("Error reading premium.json:", err);
        return false;
    }
};

/**
 * Menambahkan pengguna ke daftar premium.
 * @param {string} userId - JID pengguna.
 * @returns {boolean} - True jika berhasil ditambahkan, false jika sudah ada.
 */
const addPremium = (userId) => {
    const premiumUsers = JSON.parse(fs.readFileSync(premium_db));
    const userNumber = userId.split('@')[0];
    if (premiumUsers.includes(userNumber)) {
        return false; // Pengguna sudah premium
    }
    premiumUsers.push(userNumber);
    fs.writeFileSync(premium_db, JSON.stringify(premiumUsers, null, 2));
    return true;
};

/**
 * Menghapus pengguna dari daftar premium.
 * @param {string} userId - JID pengguna.
 * @returns {boolean} - True jika berhasil dihapus, false jika tidak ditemukan.
 */
const removePremium = (userId) => {
    let premiumUsers = JSON.parse(fs.readFileSync(premium_db));
    const userNumber = userId.split('@')[0];
    if (!premiumUsers.includes(userNumber)) {
        return false; // Pengguna tidak ditemukan
    }
    premiumUsers = premiumUsers.filter(user => user !== userNumber);
    fs.writeFileSync(premium_db, JSON.stringify(premiumUsers, null, 2));
    return true;
};


//================================================================================
// MODUL UTAMA BOT
//================================================================================
module.exports = neo = async (neo, m, msg, chatUpdate, store) => {
    try {
        // Fitur Auto Read (Centang Biru Otomatis)
        await neo.readMessages([m.key]);

        // --- 1. DEKONSTRUKSI & DEFINISI VARIABEL DASAR ---
        const { sender, body, pushName, isGroup, chat, mentionedJid, quoted } = m;
        const isCreator = ["6288214772441"].includes(sender.split('@')[0]); // Perbaikan kecil untuk isCreator
        const isPremiumUser = isPremium(sender);
        const args = body ? body.trim().split(/ +/).slice(1) : [];
        const text = args.join(' ');

        // --- Console Logger untuk Monitoring ---
        const commandForLog = body || m.mtype;
        const neoTime = chalk.hex("#00ffff")(new Date().toLocaleString());
        const neoLabel = chalk.hex("#ff00c8")("[AnonymousBOT]");
        const separator = chalk.hex("#00ffd5")("\n<==============================================>");

        console.log(separator);
        if (isGroup) {
            const groupMetadata = await neo.groupMetadata(chat);
            const groupName = groupMetadata.subject;
            console.log(chalk.hex("#00ff88")(">> Pesan di Grup"));
            console.log(
                neoLabel, chalk.bgHex("#101010").white(neoTime),
                chalk.bgHex("#0055ff").white(` ${commandForLog} `)
            );
            console.log(chalk.hex("#ffaa00")("↳ Dari:"), chalk.hex("#00ff00")(pushName), chalk.hex("#999999")(`(${sender})`));
            console.log(chalk.hex("#ffaa00")("↳ Di Grup:"), chalk.hex("#00ffcc")(groupName), chalk.hex("#666666")(`(${chat})`));
        } else {
            console.log(chalk.hex("#00ff88")(">> Pesan Pribadi"));
            console.log(
                neoLabel, chalk.bgHex("#101010").white(neoTime),
                chalk.bgHex("#0055ff").white(` ${commandForLog} `)
            );
            console.log(chalk.hex("#ffaa00")("↳ Dari:"), chalk.hex("#00ff00")(pushName), chalk.hex("#999999")(`(${sender})`));
        }
        // --- Akhir dari Console Logger ---

        // --- 2. LOGIKA ANONYMOUS CHAT & PERINTAH ---
        const partnerJid = anonymous_chat[sender];
        let command = '';
        let isCommand = false;

        if (body && body.startsWith('/')) {
            const potentialCommand = body.slice(1).trim().split(/ +/).shift().toLowerCase();
            const validCommands = ['start', 'next', 'stop', 'menu', 'myidentitas', 'addpremium', 'delpremium'];
            if (validCommands.includes(potentialCommand)) {
                isCommand = true;
                command = potentialCommand;
            }
        }
        
        // --- INTI LOGIKA PENERUSAN PESAN ---
        if (partnerJid && !isCommand) {
            // Cek jika pesan adalah kontak
            if (m.mtype === 'contactMessage' || m.mtype === 'contactsArrayMessage') {
                if (isPremiumUser) {
                    await neo.relayMessage(partnerJid, m.message, { messageId: m.key.id });
                } else {
                    return neo.sendMessage(sender, { text: '❌ Fitur mengirim kontak hanya untuk member Premium.' });
                }
            } else {
                // Untuk semua jenis pesan lain, teruskan seperti biasa.
                await neo.relayMessage(partnerJid, m.message, { messageId: m.key.id });
            }
            return;
        }

        // --- EKSEKUSI EVALUASI KODE OLEH OWNER ---
        // Ditempatkan di sini untuk menangkap perintah evaluasi bahkan jika itu bukan perintah bot standar
        if (body && (body.startsWith('=>') || body.startsWith('>')) && isCreator) {
            try {
                let evaled = await eval(body.slice(body.startsWith('=>') ? 2 : 1));
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                return neo.sendMessage(m.chat, { text: util.format(evaled) }, { quoted: m });
            } catch (err) {
                return neo.sendMessage(m.chat, { text: util.format(err) }, { quoted: m });
            }
        }
        
        // Abaikan pesan jika bukan perintah yang valid
        if (!isCommand && body && body.startsWith('/')) {
            // Opsional: Beri tahu pengguna jika perintah tidak dikenal
            return neo.sendMessage(m.chat, { text: `Perintah *${body.split(' ')[0]}* tidak dikenali. Ketik */menu* untuk melihat daftar perintah.` });
        } else if (!isCommand) {
            return;
        }


        // --- 3. EKSEKUSI PERINTAH ---
        async function balas(teks) {
            return neo.sendMessage(m.chat, { text: teks }, { quoted: m });
        }

        switch (command) {
            case 'menu': {
                const menuText = `┌──「 *Anonymous Chat* 」
│
│ ❏ /start - Mulai mencari partner
│ ❏ /next - Cari partner baru
│ ❏ /stop - Hentikan sesi
│
├─ *Fitur Premium* ✨
│ ❏ /myidentitas - Kirim identitasmu
│ ❏ (Bisa kirim kontak ke partner)
│
└─ GABUT BOT ID
                
Hubungi Owner untuk upgrade Premium.`;
                balas(menuText);
            }
            break;

            case 'start': {
                if (partnerJid) return balas('Anda sudah berada dalam sesi obrolan. Ketik */stop* untuk mengakhiri.');
                if (anonymous_waiting.includes(sender)) return balas('Anda sudah dalam antrian. Mohon tunggu...');
                if (anonymous_waiting.length > 0) {
                    let partner = anonymous_waiting.shift();
                    if (partner === sender) {
                        anonymous_waiting.push(sender);
                        return balas('Mencari partner... Harap tunggu sebentar.');
                    }
                    anonymous_chat[sender] = partner;
                    anonymous_chat[partner] = sender;
                    await balas('Partner ditemukan! Selamat memulai percakapan.\nKetik */next* untuk mencari partner baru atau */stop* untuk berhenti.');
                    await neo.sendMessage(partner, { text: 'Partner ditemukan! Selamat memulai percakapan.\nKetik */next* untuk mencari partner baru atau */stop* untuk berhenti.' });
                } else {
                    anonymous_waiting.push(sender);
                    balas('Mencari partner... Harap tunggu.\nKetik */stop* untuk membatalkan pencarian.');
                }
            }
            break;

            case 'next': {
                if (!partnerJid) return balas('Anda tidak sedang dalam sesi obrolan. Ketik */start* untuk memulai.');
                await neo.sendMessage(partnerJid, { text: 'Partner Anda telah mengakhiri obrolan. Ketik */start* untuk mencari partner baru.' });
                delete anonymous_chat[sender];
                delete anonymous_chat[partnerJid];
                await balas('Anda telah mengakhiri obrolan. Mencari partner baru untuk Anda...');
                // Jalankan kembali logika start untuk mencari partner baru
                const startMessage = { ...m, body: '/start', message: { ...m.message, conversation: '/start' } };
                await module.exports(neo, startMessage, msg, chatUpdate, store);
            }
            break;

            case 'stop': {
                if (partnerJid) {
                    await neo.sendMessage(partnerJid, { text: 'Partner Anda telah meninggalkan obrolan. Ketik */start* untuk mencari partner baru.' });
                    await balas('Anda telah berhasil menghentikan sesi obrolan.');
                    delete anonymous_chat[sender];
                    delete anonymous_chat[partnerJid];
                } else if (anonymous_waiting.includes(sender)) {
                    anonymous_waiting = anonymous_waiting.filter(user => user !== sender);
                    balas('Pencarian partner telah dibatalkan.');
                } else {
                    balas('Anda tidak sedang dalam sesi obrolan. Ketik */start* untuk memulai.');
                }
            }
            break;
            
            case 'myidentitas': {
                if (!partnerJid) return balas('Anda harus berada dalam sesi obrolan untuk menggunakan perintah ini.');
                if (!isPremiumUser) return balas('❌ Fitur ini khusus untuk member Premium. Hubungi Owner untuk upgrade.');
                
                const identityText = `Partner Anda membagikan identitasnya:\n\n*Nama:* ${pushName}\n*Nomor:* wa.me/${sender.split('@')[0]}`;
                
                await neo.sendMessage(partnerJid, { text: identityText });
                balas('✅ Identitas Anda berhasil dikirim ke partner.');
            }
            break;

            case 'addpremium': {
                if (!isCreator) return balas('Perintah ini khusus untuk Owner.');
                let targetUser = null;
                if (text && /^\d+$/.test(text.trim())) {
                    targetUser = text.trim().replace(/\D/g, '') + '@s.whatsapp.net';
                } else if (mentionedJid && mentionedJid[0]) {
                    targetUser = mentionedJid[0];
                } else if (quoted) {
                    targetUser = quoted.sender;
                } else {
                    return balas('Cara penggunaan:\n/addpremium 628xxxxxxxx\n/addpremium @tag_user\nAtau balas pesan pengguna.');
                }
                
                if (addPremium(targetUser)) {
                    balas(`✅ Pengguna @${targetUser.split('@')[0]} berhasil ditambahkan sebagai member Premium.`);
                    await neo.sendMessage(targetUser, { text: 'Selamat! Akun Anda telah diupgrade menjadi member Premium oleh Owner.' });
                } else {
                    balas(`⚠️ Pengguna @${targetUser.split('@')[0]} sudah menjadi member Premium.`);
                }
            }
            break;

            case 'delpremium': {
                if (!isCreator) return balas('Perintah ini khusus untuk Owner.');
                let targetUser = null;
                if (text && /^\d+$/.test(text.trim())) {
                    targetUser = text.trim().replace(/\D/g, '') + '@s.whatsapp.net';
                } else if (mentionedJid && mentionedJid[0]) {
                    targetUser = mentionedJid[0];
                } else if (quoted) {
                    targetUser = quoted.sender;
                } else {
                    return balas('Cara penggunaan:\n/delpremium 628xxxxxxxx\n/delpremium @tag_user\nAtau balas pesan pengguna.');
                }

                if (removePremium(targetUser)) {
                    balas(`✅ Status Premium untuk @${targetUser.split('@')[0]} berhasil dihapus.`);
                    await neo.sendMessage(targetUser, { text: 'Mohon maaf, status Premium Anda telah dihapus oleh Owner.' });
                } else {
                    balas(`⚠️ Pengguna @${targetUser.split('@')[0]} tidak ditemukan dalam daftar Premium.`);
                }
            }
            break;
        }
    } catch (err) {
        console.log(chalk.redBright(`Error: ${util.format(err)}`));
    }
}

//================================================================================
// Exception Handler
//================================================================================
/*
    KODE fs.watchFile DIHAPUS DARI SINI.
    Kode tersebut menyebabkan konflik dengan PM2, yang mengakibatkan bot crash dan restart terus-menerus.
    Untuk fitur auto-reload, gunakan flag --watch dari PM2 saat memulai bot.
    Contoh: pm2 start index.js --name bot --watch
*/

process.on('uncaughtException', function (err) {
    console.log(chalk.redBright('Caught exception: ', err));
});