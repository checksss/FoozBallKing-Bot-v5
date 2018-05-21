const { Command } = require('discord-akairo');
const { RichEmbed } = require('discord.js');
const path = require('path');
const config = require(path.join(__dirname, '../../src/data/config.json'));

class banCommand extends Command {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            category: 'moderation',
            args: [
                {
                    id: 'ban',
                    default: config.prefix
                }
            ],
            channelRestriction: 'guild'
        });
    }

    exec(message) {
        const args = message.content.split(" ").slice(1)
        if(message.guild.members.get(message.author.id).hasPermission('BAN_MEMBERS')) {
			const banned = message.guild.member(message.mentions.users.first())
			if(!message.guild.members.get(this.client.user.id).hasPermission('BAN_MEMBERS')) return message.channel.send(`I have no perms to ban this user!`)
			if(!banned) return message.channel.send(`No user to ban!`)
			const reason = args.slice(1).join(" ")
			banned.ban(reason).catch(err => {
                const embed = new RichEmbed()
                .setColor([179, 0, 0])
                .addField(`Error banning ${banned.user.tag}!`, err, true)
                .setFooter(`Join the support server https://discord.gg/RfmJYQX for more info!`)
                message.channel.send(embed)
			})
			message.channel.send(`Banned user ${banned} (${banned.user.tag}) with reason "${reason}". May not have been banned though!`)
		} else {
			message.channel.send(`You don't have the Ban Members permission!`)
        }
    }
}

module.exports = banCommand;