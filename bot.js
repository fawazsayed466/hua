const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
const adminprefix = "F";

client.on('ready', () => {
  console.log('Im read');
});


client.on('guildMemberAdd', member =>{
    member.addRole(member.guild.roles.find(x => x.name === 'Members'), "Auto-Role")
});



client.login(process.env.BOT_TOKEN);
