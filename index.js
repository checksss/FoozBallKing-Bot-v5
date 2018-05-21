const path = require('path');
const foozClient = require(path.join(__dirname, 'src/foozClient'));
const client = new foozClient().build();
const config = require(path.join(__dirname, '/src/data/config.json'));
client.prefix = config.prefix;
client.ownerID = config.ownerID;

const { token } = config;
client.start(token);