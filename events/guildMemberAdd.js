const discord = require('discord.js')

module.exports = (bot, member) => {
  console.log(`${member.user.username} just joined ${member.guild.name}.`)
  
  // Actual Functions
  
  const channel = member.guild.channels.find(c => c.name == "welcome")
  
  if (!channel) return;
  const em = new discord.RichEmbed()
  .setTitle(`%s Guild Welcomer`.replace("%s", member.guild.name))
  .setDescription(`${member.displayName || member.user.username} just joined ${member.guild.name}.`)
  .setTimestamp()
  .setFooter(`${member.guild.name} Guild Welcomer`)
  .setColor("GREEN")
  message.channel.send({embed: em})
}
