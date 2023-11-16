const discord = require('discord.js');

module.exports = {
    name: "fishtank",
    async execute(message) {
        message.channel.sendTyping();
        message.reply({ files: ['./textcmds/images/fishtank.png'] });
    }
}