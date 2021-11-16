const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'jail-comservs',
    description: 'malakies!',
    async execute(message, args, client) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return;
        const jails = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setColor('#FE660A')
        .setDescription(`**Έδώ πρέπει ολοι οι <@&904707090780684308> <@&904707339771330570> <@&904707461099978782> να καταγράφουν τις ποινές(φυλακές/σκούπες) που βάζουν στους users με τον εξής τρόπο: \n\n Είδος ποινής και αριθμός λεπτών/σκουπών: Σκούπες 1h. \n Αιτιολόγηση: Έκανε το τάδε Troll \n\n  Σκοπός του καναλιού είναι η άμεση και σαφής ενημέρωση των ανωτέρων Staffs, με στόχο την αξιολόγηση των αποφάσεων και της επίδοσης σας, αλλά και τη διόρθωση τους εφόσον χρειαστεί.**`)

        message.channel.send(jails)
    },
};