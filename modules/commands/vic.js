module.exports.config = {
    name: "vic",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Minh Dương",
    description: "thôg tin adm",
    commandCategory: "Noprefix",
    usages: "ad/admin/adm",
    cooldowns: 10,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "0.mp4")) request("https://i.imgur.com/gAb3Z3g.mp4").pipe(fs.createWriteStream(dirMaterial + "0.mp4"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Victory mãi đỉnhhh, top 1 buff bẩn =)))`,
                attachment: fs.createReadStream(__dirname + `/noprefix/0.mp4`)
            }
    if (event.body.toLowerCase() == "Admin đâu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "vic"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "admin"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Ad"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
      }