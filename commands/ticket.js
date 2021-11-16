const Discord = require('discord.js')
const { MessageMenuOption, MessageMenu, MessageActionRow } = require('discord-buttons')

module.exports = {
    name: 'ticket',
    description: '!ping',
    async execute(message, args, client) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        const Option1 = new MessageMenuOption()
            .setLabel('Ban Appeal')
            .setDescription('Κάντε αίτηση για ban Appeal')
            .setEmoji('🛑')
            .setValue('appeal')


        const Option2 = new MessageMenuOption()
            .setLabel('Staff Report')
            .setDescription('Κάντε αναφορά κάποιο Staff')
            .setEmoji('⚡')
            .setValue('staff')


        const Option3 = new MessageMenuOption()
            .setLabel('Donate')
            .setDescription('Ερώτηση για donate')
            .setEmoji('💵')
            .setValue('donate')

        const Option4 = new MessageMenuOption()
            .setLabel('Bug Report')
            .setDescription('Αναφέρετε ενα bug')
            .setEmoji('🐛')
            .setValue('bug')

        const Option5 = new MessageMenuOption()
            .setLabel('Other')
            .setDescription('Κάντε κάποια ερώτηση')
            .setEmoji('❓')
            .setValue('other')

        const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ dynamic: true })}`)
            .setColor('#FE660A')
            .setDescription('**Για την εξυπηρέτηση σας ορίστε την επιλογή που παρουσιάζει το θέμα του ticket σας.**')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))

        const Menu = new MessageMenu()
            .setID('menu1')
            .setPlaceholder('Διάλεξε το θέμα του Ticket')
            .addOption(Option1)
            .addOption(Option2)
            .addOption(Option3)
            .addOption(Option4)
            .addOption(Option5)

        const row1 = new MessageActionRow()
            .addComponent(Menu)

        await message.channel.send(embed, { components: [row1] })
    },
};