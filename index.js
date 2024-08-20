const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log('機器人已上線!');
});

client.on('messageCreate', message => {
    console.log(`收到訊息: ${message.content}`);
    if (message.content === '嗨!') {
        const lastMessage = message.channel.lastMessage;
        console.log(`最後一條訊息: ${lastMessage ? lastMessage.content : '無'}`);

        if (!lastMessage || !lastMessage.author.bot || lastMessage.content !== '嗨!') {
            message.reply('嗨!');
        }
    }
});


// 用你的機器人 Token 登入
require('dotenv').config();
client.login(process.env.DISCORD_TOKEN);
