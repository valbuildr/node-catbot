const discord = require('discord.js');

module.exports = {
    name: "servers",
    async execute(message) {
        const embed = new discord.EmbedBuilder()
            .setColor('Blurple')
            .setTitle('Related Servers')
            .setDescription('Here\'s some related servers you might be interested in.')
            .addFields(
                { name: "BBC Fans", value: "https://discord.gg/5VMnzvPSHw", inline: true },
                { name: "the crash site", value: "https://discord.gg/mShJg3Nusu", inline: true },
                { name: "cat palace", value: "https://discord.gg/T5w4mv8ZM5", inline: true },
                { name: "Viz2.0", value: "https://discord.gg/Swv5n5Z4P4", inline: true },
            );
        message.reply({ embeds: [embed] });
    }
};