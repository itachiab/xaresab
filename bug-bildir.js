const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Bug Bildirmek için Bir Bug Yazınız.** :x:')

const embed = new Discord.MessageEmbed()
.setTitle("Xares Bug Sistemi")
.setColor('BLUE')
.setDescription(` <:hashtag:855577976422268928>  **Bug Kanalı** ${message.channel.name} \n <:search:855578911337480242>  **Bug Bildirilen Sunucu** \`${message.guild.name}\` \n <:user:855579608841846784>  **Bugu Bildiren Kullanıcı** <@${message.author.id}> \n <:bug:855575685493948416>  **Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('850833881526697984').send(embed)
  
message.channel.send("<a:evt:844209631990382633> Bug bildiriminiz gönderildi. :white_check_mark:").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}