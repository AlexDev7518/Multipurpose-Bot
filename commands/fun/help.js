var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Help Menu",
    usage: "1) m/help \n2) m/help [module name]\n3) m/help [command (name or alias)]",
    example: "1) m/help\n2) m/help utility\n3) m/help ban",
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}help`){
    var log = new Discord.MessageEmbed()
    .setColor(`#dbbbff`)
    .setTitle(" 😁😁 \` Welcome to My Help Menu \` 😁😁")
    .addField('Prefix Information', `Prefix: \`$\`\nYou can also mention \`Aiko\` to get prefix info.`)
    .setDescription(
    `Use \`!help\` followed by a command name to get more additional information on a command. For example: \`$help play\`.`
                )

    
    .addField(`**⚙️ ❯ MODERATION **`,"`Ban`,`Kick`,`vcmove`,`smove`,`voicekick`,`lock`,`unlock`,`Unban`,`Mute`,`Purge`,`Hackban`,`role`,`roleadd`,`roledel`,`rolecreate`,`deleterole`,`createvc`,`createchat`,`delchannel`,`embed`,`announce`,`imageannounce`,`membercount`,`yt`,`steal`,`define`,`sourcebin`,`docs`,`weather`,`qr`,`github`,`applestore`,`anime`,`linkshorten`,`playstore`,`country`,`ascii`,`emojiid`,`vaportext`")
    .addField(`**🛡️ ❯ SETUP & INFO'S **`,"`setmodlog`,`setmute`,`setnick`,`slowmode`,`help`,`uptime`,`av`,`av2`,`stats`,`channelinfo`,`roleinfo`,`whois`" )
    .addField(` **🤣 ❯ FUN **`,"`kiss`,`hug`,`pat`,`zaglo`,`slap`,`smug`,`tickle`,`poke`,`binary`,`calculate`,`lovecal`,`meme`,`advice`,`scroll`")
    .addField(` **🌺 ❯ IMAGE **`,"`triggered`,`delete`,`rip`,`jail`,`captcha`,`wideavatar`,`toilet`,`wa`,`clyde`,`wasted`,`effect`,`tweet`,`minecraft`,`blur`,`beautiful`,`catsay`,`cowsay`,`fliptext`")
    .addField(` **❯ LINKS **`,`   [Invite Me](https://discord.com/developers/applications)`+` - `+`[Support Server](https://discord.gg/aVXREv3Me7)`)
    .setFooter("© Aiko")
    .setTimestamp()

message.channel.send(log);
}
}
}
