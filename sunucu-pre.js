const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {

if(message.author.id !== "837590273861222421") return message.channel.send(`Bu komutu sadece sahibim kullanabilir`)

if(!args[0]) return message.channel.send('<a:unlm:831185621292679299> Yanlış kullanım, bir seçenek belirtmelisin.')

if(args[0] == 'ver'){

let kullanıcı = mes => mes.author.id === message.author.id


let sunucu = args[1];
let süre = args[2];
if(!sunucu) return message.channel.send('<a:hyr:829687030874767421> Yanlış kullanım, bir sunucu ıd belirtmelisin belirtmelisin')
if(!süre) return message.channel.send('<a:hyr:829687030874767421> Yanlış kullanım, bir süre belirtmelisin')
if(isNaN(süre)) return message.channel.send(':x: Belirteceğin süre bir değer olmamalı.')
if(süre < 1) return message.channel.send('<a:hyr:829687030874767421> Belirteceğin süre 0dan küçük olmamalı.')

if(!client.guilds.cache.get(sunucu)) return message.channel.send(':x: Böyle bir sunucuda bulunmuyorum');

let sunucupre = client.guilds.cache.get(sunucu)

if(db.fetch(`sunucupre_${sunucupre.id}`)){
let veri = db.fetch(`sunucupre_${sunucupre.id}`)
message.channel.send('Upps, **'+sunucupre.name+'** sunucusunda '+veri.süre+' günlük premium üyelik var zaten devam etmek istiyormusun\nDevam etmek için bulunduğumuz kanalana **evet** şeklinde belirt. **50** saniyen var. İptal yazarsan işlem iptal olur.').then(mesaj => {
message.channel
.awaitMessages(kullanıcı, { max: 1, time: 50000, errors: ["time"] })
.then(collected => {

if(collected.first().content !== 'evet' && collected.first().content !== 'iptal') return mesaj.edit('İşlem iptal oldu. Yanlış bir terim belirtin.')
if(collected.first().content == 'evet'){
let süre1 = veri.süre;
let top = süre1 + süre
mesaj.edit('**'+sunucupre.name+'** adlı sunucuda **'+süre1+'** günlük premium **'+top+'** güne geçti.')
db.set(`sunucupre_${sunucupre.id}`, {durum: "aktif", süre: top})
}
if(collected.first().content == 'iptal'){
mesaj.edit('İşlem iptal oldu.')
}
})
})
return;
}

db.set(`sunucupre_${sunucupre.id}`, {durum: "aktif", süre: süre})
message.channel.send('**'+sunucupre.name+'** adlı sunucuda **'+süre+'** günlük premium **aktif** edildi.')
}
   
if(args[0] == 'al'){
let sunucu = args[1];
let sunucupre = client.guilds.cache.get(sunucu)
if(!db.fetch(`sunucupre_${sunucupre.id}`)) {
message.channel.send('**'+sunucupre.name+'** adlı sunucuda zaten premium **aktif** değil.')
return
}
let veri = db.fetch(`sunucupre_${sunucupre.id}`)
message.channel.send('**'+sunucupre.name+'** adlı sunucuda **'+veri.süre+'** günlük premium üyelik **deaktif** edildi')
db.delete(`sunucupre_${sunucupre.id}`)
}






};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-pre',
  description: 'V12 Cevher Sunucu Premium Sistemi',
  usage: ''
};