module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You have to be in a voice channel!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same Voice Channel as the Bot!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Currently there is **no** music playing!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - There is one song currently in the queue.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - The queue has just been **removed** !`);
    },
};