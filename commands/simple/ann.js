const commando = require("discord.js-commando");
const discord = require('discord.js');

class AnnounceCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "announce",
            group: "simple",
            memberName: "announce",
            description: "Makes an announcement"
        });
    }

    async run(message, args)
    {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("You do not have permission to do that!")
        };

        const Embed = new discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("Announcement")
        .setDescription(args);

        let msgchannel = message.guild.channels.find("name", "announcements")
        msgchannel.sendMessage(Embed);
    }
}

module.exports = AnnounceCommand;