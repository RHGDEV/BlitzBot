const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = (bot, message, args) => {
    const inv = new discord.RichEmbed()
    .setTitle('Bot Invite')
    .setDescription(`I can not accept invites on discord servers! Ask me to join using this link: ${bot.generateInvite(['ADMINISTRATOR'])}`)
    .setColor('GREEN')
    message.author.send({embed: inv})
}

module.exports.help = {
    name: "invite"
}
