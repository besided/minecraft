const config = require('../../config.json');

const version = config.BOT_INFO.VERSION
const name= config.BOT_INFO.NAME
const prefix = config.PREFIX

module.exports = (Discord, client) =>{
    console.log(`${name} is online | Current Version: ${version}`);
    console.log(`Currently Watching ${client.users.cache.size} Users`);   

    let statuses = [
        'Minecraft',
        'Curse Forge: FTB Revelation',
        `wrldwide.secure.pebble.host`,
        'Requires Version: 1.12.2',
        `${prefix}help`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: 'PLAYING' });

    }, 8000)
}
