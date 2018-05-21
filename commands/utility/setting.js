const { Command } = require('discord-akairo');
const path = require('path');
const config = require(path.join(__dirname, '../../src/data/config.json'));

class settingCommand extends Command {
    constructor() {
        super('setting', {
            aliases: ['setting'],
            category: 'utility',
            args: [
                {
                    id: 'setting',
                    default: config.prefix
                }
            ],
            channelRestriction: 'guild'
        });
    }

    exec(message, args) {
        // Code
        if(args[0].toLowerCase() == 'welcome') {
            if(args[1].toLowerCase() == 'enabled') {
                if(args[2].toLowerCase() == 'true') {
                    this.client.settings.set(message.guild.id, 'welcomeEnabled', true)
                    message.channel.send('The `welcomeEnabled` setting has been set to "true"!')
                } else if(args[2].toLowerCase() == 'false') {
                    this.client.settings.set(message.guild.id, 'welcomeEnabled', false)
                    message.channel.send('The `welcomeEnabled` setting has been set to "false"!')
                } else {
                    message.channel.send('**ERROR!** `welcomeEnabled` setting must be true or false!')
                }
            }
        }
    }
}

module.exports = settingCommand;