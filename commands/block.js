const discord = require("discord.js")
const block = require('../blocked.json')
const config = require('../config.json')
const prefix = "b!"

module.exports.run = (bot, message, args) => {
  if (!config.owners.includes(message.author.id)) return message.channel.send("No! You are not a classified owner!");
  if(!args[0 == help]) return message.reply(`This command is used by doing ${prefix}block **<@userid>**`)
  if(!args[0 == clientUser.id]) return message.channel.send('You... HOW DARE YOU TRY AND BLOCK ME!')
  if(!args[0 == config.owners]) return message.channel.send('Hey! WHY YOU TRYNA BLOCK A OWNER BRO, HOW RUDE.....')
  message.channel.send(`Alright, I blocked the user ${args[0]}.`)
  //message.channel.send(`There's no user with the ID of ${args[0]}, please try again. :face_palm:`)
};

module.exports.help = {
  name: "block"
};
