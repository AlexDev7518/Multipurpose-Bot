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
    .setColor(`#0000FF`)
    .setTitle(" 😁😁 \` Welcome to My Help Menu \` 😁😁")
    .addField('Prefix Information', `Prefix: \`%\`\nYou can also mention \`SWGC\` to get prefix info.`)
    .setDescription(
    `Use \`%help\` followed by a command name to get more additional information on a command. For example: \`%help play\`.`
                )

    
    .addField(`**⚙️ ❯ MODERATION **`,"`addrole`,`Ban`,`Kick`,`vcmove`,`smove`,`voicekick`,`lock`,`unlock`,`Unban`,`Mute`,`Purge`,`Hackban`,`role`,`roleadd`,`roledel`,`rolecreate`,`deleterole`,`createvc`,`createchat`,`delchannel`,`embed`,`announce`,`imageannounce`,`membercount`,`yt`,`steal`,`define`,`sourcebin`,`docs`,`weather`,`qr`,`github`,`applestore`,`anime`,`linkshorten`,`playstore`,`country`,`ascii`,`emojiid`,`vaportext`,`delrole`,`disablemodlogchannel`,`disablemuterole`,`disableverification`,`disablewelcomechannel`,`disablexp`,`reloadmod`,`removerole`,`setmodlogchannel`,`setmuterole`,`setverification`,`setwelcomechannel`,`setxp`,`unbanall`,`undeafen`,`unmute`,`verify`,`warn`")
    .addField(`**🛡️ ❯ SETUP & INFO'S **`,"`setmodlog`,`setmute`,`setnick`,`slowmode`,`help`,`uptime`,`av`,`av2`,`stats`,`roleinfo`,`whois`" )
    .addField(` **🤣 ❯ FUN **`,"`kiss`,`hug`,`pat`,`zaglo`,`slap`,`smug`,`tickle`,`poke`,`binary`,`calculate`,`lovecal`,`meme`,`advice`,`affect`,`avatar`,`coinflip`,`connect`,`covid`,`decode`,`emojify`,`enlarge`,`scroll`,`gif`,`github`,`imdb`,`love`,`motivation`,`setprefix`,`roast`,`say`,`soundboard`,`status`,`stealemoji`,`tts`,`voicemove`,`whatsapp`,`wiki`,`wink`,`youtubesearch`,`zalgo`")
    .addField(` **🌺 ❯ IMAGE **`,"`avatarfusion`,`triggered`,`delete`,`rip`,`jail`,`captcha`,`wideavatar`,`toilet`,`wa`,`clyde`,`wasted`,`effect`,`tweet`,`minecraft`,`blur`,`beautiful`,`catsay`,`cowsay`,`fliptext`,`facepalm`,`fire`,`mission`,`phcomment`,`scary`,`tobecontinued`")
    .addField(`**❗  ❯ Info**`,"`channelinfo`,`help`,`instasearch`,`invites`,`level`,`news`,`ping`,`poll`,`roleinfo`,`rolememberinfo`,`serverinfo`,`uptime`,`weather`,`whois`,`wikipedia`,")
    .addField(`**🎮  ❯ Games**`,"`akinator`,`blackjack`,`connectfour`,`duelquiz`,`gunfight`,`horserace`,`memory`,`poker`,`rps`,`russianroulette`,`tictactoe`,`trivia`,")
    .addField(` **💰  ❯ economy **`,"`addmoney`,`balance`,`beg`,`buy`,`daily`,`deposit`,`fish`,`leaderboard`,`pay`,`profile`,`removemoney`,`rob`,`roulette`,`sell`,`setbackground`,`setinfo`,`slots`,`store`,`weekly`,`withdraw`,")
    .addField(` **🎵  ❯ Music **`,"`clear`,`disable-loop`,`join`,`leave`,`Loop`,`np`,`play`,`playlist`,`push`,`queue`,`resume`,`shuffle`,`skip`,`stop`,`volume`,")
    .setFooter("© Rover")
    .setTimestamp()
    .addField(` **❯ LINKS **`,`   [Invite Me](https://discord.com/developers/applications)`+` - `+`[Support Server](https://discord.gg/rSwuyNXy)`)

message.channel.send(log);
}
}
}
