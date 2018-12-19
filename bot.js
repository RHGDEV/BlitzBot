// This is for a bot to go on github and hosted on heroku!!!

const pak = require(`./json/package.json`)
discord = require('discord.js')
fs = require('fs')
const config = require('./json/config.json')
const bot = new discord.Client()
const prefix = config.prefix
const token = process.env.token // Never show this.
const fireLogger = require('./logger.js').baselogger
bot.commands = new discord.Collection()
bot.owners = ['399973532265742336']
fs.readdir('./commands/', (err, files) => {
   if (err) return console.log("Error loading commands.");
   files.filter(f => f.split(".").pop() == "js").forEach((f,i) => {
       bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
    })
})

// Watching
bot.on(`ready`, () => {
    console.log(`The bot named ${bot.user.username} is ready!`)
    bot.user.setActivity(`Loading with the update "${config.bupdate}"...` , {type: "STREAMING", url: "https://twitch.tv/discordapp"})
    setTimeout(() => {
        bot.user.setActivity(`for ${prefix}help | ${bot.guilds.size} servers!`, {type: "WATCHING"})
    }, 10000);

fireLogger(`${bot.user.username} started up!`, bot, bot.user.avatarURL)
})

// Command running
bot.on(`message`, message => {
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.author.bot) return message.author.send('Hi buddy.');

    const mArray = message.content.split(" ")
    const args = mArray.slice(1)
    const loggedcmd = mArray[0].slice(prefix.length)
    const cmd = bot.commands.get(loggedcmd)

    if(cmd && !config.blocked.includes(message.author.id)) {
        cmd.run(bot, message, args)
        console.log(`${message.author.username} just used the ${loggedcmd} command.`)
        fireLogger(`${message.author.username} used the ${loggedcmd} command.`, bot, bot.user.avatarURL)
     }
})

bot.login(token)