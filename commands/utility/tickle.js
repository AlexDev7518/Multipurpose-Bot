const { MessageEmbed } = require("discord.js");
const config = require("../../config");
const nekos = require("nekos.life");
const {
  sfw: { tickle },
} = new nekos();

module.exports = {
  config: {
    name: "tickle",
    description: "Get's a tickle reaction!",
    aliases: ["TICKLE", "Tickle"],
    usage: "",
    accessableby: "",
  },
  run: async (client, message, args) => {
    const { url } = await tickle().catch(() => {});

    if (!url) return message.channel.send(`Could not connect to nekos.life`);

    const embed = new MessageEmbed();

    if (
      message.mentions.members.size &&
      message.mentions.members.first().id === client.user.id
    ) {
      return message.channel.send(
        `B~Baka ${message.member}! Stop that~ it tickles!`
      );
    } else if (
      message.mentions.members.size &&
      message.mentions.members.first().id === message.author.id
    ) {
      return message.channel.send(`Wai~ Seriously!?`);
    } else if (message.mentions.members.size) {
      return message.channel.send(
        embed
          .setColor("YELLOW")
          .setDescription(
            `${
              message.member
            } started tickling ${message.mentions.members.first()}!`
          )
          .setImage(url)
      );
    } else {
      return message.channel.send(
        embed.setColor("YELLOW").setImage(url)
      );
    }
  },
};