const Discord = require('discord.js');
const db = require('quick.db');
const config = require('../config.json');

module.exports = {
    name: 'activity-clear',
    description: '!ping',
    async execute(message, args, client) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            let arena = db.all()
                .map(entry => entry.ID)
                .filter(id => id.startsWith(`hours_${message.guild.id}`))
            arena.forEach(db.delete)
            message.react("✅").catch(()=>{});
        } else {
            message.react("❎").catch(()=>{});
        }
    },
};