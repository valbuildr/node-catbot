const discord = require('discord.js');
const secrets = require('./secrets');
const fs = require('node:fs');
const path = require('node:path');

function sync() {
    const commands = [];
    const filesPath = path.join(__dirname, 'slashcmds');
    const commandFiles = fs.readdirSync(filesPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const fPath = path.join(filesPath, file);
        const command = require(fPath);
        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        }
    }

    const rest = new discord.REST().setToken(secrets.token);

    (async () => {
        try {
            console.log(`Started refresh of ${commands.length} app commands.`);

            const data = await rest.put(
                discord.Routes.applicationCommands(secrets.clientid),
                { body: commands },
            );

            console.log(`Successfullt reloaded ${data.length} app commands.`);
        } catch (error) {
            console.error(error);
        }
    })();
};

sync();