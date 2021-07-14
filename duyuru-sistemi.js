const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
  const yetkinyok = new Discord.MessageEmbed()
  .setColor("ff0000")
  .setAuthor("Duyuru Yetkili Rol Ayarlanmamış veya Gerekli Yetkiye Sahip Değilsin", client.user.avatarURL())
  .setDescription("Bu Komutu Kullanabilmek İçin **`Yönetici`** Yetkisine Sahip Olmalısın! \nBu Komutu Kullanmanın Başka Bir Yolu Var [Botu Sunucuna Eklemek](https://discord.com/oauth2/authorize?client_id=847791938475655179&scope=bot&permissions=8) Soldaki Mavi Yazıya Tıklayarak Botu Ekleyebilirsin.")
  .setFooter("Xares", message.author.avatarURL())
  .setTimestamp()
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(yetkinyok)  
  const hata = new Discord.MessageEmbed()
  .setColor("ff0000")
  .setAuthor("Xares Yayıncı Menüsü", client.user.avatarURL())
  .setDescription(`
Lütfen ne yapmak istediğinizi belirtiniz!
x!duyuru-sistem rol = Youtube ve Twitch duyuruları atacak rolü ayarlar.
x!duyuru-sistem kanal = Youtube ve Twitch duyurularının atılacak kanalını ayarlar.
x!duyuru-sistem sıfırla = Youtube ve Twitch duyuruları verilerini sıfırlar.
  `)
  .setImage('https://cdn.discordapp.com/attachments/829234572133793812/847804870412599326/standard_9.gif?width=374&height=48')
  .setFooter("Xares", message.author.avatarURL())
  .setTimestamp()
if(args[0] !== "rol" && args[0] !== "kanal" && args[0] !== "sıfırla") return message.channel.send(hata)
if(args[0] === "rol") {
if(!rol) return message.channel.send(`Lütfen bir rol etiketleyiniz!`)
db.set(`duyuruyetkilisi_${message.guild.id}`, rol.id)
const basari = new Discord.MessageEmbed()
.setAuthor("Cevher Bot", client.user.avatarURL())
.setDescription(`
Duyuru yetkilisi başarıyla ayarlandı!
`)
.setFooter("Cevher", message.author.avatarURL())
message.channel.send(basari)
}
if(args[0] === "kanal") {
if(!kanal) return message.channel.send(`Lütfen bir kanal etiketleyiniz!`)
db.set(`duyurukanal_${message.guild.id}`, kanal.id)
const basari = new Discord.MessageEmbed()
.setAuthor("Cevher Bot", client.user.avatarURL())
.setDescription(`
Duyuru yetkilisi başarıyla ayarlandı!
`)
.setFooter("Cevher", message.author.avatarURL())
message.channel.send(basari)
}
  if(args[0] === "sıfırla") {
db.delete(`duyurukanal_${message.guild.id}`)
db.delete(`duyuruyetkilisi_${message.guild.id}`)
const basari = new Discord.MessageEmbed()
.setAuthor("Cevher Bot", client.user.avatarURL())
.setDescription(`
Duyuru sistemi başarıyla sıfırlandı!
`)
.setFooter("Cevher", message.author.avatarURL())
message.channel.send(basari)
}    
};

exports.conf = {
  enabled: true,//Asperius Development Sunucusuna Aittir
  guildOnly: false,//Asperius Development Sunucusuna Aittir
  aliases: ["yayıncı"],//Asperius Development Sunucusuna Aittir
  permLevel: 2
};//Asperius Development Sunucusuna Aittir

exports.help = {
  name: 'yayıncı' //Asperius Development Sunucusuna Aittir
};