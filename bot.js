const Discord = require('discord.js');
const client = new Discord.Client();
 const adminprefix = "F";
client.on('ready', () => {
  console.log('╔[══════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});




client.on('ready', () => {                           
client.user.setGame(`🍸©мR_ƒØƒØ_مِسًـتُـر فُـوٌفُـوٌ©🍸`,'https://www.twitch.tv/fofodiscord');                                                                                                                                                                                                                                                                                                                                                                                                                            
});







client.login(process.env.BOT_TOKEN);
