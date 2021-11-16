const Discord = require('discord.js')

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        const AddChannel = member.guild.channels.cache.get('907643497341915147')
        const embed = new Discord.MessageEmbed()
            .setColor('#FE660A')
            .setDescription(`Ο/Η <@${member.user.id}> έγινε μέλος του ${member.guild.name}`)
            .setThumbnail(`${member.user.displayAvatarURL()}`)
            .setTimestamp(Date.now())
            .addFields(
                { name: `Account Created On:`, value: `${member.user.createdAt.toLocaleString()}` }
            )
        AddChannel.send(embed)
    }
}