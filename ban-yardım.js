const Discord = require('discord.js');
const db = require('quick.db');
const asperius = require('../ayarlar.json')
let prefix = asperius.prefix

exports.run = async(client, message, args) => {
 const Embed = new Discord.MessageEmbed()
  .setAuthor(`Xares Yardım Menü`,client.user.avatarURL())
 .setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setDescription(`
<a:sagok_2:856297612864258078>  ${prefix}ban \n --> **Etiketlenen Kişiyi Banlar**
<a:sagok_2:856297612864258078>  ${prefix}unban \n --> **ID Girdiğiniz Kişinin Banını Kaldırır**
<a:sagok_2:856297612864258078>  ${prefix}ban-yetkili-rol \n --> **Ban Atabilcek Rolü Ayarlar**
<a:sagok_2:856297612864258078>  ${prefix}ban-yetkili-rol sıfırla \n --> **Ban Atabilcek Rolü Sıfırlar**
<a:sagok_2:856297612864258078>  ${prefix}ban-log <#kanal \n --> **Banlanan Kişileri Logunu Ayarlar**
<a:sagok_2:856297612864258078>  ${prefix}ban-log <#kanal> sıfırla \n --> **Banlanan Kişiler Logunu Sıfırlar**
<a:sagok_2:856297612864258078>  ${prefix}bansay \n --> **Banlanan Kişileri Sayar**
<a:sagok_2:856297612864258078>  ${prefix}bansorgula \n --> **ID Girdiğiniz Kişinin Ban Sebebini Söyler**
`)
 .setImage('https://media.discordapp.net/attachments/829234572133793812/863366154663362560/standard_17.gif?width=374&height=48')
 .setFooter(client.user.tag,client.user.avatarURL())
.setTimestamp()
  message.channel.send(Embed)
    
    
  
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["by", "banyardım", "banhelp", "bh"],
    permLevel: 0,
    kategori: "Üye"}
exports.help = {
name: "ban-yardım",
usage: ""
}
