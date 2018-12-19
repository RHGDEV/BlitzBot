const discord = require("discord.js")
const config = require('../json/config.json')

module.exports.run = (bot, message, args) => {
    const helpMenu = new discord.RichEmbed()
    .setAuthor(`Blitz`, `https://cdn.discordapp.com/avatars/399973532265742336/16ccc99d07643b4aff4421d8556dec95.png`)
    .setThumbnail(`https://cdn.discordapp.com/avatars/504251593911173130/82bbf8091f7678e42cc29cd5b8bbbeb8.png?size=2048`)
    .setColor(`RANDOM`)
    .setTitle(`Commands!`)
    .setTimestamp()
    .setURL(`https://bot.blitzbot.ml`)
	.setDescription(`This is all commands for BlitzBot! The prefix is ${config.prefix}`)
	.addField(`uptime`, `This command shows the uptime of the bot`, `Usage:  ${config.prefix}uptime`)
    .addField(`info`, `This command shows the bot info.`, `Usage:  ${config.prefix}info`)
    .addField(`sinfo`, `This command shows the server info.`, `Usage:  ${config.prefix}sinfo`)
    .addField(`uinfo`, `This command shows the user info.`, `Usage:  ${config.prefix}uinfo`)
    .addField(`owners`, `This command shows the owners of the bot.`, `Usage:  ${config.prefix}owners`)
    .addField(`support`, `This command shows the support server details.`, `Usage:  ${config.prefix}support`)
    .addField(`ping`, `This command shows you the ping of the bot.`, `Usage:  ${config.prefix}ping`)
    .addField(`reportbug`, `This command allows you to send us info of bugs.`, `Usage:  ${config.prefix}reportbug <message>`)
    .addField(`kick`, `This command allows you to kick people.`, `Usage:  ${config.prefix}kick <mentionusertokick>`)
    .addField(`tempmute`, `This command allows you to mute people, doesn't need a muted role.`, `Usage:  ${config.prefix}tempmute <mentionusertomute> <mutetime>`)
    .addField(`addrole`, `This command allows you to add a role to someone.`, `Usage:  ${config.prefix}addrole <mentionusertoaddrole> <mentionrole>`)
    .addField(`delrole`, `This command allows you to delete a role to someone.`, `Usage:  ${config.prefix}delrole <mentionusertodelrole> <mentionrole>`)
    .setFooter(`Thanks for using BlitzBot!`)
    message.author.send({embed: helpMenu})
}

module.exports.help = {
    name: "help"
}
