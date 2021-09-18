const Discord = require('discord.js');
const config = require('../../config');
const DIG = require("discord-image-generation");

module.exports = {
  config : {
    name: "jail",
    category: "Image",
    description: "Converts a user's avatar in jail !!",
    example: `${config.Prefix}jail @Dinav`},

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(` Provide a valid user !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        let img = await new DIG.Jail().getImage(avatar);

        let attach = new Discord.MessageAttachment(img, "jail.png");

        message.channel.send(attach)
    }
}