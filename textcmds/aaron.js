// aaron command
const discord = require('discord.js');

module.exports = {
    name: "aaron",
    async execute(message) {
        message.channel.sendTyping();
        message.reply({ files: ['./textcmds/images/aaron.jpg'] });
    }
}