const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const srelcol = ([104, 215, 231]);
const frelcol = ([229, 116, 71]);

class LoadCommand extends Command {
    constructor() {
        super('load', {
            aliases: ['load'],
            args: [
                {
                    id: 'commandID'
                }
            ],
            ownerOnly: true,
        });
    }

    async exec(message, args) {
            const srel = new Discord.RichEmbed().setTitle('Reloaded').setDescription(`**${args.commandID}**`).setColor(srelcol);
            const frel = new Discord.RichEmbed().setTitle('Failed to reload').setDescription(`**${args.commandID}**`).setColor(frelcol);
            try {
                await this.handler.add(args.commandID);
                return message.channel.send(srel);
            } catch(err) { return message.channel.send(frel); console.error(err)}
        }
}

module.exports = LoadCommand;