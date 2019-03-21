const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634
    .setTimestamp(),
    title: "Site",
    url: "https://discordapp.com",
    description: ":fireworks: Yapım aşamasındadır",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['web'],
  permLevel: 0
};

exports.help = {
  name: 'site',
  description: 'Atatürk.',
  usage: 'site'
};
