const discord = require("discord.js");

module.exports = {
    config: {
        name: "membercount",
        description: "Show members in the servers",
        usage: "z!membercount",
        aliases: ["membercount","mc"]
    },
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setAuthor(
    `Members`)
    .setDescription(`${message.guild.memberCount}`)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel.send(embed)
  }
}