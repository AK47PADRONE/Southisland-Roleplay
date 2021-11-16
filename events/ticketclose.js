const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord-buttons');

module.exports = {
    name: 'clickButton',
    async execute(button) {
        button.clicker.fetch()
        if (button.id === 'buttonclose') {
            const channel = await button.guild.channels.cache.get('908827005720617003')
            const embed = new MessageEmbed()
                .setAuthor(button.clicker.user.tag, button.clicker.user.displayAvatarURL())
                .setColor('#fd0f0f')
                .setDescription('```Ticket Deleted```')
                .addFields(
                    { name: '**Logger Info**', value: `Action: Closed`, inline: true },
                    { name: '**Channel**', value: `#${button.channel.name}`, inline: true }
                )
                .setTimestamp(Date.now())

            channel.send(embed)
            button.channel.send('Αυτό το ticket θα σβηστεί σε 2 δευτερόλεπτα');
            setTimeout(() => button.channel.delete(), 2000);
        }
    }
}