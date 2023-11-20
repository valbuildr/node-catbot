const discord = require("discord.js");

module.exports = {
  data: new discord.ModalBuilder()
    .setCustomId("predictionOptionsModal")
    .setTitle("Add some options")
    .addComponents(
      new discord.ActionRowBuilder().addComponents(
        new discord.TextInputBuilder()
          .setCustomId("predictionOptionsModalOptions")
          .setLabel("Options (seperated by a new line, max 20)")
          .setStyle(discord.TextInputStyle.Paragraph)
          .setPlaceholder("- Aaron\n- Aaron\n- Aaron")
      )
    ),
};
