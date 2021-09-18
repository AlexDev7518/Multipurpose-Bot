const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
  config : {
    name: "decode",
    aliases: ["dd"],
    description: "It Decodes the  binary language!",
    category: "Utility",
    example: `c!decode 0110100100101100011011000110111101110110011001010010110001110101`},
    run: async (client, message, args) => {
        const url = `http://some-random-api.ml/binary?decode=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Decode Binary')
            .setDescription(data.text)
            .setColor('YELLOW')

        await message.channel.send(embed)
    }
}