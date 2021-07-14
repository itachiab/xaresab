const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` <a:unlm:831185621292679299> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.fetch(`küfürE_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zaten açıkmış`)
}
  db.set(`küfürE_${message.channel.id}`, "aktif")
  message.reply(`<a:evt:844209631990382633> Bu özellik **başarıyla sadece bu kanalda açıldı.** ${client.emojis.cache.get("776806992924377088")}`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'küfür-aç',
  description: 'sayaç', 
  usage: 'sayaç'
};