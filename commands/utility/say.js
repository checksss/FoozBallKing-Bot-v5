const { Command } = require('discord-akairo');
const { RichEmbed } = require('discord.js');
const embed = new RichEmbed();

class SayCommand extends Command {
    constructor() {
        super('say', {
            aliases: ['say']
        });
    }

    exec(message) {
        const argsVal = message.content.slice(';').trim().split(/ +/g);
        function saycmd(msg) {
            if(msg === 'm') {return argsVal[2]}
            else if(msg === 'e') {
                const emb = embed.setAuthor(`${message.author.username}#${message.author.discriminator}`, `${message.author.avatarURL}`)
                .setDescription(`${argsVal[2]}`).setColor([255, 255, 255])
                return emb}
            else if(msg === 'md') {
                function delDat() {
                    message.delete()
                    message.channel.send(argsVal[2])
                }
                return delDat()
            }
            else {return 'Incorrect usage!'}
        }
		message.delete();
		message.channel.send(saycmd(argsVal[1]));
    }
}

module.exports = SayCommand;