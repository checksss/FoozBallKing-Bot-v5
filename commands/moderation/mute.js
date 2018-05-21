/*
if(msg.toLowerCase().startsWith(prefix + 'mute')) {
		if(message.guild.members.get(message.author.id).hasPermission('MANAGE_MESSAGES')) {
			if(!message.guild.members.get(bot.user.id).hasPermission('MANAGE_ROLES')) return message.channel.send('I don\'t have the `Manage Roles` permission!')
			if(!message.guild.roles.find('name', 'Muted')) return message.channel.send('The `Muted` role doesn\'t exist! If you don\'t know how to set one up, go grab Dyno.')
			const datLengthTho = args.slice(1).join(' ')
		// 1st argument
			let seconds1 = parseInt(args[1])
			let minutes1 = parseInt(args[1])
			let hours1 = parseInt(args[1])
			let days1 = parseInt(args[1])
			// 2nd argument
			//let seconds2 = parseInt(args[2])
			let minutes2 = parseInt(args[2])
			let hours2 = parseInt(args[2])
			let days2 = parseInt(args[2])
			// 3rd argument
			//let seconds3 = parseInt(args[3])
			//let minutes3 = parseInt(args[3])
			let hours3 = parseInt(args[3])
			let days3 = parseInt(args[3])
			// 4th argument
			//let seconds4 = parseInt(args[4])
			//let minutes4 = parseInt(args[4])
			//let hours4 = parseInt(args[4])
			let days4 = parseInt(args[4])
			
			// Main time
			let fullMS = 0;
			
			if(args[1].includes('s')) {
				if(seconds1 > 60) {
					if(args[2].includes('m')) {
						minutes2 = Math.floor((seconds1 / 60) + minutes2)
						seconds1 = Math.floor(seconds1 - (minutes2 * 60))
						fullMS = Math.floor((((seconds1 * 1000)) + ((minutes2 * 60) * 1000)) + fullMS)
					} else {
						minutes2 = Math.floor(seconds1 / 60)
						seconds1 = Math.floor(seconds1 - (minutes2 * 60))
						fullMS = Math.floor((((seconds1 * 1000)) + ((minutes2 * 60) * 1000)) + fullMS)
					}
				} else {
					fullMS = Math.floor((seconds1 * 1000) + fullMS)
				}
			}
			
			if(args[1].includes('m')) {
				if(minutes1 > 60) {
					if(args[2].includes('h')) {
						hours2 = Math.floor((minutes1 / 60) + hours2)
						minutes1 = Math.floor(minutes1 - (hours2 * 60))
						fullMS = Math.floor(((((minutes1 * 60) * 1000)) + (((hours2 * 60) * 60) * 1000)) + fullMS)
					} else {
						hours2 = Math.floor(minutes1 / 60)
						minutes1 = Math.floor(minutes1 - (hours2 * 60))
						fullMS = Math.floor(((((minutes1 * 60) * 1000)) + (((hours2 * 60) * 60) * 1000)) + fullMS)
					}
				} else {
					fullMS = Math.floor(((minutes1 * 60)* 1000) + fullMS)
				}
			} else if(args[2].includes('m')) {
				if(minutes1 > 60) {
					if(args[3].includes('h')) {
						hours3 = Math.floor((minutes2 / 60) + hours3)
						minutes2 = Math.floor(minutes2 - (hours3 * 60))
						fullMS = Math.floor(((((minutes2 * 60) * 1000)) + (((hours3 * 60) * 60) * 1000)) + fullMS)
					} else {
						hours3 = Math.floor(minutes2 / 60)
						minutes2 = Math.floor(minutes2 - (hours3 * 60))
						fullMS = Math.floor(((((minutes2 * 60) * 1000)) + (((hours3 * 60) * 60) * 1000)) + fullMS)
					}
				} else {
					fullMS = Math.floor(((minutes2 * 60)* 1000) + fullMS)
				}
			}
			
			if(args[1].includes('h')) {
				if(hours1 > 60) {
					if(args[2].includes('d')) {
						days2 = Math.floor((hours1 / 60) + days2)
						hours1 = Math.floor(hours1 - (days2 * 60))
						fullMS = Math.floor(((((minutes2 * 60) * 1000)) + (((hours3 * 60) * 60) * 1000)) + fullMS)
					} else {
						hours2 = Math.floor(minutes2 / 60)
						minutes1 = Math.floor(minutes2 - (hours3 * 60))
						fullMS = Math.floor(((((minutes2 * 60) * 1000)) + (((hours3 * 60) * 60) * 1000)) + fullMS)
					}
				} else {
					fullMS = Math.floor(((minutes2 * 60)* 1000) + fullMS)
				}
			}
		}
    }
    */

   const { Command } = require('discord-akairo');
   const { RichEmbed } = require('discord.js');
   const path = require('path');
   const config = require(path.join(__dirname, '../../src/data/config.json'));
   
   class muteCommand extends Command {
       constructor() {
           super('mute', {
               aliases: ['mute'],
               category: 'moderation',
               args: [
                   {
                       id: 'mute',
                       default: config.prefix
                   }
               ],
               channelRestriction: 'guild'
           });
       }
   
       exec(message) {
           // Code
           const args = message.content.split(' ').slice(1)
           if(message.guild.members.get(message.author.id).hasPermission('MANAGE_MESSAGES')) {
			if(!message.guild.members.get(this.client.user.id).hasPermission('MANAGE_ROLES')) return message.channel.send('I don\'t have the `Manage Roles` permission!')
            if(!message.guild.roles.find('name', 'Muted')) return message.channel.send('The `Muted` role doesn\'t exist! If you don\'t know how to set one up, go grab Dyno.')
            if(!args.join(" ")) return message.channel.send(`No arguments!`)
            const datLengthTho = args.slice(1).join(' ')
            const muteUser = message.guild.member(message.mentions.users.first())
		// 1st argument
			let seconds1 = parseInt(args[1])
			let minutes1 = parseInt(args[1])
			let hours1 = parseInt(args[1])
			let days1 = parseInt(args[1])
			// 2nd argument
			//let seconds2 = parseInt(args[2])
			let minutes2 = parseInt(args[2])
			let hours2 = parseInt(args[2])
			let days2 = parseInt(args[2])
			// 3rd argument
			//let seconds3 = parseInt(args[3])
			//let minutes3 = parseInt(args[3])
			let hours3 = parseInt(args[3])
			let days3 = parseInt(args[3])
			// 4th argument
			//let seconds4 = parseInt(args[4])
			//let minutes4 = parseInt(args[4])
			//let hours4 = parseInt(args[4])
			let days4 = parseInt(args[4])
			
			// Main time
			let fullMS = 0;
			
			if(args[1].includes('s')) {
				if(seconds1 > 60) {
					if(args[2].includes('m')) {
						minutes2 = Math.floor((seconds1 / 60) + minutes2)
						seconds1 = Math.floor(seconds1 - (minutes2 * 60))
						fullMS = Math.floor((((seconds1 * 1000)) + ((minutes2 * 60) * 1000)) + fullMS)
					} else {
						minutes2 = Math.floor(seconds1 / 60)
						seconds1 = Math.floor(seconds1 - (minutes2 * 60))
						fullMS = Math.floor((((seconds1 * 1000)) + ((minutes2 * 60) * 1000)) + fullMS)
					}
				} else {
					fullMS = Math.floor((seconds1 * 1000) + fullMS)
				}
			}
			
			if(args[1].includes('m')) {
				if(minutes1 > 60) {
					if(args[2].includes('h')) {
						hours2 = Math.floor((minutes1 / 60) + hours2)
						minutes1 = Math.floor(minutes1 - ((hours2 * 60) * 60))
						fullMS = Math.floor(((((minutes1 * 60) * 1000)) + (((hours2 * 60) * 60) * 1000)) + fullMS)
					} else {
						hours2 = Math.floor(minutes1 / 60)
						minutes1 = Math.floor(minutes1 - ((hours2 * 60) * 60))
						fullMS = Math.floor(((((minutes1 * 60) * 1000)) + (((hours2 * 60) * 60) * 1000)) + fullMS)
					}
				} else {
					fullMS = Math.floor(((minutes1 * 60) * 1000) + fullMS)
				}
			} else if(args[2].includes('m')) {
				if(minutes1 > 60) {
					if(args[3].includes('h')) {
						hours3 = Math.floor((minutes2 / 60) + hours3)
						minutes2 = Math.floor(minutes2 - ((hours3 * 60) * 60))
						fullMS = Math.floor(((((minutes2 * 60) * 1000)) + (((hours3 * 60) * 60) * 1000)) + fullMS)
					} else {
						hours3 = Math.floor(minutes2 / 60)
						minutes2 = Math.floor(minutes2 - ((hours3 * 60) * 60))
						fullMS = Math.floor(((((minutes2 * 60) * 1000)) + (((hours3 * 60) * 60) * 1000)) + fullMS)
					}
				} else {
					fullMS = Math.floor(((minutes2 * 60) * 1000) + fullMS)
				}
			}
			
			if(args[1].includes('h')) {
				if(hours1 > 60) {
					if(args[2].includes('d')) {
						days2 = Math.floor((hours1 / 24) + days2)
						hours1 = Math.floor(hours1 - (((days2 * 24) * 60) * 60))
						fullMS = Math.floor((((((hours1 * 60) * 60) * 1000)) + ((((days2 * 24) * 60) * 60) * 1000)) + fullMS)
					} else {
						days2 = Math.floor(hours1 / 24)
						hours1 = Math.floor(hours1 - (((days2 * 24) * 60) * 60))
						fullMS = Math.floor((((((hours1 * 60) * 60) * 1000)) + ((((days2 * 24) * 60) * 60) * 1000)) + fullMS)
					}
				} else {
					fullMS = Math.floor((((hours1 * 60) * 60) * 1000) + fullMS)
				}
			} else if(args[2].includes('h')) {
				if(hours2 > 60) {
					if(args[3].includes('d')) {
						days3 = Math.floor((hours2 / 24) + days3)
						hours2 = Math.floor(hours2 - (((days3 * 24) * 60) * 60))
						fullMS = Math.floor((((((hours2 * 60) * 60) * 1000)) + ((((days3 * 24) * 60) * 60) * 1000)) + fullMS)
					} else {
						days3 = Math.floor(hours2 / 24)
						hours2 = Math.floor(hours2 - (((days3 * 24) * 60) * 60))
						fullMS = Math.floor((((((hours2 * 60) * 60) * 1000)) + ((((days3 * 24) * 60) * 60) * 1000)) + fullMS)
					}
				} else {
					fullMS = Math.floor((((hours2 * 60) * 60) * 1000) + fullMS)
				}
			} else if(args[3].includes('h')) {
				if(hours3 > 60) {
					if(args[4].includes('d')) {
						days4 = Math.floor((hours3 / 24) + days4)
						hours3 = Math.floor(hours3 - (((days4 * 24) * 60) * 60))
						fullMS = Math.floor((((((hours3 * 60) * 60) * 1000)) + ((((days4 * 24) * 60) * 60) * 1000)) + fullMS)
					} else {
						days4 = Math.floor(hours3 / 24)
						hours3 = Math.floor(hours3 - (((days4 * 24) * 60) * 60))
						fullMS = Math.floor((((((hours3 * 60) * 60) * 1000)) + ((((days4 * 24) * 60) * 60) * 1000)) + fullMS)
					}
				} else {
					fullMS = Math.floor((((hours3 * 60) * 60) * 1000) + fullMS)
				}
            }
            
            if(args[1].includes('d')) {
                fullMS = Math.floor(((((days1 * 24) * 60) * 60) * 1000) + fullMS)
            } else if(args[2].includes('d')) {
                fullMS = Math.floor(((((days2 * 24) * 60) * 60) * 1000) + fullMS)
            } else if(args[3].includes('d')) {
                fullMS = Math.floor(((((days3 * 24) * 60) * 60) * 1000) + fullMS)
            }
            this.client.settings.set(message.guild.id, muteUser.user.id, `${fullMS} ${message.createdTimestamp * 1000} ${message.author.id}`)
            const embed = new RichEmbed()
            .setColor([255, 0, 0])
            .setThumbnail(muteUser.user.avatarURL)
            .addField(`Member ${muteUser} has been muted by ${message.author.id}!`, `Length: ${giveDamoHisTits(fullMS)}`)
            message.channel.send(embed)
            muteUser.addRole(message.guild.roles.find('name', 'Muted'))
        } else {
            message.channel.send(`You don't have permission!`)
        }
        
        function giveDamoHisTits(time) {
            var days = Math.floor(time / 86400000)
            var hours = Math.floor((time % 86400000) / 3600000)
            var minutes = Math.floor(((time % 86400000) % 3600000) / 60000)
            var seconds = Math.floor((((time % 86400000) % 360000) % 60000) / 1000)
            return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
        }
       }
   }
   
   module.exports = muteCommand;