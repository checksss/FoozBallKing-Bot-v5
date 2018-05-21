const sqlite = require('sqlite');
const path = require('path');
const config = require(path.join(__dirname, 'data/config.json'));

const { AkairoClient, SQLiteProvider } = require('discord-akairo');

class foozClient extends AkairoClient {
    constructor() {
        super({
            prefix: message => {
                if (message.guild) {
                    // The third param is the default.
                    return this.settings.get(message.guild.id, 'prefix', config.prefix);
                }

                return config.prefix;
            },
            ownerID: config.ownerID,
            handleEdits: true,
            allowMention: true,
            storeMessages: true,
            commandDirectory: path.join(__dirname, '../commands/'),
            inhibitorDirectory: path.join(__dirname, 'inhibitors/'),
            listenerDirectory: path.join(__dirname, 'listeners/'),
            automateCategories: true,
            emitters: {
                process
            }
        });

        const db = sqlite.open(path.join(__dirname, 'data/settings.sqlite'))
            .then(d => d.run('CREATE TABLE IF NOT EXISTS guilds (id TEXT NOT NULL UNIQUE, settings TEXT)').then(() => d));
        this.settings = new SQLiteProvider(db, 'guilds', { dataColumn: 'settings' });
    }

    setup() {
        const resolver = this.commandHandler.resolver;
        resolver.addType('1-10', word => {
            const num = resolver.type('integer')(word);
            if (num == null) return null;
            if (num < 1 || num > 10) return null;
            return num;
        });
    }

    async start(token) {
        this.setup();
        await this.settings.init();
        await this.login(token);
        console.log('Ready!'); // eslint-disable-line no-console
    }
}

module.exports = foozClient;