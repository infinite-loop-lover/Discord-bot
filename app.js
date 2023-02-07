require("dotenv").config();
const { SwyftDiscord, EmbedBuilder } = require("./library/index.js");
const fs = require("fs");

const intents = {
  guilds: true,
  guildMembers: true,
  guildBans: true,
  guildPresences: true,
  guildMessages: true,
  guildMessageReactions: true,
  guildMessageTyping: true,
  directMessages: true,
  directMessageReactions: true,
  directMessageTyping: true,
};

const partials = {
  members: true,
  users: true,
  channels: true,
  emojis: true,
  guilds: true,
  invites: true,
  roles: true,
};

const client = new SwyftDiscord(intents, partials);

client.onReady(() => {
  console.log("Ready!");
  client.setActivity("online", "watching", "SwyftDiscord");
});

client.on("messageCreate", async (message) => {
  if (message.content === "!ping") {
    const embed = new EmbedBuilder();
    embed.setTitle("Pong!!!!!");
    client.sendMessage(message.channel.id, "Pong", {
      embeds: [embed]
    });
  }
});

client.login(process.env.TOKEN);