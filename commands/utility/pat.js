const Discord = require('discord.js');
const config = require('../../config');
const superagent = require('superagent');


module.exports = {
    config: {
        name: 'pat',
        description: 'Pats people',
        aliases: ["pat"],
        usage: '<user>',
        accessableby: "",
    },
    run: async (client, message, args) => {
        let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent
          .get("https://nekos.life/api/v2/img/pat");
              const embed = new Discord.MessageEmbed()
             .setColor("YELLOW")
              .setTitle("Here's your Pat, 👀")
          .setDescription(`${victim} Pats ${message.author}`)
          .setImage(body.url)
           .setTimestamp()
  
      
               message.channel.send(embed);
    }
}