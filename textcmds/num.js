// remember to sub to num
const discord = import('discord.js');

module.exports = {
    name: "num",
    async execute(message) {
        const embed = new (await discord).EmbedBuilder()
            .setDescription('remember to subscribe to [numtag](https://www.youtube.com/channel/UCBquGqO6jGmP87Dg3uW_nRQ) and [archive02](https://www.youtube.com/channel/UCct0q1wh_HQhVQZ75QEbUWQ) on youtube!')
            .setColor(0x00B8A9)
        message.reply({ embeds: [embed], mention_author: false })
    }
}