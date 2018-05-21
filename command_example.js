const { Command } = require('discord-akairo');
const path = require('path');
const config = require(path.join(__dirname, '../../src/data/config.json'));

class commandName extends Command {
    constructor() {
        super('command', {
            aliases: ['command'],
            category: 'category',
            args: [
                {
                    id: 'command',
                    default: config.prefix
                }
            ],
            channelRestriction: 'guild'
        });
    }

    exec(message, args) {
        // Code
    }
}

module.exports = commandName;