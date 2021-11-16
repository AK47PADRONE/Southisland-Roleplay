const Discord = require('discord.js');
const db = require('quick.db');
const config = require('../config.json');

module.exports = {
    name: 'activity',
    description: '!ping',
    async execute(message, args, client) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            let arena = db.all().filter(data => data.ID.startsWith(`hours_${message.guild.id}`)).sort((a, b) => b.data - a.data)
            if (!arena) message.delete().catch(() => { });;
            if (arena !== null) {

                let content = "";

                for (let i = 0; i < arena.length; i++) {
                    let user = client.users.cache.get(arena[i].ID.split('_')[2])
                    let hours = Math.floor(arena[i].data / 3600000) % 24;
                    let minutes = Math.floor(arena[i].data / 60000) % 60;
                    let seconds = Math.floor(arena[i].data / 1000) % 60;
                    if (hours) hours = `${hours}ω:`;
                    if (minutes) minutes = `${minutes}λ:`;
                    if (seconds) seconds = `${seconds}δ`;
                    if (!hours) hours = ``;
                    if (!minutes) minutes = ``;
                    if (!seconds) seconds = ``;
                    if (user !== undefined) {
                        content += `**\`${i + 1}\`. ${user} έχει \`${hours}${minutes}${seconds}\`**\n`

                    }
                    else {

                    }

                }


                const embed = new Discord.MessageEmbed()
                    .setTitle(`**Staff Activity**`)
                    .setDescription(content)

                    .setColor(config.color)

                message.channel.send(embed)
            }

        } else {
            message.react("❎").catch(() => { });
        }
    },
};