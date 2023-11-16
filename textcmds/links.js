const discord = import('discord.js');

module.exports = {
    name: "links",
    async execute(message) {
        const embed = new (await discord).EmbedBuilder()
            .setTitle('Links')
            .setDescription('Here\'s some amazing website made by amazing people! :)')
            .setColor('Blurple')
            .addFields(
                { name: "BBC Download", value: "https://bbcdownload.uk.to/", inline: true },
                { name: "Bloopertrack", value: "https://bloopertrack.club/", inline: true },
            )
        message.reply({ embeds: [embed], mention_author: false })
    }
}