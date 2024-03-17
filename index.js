const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <html>
      <head>
        <title>Your Web View</title>
      </head>
      <body style="margin: 0; padding: 0;">
        <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
      </body>
    </html>`);
});

server.listen(3000, () => {
  console.log('Server Online because of Axo Coder ✅!!');
});
require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
  console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  checkUpdate: false
});

client.on('ready', async () => {
  const rpc = new Discord.RichPresence({
    startTimestamp: Date.now()
  })
    .setApplicationId('1110523342479425636')
    .setType('STREAMING')
    .setURL(`https://www.twitch.tv/krishdgaf`)
    .setDetails(`BDSM`)
    .setName(`BDSM`)
    .setState(`Krish ?`)
    .setParty({
      max: 5,
      current: 4,
      id: Discord.getUUID(),
    })
    .setAssetsLargeImage(`mp:attachments/1116682027169751060/1218888444001124362/1147905312922284053.gif?ex=66094d52&is=65f6d852&hm=14e3cf519d84d4ead43348b9b5a6dadcc7938392660845cf6a4b8fcb93acc86a&`)
    .setAssetsLargeText(`crazy`)
    .addButton(`Krish ?`, `https://www.instagram.com/krishdgaf?igsh=YTQwZjQ0NmI0OA==`)
    .addButton(`Only Fans`, `https://onlyfans.wtf/krishdgaf`);

  client.user.setActivity(rpc.toJSON());
  console.log(`${client.user.tag} is ready!`);
});

// Account Token
client.login(mySecret = process.env['token'])
