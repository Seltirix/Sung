module.exports = {
    name: 'Engage',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}engager',

    execute(client, message) {
        message.channel.send("Un golem vient d'apparaître");
    },
};