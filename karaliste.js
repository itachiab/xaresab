const Discord = require("discord.js");
const db = require('quick.db');
exports.run = async (client, message, args) => {
 if(message.author.id !== "561510338701557761") if(message.author.id !== "") return message.channel.send("<a:havali:828683676925034537>  Sahibimmisin hayır ne deniyon");
  let user = args[0]
      let sebep = args.slice(1).join(' ')
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(" <a:hyr:829687030874767421> Karalisteye almak istediğin kullanıcının id sini yaz!")
    message.channel.send({embed: e})
    return;
  };
  if(!sebep){
    let e = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(" <a:hyr:829687030874767421> Lütfen karalisteye almak için bir sebep belirtin!")
    message.channel.send({embed: e})
    return;
  }
  
  
  db.set(`karalist_${user}`, "aktif")
  db.set(`sebep_${user}`, sebep)
  
  let embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`<a:tik:856094446147731476>  Tamamdır Başkan ${user} Adlı kişi **${sebep}** Sebebiyle Karalisteme Alındı!`)
    message.channel.send({embed: embed})
  .setTimestamp()
  if (client.users.cache.get(user).send('westrabumm')){
  } else return
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 0
};

exports.help = {
  name: "karaliste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};