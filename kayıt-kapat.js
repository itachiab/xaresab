/* kayıt-kapat başlangıç */
const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002

  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<a:uyari:849328399809380382>  Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  database.delete(`kayıt-kadın.${message.guild.id}`);
  database.delete(`kayıt-tag.${message.guild.id}`);
  database.delete(`kayıt-kayıtsız.${message.guild.id}`);
  database.delete(`kayıt-erkek.${message.guild.id}`);
  database.delete(`kayıt-kanal.${message.guild.id}`);
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setURL('XARES BOT | KAYIT SİSTEMİ')
  .setTitle(client.user.username+' | Xares-Kayıt Sistemi')
  .setDescription(`**Kayıt sistemi başarıyla sıfırlandı!**
Bize neden sıfırladığınızı söylemek ister misiniz?

**Hatamız olduysa düzeltmeyi çok istiyoruz <3**`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıtkapat'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kapat'
};// codare ♥
/* kayıt-kapat son */
