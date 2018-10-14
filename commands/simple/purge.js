const commando = require("discord.js-commando");

class PurgeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "purge",
            group: "simple",
            memberName: "purge",
            description: "Deletes messages."
        });

    }

    async run(message, args)
    {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel(":x: **Error** You must have permission to use this command.")
        let amount = parseInt(args.substring(6))

        if (amount == undefined) {
            message.chanel.send(":x: Please specify a number. **Proper Usage:** \'${prefix}purge <INT-amount>\'")
            return
        }

        if (!message.member.roles.has("BotAdminRole.id")) {
            message.channel.send(":x: You do not have permission to send \'${prefix}purge <INT-amount>\'")
            return
        }

        if (isNaN(amount)) {
            message.channel.send(":x: Please specify a number. **Proper Usage:** \'${prefix}purge <INT-amount>\'")
            return

        }

        if (amount > 10 && amount > 0) amount = 10;

        const fetched = await message.channel.fetchMessages({limit:parseInt(amount+1)})
        console.log((fecthed.size) + 'messages found, deleteing..')

        message.channel.bulkDelete(fetched).catch(error => message.channel.send(`*Error ${error}`))

        message.channel.send("Deleted \'${amount}\" messages.")





        }
        
    
    }



module.exports = PurgeCommand;