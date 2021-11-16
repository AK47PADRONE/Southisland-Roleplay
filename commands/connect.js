const { MessageEmbed } = require('discord.js');
const { IP, color } = require('../config.json');

module.exports = {
    name: 'connect',
    description: 'malakies!',
    async execute(message, args, client) {
        const embed = new MessageEmbed()
        .setAuthor(message.guild.name,  message.guild.iconURL())
        .setColor(color)
        .setDescription('>>> **Για να συνδεθείτε στον server μας το μόνο που πρέπει να κάνετε είναι να ανοίξετε το FiveM, να πατήσετε το κουμπί F8 στο πληκτρολόγιο σας και να κάνετε επικόλληση το connect ``SOON``**' )
        message.channel.send(embed)
    },
};