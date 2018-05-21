const { Command } = require('discord-akairo');
const path = require('path');
const config = require(path.join(__dirname, '../../src/data/config.json'));

class PrefixCommand extends Command {
    constructor() {
        super('prefix', {
            aliases: ['prefix'],
            category: 'utility',
            args: [
                {
                    id: 'prefix',
                    default: config.prefix
                }
            ],
            channelRestriction: 'guild'
        });
    }

    exec(message, args) {
        // The third param is the default.
        const oldPrefix = this.client.settings.get(message.guild.id, 'prefix', config.prefix);

        return this.client.settings.set(message.guild.id, 'prefix', args.prefix).then(() => {
            return message.channel.send(`Prefix changed from ${oldPrefix} to ${args.prefix}`);
        });
    }
}

module.exports = PrefixCommand;