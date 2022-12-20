let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] El pibe ${conn.getName(m.sender)} Estará inactivo  (𝙰𝙵𝙺), No lo etiqueten*\n\n*—◉ Motivo de la inactividad (𝙰𝙵𝙺)${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
