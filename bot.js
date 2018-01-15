const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	  if {message.content === 'userinfo'} {
	  var embed = new discord.RichEmbed()
           .addField(message.Author, "owo")
            message.reply(embed)

}
});
client.login(process.env.Bot_Token)
