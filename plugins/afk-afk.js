let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[βππππβ] El pibe ${conn.getName(m.sender)} EstarΓ‘ inactivo  (π°π΅πΊ), No lo etiqueten*\n\n*ββ Motivo de la inactividad (π°π΅πΊ)${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
