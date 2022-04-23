/**
 * Developed by Akhyy#3727
 * for GitHub Community
 * last update 23/04/2022
 */

 const axios = require('axios');
 let config = require('../config.json');
 
 const getPlayerCount = async () => {
     try {
         const resp = await axios.get('http://'+config.FIVEM_URL+'/players.json');
         
         
             let total = resp;
             return total;
         
 
     } catch (err) {
         console.error(err);
 
     }
 };
 
     module.exports.getPlayerCount = getPlayerCount;
 
 