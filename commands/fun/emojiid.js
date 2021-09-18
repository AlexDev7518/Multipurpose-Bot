const Discord = module.require("discord.js");

module.exports = {
    config: {
        name: 'emojiid',
        description: 'Emojifies your text message',
        aliases: ["emojiid","ei"],
        usage: '<text>',
        accessableby: "",
    },
    run: async (client, message, args) => {
      const name = args.join(" ");
        const emoji = message.guild.emojis.cache.find(r => r.name === name);
        if (!name) {
        return message.channel.send("Please type the emoji name")
        }
        if (!emoji) {
        return message.channel.send("Couldn't find the Emojis with the provided name. Please make sure the Emoji name is correct");
        }
        message.channel.send(`\`\`\`${emoji}\`\`\``)
}
}