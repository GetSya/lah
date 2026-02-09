const moment = require("moment-timezone");
const chalk = require('chalk')
const fs = require("fs");
moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = fs.readFileSync('./settings.js')

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const viewsmenu = `❋─────────────────❋\n            *✘ JOJO - BOT ✘*\n❋─────────────────❋`
function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix) => {
	return `${ucapanWaktu} @${sender.split("@") [0]} 👋

Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB

_Ada Bug? Ketik ${prefix}report Bug mu_
${readmore}
*( 📍 )  Generator Menu*
≻ ${prefix}buyprem
≻ ${prefix}tourl
≻ ${prefix}brat
≻ ${prefix}sticker
≻ ${prefix}editimg
≻ ${prefix}slot

*( ⭐ )  Download Menu*
≻ ${prefix}tiktok
≻ ${prefix}igdl
≻ ${prefix}ytmp3
≻ ${prefix}ytmp4
≻ ${prefix}play

*( 🎮 )  Game Menu*
≻ ${prefix}tebaktebakan
≻ ${prefix}susunkata
≻ ${prefix}tebakgambar
≻ ${prefix}siapakahaku
≻ ${prefix}suit

*( 〽 )  Convert Menu*
≻ ${prefix}bass
≻ ${prefix}blown
≻ ${prefix}deep
≻ ${prefix}earrape
≻ ${prefix}fast
≻ ${prefix}fat
≻ ${prefix}nightcore
≻ ${prefix}reverse
≻ ${prefix}robot
≻ ${prefix}slow
≻ ${prefix}smooth
≻ ${prefix}squirrel

*( 💸 )  Uang dan Poin*
≻ ${prefix}poin
≻ ${prefix}uang
≻ ${prefix}topuang
≻ ${prefix}transfer @user|nominal

*( 👀 )  Anonymous*
≻ ${prefix}start
≻ ${prefix}stop
≻ ${prefix}next

*( 👥 )  Grup Menu*
≻ ${prefix}buka
≻ ${prefix}tutup
≻ ${prefix}kick
≻ ${prefix}promote
≻ ${prefix}demote
≻ ${prefix}delete
≻ ${prefix}hidetag
≻ ${prefix}pengumuman
≻ ${prefix}setwelcome
≻ ${prefix}setleft
≻ ${prefix}welcome
≻ ${prefix}antilink enable/disable

*( 🔐 )  Owner Menu*
≻ ${prefix}addprem
≻ ${prefix}delprem
≻ ${prefix}donasi
≻ ${prefix}backupsc
≻ ${prefix}addcase
≻ ${prefix}delcase
≻ ${prefix}getcase
≻ ${prefix}addowner
≻ ${prefix}delowner
≻ ${prefix}listowner
≻ ${prefix}owner
≻ ${prefix}self
≻ ${prefix}autoviewsw
≻ ${prefix}gconly
≻ ${prefix}setcmd
≻ ${prefix}delcmd
≻ ${prefix}ping

*JOJO - BOT*`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})