const discord = require('discord.js');
const logchannel = "511281772902744064";

async function baselogger(bot, desc, icon) {
  const messages = await bot.channels.get(logchannel).fetchMessages({limit: 5});
  const log = messages.filter(m => m.author.id === bot.user.id &&
    m.embeds[0] &&
    m.embeds[0].type === 'rich' &&
    m.embeds[0].footer &&
    m.embeds[0].footer.text.startsWith('Case')
  ).first();
  var thisCase = 0
  var foot = ``
  if (log) {
    thisCase = /Case\s(\d+)/.exec(log.embeds[0].footer.text);
    foot = `Case ${parseInt(thisCase[0]) + 1}`
  } else {
    foot = `Case 0`
  }
  const thumburi = icon || ""
  const embed = new discord.RichEmbed()
    .setTimestamp()
    .setAuthor(`BlitzBot Logs ✍`, bot.user.avatarURL)
    .setThumbnail(thumburi)
    .setColor("ff3333")
    .setDescription(desc)
    .setFooter(foot);
  
  bot.channels.get(logchannel).send({embed});
};

module.exports = {baselogger};
