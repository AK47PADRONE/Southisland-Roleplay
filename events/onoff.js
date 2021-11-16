const Discord = require('discord.js');
const db = require('quick.db');
const config = require('../config.json');

module.exports = {
    name: 'clickButton',
    async execute(button) {
        if (button.id == 'on') {
            button.clicker.fetch()
            const on = db.get(`on_${button.guild.id}_${button.clicker.id}`)
            if (!on) {
                const tme = new Date().getTime();
                db.set(`on_${button.guild.id}_${button.clicker.id}`, tme)
            }
            button.reply.defer()
        }
        if (button.id == 'off') {
            button.clicker.fetch()
            const off = db.get(`on_${button.guild.id}_${button.clicker.id}`)
            if (off) {
                const end = new Date().getTime();

                const diff = end - off;

                let hours = Math.floor(diff / 3600000) % 24;
                let minutes = Math.floor(diff / 60000) % 60;
                let seconds = Math.floor(diff / 1000) % 60;

                if (hours) {
                    db.delete(`on_${button.guild.id}_${button.clicker.id}`)
                    db.add(`hours_${button.guild.id}_${button.clicker.id}`, diff)
                    const embed = new Discord.MessageEmbed()
                        .setAuthor(button.clicker.user.tag, button.clicker.user.displayAvatarURL(), `https://discord.com/users/${button.clicker.id}`)
                        .setDescription(`**Χρόνος:** \`${hours}ω ${minutes}λ ${seconds}δ\``)
                        .setColor(config.color)
                        .setFooter(button.guild.name, button.guild.iconURL())
                    return button.guild.channels.cache.get(config.activity.logsb).send(embed).catch(() => { });
                }
                if (minutes) {
                    db.delete(`on_${button.guild.id}_${button.clicker.id}`)
                    db.add(`hours_${button.guild.id}_${button.clicker.id}`, diff)
                    const embed = new Discord.MessageEmbed()
                        .setAuthor(button.clicker.user.tag, button.clicker.user.displayAvatarURL(), `https://discord.com/users/${button.clicker.id}`)
                        .setDescription(`**Χρόνος:** \`${minutes}λ ${seconds}δ\``)
                        .setColor(config.color)
                        .setFooter(button.guild.name, button.guild.iconURL())
                    return button.guild.channels.cache.get(config.activity.logsb).send(embed).catch(() => { });
                }
                if (seconds) {
                    db.delete(`on_${button.guild.id}_${button.clicker.id}`)
                    db.add(`hours_${button.guild.id}_${button.clicker.id}`, diff)
                    const embed = new Discord.MessageEmbed()
                        .setAuthor(button.clicker.user.tag, button.clicker.user.displayAvatarURL(), `https://discord.com/users/${button.clicker.id}`)
                        .setDescription(`**Χρόνος:** \`${seconds}δ\``)
                        .setColor(config.color)
                        .setFooter(button.guild.name, button.guild.iconURL())
                    return button.guild.channels.cache.get(config.activity.logsb).send(embed).catch(() => { });
                }
            }
            button.reply.defer()
        }
    },
};