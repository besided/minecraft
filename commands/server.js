const Discord = require('discord.js');
const util = require('minecraft-server-util');

module.exports = {
    name: "server",
    description: "Views all the commands for the Client",

    async run (client, message, args) {

    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({ format: 'png', dynamic: true, });
        
        util.status("wrldwide.secure.pebble.host", {port: parseInt(25565)}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setTitle('Status:')
            .addFields(
                {name: 'Server IP:', value: response.host},
                {name: 'Online Players:', value: response.onlinePlayers},
                {name: 'Max Players:', value: response.maxPlayers},
                {name: 'Version:', value: response.version}
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