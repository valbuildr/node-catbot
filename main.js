const discord = require("discord.js");
const secrets = require("./secrets");
const fs = require("node:fs");
const path = require("node:path");
const Parser = require("rss-parser");
const parser = new Parser();

const bot = new discord.Client({
  intents: [
    discord.GatewayIntentBits.Guilds,
    discord.GatewayIntentBits.GuildMessages,
    discord.GatewayIntentBits.MessageContent,
    discord.GatewayIntentBits.GuildMembers,
    discord.GatewayIntentBits.GuildPresences,
  ],
  allowedMentions: { repliedUser: false },
});

bot.prefix = "c!";

// text command collection stuff
bot.textCmds = new discord.Collection();
const textCmdsPath = path.join(__dirname, "textcmds");
const textCmdsFiles = fs
  .readdirSync(textCmdsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of textCmdsFiles) {
  const fPath = path.join(textCmdsPath, file);
  const cmd = require(fPath);

  if ("name" in cmd && "execute" in cmd) {
    bot.textCmds.set(cmd.name, cmd);
  }
}

// slash command collection stuff
bot.slashCmds = new discord.Collection();
const slashCmdsPath = path.join(__dirname, "slashcmds");
const slashCmdsFiles = fs
  .readdirSync(slashCmdsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of slashCmdsFiles) {
  const fPath = path.join(slashCmdsPath, file);
  const cmd = require(fPath);

  if ("data" in cmd && "execute" in cmd) {
    bot.slashCmds.set(cmd.data.name, cmd);
  }
}

// button collection stuff
bot.buttons = new discord.Collection();

// select menu collection stuff
bot.selectmenus = new discord.Collection();

// modal collection stuff
bot.modals = new discord.Collection();

// prediction collection
bot.predictions = new discord.Collection();

// event handling
const eventsPath = path.join(__dirname, "events");
const eventsFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventsFiles) {
  const fPath = path.join(eventsPath, file);
  const event = require(fPath);

  if (event.once) {
    bot.once(event.name, (...args) => event.execute(...args));
  } else {
    bot.on(event.name, (...args) => event.execute(...args));
  }
}

bot.login(secrets.token);
