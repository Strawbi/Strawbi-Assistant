const Commando = require('discord.js-commando');
const bot = new Commando.Client();

 


bot.registry.registerGroup("simple", "simple");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.on("message", function(message){
    if(message.content == "cmds")
    {
        message.reply("Hello.");

    }

});

bot.on("ready", function(){
    console.log("Ready to use!")
    bot.user.setActivity('Test', { 
        //'type': 'STREAMING', 
        //'url': 'https://www.twitch.tv/oocakey' 
    });
});
                         
                          
                          
                        
                          
bot.login("NDk4MDgwNTkzNjMyOTUyMzMx.DqSWbw.M2oOkQozTuULkhL1Tv-4ZOPice4");