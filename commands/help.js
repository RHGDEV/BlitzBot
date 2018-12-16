const discord = require('discord.js')
const prefix = "b!"

module.exports.run = (bot, message, args) => {
    const helpMenu = new discord.RichEmbed()
    .setAuthor(`Blitz`, `https://cdn.discordapp.com/avatars/399973532265742336/16ccc99d07643b4aff4421d8556dec95.png`)
    .setThumbnail(`https://cdn.discordapp.com/avatars/504251593911173130/82bbf8091f7678e42cc29cd5b8bbbeb8.png?size=2048`)
    .setColor(`RANDOM`)
    .setTitle(`Commands!`)
    .setTimestamp()
    .setURL(`https://bot.blitzbot.ml`)
	.setDescription(`This is all commands for BlitzBot! The prefix is ${prefix}`)
	.addField(`uptime`, `This command shows the uptime of the bot`)
    .addField(`info`, `This command shows the bot info.`)
    .addField(`sinfo`, `This command shows the server info.`)
    .addField(`uinfo`, `This command shows the user info.`)
    .addField(`owners`, `This command shows the owners of the bot.`)
    .addField(`support`, `This command shows the support server details.`)
    .addField(`ping`, `This command shows you the ping of the bot.`)
    .addField(`reportbug`, `This command allows you to send us info of bugs.`)
    .addField(`kick`, `This command allows you to kick people.`)
    .addField(`tempmute`, `This command allows you to mute people, doesn't need a muted role.`)
    .addField(`addrole`, `This command allows you to add a role to someone.`)
    .addField(`delrole`, `This command allows you to delete a role to someone.`)
//Owner Only
    .addField(`__**Owner only commands**__`, `These next commands are for owners of the bot only`)
    .addField(`setnormal`, `Sets the activity back to normal`)
    .addField(`restart`, `Restarts the bot.`)
    .addField(`eval`, `Basically allows you to test code.`)
    .setFooter(`Thanks for using BlitzBot!`)
    message.author.send({embed: helpMenu})
}

module.exports.help = {
    name: "help"
}
