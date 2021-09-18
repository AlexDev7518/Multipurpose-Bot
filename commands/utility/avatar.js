  
const discord = require("discord.js");

module.exports = {
config : {
  name: "avatar",
  aliases: ["av", "ava"],
  category: "info",
  description: "Get avatar of any user"
},
  run: async (client, message, args) => {
    let target;

    if (message.mentions.users.first()) {
      target = message.mentions.users.first();
    } else if (args[0]) {
      target = message.guild.members.cache.get(args[0]).user;
    } else {
      target = message.author;
    }

    let avatar = target.displayAvatarURL({ dynamic: true, size: 2048 });

    let embed = new discord.MessageEmbed();

    embed.setDescription(`[Download Avatar](${avatar})`);
    embed.setImage(avatar);
    embed.setColor("RANDOM");
    message.channel.send(embed);
  }
};