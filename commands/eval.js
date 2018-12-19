const discord = require('discord.js')
const config = require('../json/config.json')

module.exports.run = (bot, message, args) => {
if(!config.botcommander.includes(message.author.id)) return message.author.send("Nope! You are not an owner/bot commander!")
const content = args.join(" ");
const result = new Promise((resolve, reject) => resolve(eval(content)))
return result.then(output => {
    if (typeof output !== 'string') output = require('util').inspect(output, { depth: 0 });
    if (output.includes(bot.token)) output = output.replace(bot.token, 'Not for your eyes');
    return message.channel.send(output, { code: 'js' })
  }).catch(err => {
    console.error(err);
    err = err.toString();

    if (err.includes(bot.token)) err = err.replace(bot.token, 'Not for your eyes');

    return message.channel.send(err, { code: 'js' })
  });  
}
module.exports.help = {
    name: ""
}