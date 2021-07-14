const Discord = require('discord.js');
const db = require('quick.db');
const asperius = require('../ayarlar.json')
let prefix = asperius.prefix

exports.run = async(client, message, args) => {
 const Embed = new Discord.MessageEmbed()
  .setAuthor(`Xares Eğlence Menü`,client.user.avatarURL())
 .setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setDescription(`
<a:kred:856310187622531122>   ${prefix}düello \n --> **Düello Oyununu Oynarsınız*
<a:kred:856310187622531122>   ${prefix}doğruluk-cesaret \n --> **Doğruluk Cesaret Oyunu**
<a:kred:856310187622531122>   ${prefix}afk \n --> **Afk Sistemi**
<a:kred:856310187622531122>  ${prefix}sor \n --> **Bota Soru Sorarsınız** 
<a:kred:856310187622531122>  ${prefix}faker \n --> ** Birisinin Adına Fake Mesaj Atarsınız**
<a:kred:856310187622531122>  ${prefix}davet \n --> **Daha Fazla Eğlence İçin Para Ekonomi & Eğlence Botunu Ekleyebilirsiniz!'**
`)
 .setImage('https://media.discordapp.net/attachments/829234572133793812/863366154663362560/standard_17.gif?width=374&height=48')
 .setFooter(client.user.tag,client.user.avatarURL())
.setTimestamp()
  message.channel.send(Embed)
    
    
  
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ey", "helpeğlence"],
    permLevel: 0,
    kategori: "Üye"}
exports.help = {
name: "eğlence",
usage: ""
}