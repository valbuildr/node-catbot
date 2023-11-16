const discord = require('discord.js');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

module.exports = {
    name: "croissants",
    async execute(message) {
        a = getRandomInt(999999)
        message.reply({ content: `congrats! you just got ${a} croissantes!!1!!!!111!!!!!` });
    }
};