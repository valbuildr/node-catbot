const discord = require('discord.js');

const command_list = ["help"]

function helpCommand(message) {
    if (typeof message != discord.Message) {
        return console.error('not the right type boss');
    } else {
        const embed = new discord.EmbedBuilder()
            .setColor('Blurple')
            .setTitle('Catbot Help')
            .setDescription("Let's narrow down what you want help with.\nUse the buttons below to navigate my help menu!")
    }
}

function executeCommand(message, command) {
    if (typeof command != "string" || typeof message != discord.Message) {
        return console.error('not the right type boss');
    } else {
        if (command == "help") {
            helpCommand(message)
        }
    }
}

function checkForCommand(message, prefix) {
    if (typeof message != discord.Message || typeof prefix != "sting") {
        return console.error('not the right type boss');
    } else {
        cmd = message.split(prefix);
        if (command_list.includes(cmd[1])) {
            executeCommand(message, cmd[1]);
        }
    }
}