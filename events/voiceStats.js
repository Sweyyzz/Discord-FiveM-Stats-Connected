/**
 * Developed by Akhyy#3727
 * for GitHub Community
 * last update 23/04/2022
 */

const Discord = require('discord.js');
let PlayerCount = require('./Players');
let config = require('../config.json');

module.exports = {
    name: 'ready',

    async execute(client) {

        // Counter Fivem

        setInterval(() => {
            PlayerCount.getPlayerCount().then((result) => {
                const memberCount = guild.memberCount;
                const channel = guild.channels.cache.get(config.CHANNEL_ID);
                channel.setName(`🎮・FiveM : ${result.data.length}`);
            })
          }, 5000);
    }
}