const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
  let yetkili = db.get(`duyuruyetkilisi_${message.guild.id}`)
  let log = db.get(`duyurukanal_${message.guild.id}`)
  if(!message.member.roles.cache.has(yetkili)) return message.channel.send(`Bu komutu kullanmak için yeterli yetkiye sahip değilsiniz!`)
  const link = args[0]
if(!link) return message.channel.send(`Lütfen yayın linkini belirtiniz!`)
const isim = args.slice(1).join(' ')
if(!isim) return message.channel.send(`Lütfen yayın ismini belirtiniz!`)
message.channel.send(`||@everyone|| - ||@here||`)
const asperius = new Discord.MessageEmbed()
.setAuthor("Yeni Bir Yayın Var!")
.setDescription(`
╔▬▬▬▬▬▬▬▬Cevher Duyuru▬▬▬▬▬▬▬▬▬
║Yeni Bir Yayın Başladı
║
║${isim} Adlı Yayına Gitmek İçin [tıkla](${link})
╚▬▬▬▬▬▬▬▬Cevher Duyuru▬▬▬▬▬▬▬▬▬
`)
.setFooter("Twitch Duyuru", message.author.avatarURL())
client.channels.cache.get(log).send(asperius)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tw-duyuru"],
  permLevel: 2
};

exports.help = {
  name: 'twitch-duyuru' 
};