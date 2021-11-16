const { MessageButton, MessageActionRow } = require('discord-buttons');
const { MessageEmbed } = require('discord.js');
const { color } = require('../config.json');

module.exports = {
    name: 'onoff',
    description: '!ping',
    async execute(message, args, client) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        const embed = new MessageEmbed()
        .setColor(color)
        .setAuthor(message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .setDescription('**Για να δηλώσεις εντός υπηρεσίας πάτα το πράσινο κουμπί\nΓια να δηλώσεις εκτος υπηρεσίας πάτα το κόκκινο κουμπί\n\n>>> <:Online:910169732060176385> Εντός Υπηρεσίας\n\n <:offline:910169755799916554> Εκτός Υπηρεσίας**')

        const on = new MessageButton()
        .setID('on')
        .setStyle('green')
        .setEmoji('910169732060176385')

        const off = new MessageButton()
        .setID('off')
        .setStyle('red')
        .setEmoji('910169755799916554')

        const row = new MessageActionRow()
        .addComponents(on, off)

        message.channel.send(embed, row)
    },
};