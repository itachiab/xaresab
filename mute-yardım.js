const Discord = require('discord.js');
const db = require('quick.db');
const asperius = require('../ayarlar.json')
let prefix = asperius.prefix

exports.run = async(client, message, args) => {
 const Embed = new Discord.MessageEmbed()
  .setAuthor(`Xares Yardım Menü`,client.user.avatarURL())
 .setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setDescription(`
<a:sagok_2:856297612864258078>  ${prefix}mute-rol \n --> **Mute Atarken Verilen Rolü Ayarlar**
<a:sagok_2:856297612864258078>  ${prefix}mute-rol sıfırla \n --> **Mute Atarken Verilen Rolü Sıfırlar**
<a:sagok_2:856297612864258078>  ${prefix}mute \n --> **Etiketlenen Kişiye Mute Atar (Süresiz)**
<a:sagok_2:856297612864258078>  ${prefix}mute-yetkili-rol \n --> **Mute Atabilecek Rolü Ayarlar**
<a:sagok_2:856297612864258078>  ${prefix}mute-yetkili-rol sıfırla\n --> **Mute Atabilecek Rolü Sıfırlar**
`)
 .setImage('https://media.discordapp.net/attachments/829234572133793812/863366154663362560/standard_17.gif?width=374&height=48')
 .setFooter(client.user.tag,client.user.avatarURL())
.setTimestamp()
  message.channel.send(Embed)
    
    
  
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["mutey", "helpmute", "mutehelp"],
    permLevel: 0,
    kategori: "Üye"}
exports.help = {
name: "mute-yardım",
usage: ""
}
