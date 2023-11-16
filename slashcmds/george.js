const discord = require('discord.js');

module.exports = {
    data: new discord.SlashCommandBuilder()
        .setName('george')
        .setDescription('Remembering George Alagiah, who sadly passed due to bowel cancer in July 2023.'),
    async execute(interaction) {
        await interaction.reply({ content: '[.](https://cdn.discordapp.com/attachments/1016691910158590032/1173806318029647892/george.mp4?ex=65654b52&is=6552d652&hm=7c76c5f20040f9c4a79376148e0a41c8addcea0c53505fbfa063955d95dd1ac7&)'});
    },
};