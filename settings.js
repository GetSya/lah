const fs = require('fs')
const chalk = require('chalk')

//——————————[ Set Owner ]——————————//
global.ytname = "https://www.youtube.com/@jojobotofficial" //gausah ganti 
global.location = "Jakarta" // ganti serah mu
global.ownername = "Arasya" // ganti nama mu
global.ownernumber = '6288214772441'  // ganti nomermu
global.email = "-" // gmail.com
global.botName = "JOJO" // gmail.com

//——————————[ Set Bot ]——————————//
global.botname = 'Jojo Bot' // ganti serah mu
global.versi = '3.0.0'
global.foot = '© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Arasya' // Footer button
global.idSaluran = "120363398785368583@newsletter" // idch
global.namach = "ʀɪɪғɪɴɪᴛʏ sᴘᴀᴄᴇ¹" // namach
global.aiUsageCount = global.aiUsageCount || {}; // jan kacau ha
global.hias = "➤"

//——————————[ Poin & Uang ]——————————//

global.limitCount = `25`

//——————————[ Set Sticker ]——————————//
global.packname = 'My Sticker'
global.author = `Sticker Saya`
global.themeemoji = '🪀'
global.wm = "ARASYA!"
// Ganti terserah klean ini pack sticker

//——————————[ Set Link ]——————————//
global.link = "https://chat.whatsapp.com/DcttriOn7WTFWlFBw2vCDW" //linkch
global.namagc = "ALL GAME RIIFINITY SPACE" //nama grup
global.linkgc = "https://chat.whatsapp.com/DcttriOn7WTFWlFBw2vCDW" //link gc
global.web = "https://www.youtube.com/channel/UCZzt-Qw0zTYc8UP-LL2G5fA" // website 
global.prefa = ['!','.','#','/','$','@','&']

//——————————[ Set Payment ]——————————//
global.dana = "" // Isi no dana mu
global.gopay = "" // Isi no gopay mu
global.ovo = "" // Isi no ovo mu
global.qris = "" // pakai fitur .tourl untuk ubah foto ke link
global.an = {
  dana: "",
  gopay: "",
  ovo: ""
}

//——————————[ Manage Vercell ]——————————//
global.vercelToken = "-" //Your Vercel Token

//——————————[ Manage GitHub ]——————————//
global.githubToken = "-" //Your GitHub Token
global.githubUsername = "HaidarMahiru" //Your GitHub Username

//——————————[ Media Url ]——————————//
global.imgthumb = "https://files.catbox.moe/2r2zev.webp" //thumb menu
global.imgmenu = "https://files.catbox.moe/2r2zev.webp" //thumb menu v2
global.imgdoc = "https://files.catbox.moe/2r2zev.webp" // Wajib ukuran 1280 × 450
global.logo = "https://files.catbox.moe/2r2zev.webp" //logo toko
global.vn = "https://files.catbox.moe/tflgoe.mp3" //music menu

//——————————[ Api Panel V1 ]——————————//
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://domainmu1.com"
global.apikey = "-" // Isi api ptla
global.capikey = "-" // Isi api ptlc

//——————————[ Api Panel V2 ]——————————//
global.egg2 = "15" // Isi id egg
global.nestid2 = "5" // Isi id nest
global.loc2 = "1" // Isi id location
global.domain2 = "https://domainmu2.com"
global.apikey2 = "-" // Isi api ptla
global.capikey2 = "-" // Isi api ptlc

//——————————[ Set Massage ]——————————//
global.loadreact = "🧿"
global.mesg = {
  slr: "ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ʀᴇsᴇʟʟᴇʀ! sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴋsᴇs",
  pv: "*[ ᴘᴇʀɪɴɢᴀᴛᴀɴ ]* ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ",
  gc: "*[ ᴘᴇʀɪɴɢᴀᴛᴀɴ ]* ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ɢʀᴜᴘ",
  own: "*[ ᴘᴇʀɪɴɢᴀᴛᴀɴ ]* ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ",
  adm: "*[ ᴘᴇʀɪɴɢᴀᴛᴀɴ ]* ғɪᴛᴜʀ ɪɴɪ ᴋʜsᴜs ᴀᴅᴍɪɴ",
  botadm: "ʙᴏᴛ ʙᴇʟᴜᴍ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ",
  load: "ʙᴇɴᴛᴀʀ....",
  prem: "Fitur ini khusus pengguna premium!",
  err: "ᴛᴇʀᴊᴀᴅɪ ᴋᴇsᴀʟᴀʜᴀɴ, ᴄᴏʙᴀ ʟᴀɢɪ sᴜᴀᴛᴜ sᴀᴀᴛ ɴᴀɴᴛɪ..."
}
  

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`'${__filename}' Telah di Update`))
    delete require.cache[file]
    require(file)
})