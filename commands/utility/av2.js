  
const Discord = require("discord.js");

module.exports = {
config : {
  name: "av2",
  aliases: ["av2", "ava2"],
  category: "info",
  description: "Get avatar of any user"
},
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || message.author

    let size = [16, 32, 64, 128, 256, 512, 1024, 2048, 4096]
    let type = ['webp', 'png', 'jpg', 'gif', 'jpeg']

    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setImage(user.displayAvatarURL({dynamic: true}))
      .setFooter(client.user.username, client.user.displayAvatarURL())
      type.forEach(em => {
        embed.addField(em.toUpperCase(), size.map(s => `[${s}](${user.displayAvatarURL({size: s, format: em})})`).join(" | "))
      })



    return message.channel.send(embed)
  }
};