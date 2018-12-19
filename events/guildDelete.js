const discord = require(`discord.js`)
const config = require(`../json/config.json`)

module.exports = (bot, guild, discord) => { 
if (config.sblocked) {
console.log(`left a blocked server`)
} else {
    const gname = guild.name
    const em = new (require('discord.js').RichEmbed)()
    .setDescription(`I just left ${gname}.`)
    .setTimestamp()
    .setColor("RANDOM")
    bot.channels.get('514529175370203146').send({embed: em})
    }
}