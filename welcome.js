module.exports = (client) => {
  const channelId = '861316161852538923' // welcome channel
  const targetChannelId = '861316158002692117' // rules and info

  client.on('guildMemberAdd', (member) => {
    const message = `Please welcome <@${
      member.id
    }> to the server! Please check out ${member.guild.channels.cache
      .get(targetChannelId)
      .toString()}`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(message)
  })
}