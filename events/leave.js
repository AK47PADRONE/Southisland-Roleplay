const Discord = require('discord.js')

module.exports = {
    name: 'guildMemberRemove',
    async execute(member) {
        const LeaveChannel = member.guild.channels.cache.get('907643497341915147')
        const LeavEembed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(`Ο/Η ${member.user} έφυγε απο το ${member.guild.name}`)
            .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}`)
            .setTimestamp(Date.now())
            .addFields({
                name: `ID:`,
                value: `${member.user.id}`
            }, {
                name: `Account Created On:`,
                value: `${member.user.createdAt.toLocaleString()}`
            }, {
                name: `Joined Server On:`,
                value: `${member.joinedAt.toLocaleString()}`
            })

        LeaveChannel.send(LeavEembed)
    }
}