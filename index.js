const Discord = require('discord.js');
const client = new Discord.Client();

// Importing Files
const config = require('./config.json');
/// const bot_token = require('./token.json');

// Config Prefix and Version
const prefix = config.PREFIX

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
})

// Mentioning the client
client.on("message", message => {

    var gifs = [
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d44e8e4c-db34-4361-8508-e7288d4cc10f/d58bi3u-a22617b1-4d41-45b8-b422-a09d7ff8f49c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDQ0ZThlNGMtZGIzNC00MzYxLTg1MDgtZTcyODhkNGNjMTBmXC9kNThiaTN1LWEyMjYxN2IxLTRkNDEtNDViOC1iNDIyLWEwOWQ3ZmY4ZjQ5Yy5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mz_vgvm6wqQ21n8YbKIEtCp864UK-bgX8Qg3djXH6E4',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d44e8e4c-db34-4361-8508-e7288d4cc10f/d5dcgud-9f0d8156-0c74-4eea-9128-9667275d1827.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDQ0ZThlNGMtZGIzNC00MzYxLTg1MDgtZTcyODhkNGNjMTBmXC9kNWRjZ3VkLTlmMGQ4MTU2LTBjNzQtNGVlYS05MTI4LTk2NjcyNzVkMTgyNy5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.rCkXq0hNGMtkR1S9fUc278mKQbZNaI8reTPqgJFr9ac',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d44e8e4c-db34-4361-8508-e7288d4cc10f/d5ddfwi-62008409-a563-4539-a36e-f14985be44b1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDQ0ZThlNGMtZGIzNC00MzYxLTg1MDgtZTcyODhkNGNjMTBmXC9kNWRkZndpLTYyMDA4NDA5LWE1NjMtNDUzOS1hMzZlLWYxNDk4NWJlNDRiMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.s-GIoyNx-F5_75hyzzKodS7_BbTWH0FG2yU5zubB50E',
        ]

    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({ format: 'png', dynamic: true });
    
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
    const embed = new Discord.MessageEmbed()
        .setDescription(`Current Prefix: \`${prefix}\``)
        .setThumbnail(gifs[Math.floor(Math.random() * gifs.length)])
		.setAuthor(`${member.username}`, (avatar))
    message.channel.send(embed);
    };
});

// Mentioning the word Saint
client.on('message', async message => {
	if (message.content === 'minecraft') {
		try {
			await message.react('⛏️');
		} catch (error) {
			console.error('one of the emojis failed to react.');
		}
	}
});

client.on("guildCreate", guild => {

    let found = false;
    guild.channels.cache.forEach(function(channel,id){
        if(found == true || channel.type != "text") {
            return;
        }
    if(guild.me.permissionsIn(channel).has("SEND_MESSAGES") && guild.me.permissionsIn(channel).has("VIEW_CHANNEL")) {
            found = true;
    const embed = new Discord.MessageEmbed()
        .setAuthor('Introduction', 'https://media4.giphy.com/media/viEa7Yyd4RpK0/giphy.gif?cid=ecf05e47mvusv9zjb16swvhiraamk9w2goifqnfi1wxh9395&rid=giphy.gif')
        .setThumbnail('https://media4.giphy.com/media/viEa7Yyd4RpK0/giphy.gif?cid=ecf05e47mvusv9zjb16swvhiraamk9w2goifqnfi1wxh9395&rid=giphy.gif')
        .setDescription(`Thanks for adding \`Minespot\`! You can use \`${prefix}help\` to view commands.`)
    channel.send(embed);
    console.log(`Guild joined: ${guild.name} (Server ID: ${guild.id}). This guild has ${guild.memberCount} members!`);
        }

    })
 });

// Client Login
client.login(process.env.TOKEN);