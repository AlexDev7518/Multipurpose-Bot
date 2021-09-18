const Discord = require('discord.js');
const fetch = require('node-fetch');
const config = require('../../config');

module.exports= {
  config : {
	aliases: [""],
	name: 'docs',
	description: 'Search the discord.js docs',
	usage: config.prefix + 'docs message'},

  run : async (client, message, args) => {
	const searchQuery = args.slice().join(' ');
	const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(searchQuery)}`;
	fetch(url)
		.then((res) => res.json())
		.then((embed) => {
			if (embed && !embed.error) {
				message.channel.send({
					embed,
				});
			}
			else {
				const embed2 = new Discord.MessageEmbed()
					.setColor('RANDOM')
					.setDescription(`There isnt anything related to \`${searchQuery}\``);
				return message.channel.send(embed2);
			}
		})
		// eslint-disable-next-line no-unused-vars
		.catch((err) => {
			const embed3 = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setDescription('**There was an error doing that!`**');
			return message.channel.send(embed3);
		});
}
}


