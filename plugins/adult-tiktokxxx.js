/*---------------------------------------------------------------------------------------
  ๐ โข By https://github.com/ALBERTO9883
  ๐ โข โAlberto Y Ashly son putosโ
-----------------------------------------------------------------------------------------*/

import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[โ๐๐๐๐โ] ๐ป๐พ๐ ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ๐ +๐ท๐พ ๐ด๐๐๐ฐ๐ฝ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ณ๐พ๐ ๐ด๐ฝ ๐ด๐๐๐ด ๐ถ๐๐๐ฟ๐พ, ๐๐ธ ๐ด๐ ๐ฐ๐ณ๐ผ๐ธ๐ฝ ๐ ๐ณ๐ด๐๐ด๐ฐ ๐ฐ๐ฒ๐๐ธ๐๐ฐ๐๐ป๐พ๐ ๐๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ #enable modohorny*'
let fgif = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`*Aสสแดสแดแด Y Asสสสโฅ๏ธ*`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `๐งฟ ๐๐๐ ๐ผ๐ข๐๐๐๐ - ๐ฑ๐๐ ๐ฎ`, 'jpegThumbnail': false }}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName[who]
let json = await fetch(`http://mkbot.online/api/tiktok/nsfw/nsfwtt?&apikey=${mkbotkey}`)
let jsons = await json.json()
let res = jsons.result
conn.sendButton(m.chat, `- Bienvenido a tik tok premium ๐ฅต -`, `*โโข@${who.split("@s.whatsapp.net")[0]}*`, res, [['๐ ๐๐ธ๐ถ๐๐ธ๐ด๐ฝ๐๐ด ๐', `/${command}`]], fgif, { mentions: [who] })}
handler.command = /^(tiktokxxx)$/i
export default handler
global.mkbot = ['UfN5DLvV', 'lwSUluWz', 'KcrY8r8I', 'HSxJ72Rf', 'Gmc5DlDb', 'H6pvVPJc', 'uVAf54xz', 'wF4gTpTZ', 'nwJVzP6v']
global.mkbotkey = mkbot[Math.floor(mkbot.length * Math.random())]
