const { Client } = require('discord.js');
const bot = new Client();

const settings = { prefix: "+" };
const chars = [
    '🤩🤡🤩',
    '🤡🤩🤡',
    '🤡🤡🤡'
];

bot.on('ready', () => {
    console.log(`Active.`);
});

bot.on('message', (msg) => {
    const args = msg.content.slice(settings.prefix.length).trim().split(' ');
    if (chars.includes(args.values)) {
        return msg.reply('.>>.<<.');
    }     
});

bot.login(process.env.AUTH_TOKEN);
