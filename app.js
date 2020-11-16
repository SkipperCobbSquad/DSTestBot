const Discord = require('discord.js');
const client = new Discord.Client();
const router = require('./router/index');

require('dotenv').config();

const TOKEN = process.env.TOKEN;
const PREFIX = process.env.prefix;

client.on('ready', () => {
  if (client.user.username !== 'JarvisTestBot'){
    client.user.setUsername('JarvisTestBot')
  }
  client.user.setPresence({activity: {name: 'TestPortal', type: 'WATCHING'},status: 'online'})
  console.log('I am ready!');
});

client.on('message', (message) => {
  if (!message.content.startsWith(PREFIX)) return;
  router(message, client);
});

client.login(TOKEN);
