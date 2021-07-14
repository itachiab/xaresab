const Discord = require('discord.js');
const db = require('quick.db');
const asperius = require('../ayarlar.json')
let prefix = asperius.prefix

exports.run = async(client, message, args) => {
 const Embed = new Discord.MessageEmbed()
  .setAuthor(`Xares Moderasyon Menü`,client.user.avatarURL())
 .setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setDescription(`
<a:unlm:831185621292679299>  ${prefix}ban \n --> **Etiketlediğiniz Kişiyi Banlar**
<a:unlm:831185621292679299>  ${prefix}kick \n --> **Etiketlediğiniz Kişiyi Atar**
<a:unlm:831185621292679299>  ${prefix}bansorgula \n --> **ID Girdiğiniz Kişinin Neden Banlandığını Yazar**
<a:unlm:831185621292679299>  ${prefix}unban \n --> **ID Girdiğiniz Kişinin Banını Kaldırır**
<a:unlm:831185621292679299>  ${prefix}sil\n --> **Yazdığınız Miktarda Mesaj Siler**
<a:unlm:831185621292679299>  ${prefix}otorol \n --> **Gelişmiş Otorol Sistemi (Yeni!)**
<a:unlm:831185621292679299>  ${prefix}nuke \n --> **BetterAntiSpam Botundaki Nuke Komudu Kanalı silir tekrar açar yetkileriyle birlikte.**
<a:unlm:831185621292679299>  ${prefix}prefix \n --> **Prefix Sistemi**
<a:unlm:831185621292679299>  ${prefix}sa-as aç/kapat \n --> **Sa-as Sistemi**
<a:unlm:831185621292679299>  ${prefix}say \n --> **Sunucudaki Üyeleri Sayar
<a:unlm:831185621292679299>  ${prefix}modlog #kanal/sıfırla \n --> **Modlog Sistemi**
<a:unlm:831185621292679299>  ${prefix}bansay \n --> **Sunucudaki Banlı Üyeleri Sayar**
<a:unlm:831185621292679299>  ${prefix}özelkomut-ekle \n --> **Sunucunuza Özel Komut Eklersiniz**
<a:unlm:831185621292679299>  ${prefix}özelkomut-sil \n --> **Mevcut Özel Komutu Siler**
<a:unlm:831185621292679299>  ${prefix}özelkomut-liste \n --> **Özel Komut Listesini Gösterir**
<a:unlm:831185621292679299>  ${prefix}herkeserolver \n --> **Etiketlediğiniz Rolü Sunucudaki Herkese Verir.**
<a:unlm:831185621292679299>  ${prefix}herkestenrolal \n --> **Etiketlediğiniz Rolü Sunucudaki Herkesten Alır.**
`)
 .setImage('https://media.discordapp.net/attachments/829234572133793812/863366154663362560/standard_17.gif?width=374&height=48')
 .setFooter(client.user.tag,client.user.avatarURL())
.setTimestamp()
  message.channel.send(Embed)
    
    
  
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["my", "ym", "helpmoderasyon", "mh"],
    permLevel: 0,
    kategori: "Üye"}
exports.help = {
name: "moderasyon",
usage: ""
}
