const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada: SPONSOR BAŞVURULARI İÇİN 3rferdem#6012",
    url: "https://discordapp.com",
    description: "Başvurular AÇIKTIR.",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'sponsorları gösterir.',
  usage: 'sponsor'
};
