const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = "F";



const developers = ["382889731316514826",""]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + '`✅   ${argresult}`**تم التحويل الحالة إلى**')) {
    client.user.setGame(argresult);
      message.channel.send(``)
  }   
      if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)//fofo©
  } else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);  
}
});




client.login(process.env.BOT_TOKEN);
