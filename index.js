// Requiring necessary package
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Processing TOKEN from .env
const TOKEN = process.env.TOKEN;

// When client ready test code
client.once(Events.ClientReady, readyClient => {
    console.log(`Success. Logged in as ${readyClient.user.tag} => }`)
})

// Login to Discord using TOKEN
client.login(TOKEN);