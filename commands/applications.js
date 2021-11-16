const { MessageEmbed } = require('discord.js')
const { color, policeapp, ekabapp, staffapp } = require('../config.json')

module.exports = {
    name: 'applications',
    description: 'malakies!',
    async execute(message, args, client) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;

        const applications = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor(color)
            .setDescription(`**Παρακάτω θα βρείτε τα applications του server! Εάν ενδιαφέρεστε μπορείτε να κάνετε __Click__ Ενα απο τα παρακατω Link. \n\n [<@&904706772558839869>](${staffapp}) \n\n [<@&904712310533283852>](${policeapp}) \n\n [<@&904712361796071464>](${ekabapp})**`)

        message.channel.send(applications)
        message.delete()
    },
};