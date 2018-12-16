const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const embed = new discord.RichEmbed()
    .setAuthor(`BlitzBot`, bot.user.displayAvatarURL)
      .setTitle(`Server Info for ${message.guild.name}!`)
        .addField(`Members`,`They are ${message.guild.members}`)
        .addField(`Region`,`The server region is ${message.guild.region}`)
        .addField(`Created At`,`This server was created on ${message.guild.createdAt}`)
        .addField(`Verified`,`This servers verification status is ${message.guild.verified}`)
        .addField(`AFK Channel`,`The AFK channel for this server is ${message.guild.afkChannel}`)
        .setTimestamp()
        .setColor("RANDOM")
      message.channel.send({embed: embed})  
  }

  module.exports.help = {
    name: "sinfo",
  }
