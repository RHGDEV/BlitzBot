const Discord = require("discord.js"); 

const TOKEN = "NTA0MjUxNTkzOTExMTczMTMw.DrCUsQ.xB9pLtakkY1nVnFI8G_AFGu2-P8";

var bot = new Discord.Client();

bot.on("message", function(message) {
	console.log(message.content);
});

bot.login(TOKEN);