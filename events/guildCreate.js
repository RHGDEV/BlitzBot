const discord = require(`discord.js`)
const config = require(`../json/config.json`)

module.exports = (bot, guild, discord) => {
  const gname = guild.name
  const member = guild.owner
    if (config.sblocked = guild.id) {
      const embed = new discord.RichEmbed()
        .setTitle("Sorry...")
        .addField("Im sorry to say but your server is blocked. Sorry but im going to have to leave... sorry, see you on the support server where you can ask questions. (Support Server: https://discord.gg/tb5bknB )")
        .setThumbnail(bot.user.avatarURL)
        .setTimestamp()
        member.send({embed: embed})
        bot.guild.leave

        const em = new (require('discord.js').RichEmbed)()
        .setDescription(`I just joined ${gname} but it was blocked so I left.`)
        .setTimestamp()
        .setColor("RANDOM")
        bot.channels.get('514529175370203146').send({embed: em})

    } else {
const embed = new discord.RichEmbed()
  .setTitle("Introduction to BlitzBot")
  .addField("Heyo! Thanks for adding me.","Before you start using me, I need to get some things straight. First of all, for some basic info about me, say `b!info`.")
  .addField("To see a list of commands","Say `b!help`.", true)
  .addField("If you need to report a bug:","go to the [issue tracker](https://github.com/BlitzServerDevs/BlitzBot/issues), or just use the `b!reportbug` command, and it will send a message straight to my creator.")
  .addField("Done!", "Alrighty! Now you can start using all my awesome features in your server!")
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  member.send({embed: embed})

  const em = new (require('discord.js').RichEmbed)()
  .setDescription(`I just joined ${gname}.`)
  .setTimestamp()
  .setColor("RANDOM")
  bot.channels.get('514529175370203146').send({embed: em})
  }
}