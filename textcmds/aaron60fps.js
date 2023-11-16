// aaron command
const discord = require('discord.js');

module.exports = {
    name: "aaron60fps",
    async execute(message) {
        message.channel.sendTyping();
        message.reply({ content: '[.](https://cdn.discordapp.com/attachments/1016691910158590032/1174367079554613308/60FPS_aaron_h.mp4?ex=65675592&is=6554e092&hm=11b78e13bef02889e7103a45a6d707bd288c0b3ec181a0d4efe9d3b69133a044&)' });
    }
}