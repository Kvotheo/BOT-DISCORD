// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

//dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN } = process.env


// importação dos comandos
const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

//console.log(commandFiles)
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection

for (const file of commandFiles){
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    
    if("data" in command && "execute" in command){

    }
    // MIN 38:21
}




client.once(Events.ClientReady, c => {
	console.log(`Pronto! login realizado como ${c.user.tag}`);
});

client.login(TOKEN);