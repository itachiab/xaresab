const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
	let rol = db.fetch(`banrol_${message.guild.id}`)
	if(!message.member.roles.cache.has(rol)&& !message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<a:hyr:829687030874767421> Ban Yetkili Rolü Ayarlanmamış veya Gerekli Yetkiye Sahip Değilsin.')
	let banlog = db.fetch(`banlog_${message.guild.id}`)
	if(!banlog) return message.channel.send('<a:hyr:829687030874767421> Ban log Sistemi Ayarlanmamış.')
    let user = message.mentions.users.first()
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send('<a:hyr:829687030874767421> Bir Kişi Etiketlemelisin.')
     if(user.id === message.author.id) return message.channel.send('Kendini Banlayamazsın.')
     if(user.id === client.user.id) return message.channel.send('Botu Banlayamazsın.')
  if(user.id === message.guild.ownerID) return message.channel.send('Sunucu Sahibini Banlayamazsın.')
    if (!message.guild.member(user).bannable) return message.reply('Bu Kişinin Rolü Senden Üstte veya `Üyeleri Yasakla` Yetkisine Sahip.');

   message.channel.send('<a:unlm:831185621292679299>   <@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle banlamak istediğine eminmisin ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).ban({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTitle('<a:banned:818567106014085240> Kişi banlandı')
    .addField('<a:sagok:842874813013688350> Yetkili', `${message.author.tag}`)
    .addField('<a:sagok:842874813013688350> Banlanan kişi', user)
    .addField('<a:sagok:842874813013688350> Sebep', sebep)
    client.channels.cache.get(banlog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('Banlama işlemi iptal edildi. <a:evt:844209631990382633> ')
      })
    })
 })
} 
 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban"
}