import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw `*[β] IngresΓ© el nombre de la APK que quiera buscar πΈ*`
try {
let enc = encodeURIComponent(text)
let json = await fetch(`https://latam-api.vercel.app/api/playstore?apikey=brunosobrino&q=${enc}`)
let gPlay = await json.json()

let mystic = await translate(`${gPlay.descripcion}`, { to: 'es', autoCorrect: true })
if (!gPlay.titulo) return m.reply(`[ ! ] Sin resultados`)
conn.sendMessage(m.chat,{image:{url: gPlay.imagen},caption:`π Resultado: ${gPlay.titulo}
π§¬ Identificador: ${gPlay.id}
βοΈ Link: ${gPlay.link}
πΌοΈ Imagen: ${gPlay.imagen}
βοΈ Desarrollador: ${gPlay.desarrollador}
π Descripcion: ${mystic.text}
π² Moneda: ${gPlay.moneda}
π­ Gratis?: ${gPlay.gratis}
πΈ Precio: ${gPlay.precio}
π Puntuacion: ${gPlay.puntuacion}`},{quoted:m})
} catch {
await m.reply('*[βππππβ] π΄rror, intentΓ© otra vez :v*')    
}}
handler.help = ['playstore <aplicacion>']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
export default handler
