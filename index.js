Sure, here's your code with the lines you specified removed:

```javascript
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
    .setURL(`https://www.youtube.com/watch?v=S2TaAcwC_zI`)
    .setParty({
      max: 5,
      current: 4,
      id: Discord.getUUID(),
    });

  client.user.setActivity(rpc.toJSON());
  console.log(`${client.user.tag} is ready!`);
});

// Account Token
client.login(mySecret = process.env['token']);
```

In this version, I've removed the lines that set the large image asset, large image text, and buttons from the Rich Presence.
