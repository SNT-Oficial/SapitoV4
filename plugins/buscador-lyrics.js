import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[βππππβ] Ejemplo de uso correcto: ${usedPrefix + command} Hoy te vi*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json
let letratexto =`ππΈπππ»πΎ: *${result.title}*\nπ°πππΎπ: *${result.author}*\n\nπ»π΄πππ°: ${result.lyrics}`.trim()
let linkresult = monospace + result.link + monospace
conn.sendButton(m.chat, letratexto, `\nπππ»: ${linkresult}\n${wm}`, json.thumbnail.genius, [['π΅ π³π΄ππ²π°ππΆπ°π π°ππ³πΈπΎ π΅', `#play.1 ${text}`], ['π₯ π³π΄ππ²π°ππΆπ°π ππΈπ³π΄πΎ π₯', `#play.2 ${text}`]], m)
} catch {
await m.reply('*[βππππβ] Error, intentΓ© de nuevo :v*')}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
let mono = '`' + '`' + '`'
global.monospace = mono
