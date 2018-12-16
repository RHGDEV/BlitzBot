const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const embed = new discord.RichEmbed()
    .setAuthor(`BlitzBot`, bot.user.displayAvatarURL)
      .setTitle(`User Info for ${message.author.username}!`)
        .addField("User ID:", `Your user ID is ${message.author.id}`)
        .addField(`Time Of Join Discord:`,`You joined discord at ${message.author.createdAt}`)
        .addField('Roles:',`${message.author.roles}`)
      .setTimestamp()
    .setColor("RANDOM")
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "uinfo",
}
