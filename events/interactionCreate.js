const discord = require('discord.js');

module.exports = {
    name: "interactionCreate",
    once: false,
    async execute(interaction) {
        if (interaction.isChatInputCommand) {
            const cmd = interaction.client.slashCmds.get(interaction.commandName);

            if (!cmd) {
                console.error(`No command matching ${interaction.commandName} was found!`);
                return;
            }

            try {
                await cmd.execute(interaction);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ content: 'I had an issue running this command.', ephemeral: true });
                } else {
                    await interaction.reply({ content: 'I had an issue running this command.', ephemeral: true });
                }
            }
        }
    }
}