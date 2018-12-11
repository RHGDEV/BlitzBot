let discord = require('discord.js')
const prefix = "b!"

module.exports.run = (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Invalid Permissions!");
  if(!args[0 == help]) return message.reply(`This command is used by doing ${prefix}delrole **<@role> <@user>**`)
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("You need to mention someone.")
  let role = message.mentions.roles.first();
  if (!role) return message.channel.send("You need to mention a role.")
  let roleid = role.id
  let rolename = role.name
  if (!message.guild.roles.get(roleid)) return message.channel.send(`That role doesn't exist...`);

  member.removeRole(roleid);
  let em = new discord.RichEmbed()
  .setTitle("Blitzbot Delrole")
  .setDescription(`Okay! I removed the role ${rolename} from user ${member.user.username}.`)
  .setTimestamp()
  .setFooter(`${message.author.username} removed role ${rolename} from user ${member.user.username}.`)
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "delrole"
}
