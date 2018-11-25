const Discord = require('discord.js');
const client = new Discord.Client();
 const adminprefix = "F";

client.on('ready', () => {
  console.log('Im read');
});







client.login(process.env.BOT_TOKEN);
