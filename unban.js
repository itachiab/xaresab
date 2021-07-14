const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      "Birinin Yasağını Kaldırmak İçin Gerekli Yetkiye Sahip Değilsin."
    );
  let unbanLog = message.guild.channels.cache.find(m => m.name === "mod-log");
  if (!unbanLog) {
  }
  let bannedMember = args[0];
  if (!bannedMember)
    return message.channel.send(
      "<a:banned:818567106014085240> Ban Kaldırılacak ID Yaz | **Kullanım:** `unban @user <reason>`"
    );

  let bannedReason = args.slice(1).join(" ");
  if (!bannedReason)
    return message.channel.send(
      "<a:banned:818567106014085240> Bir Sebep Yaz | **Kullanım:** `unban @user <reason>`"
    );

  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.channel.send("<a:unlm:831185621292679299> Ban Kaldırma Yetkim Yok Aga");

  try {
    message.guild.members.unban(bannedMember, bannedReason);
    message.channel.send(`<a:evt:844209631990382633> ${bannedMember} **ID'li Kişinin Yasağı Kalktı.**`);
  } catch (e) {
    console.log(e.message);
  }

  let unbanLogEmbed = new Discord.MessageEmbed()
    .setAuthor(`<a:evt:844209631990382633> Yasak Kaldırıldı`, bannedMember.displayAvatarURL())
    .setDescription(
      `**ID:** ${bannedMember}\n \n**Kaldıran:** <a:banned:818567106014085240> ${message.author}\n \n**Sebep:** <a:sagok:842874813013688350>  ${bannedReason}\n \n**Banın Kalktığı Kanal:** <a:unlm:831185621292679299> ${message.channel}`
    )
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(message.guild.name);
  setTimeout(() => {
    message.guild.channels.cache.cache.find(m => m.name === "mod-log").send(unbanLogEmbed);
  }, 3000);
};
module.exports.conf = {
  aliases: []
};
module.exports.help = {
  name: "unban"
};