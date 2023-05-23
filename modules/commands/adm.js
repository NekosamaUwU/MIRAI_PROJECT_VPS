module.exports.config = {
    name: "adm",
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
    if (!fs.existsSync(dirMaterial + "4.mp4")) request("https://i.imgur.com/fBMzAVu.mp4").pipe(fs.createWriteStream(dirMaterial + "4.mp4"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `=====『 𝐀𝐃𝐌𝐈𝐍 』=====
◆━━━━━━━━━━━━━◆
𝐗𝐢𝐧 𝐜𝐡𝐚̀𝐨!!!
Đ𝐚̂𝐲 𝐥𝐚̀ 𝐀𝐝𝐦𝐢𝐧 𝐜𝐮̉𝐚 𝐛𝐨𝐭
▭▭▭▭▭▭▭▭▭▭▭▭
⎔ 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ 🌪️
⋄ 𝐅𝐁:
https://www.facebook.com/ThanhTu.DeveloperFB
⋄ 𝐙𝐋: 0942606875
━━━━━━━━━━━━━━━━━━`,
                attachment: fs.createReadStream(__dirname + `/noprefix/4.mp4`)
            }
    if (event.body.toLowerCase() == "Admin đâu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ad"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "admin"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "Ad"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
                                    }