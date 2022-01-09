module.exports = {
    name: 'connected',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}connected',

    execute(client, message) {
        message.channel.send(`${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size}** channels !`);
    },
};