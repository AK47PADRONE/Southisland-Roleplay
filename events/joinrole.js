const Discord = require('discord.js')

module.exports = {
    name: 'guildMemberAdd',
    async execute(guildMember) {
        let welcomeRole = guildMember.guild.roles.cache.get('904717650708549662')

        guildMember.roles.add(welcomeRole);
    },
};