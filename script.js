const { Client } = require('discord.js');
const bot = new Client();

bot.on('ready', () => {
    console.log(`Active.`);
});

bot.login(process.env.AUTH_TOKEN);