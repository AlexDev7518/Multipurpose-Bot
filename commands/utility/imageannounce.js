const Discord = require("discord.js");

module.exports = {
config: {
  name: "image-announce",
  aliases: ["iannounce","ia"]
},
  run: async (client, message, args) => {
    const chm = message.mentions.channels.first();
    if (!chm) return message.reply("First mention A Channel Then Image");

    const image = message.attachments.first()
      ? message.attachments.first().proxyURL
      : null || args[1];
    if (!image) return message.reply("Provide A Image");

    const embed = new Discord.MessageEmbed()
      .setImage(image, { dynamite: 1024 })
      .setColor("FF7034");

    chm.send(embed);
  }
};