const Discord = require ('discord.js');

module.exports = {
    name: 'invite',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}invite',

    execute(client, message) {
        var embed = new Discord.MessageEmbed()
        .setColor(`PURPLE`)
        .setTitle('Invite | FairFM')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id= 924702097289662545&permissions=36964352&scope=bot`)
        .setFooter('Coded by Jay 🔥')
        message.channel.send(embed)
    },
};