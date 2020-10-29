const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'supportserver',
      aliases: ['support', 'ss'],
      usage: 'supportserver',
      description: 'Displays the invite link to Si Ampas\'s Discord Server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Server')
      .setThumbnail('https://raw.githubusercontent.com/lunareixx/AmpasBot/master/data/images/SiAmpas.png')
      .setDescription('Click [here](https://discord.gg/) to join the Si Ampas Server!')
      .addField('Other Links', 
        '**[Repository](https://github.com/lunareixx/AmpasBot)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
