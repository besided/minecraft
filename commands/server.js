const Discord = require('discord.js');
const util = require('minecraft-server-util');

module.exports = {
    name: "server",
    description: "Views MC Server Information",

    async run (client, message, args) {

    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({ format: 'png', dynamic: true, });

       var gifs = [
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d44e8e4c-db34-4361-8508-e7288d4cc10f/d58bi3u-a22617b1-4d41-45b8-b422-a09d7ff8f49c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDQ0ZThlNGMtZGIzNC00MzYxLTg1MDgtZTcyODhkNGNjMTBmXC9kNThiaTN1LWEyMjYxN2IxLTRkNDEtNDViOC1iNDIyLWEwOWQ3ZmY4ZjQ5Yy5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mz_vgvm6wqQ21n8YbKIEtCp864UK-bgX8Qg3djXH6E4',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d44e8e4c-db34-4361-8508-e7288d4cc10f/d5dcgud-9f0d8156-0c74-4eea-9128-9667275d1827.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDQ0ZThlNGMtZGIzNC00MzYxLTg1MDgtZTcyODhkNGNjMTBmXC9kNWRjZ3VkLTlmMGQ4MTU2LTBjNzQtNGVlYS05MTI4LTk2NjcyNzVkMTgyNy5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.rCkXq0hNGMtkR1S9fUc278mKQbZNaI8reTPqgJFr9ac',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d44e8e4c-db34-4361-8508-e7288d4cc10f/d5ddfwi-62008409-a563-4539-a36e-f14985be44b1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZDQ0ZThlNGMtZGIzNC00MzYxLTg1MDgtZTcyODhkNGNjMTBmXC9kNWRkZndpLTYyMDA4NDA5LWE1NjMtNDUzOS1hMzZlLWYxNDk4NWJlNDRiMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.s-GIoyNx-F5_75hyzzKodS7_BbTWH0FG2yU5zubB50E',
        ]
        
        util.status("wrldwide.secure.pebble.host", {port: parseInt(25565)}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setThumbnail(gifs[Math.floor(Math.random() * gifs.length)])
            .setTitle('Status:')
            .addFields(
                {name: 'Server IP:', value: response.host},
                {name: 'Online Players:', value: response.onlinePlayers},
                {name: 'Max Players:', value: response.maxPlayers},
                {name: 'Version:', value: response.version}
                {name: 'Modpack:', value: FTB: Revelation}
            )
            .setFooter(`Requested by: ${member.username}`, (avatar))
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            throw error;
        })

    }
}