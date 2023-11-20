const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("help")
    .setDescription("Help command"),
  async execute(interaction) {
    const embed = new (await discord).EmbedBuilder()
      .setTitle("Help Menu")
      .setDescription(
        "[Use the buttons below to navigate my help menu.](https://discord.com/channels/1170020873240051802/1172512155132756068/1172513074058641458)"
      )
      .setColor("Blurple")
      .setFooter({ text: "*buttons coming soon :)" });
    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
