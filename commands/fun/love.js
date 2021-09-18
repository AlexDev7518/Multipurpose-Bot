const { MessageEmbed } = require('discord.js')
const md5 = require('md5')

module.exports = {
  config : {
    name: 'love-calculator',
    description: 'Finds Love Precentage Between 2 Users!',
    category: 'Fun',
    usage: 'love-calculator <@user1> <@user2>',
    example: 'love-calculator @Konvex @Hotshot',
    timeout: '3',
    aliases: ['lovecal', 'love-cal', 'lovecacl']},
    run: async(client, message, args) => {
        const firstMember = message.mentions.members.filter(m => m.id !== message.author.id).first();
        const secondMember =
            message.mentions.members
                .filter(m => m.id !== firstMember.id)
                .filter(m => m.id !== message.author.id)
                .first() || message.member;
        if (!firstMember || !secondMember)
            return message.reply("Mention a user to calculate");

        const members = [firstMember, secondMember].sort(
            (a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)
        );
        const hash = md5(
            `${members[0].id}${members[1].user.username}${members[0].user.username}${members[1].id}`
        );

        const string = hash
            .split("")
            .filter(e => !isNaN(e))
            .join("");
        const percent = parseInt(string.substr(0, 2), 10);
        const name1 = firstMember.nickname || firstMember.user.username
        const name2 = secondMember.nickname || secondMember.user.username

        const embed = new MessageEmbed()
	.setTitle("❤️ Love Calculator")
        
        .setDescription(`User 1 - ${name1}\nUser2 - ${name2}\nLove Percentage - ${percent}%`)
        .setColor('RANDOM')
        .setFooter(`Zeus ❤️ Calculator`, client.user.displayAvatarURL());

    message.channel.send(embed);
    }
};