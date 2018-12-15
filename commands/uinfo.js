const discord = require('discord.js')
const userz = message.author

module.exports.run = (bot, message, args) => {
  const embed = new discord.RichEmbed()
    .setAuthor(`BlitzBot`, bot.user.displayAvatarURL)
      .setTitle(`User Info for ${userz.username}!`)
        .addField("User ID:", `Your user ID is ${user.id}`)
        .addField(`Time Of Join server:`,`You joined this server at ${userz.joinedAt}`)
        .addField(`Time Of Join Discord:`,`You joined discord at ${userz.user.createdAt}`)
        .addField('Roles:','${message.author.roles}')
      .setTimestamp()
    .setColor("RANDOM")
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "uinfo",
}
