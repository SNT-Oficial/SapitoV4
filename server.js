///| Server Mode |///
///|> Aqui se encuentra el modo servidor de TheMystic-Bot-MD! |///

///| Librerias |///
import express from 'express';
import { createServer } from 'http';
import { toBuffer } from 'qrcode';
/*import cfonts from 'cfonts';
import chalkAnimation from 'chalk-animation';*/
// import fetch from 'node-fetch'

///| Start |///
function connect(conn, PORT) {
    let app = global.app = express()
    let server = global.server = createServer(app)
    let _qr = 'QR invalido, probablemente ya hayas escaneado el QR.'

conn.ev.on('connection.update', function appQR({ qr }) {
    if (qr) _qr = qr
})

app.use(async (req, res) => {
    res.setHeader('content-type', 'image/png')
    res.send(await toBuffer(_qr))
})

/*cfonts.say('Server Mode', {
    font: 'chrome',
    align: 'center',
    gradient: ['red', 'magenta']})

chalkAnimation.rainbow('Servidor Web iniciado en el puerto: ',PORT);*/

server.listen(PORT, () => {
    // if (opts['keepalive']) keepAlive()
})}

/*function keepAlive() {
const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
if (/(\/\/|\.)undefined\./.test(url)) return
setInterval(() => {
fetch(url).catch(console.error)
}, 5 * 1000 * 60)}*/

export default connect