const Discord = require('discord.js');
const shorten = require('quick.db');

exports.run = (client, message, args, tools) => {
    message.delete();
    if (!args[0]) return message.channel.send(' ** \n » Kullanım: .kısalt <URL> <isim> \n » Örnek: .kısalt <link> <xares> ** ')

    if(!args[1]) {

        shorten.shorten(args[0], function(plasmic) {
            if (plasmic.startsWith('Hata:')) message.channel.send('**Lütfen doğru URL adresi giriniz.**');

            message.channel.send(`**<${plasmic}>**`);
        })
    } else {
        shorten.custom(args[0], args[1], function(plasmicc) {

            if (plasmicc.startsWith('Hata:')) message.channel.send(`**<${plasmicc}>**`);

            message.channel.send(`**<${plasmicc}>**`);
        })
    }

};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'kısalt',
 description: 'İstediğiniz URLni Kısaltır. ',
 usage: 'kısalt'
}; 