const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('<a:unlm:831185621292679299> | Doğru Kullanım : x!destek <isteğiniz>')

return message.channel.send(embed)
}
  //lrowsxrd
const embed = new Discord.MessageEmbed()

.setColor('GREEN')
.setDescription(' <a:evt:844209631990382633>  | Desteğiniz Başarıyla Bildirildi.\nEn Yakın Zamanda İlgilenecektir')

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("GREEN")

.setDescription(`**${message.author.tag}** Adlı Kullanıcının **Desteği ;**`)

.addField(` <a:can:836921186809806868> **DESTEK VAR <a:can:836921186809806868> **`, `<a:ayar:739608060506669076>Kullanıcı İd : ${message.author.id}\n<:physicssabit:845710417036050463>  Kullanıcı Adı : ${message.author.username}\n<:HashtagPng:850293536653180938>  Kullanıcı  Tagı : ${message.author.discriminator}`)
.addField("<a:sagok:842874813013688350> **Gönderilen Destek Mesajı**", type)

.setThumbnail(message.author.avatarURL)

client.channels.cache.get('850833221917605928').send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["istek-bildir","istekbildir","destek-bildir"],
    permLevel: 0
}

exports.help = {
    name: 'destek',
    description: 'isteğinizi belirtilen kanala bildirir.',
    usage: 'istek'
}
