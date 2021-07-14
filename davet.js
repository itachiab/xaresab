const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setDescription(
      ` <a:zil:836921812985184316>  **Xares Bot Bağlantılar** <a:zil:836921812985184316>   \n ** [İşte Davet Linkim](https://discord.com/api/oauth2/authorize?client_id=847791938475655179&permissions=8&scope=bot) ** \n ** [Destek Sunucum](https://discord.gg/mpn3xnypMt) ** `
    )

    .setColor("RANDOM")
    .setFooter(client.user.username, client.user.avatarURL());
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};
