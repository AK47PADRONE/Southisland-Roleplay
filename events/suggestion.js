module.exports = client => {
    const channelIds = [
        '908831002963636264', '904703201176059975'
    ]

    const addReactions = message => {
        message.react('<:1_:908829806525825054>')

        setTimeout(() => {
            message.react('<:1_:908829838700335116>')
        }, 750)
    }

    client.on('message', (message) => {
        if (channelIds.includes(message.channel.id)) {
            addReactions(message)
        }
    })
}