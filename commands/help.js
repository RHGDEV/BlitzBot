const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
	 const embed = new discord.RichEmbed()
	 .addField(`Hey! I'm Blitzbot!`, `My commands are ping and help!`)
	 .setColor("Green") // Set to a different color if you want...
   message.channel.send({embed: embed})
}

module.exports.help = {
   name: "help"
}