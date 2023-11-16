// remember to hydrate
const discord = import('discord.js');

function getRandom() {
    return Math.floor(Math.random() * 2);
}

module.exports = {
    name: "hydrate",
    async execute(message) {
        const embed = new (await discord).EmbedBuilder()
            .setDescription('remember to hydrate!')
            .setColor('Blurple')
        n = getRandom()
        if (n == 0) {
            embed.setImage('https://images-ext-2.discordapp.net/external/UTKC4smoh5FcoIyjOuDVW2QU6qUBO4nfFiftuNmq1Vk/https/envsim3k.kattschan.co.uk/image/drink.jpg?width=671&height=671')
        } else if (n == 1) {
            embed.setImage('https://media.discordapp.net/attachments/1016691910158590032/1147529266788057127/ezgif.com-video-to-gif_1.gif')
        }
        message.reply({ embeds: [embed], mention_author: false })
    }
}