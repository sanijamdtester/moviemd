const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    alias: ["menu"],
    desc: "Check bot online or no.",
    category: "main",
    react: "🎉",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋Welcome,SANIJA-MD-MOVIE-DL-X BOT 🍟*

*╭─「 SANIJA-MD 」*
*│◈ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴* : SANIJA-​🇲​​🇩​ ​🇲​​🇴​​🇻​​🇮​​🇪​-​🇩​​🇱​-​🇽​
*│◈ 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴* : SANIJA NIMTHARU
*│◈ 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 :* 0771343565
*╰──────────●●►*
*╭──────────●●►*
*│ Movie Search - .mv/.mvall
*│ cinesubz.co - .mv2/cine
*│ sinhalasub.lk - .mv3/.sin
*│ yts.mx - .yts/.ytsmx
*│ sinhala subtitles - .sub/.biscope
*│ google drive - .gd/.gdrive
*│ mega files - .mega/.meganz
*╰──────────●●►*

> *©SANIJA-ᴍᴅ ᴍᴀᴅᴇ ʙʏ sanija nimtharu*
`
return await conn.sendMessage(from,{image: {url: "https://files.catbox.moe/2elpxs.png"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
