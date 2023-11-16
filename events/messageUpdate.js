const discord = require('discord.js')

module.exports = {
    name: "messageUpdate",
    once: false,
    async execute(oldMessage, newMessage) {
        if (newMessage.content.includes('catbot')) {
            newMessage.react('😊');
        }
    }
}