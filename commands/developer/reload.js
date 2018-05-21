const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const srelcol = ([104, 215, 231]);
const frelcol = ([229, 116, 71]);
let datErrTho;

class ReloadCommand extends Command {
    constructor() {
        super('reload', {
            aliases: ['reload'],
            args: [
                {
                    id: 'commandID'
                }
            ],
            ownerOnly: true,
            category: 'owner'
        });
    }

    async exec(message, args) {
        // `this` refers to the command object.
        if(args.commandID === "all") {
            const srel = new Discord.RichEmbed().setTitle('Reloaded').setDescription(`**All Commands**`).setColor(srelcol);
            const frel = new Discord.RichEmbed().setTitle('Failed to reload').setDescription(`**All Commands**`).setColor(frelcol);
            try {
                await this.handler.reloadAll();
                return message.channel.send(srel);
            } catch(err) { return message.channel.send(frel); console.error(err)}
            
        } else if(!args.commandID){
            const frel = new Discord.RichEmbed().setTitle('Improper reload usage!').setDescription(`Usage: \`${this.client.prefix}reload [command id]\``).setColor(frelcol);
            message.channel.send(frel);
        }else {
            const srel = new Discord.RichEmbed().setTitle('Reloaded').setDescription(`**${args.commandID}**`).setColor(srelcol);
            try {
                await this.handler.reload(args.commandID);
                return message.channel.send(srel);
            } catch(err) {
                    const frel = new Discord.RichEmbed().setTitle('Failed to reload').setDescription(`**${args.commandID}**\n\`\`\`${err}\`\`\``).setColor(frelcol);
                    return message.channel.send(frel); console.error(err)
            }
        }
    }

}


module.exports = ReloadCommand;