const { Util, MessageEmbed } = require("discord.js");
const { parse } = require("twemoji-parser");

module.exports = {
  
 // Change this if you have a diffrent cmd handler
 config : {
  name: "stealemoji",// Change this if you have a diffrent cmd handler
  aliases:['addemoji','steal'],// Change this if you have a diffrent cmd handler
  description: "Steal an emoji from a different server"},// Change this if you have a diffrent cmd handler
  run : async(client , message, args, Discord) => {// Change this if you have a diffrent cmd handler 

    if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send('you don\'t have the permissions to manage emojis')

    const emoji = args[0];
    const name = args.slice(1).join(" ");
    if (!emoji) {
      const embed = new MessageEmbed()
               .setDescription(`Please Give Me A Emoji!`)
               .setColor('RANDOM')
      return message.channel.send(embed )
    }

    try {
      if (emoji.startsWith("https://cdn.discordapp.com")) {
        await message.guild.emojis.create(emoji, name || "give_name");

        const embed = new MessageEmbed()
          .setTitle(`Emoji Added`)
          .setThumbnail(`${emoji}`)
          .setColor('#FF69B4')
          .setDescription(
            `Emoji Has Been Added! | Name: ${
              name || "give_name"
            } `
          );
        return message.channel.send(embed);
      }

      const customEmoji = Util.parseEmoji(emoji);

      if (customEmoji.id) {
        const link = `https://cdn.discordapp.com/emojis/${customEmoji.id}.${
          customEmoji.animated ? "gif" : "png"
        }` ;

        await message.guild.emojis.create(
          `${link}`,
          `${name || `${customEmoji.name}`}`
        );
       
        const embed = new MessageEmbed()
          .setTitle(`Emoji Added <:${customEmoji.name}:${customEmoji.id}>`)
          .setColor('#FF69B4')
          .setThumbnail(`${link}`)
          .setDescription(
            `Emoji Has Been Added! | Name: ${
              name || `${customEmoji.name}`
            } | Preview: [Click me](${link})`
          );
        return message.channel.send(embed);
      } else {
        const foundEmoji = parse(emoji, { assetType: "png" });
        if (!foundEmoji[0]) {
           const embed = new MessageEmbed()
               .setDescription(`Please provide a valid emoji. I can't work with this bs`)
               .setColor('RANDOM')
          return message.channel.send(embed);
        }
        const embed = new MessageEmbed()
               .setDescription(`Bruv this is a normal emoji what you can use anywhere`)
               .setColor('RANDOM')
        message.channel.send(embed
          
        )
      }
    } catch (e) {
      if (
        String(e).includes(
          "DiscordAPIError: Maximum number of emojis reached (50)"
        )
      ) {
         const embed = new MessageEmbed()
               .setDescription(`Maximum emoji count reached for this Server!`)
               .setColor('RANDOM')
        
        return message.channel.send(embed)
      }
    }
  },
};