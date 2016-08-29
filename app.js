const http = require('http');
const Bot = require('messenger-bot');
const process = require('process');

let bot = new Bot({
    token: 'EAAJr1PwCOw4BAL6hCTaPRBIylICIYz5zxKojrqgr2QMIvOtltXHCfGov0fqY9SwwWRdcNADEQgkf96TIGZBy8ZC78kMAzMFPyMgsMDSeM2Xb6LenjRCim8FlJvohZAaxbg4QZCAYcywKrNlFCupZCrsWNePqhKAvXmEkLqFSD2QZDZD',
    verify: 'browsable',
    app_secret: '1fb92b98531acb0686178ec69c1e6371'
})

bot.on('error', (err) => {
    console.log(err.message)
})

bot.on('message', (payload, reply) => {
    let text = payload.message.text

    bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
    if (err) throw err

    console.log(`${profile.first_name} ${profile.last_name}님이 요렇게 말했다: ${text}`)
})
})
})

http.createServer(bot.middleware()).listen(process.env.PORT||9000)
console.log('서버 뜸')