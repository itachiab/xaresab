const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("Xares Sponsorları")
.setDescription(" \n \n \n \n Mevcut Sponsor Bulunmamaktadır \n \n Tasarım Sponsoru Aranır. \n Sponsor Olmak İçin \n [Discord Sunucumuz](https://discord.gg/mpn3xnypMt)")
.setImage("")
      .setThumbnail("")
.setColor("BLUE")
return message.channel.send(kinda)
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["destekci"],
permLevel: 0
  
};
  
exports.help = {
name: 'sponsor'
};