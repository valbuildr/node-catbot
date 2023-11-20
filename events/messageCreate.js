const discord = require("discord.js");

module.exports = {
  name: "messageCreate",
  once: false,
  async execute(message) {
    if (message.author.bot == false) {
      if (message.content.toLowerCase().includes("catbot")) {
        message.react("😊");
      }
      if (
        message.content.toLowerCase().includes("<:bedge:1092227321748017224>")
      ) {
        message.react("<:bedge:1092227321748017224>");
      }
      if (message.mentions.has(message.client.user)) {
        message.react(
          "<:pingangryemojigreenfrogthingymaj:1143112609273487430>"
        );
      }
      if (
        message.content.includes("/x.com") ||
        message.content.includes("/twitter.com")
      ) {
        message.reply({
          content: "please do consider using vxtwitter, please and thank you.",
          allowedMentions: { repliedUser: false },
        });
      }
      if (message.content.toLowerCase().startsWith(message.client.prefix)) {
        const splitmsg = message.content.split(message.client.prefix);
        const cmd = message.client.textCmds.get(splitmsg[1]);

        if (!cmd) {
          message.channel.send("<:idiot:1109489652555063296>");
          return;
        }

        try {
          await cmd.execute(message);
        } catch (err) {
          console.error(err);
          message.reply(
            `An error occured when running the command. The command exists, but there was an error running it.`
          );
        }
      }
    }
  },
};
