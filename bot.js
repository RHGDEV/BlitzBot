const discord = require('discord.js')
const fs = require('fs')
const bot = new discord.Client()
const prefix = "b!"
const token = process.env.token
bot.commands = new discord.Collection()

fs.readdir('./commands/', (err, files) => {
   if (err) return console.log("Error loading commands.");
   files.filter(f => f.split(".").pop() == "js").forEach((f,i) => {
       bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
    })
})

bot.on('ready', () => {
   console.log(`${bot.user.username} ready!`)
   bot.user.setActivity(`for ${prefix}help | ${bot.guilds.size} servers`, {type: "WATCHING"})
})

bot.on('message', message => {
    if (!message.guild) return;
   if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;
   
   const mArray = message.content.split(" ");
   const args = mArray.slice(prefix.length);
   const loggedcmd = mArray[0].slice(prefix.length)
   const cmd = bot.commands.get(loggedcmd);

  if (cmd) {
      cmd.run(bot, message, args)
      console.log(`${message.author.username} just used the ${loggedcmd} command.`)
   }
})

bot.login(token)
