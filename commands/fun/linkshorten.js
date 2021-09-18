const shorten = require('isgd');


module.exports = {
    config : {
      name: "linkshorten",
    aliases: ["shorten"],
    category: "Utility",
    description: "Shortens your URL to is.gd format !!",
    example: `c!linkshorten https://discord.gg/RWSEj6JrjJ blob_lab`},

    run: async (client, message, args) => {

        if (!args[0]) return message.reply(`Provide the link to shorten !! \`${config.Prefix}shortenlink <link> <name>\``)

        if (!args[0]) {
            shorten.shorten(args[0], function(res) {
                if(res.startsWith('Error:')) return message.reply(` Provide a valid url **${res}**`)

                message.channel.send(`**<${res}>**`)
            })

        } else {

            shorten.custom(args[0], args[1], function(res) {
                if(res.startsWith('Error:')) return message.reply(` **${res}**`)

                message.channel.send(`**<${res}>**`)
            })

        }

    }
}