module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - La musique s'est arrêtée car il n'y a plus de membre dans le channel !`);
};