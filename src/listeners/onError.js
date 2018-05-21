const { Listener } = require('discord-akairo');
const moment = require('moment');require('moment-duration-format');

class ErrorListener extends Listener {
    constructor() {
        super('errorEvent', {
            eventName: 'error',
            emitter: 'client'
        });
    }

    async exec(error) {
        this.client.logger.err(`Errored on ${moment().format('MMMM Do YYYY')} at ${moment().format('h:mm:ss a')}`)
    }
}

module.exports = ErrorListener;