const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = client => {
  setInterval(function() {}, 8000);
  client.user.setPresence({
    game: {
      name: `x!yardım | x!botbilgi`,
      type: "idle" //WATCHING - İZLİYOR LISTINING - DİNLİYOR
    },
    status: "streaming" //online - Çevrimiçi idle - Boşta
  });
  console.log(`Xares Hazır, Komutlar Yüklendi, Hizmete Hazırım.`);
};
