const Discord = require('discord.js')
const { MessageButton } = require('discord-buttons')

module.exports = {
    name: 'clickMenu',
    async execute(menu, button) {
        if (menu.values[0] == 'appeal') {
            await menu.clicker.fetch();
            const channel = await menu.guild.channels.create(`Ticket-${menu.clicker.user.tag}`)
            const channel2 = await menu.guild.channels.cache.get('908827005720617003')
            channel.setParent('908825830711521320')

            channel.updateOverwrite(menu.guild.id, {
                SEND_MESSAGE: false,
                VIEW_CHANNEL: false
            })
            channel.updateOverwrite(menu.clicker.user, {
                SEND_MESSAGE: true,
                VIEW_CHANNEL: true
            });
            menu.reply.defer()

            const embed1 = new Discord.MessageEmbed()
                .setTitle('🛑 Ban Appeal')
                .setColor('#ff0000')
                .setDescription(`**Καλησπέρα πώς θα μπορούσαμε να σε βοηθήσουμε;**`)
                .setThumbnail(menu.guild.iconURL({ dynamic: true }))

            const buttonclose = new MessageButton()
                .setStyle('gray')
                .setEmoji('🔒')
                .setID('buttonclose');

            const embed = new Discord.MessageEmbed()
                .setAuthor(menu.clicker.user.tag, menu.clicker.user.displayAvatarURL())
                .setDescription('```New Ticket```')
                .addFields(
                    { name: '**Logger Info**', value: `Action: Created`, inline: true },
                    { name: '**Panel**', value: '``🛑 Ban Appeal``', inline: true }
                )
                .setTimestamp(Date.now())

            await channel2.send(embed)
            await channel.send(embed1, buttonclose)
        } else {
            if (menu.values[0] == 'staff') {
                await menu.clicker.fetch();
                const channel = await menu.guild.channels.create(`Ticket-${menu.clicker.user.tag}`)
                const channel2 = await menu.guild.channels.cache.get('908827005720617003')
                channel.setParent('908825830711521320')

                channel.updateOverwrite(menu.guild.id, {
                    SEND_MESSAGE: false,
                    VIEW_CHANNEL: false
                })
                channel.updateOverwrite(menu.clicker.user, {
                    SEND_MESSAGE: true,
                    VIEW_CHANNEL: true
                });
                menu.reply.defer()

                const embed2 = new Discord.MessageEmbed()
                    .setTitle('⚡ Staff Report')
                    .setColor('#ffff00')
                    .setDescription(`**Καλησπέρα πώς θα μπορούσαμε να σε βοηθήσουμε;**`)
                    .setThumbnail(menu.guild.iconURL({ dynamic: true }))

                const buttonclose = new MessageButton()
                    .setStyle('gray')
                    .setEmoji('🔒')
                    .setID('buttonclose');

                const embed = new Discord.MessageEmbed()
                    .setAuthor(menu.clicker.user.tag, menu.clicker.user.displayAvatarURL())
                    .setDescription('```New Ticket```')
                    .addFields(
                        { name: '**Logger Info**', value: `Action: Created`, inline: true },
                        { name: '**Panel**', value: '``⚡ Staff Report``', inline: true }
                    )
                    .setTimestamp(Date.now())

                await channel2.send(embed)
                await channel.send(embed2, buttonclose)
            } else {
                if (menu.values[0] == 'donate') {
                    await menu.clicker.fetch();
                    const channel = await menu.guild.channels.create(`Ticket-${menu.clicker.user.tag}`)
                    const channel2 = await menu.guild.channels.cache.get('908827005720617003')
                    channel.setParent('908825830711521320')

                    channel.updateOverwrite(menu.guild.id, {
                        SEND_MESSAGE: false,
                        VIEW_CHANNEL: false
                    })
                    channel.updateOverwrite(menu.clicker.user, {
                        SEND_MESSAGE: true,
                        VIEW_CHANNEL: true
                    });
                    menu.reply.defer()

                    const embed2 = new Discord.MessageEmbed()
                        .setTitle('💵 Donate')
                        .setColor('#00ff00')
                        .setDescription(`**Καλησπέρα πώς θα μπορούσαμε να σε βοηθήσουμε;**`)
                        .setThumbnail(menu.guild.iconURL({ dynamic: true }))

                    const buttonclose = new MessageButton()
                        .setStyle('gray')
                        .setEmoji('🔒')
                        .setID('buttonclose');

                    const embed = new Discord.MessageEmbed()
                        .setAuthor(menu.clicker.user.tag, menu.clicker.user.displayAvatarURL())
                        .setDescription('```New Ticket```')
                        .addFields(
                            { name: '**Logger Info**', value: `Action: Created`, inline: true },
                            { name: '**Panel**', value: '``💵 Donate``', inline: true }
                        )
                        .setTimestamp(Date.now())

                    await channel2.send(embed)
                    await channel.send(embed2, buttonclose)
                } else {
                    if (menu.values[0] == 'bug') {
                        await menu.clicker.fetch();
                        const channel = await menu.guild.channels.create(`Ticket-${menu.clicker.user.tag}`)
                        const channel2 = await menu.guild.channels.cache.get('908827005720617003')
                        channel.setParent('908825830711521320')

                        channel.updateOverwrite(menu.guild.id, {
                            SEND_MESSAGE: false,
                            VIEW_CHANNEL: false
                        })
                        channel.updateOverwrite(menu.clicker.user, {
                            SEND_MESSAGE: true,
                            VIEW_CHANNEL: true
                        });
                        menu.reply.defer()

                        const embed2 = new Discord.MessageEmbed()
                            .setTitle('🐛 Bug Report')
                            .setColor('#00ff00')
                            .setDescription(`**Καλησπέρα πώς θα μπορούσαμε να σε βοηθήσουμε;**`)
                            .setThumbnail(menu.guild.iconURL({ dynamic: true }))

                        const buttonclose = new MessageButton()
                            .setStyle('gray')
                            .setEmoji('🔒')
                            .setID('buttonclose');

                        const embed = new Discord.MessageEmbed()
                            .setAuthor(menu.clicker.user.tag, menu.clicker.user.displayAvatarURL())
                            .setDescription('```New Ticket```')
                            .addFields(
                                { name: '**Logger Info**', value: `Action: Created`, inline: true },
                                { name: '**Panel**', value: '``🐛 Bug Report``', inline: true }
                            )
                            .setTimestamp(Date.now())

                        await channel2.send(embed)
                        await channel.send(embed2, buttonclose)
                    } else {
                        if (menu.values[0] == 'other') {
                            await menu.clicker.fetch();
                            const channel = await menu.guild.channels.create(`Ticket-${menu.clicker.user.tag}`)
                            const channel2 = await menu.guild.channels.cache.get('908827005720617003')
                            channel.setParent('908825830711521320')

                            channel.updateOverwrite(menu.guild.id, {
                                SEND_MESSAGE: false,
                                VIEW_CHANNEL: false
                            })
                            channel.updateOverwrite(menu.clicker.user, {
                                SEND_MESSAGE: true,
                                VIEW_CHANNEL: true
                            });
                            menu.reply.defer()

                            const embed2 = new Discord.MessageEmbed()
                                .setTitle('❓ Other')
                                .setColor('#ff0000')
                                .setDescription(`**Καλησπέρα πώς θα μπορούσαμε να σε βοηθήσουμε;**`)
                                .setThumbnail(menu.guild.iconURL({ dynamic: true }))

                            const buttonclose = new MessageButton()
                                .setStyle('gray')
                                .setEmoji('🔒')
                                .setID('buttonclose');

                            const embed = new Discord.MessageEmbed()
                                .setAuthor(menu.clicker.user.tag, menu.clicker.user.displayAvatarURL())
                                .setDescription('```New Ticket```')
                                .addFields(
                                    { name: '**Logger Info**', value: `Action: Created`, inline: true },
                                    { name: '**Panel**', value: '``❓ Other``', inline: true }
                                )
                                .setTimestamp(Date.now())

                            await channel2.send(embed)
                            await channel.send(embed2, buttonclose)
                        } 
                    } 
                } 
            } 
        }
    } 
}

