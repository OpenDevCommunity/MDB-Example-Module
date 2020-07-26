
// This is command entry point, this function is executed first
// when command gets called from Discord chat
// This function exposes following objects
//
// bot      [Discord.js client]         -> Current bot instance
// message  [Discord Message Object]    -> Discord message object
// args     [Array<String>]             -> Array of string passed after command (eg: !ping arg1 arg2)
module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send('!ping');
    msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms.`);
}


// Module meta contains all required information about the command
// Following fileds are required or command will not be loaded
//
// name     [String]    -> name of command used in Discord chat (eg: !ping)
// author   [String]    -> username or discord ID of the user who created this command
// version  [String]    -> Current version of the command (used to check for updates)

module.exports.meta = {
    name: 'ping',
    author: 'RickRoll',
    version: '1.0.0'
}