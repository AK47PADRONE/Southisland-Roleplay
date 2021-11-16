const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'support',
    description: '!ping',
    async execute(message, args, client) {
        message.channel.send(`**<@&904707090780684308> και <@&904707339771330570> παρακαλείστε να εξυπηρετήσετε τον/ην  το συντομότερο δυνατό!**`)
    },
};