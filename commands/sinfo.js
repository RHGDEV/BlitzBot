const discord = require('discord.js')
const guildz = message.guild

module.exports.run = (bot, message, args) => {
  const embed = new discord.RichEmbed()
    .setAuthor(`BlitzBot`, bot.user.displayAvatarURL)
      .setTitle(`Server Info for ${guildz.name}!`)
        .addField(`Members`,`They are ${guildz.members}`)
        .addField(`Region`,`The server region is ${guildz.region}`)
        .addField(`Created At`,`This server was created on ${guildz.createdAt}`)
        .addField(`Roles`,`The roles in this server are ${guildz.roles}`)
        .addField(`Verified`,`This servers verification status is ${guildz.verified}`)
        .addField(`AFK Channel`,`The AFK channel for this server is ${guild.afkChannel}`)
        .setTimestamp()
        .setColor("RANDOM")
      message.channel.send({embed: embed})
  }

  module.exports.help = {
    name: "sinfo",
  }
