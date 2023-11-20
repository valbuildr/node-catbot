const discord = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    client.user.setActivity("num play Cities Skylines II", {
      type: discord.ActivityType.Watching,
    });
    client.guilds.cache.get('1016626731785928715').channels.cache.get('1016691910158590032').send('i awake :3');
    console.log(":3");

  },
};
