export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *[βππππβ] Dejaste de estar inacrivo (π°π΅πΊ)${user.afkReason ? ' DespuΓ©s de estar inactivo (π°π΅πΊ) por el motivo: ' + user.afkReason : ''}*
  
  *ββ ππΈπ΄πΌπΏπΎ π³π΄ πΈπ½π°π²ππΈππΈπ³π°π³ (π°π΅πΊ): ${(new Date - user.afk).toTimeString()}*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*[β] No lo etiquetes [β]*

*ββ π΄π» ππππ°ππΈπΎ πππ΄ ππππ΄π³ π΄ππΈπππ΄ππΎ π΄πππ° πΈπ½π°π²ππΈππΎ (π°π΅πΊ)*      
*ββ ${reason ? 'πΌπΎππΈππΎ π³π΄ πΈπ½π°π²ππΈππΈπ³π°π³ (π°π΅πΊ): ' + reason : 'πΌπΎππΈππΎ π³π΄ πΈπ½π°π²ππΈππΈπ³π°π³ (π°π΅πΊ): _π΄π» ππππ°ππΈπΎ π½πΎ π΄ππΏπ΄π²πΈπ΅πΈπ²πΎ ππ½ πΌπΎππΈππΎ_'}*
*ββ ππΈπ΄πΌπΏπΎ πππ°π½ππ²ππππΈπ³πΎ π³π΄ πΈπ½π°π²ππΈππΈπ³π°π³ (π°π΅πΊ): ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
