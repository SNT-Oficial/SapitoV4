let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝕞𝕖𝕟𝕤𝕒𝕛𝕖:* ${pesan}`
let teks = `*⺀𝕚 𝕟 𝕧 𝕠 𝕔 𝕒 𝕟 𝕕 𝕠 -  𝔾 𝕣 𝕦 𝕡 𝕠⺀*\n\n❏ ${oi}\n\n❏ *𝕖𝕥𝕚𝕢𝕦𝕖𝕥𝕒𝕤:*\n`
for (let mem of participants) {
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
teks += `*└* By Sapito - 𝐁𝐨𝐭\n\n*▌│█║▌║▌║║▌║▌║▌║█*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
