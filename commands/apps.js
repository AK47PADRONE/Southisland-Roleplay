const { MessageEmbed } = require('discord.js');
const { policeapp, ekabapp, staffapp } = require('../config.json');

module.exports = {
    name: 'apps',
    description: 'malakies!',
    async execute(message, args, client) {
        const police = new MessageEmbed()
            .setColor('#0046FF')
            .setDescription(`[<@&904712310533283852>](${policeapp})`)

        const ekab = new MessageEmbed()
            .setColor('#00FF1B')
            .setDescription(`[<@&904712361796071464>](${ekabapp})`)

        const staff = new MessageEmbed()
            .setColor('#00C9FF')
            .setDescription(`[<@&904706772558839869>](${staffapp})`)

        message.channel.send(police).then(message.channel.send(ekab)).then(message.channel.send(staff))
    },
};