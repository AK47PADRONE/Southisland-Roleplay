const { MessageEmbed } = require('discord.js')
const { color } = require('../config.json');

module.exports = {
    name: 'rules5',
    description: 'malakies!',
    async execute(message, args, client) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return;
        const rules5 = new MessageEmbed()
        .setColor(color)
        .setDescription('**```City Hall```\nΟ Δήμαρχος είναι ο ανώτερος άρχοντας,επικεφαλής της πόλης και των δημόσιων υπηρεσιών και οι εντολές του δεν μπορούν να αγνοηθούν!\n\n Οι πολίτες πρέπει να παρακολουθούν τις ανακοινώσεις και ενημερώσεις του Δημάρχου και να συμμετέχουν σε αυτές.\n\nΟ Δήμαρχος δεν μπορεί να είναι διεφθαρμένος ή να έχει εμπλοκή σε κάποια εγκληματική οργάνωση.\n\nΟ Δήμαρχος και ο Αντιδήμαρχος έχουν δικαίωμα μετά από καταγγελία να προβούν σε έλεγχο των δημόσιων υπηρεσιών.\n\nΟι πολίτες που ενδιαφέρονται για εργασία στο δημαρχείο πρέπει να διαθέτουν λευκό ποινικό μητρώο.\n\nΤο δημαρχείο είναι υπεύθυνο για τυχόν δημοπρασίες νέων καταστημάτων αλλά και κατασχεμένων επιχειρήσεων.**')

        message.channel.send(rules5)
        message.delete()
    },
};