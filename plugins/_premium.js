let handler = m => m
export async function all(m) {
let user = global.db.data.users[m.sender]
if (m.chat.endsWith('broadcast')) return
if (user.premiumTime != 0 && user.premium) {
if (new Date() * 1 >= user.premiumTime) {
await m.reply(`*@${m.sender.split`@`[0]} ¡SE ACABO TU TIEMPO PREMIUM XD!*\nSI QUIERES TENER OTRO USA EL COMAND𝙾\n*#pase premium*`, false, { mentions: [m.sender] })
user.premiumTime = 0
user.premium = false 
}}}
