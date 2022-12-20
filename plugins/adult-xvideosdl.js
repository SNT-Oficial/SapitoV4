import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] ingresé un enlace válido de xvideos, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`
try {
await conn.reply(m.chat, '[❗] 𝐸𝑙 𝑣𝑖𝑑𝑒𝑜 𝑒𝑠𝑡𝑎 𝑠𝑖𝑒𝑛𝑑𝑜 𝑝𝑟𝑜𝑐𝑒𝑠𝑎𝑑𝑜, 𝑒𝑠𝑝𝑒𝑟𝑒 𝑢𝑛 𝑚𝑜𝑚𝑒𝑛𝑡𝑜 𝑒𝑛 𝑙𝑜 𝑞𝑢𝑒 𝑒𝑠 𝑒𝑛𝑣𝑖𝑎𝑑𝑜..\n\n﹣ ᴇʟ ᴛɪᴇᴍᴘᴏ ᴅᴇ ᴇɴᴠɪᴏ ᴅᴇᴘᴇɴᴅᴇ ᴅᴇʟ ᴘᴇsᴏ ʏ ᴅᴜʀᴀᴄɪᴏ́ɴ ᴅᴇʟ ᴠɪᴅᴇᴏ', m)
let res = await fetch(`https://zenzapis.xyz/downloader/xvideos?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] Error, intenta de nuevo*\n\n*- Corrobore que el enlace sea similar a :*\n*◉ https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*')
}}
handler.command = /^(xvideosdl)$/i
export default handler
