// remember to sub to val
const discord = import('discord.js');

module.exports = {
    name: "val",
    async execute(message) {
        const embed = new (await discord).EmbedBuilder()
            .setDescription('remember to subscribe to [Valentine](https://www.youtube.com/channel/UCUy7q41uv2OUlAeaEmJPXbA) on youtube!')
            .setColor(0xF47FFF)
        message.reply({ embeds: [embed], mention_author: false })
    }
}