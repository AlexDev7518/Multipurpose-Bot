const api = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  config : {
  name: "advice",
  aliases: [],
  category: "Fun",
  description: "Return A Random Advice!",
  usage: "Advice"},
  run: async (client, message, args) => {
    
    const Data = await api.GetAdvice({ Color: "YELLOW" });
    return message.channel.send(Data);
  }
};