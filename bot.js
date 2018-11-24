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
  } else   
}
});




client.login(process.env.BOT_TOKEN);
