const { MessageEmbed } = require('discord.js');
const { color } = require('../config.json');

module.exports = {
    name: 'rules4',
    description: 'malakies!',
    async execute(message, args, client) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return;
        const streamer = new MessageEmbed()
        .setColor(color)
        .setDescription('**```Streamer```\nΤο livestream δεν σας δίνει κανένα προβάδισμα σε σχέση με τους υπόλοιπους παίκτες, τα staff θα σας αντιμετωπίζουν ακριβώς το ίδιο σε κάθε περίπτωση.\n\nΑπαγορεύεται να βρίσετε κάποιο staff ή να δυσφημίσετε τον server.\n\nΟ Streamer σε περίπτωση που σε ένα σκηνικό γίνει REPORT,αυστηρά οφείλει να βάλει MUTE το game στο stream του,σε αυτό συμπεριλαμβάνεται και το <#904695635280818186>.\n\nΚατά την διάρκεια του livestream απαγορεύετε να διαφημίζεται άλλη πόλη (αυτό γίνεται για τον λόγο ότι ο streamer διαφημίζετε μέσω του discord server μας)\n\nΑπαγορεύεται αυστηρά η αναφορά ρατσιστικού σχόλιου η hate comments προς άλλους users όπως και η κατηγορία περι streamsnipe. Για αυτό το λόγο υπάρχουν οι αρμόδιοι του Staff Team για να σας εξυπηρετήσουν σε ότι χρειαστείτε.**')

        message.channel.send(streamer)
        message.delete()
    },
};