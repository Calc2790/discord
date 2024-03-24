// Require the necessary modules
const Discord = require('discord.js');
require('dotenv').config();

// Create a new Discord client
const client = new Discord.Client();

// Login using the token from the .env file
client.login(process.env.DISCORD_TOKEN);

// Event listener for when the bot is ready
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener for incoming messages
client.on('message', (message) => {
    // Add your custom message handling logic here
});

// Handle any errors that occur
client.on('error', (error) => {
    console.error('An error occurred:', error);
});
