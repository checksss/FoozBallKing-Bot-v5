const { Command } = require('discord-akairo');
const { RichEmbed } = require('discord.js');
const path = require('path');
const config = require(path.join(__dirname, '../../src/data/config.json'));

class kickCommand extends Command {
    constructor() {
        super('kick', {
            aliases: ['kick'],
            category: 'moderation',
            args: [
                {
                    id: 'kick',
                    default: config.prefix
                }
            ],
            channelRestriction: 'guild'
        });
    }

    exec(message) {
        const args = message.content.split(" ").slice(1)
        if(message.guild.members.get(message.author.id).hasPermission('KICK_MEMBERS')) {
			const banned = message.guild.member(message.mentions.users.first())
			if(!message.guild.members.get(this.client.user.id).hasPermission('KICK_MEMBERS')) return message.channel.send(`I have no perms to kick this user!`)
			if(!banned) return message.channel.send(`No user to kick!`)
			const reason = args.slice(1).join(" ")
			banned.kick(reason).catch(err => {
                const embed = new RichEmbed()
                .setColor([179, 0, 0])
                .addField(`Error kicking ${banned.user.tag}!`, err, true)
                .setFooter(`Join the support server https://discord.gg/RfmJYQX for more info!`)
                message.channel.send(embed)
			})
			message.channel.send(`Kicked user ${banned} (${banned.user.tag}) with reason "${reason}". May not have been kicked though!`)
		} else {
			message.channel.send(`You don't have the Kick Members permission!`)
        }
    }
}

module.exports = kickCommand;