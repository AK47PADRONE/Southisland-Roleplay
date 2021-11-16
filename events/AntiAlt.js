const Discord = require('discord.js')
const ms = require('ms')
const timeSpan = ms("10 days");

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        const createdAt = new Date(member.user.createdAt).getTime();
        const channel2 = member.guild.channels.cache.get('908999896923795457')
        const difference = Date.now() - createdAt;
        const altembed = new Discord.MessageEmbed()
            .setDescription('```Πιθανός λογαριασμός Alt```')
            .setTimestamp(Date.now())
            .setColor('RED')
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .addFields({
                name: ' ‎',
                value: `Xρήστης <@${member.user.id}>‎ \n Δημιουργήθηκε: ${member.user.createdAt.toLocaleString()} \n Ο user πρέπει να έχει: **10 μέρες**`
            })

        if (difference < timeSpan) {
            channel2.send(altembed);
            member.kick(reason = 'AntiAlt System')
        }
    }
}