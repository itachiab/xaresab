/* kayıtsistemi başlangıç */
const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`⚠️ Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

  const embed = new Discord.MessageEmbed()
  .setDescription(`[(Destek Sunucusu)](https://discord.gg/mpn3xnypMt)\nYapay zeka olmadan artık kayıt yapmak çok kolay!`)
  .setColor('GOLD')
  .setAuthor(`${client.user.username} Yapay Zeka Desteksiz | Kayıt Sistemi Yardım Menüsü`, client.user.avatarURL({ size: 2048, format: 'png' }))
  .addField(`**<a:sagok_2:856297612864258078>   \`!kayıt-kanal #kanal 》\`**`, 'Üyelerin Kayıt Olacağı Kanal')
  .addField(`**<a:sagok_2:856297612864258078>   \`!kayıt-kayıtsız @rol 》\`**`, 'Kayıtsız rolü mutlaka olmalıdır. Kayıtsız rolü haricinde kimseye kayıt işlemi yapmaz.')
  .addField(`**<a:sagok_2:856297612864258078>   \`!kayıt-erkek @rol 》\`**`, 'Kayıt Olan Kullanıcıya Otomatik Verilecek Erkek Rolü')
  .addField(`**<a:sagok_2:856297612864258078>   \`!kayıt-tag TAG 》\`**`, 'Kayıt Olan Kullanıcıya Otomatik Olarak Verilecek Tag')
  .addField(`**<a:sagok_2:856297612864258078>   \`!kayıt-kadın @rol 》\`**`, 'Kayıt Olan Kullanıcıdan Otomatik Verilecek Olan Kadın Rolü')
  .addField(`**<a:sagok_2:856297612864258078>   \`!kayıt-kapat 》\`**`, 'Kayıt Sistemini Kapatır Ve Tüm Ayarları Sıfırlar.');
  
  return message.channel.send(embed);


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-sistemi'],
  permLevel: 0
};

exports.help = {
  name: 'kayıtsistemi'
};// codare ♥
/* kayıtsistemi son */