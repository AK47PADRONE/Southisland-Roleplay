const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'warns',
    description: '!ping',
    async execute(message, args, client) {
        if(!message.member.hasPermission("ADMINSTRATOR")) return;
        const warns = new MessageEmbed()
        .setColor('#FE660A')
        .setDescription(`**Εάν πιστεύετε ότι έχετε αδικηθεί μπορείτε να δικαιολογηθείτε στο κανάλι <#904980409178275840> να μιλήσετε με κάποιο <@&904706772558839869> <@&904708919744675861> \n\n 1 Warning\n1 Ώρα Jail \n\n 2 Warnings\n2 Ώρες Jail \n\n 3 Warnings\n3 Ώρες Jail \n\n 4 Warnings\n4 Ώρες Jail \n\n 5 Warnings\n5 Ώρες Jail \n\n 6 Warnings\n Μόνιμος αποκλεισμός απο τον Server**`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))

        message.channel.send(warns)
    },
};