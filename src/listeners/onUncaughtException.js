const { Listener } = require('discord-akairo');

class UncaughtExceptionListener extends Listener {
    constructor() {
        super('uncaughtExceptionEvent', {
            eventName: 'uncaughtException',
            emitter: 'process'
        });
    }

    exec(error) {
        const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./")
        this.client.logger.error(`Uncaught Exception: ${errorMsg}`)

        process.exit(1)
    }
}

module.exports = UncaughtExceptionListener;