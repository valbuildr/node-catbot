// remember to sub to bax
const discord = import('discord.js');

module.exports = {
    name: "bax",
    async execute(message) {
        const embed = new (await discord).EmbedBuilder()
            .setDescription('remember to subscribe to [BAX](https://www.youtube.com/channel/UCnJLI3tu1FE152j8tTU9Yjg) and [More BAX](https://www.youtube.com/@morebax) on youtube!')
            .setColor(0x33FF00)
        message.reply({ embeds: [embed], mention_author: false })
    }
}