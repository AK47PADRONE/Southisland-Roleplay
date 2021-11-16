const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client()
require('discord-buttons')(client)
const { token, prefix } = require('./config.json')
const jointocreate = require("./events/jointocreate");
jointocreate(client);
const jointocreatev2 = require("./events/jointocreatev2");
jointocreatev2(client);
const poll = require('./events/suggestion.js')
poll(client)

client.prefix = prefix;
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

client.login(token)