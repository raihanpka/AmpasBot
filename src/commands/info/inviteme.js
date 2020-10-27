const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class InviteMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'inviteme',
      aliases: ['invite', 'invme', 'im'],
      usage: 'inviteme',
      description: 'Generates a link you can use to invite Suky to your own server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Invite Me')
      .setThumbnail('https://raw.githubusercontent.com/lunareixx/sukybot/master/data/images/Suky.png')
      .setDescription(oneLine`
        Click [here](https://discordapp.com/oauth2/authorize?client_id=416451977380364288&scope=bot&permissions=403008599)
        to invite me to your server!
      `)
      .addField('Other Links', 
        '**[Support Server](https://discord.gg/jVgKDC4) | ' +
        '[Repository](https://github.com/lunareixx/sukybot)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
