const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` <a:unlm:831185621292679299> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`küfürE_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zaten kapalıymış`)
}
  db.delete(`küfürE_${message.channel.id}`)
  message.reply(` <a:evt:844209631990382633> Bu özellik **sadece bu kanalda** devre dışı bırakıldı.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["küfürkapat","küfür-kapat"], 
  permLevel: 0
};

exports.help = {
  name: 'küfür-engel-kapat',
  description: 'sayaç', 
  usage: 'sayaç'
};