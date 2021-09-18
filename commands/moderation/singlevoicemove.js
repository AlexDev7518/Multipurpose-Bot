const Discord = require("discord.js");


module.exports = {
  config : {
        name: "singlevoicemove",
        aliases: ["smove","svm"],
       example: `c!smove @kalyan`,
        category: "Moderation",
        description: "Can move a user to other vc",
        accessableby: "admin",
        args: true },
    run: async(client,message,args) => {
        if(!message.member.permissions.has("MOVE_MEMBERS")) return message.reply("You can't use that command sweety");
        if(!message.guild.me.permissions.has("MOVE_MEMBERS")) return message.channel.send("I need `MOVE MEMBERS` permission");
        if(!args[0]) return message.channel.send("Usage: vmove <member> <voice channel>");
        if(!args[1]) return message.channel.send("Usage: vmove <member> <voice channel>");
        const channel = message.guild.channels.cache.get(args[1]) ||
        message.guild.channels.cache.find(c=>c.type==="voice"&&c.name.toLowerCase()===args[1].toLowerCase());
        if(!channel) return message.channel.send("Hey, That's not a channel");
        if(channel.type!=="voice") return message.channel.send("That's not a voice channel!");
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLowerCase());
        if(!member.voice.channel) return message.channel.send(`I can't see **${member.user.tag}** in any voice channel`);
        if(!member) return message.channel.send("I can't find that member.");
        try {
            member.voice.setChannel(channel, `Command executed by ${message.author.tag}`);

            let reason = args.slice(2).join(" ");

        if(!reason) reason = 'Not-provided';
 
    
const embed = new Discord.MessageEmbed()
      .setDescription(` A Member Has Been moved from vc\n\nModerator: <@${message.author.id}>\nMember: ${member}\nChannel:<#${message.channel.id}>`)
      .setColor('YELLOW');
            return message.channel.send(embed);
        } catch(err) {
            return message.channel.send("Sorry, I couldn't move that member ");
        }
    }
} 