// meow
const discord = import('discord.js');

module.exports = {
    name: "meow",
    async execute(message) {
        message.reply({ content: "meow :3", mention_author: false })
    }
}