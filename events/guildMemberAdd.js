const discord = require('discord.js')
const raid = require('./raid.json')
const antiwelcome = requre('./antiwelcome.json')

module.exports = (bot, member) => {
  console.log(`${member.user.username} just joined ${member.guild.name}.`)

  // Actual Functions
  if (!antiwelcome.antiwelcome.includes(member.guild.id)) return;
  const channel = member.guild.channels.find(c => c.name == "welcome")

  if (!channel) return;
  const em = new discord.RichEmbed()
  .setTitle(`%s Guild Welcomer`.replace("%s", member.guild.name))
  .setDescription(`${member.displayName || member.user.username} just joined ${member.guild.name}.`)
  .setTimestamp()
  .setFooter(`${member.guild.name} Guild Welcomer`)
  .setColor("GREEN")
  message.channel.send({embed: em});

// AB
if (!raid.raid.includes(member.id)) return;
const em1 = new discord.RichEmbed()
  .setTitle(`**Guild Warning**`)
  .setDescription(`${member.displayName || member.user.username} just joined ${member.guild.name} but has been noticed by me as a raider of many servers! Please take responsable action (since I cant).`)
  .setTimestamp()
  .addField(`Member id: ${member.id} `)
  .setFooter(`${member.guild.name} Guild Warner`)
  .setColor("RED")
  member.guild.owner.send({embed: em1}) 
} ;
