const Discord = require('discord.js');
const client = new Discord.Client();
 const adminprefix = "F";

client.on('ready', () => {
  console.log('Im read');
});


const developers = ["418418238267850752",""]
client.on('message', message => {//fofo©
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      //fofo©
  if (message.content.startsWith(adminprefix + 'sp')) {
    client.user.setGame(argresult);
      message.channel.send(`✅${argresult}**تم تحويل الحالة إلى**`);
}
});//fofo©




client.login(process.env.BOT_TOKEN);
