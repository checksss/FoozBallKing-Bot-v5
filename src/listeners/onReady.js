const { Listener } = require('discord-akairo');
const Discord = require('discord.js');
const config = require('../data/config.json');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            eventName: 'ready'
        });
    }

    exec() {
        this.client.user.setPresence({ game: { name: `FoozBall | @FoozBallKing Bot help | v5`, type: "PLAYING" }, status: 'idle' });
        const online = new Discord.RichEmbed().setAuthor(`${this.client.user.username}`, `${this.client.user.avatarURL}`).setColor([0, 255, 255])
            .setTitle("Online").setTimestamp();
        this.client.channels.get("400273922723151881").send(online)
    }
}

module.exports = ReadyListener;