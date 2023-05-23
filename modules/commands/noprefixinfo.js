module.exports.config = {
    name: "noprefixinfo",
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
    if (!fs.existsSync(dirMaterial + "infoauto.mp4")) request("https://i.imgur.com/3Y5C4XE.mp4").pipe(fs.createWriteStream(dirMaterial + "infoauto.mp4"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `=====『 𝐀𝐃𝐌𝐈𝐍 』=====
◆━━━━━━━━━━━━━◆
𝗛𝗶 𝗯𝗮̣𝗻 𝗻𝗵𝗲́!
Đ𝗮̂𝘆 𝗹𝗮̀ 𝗺𝗲𝗻𝘂 𝗴𝗶𝗮́ 𝗯𝗼𝘁
▭▭▭▭▭▭▭▭▭▭▭▭
[💖] 𝗕𝗼𝘁 𝗡𝗲𝘄𝗕𝗶𝗲: 𝟮𝟱.𝟬𝟬𝟬𝗩𝗡𝗗 / 𝟭 𝘁𝗵𝗮́𝗻𝗴
[✅] 𝗕𝗼𝘁 𝗡𝗼𝗿𝗺𝗮𝗹: 𝟯𝟬.𝟬𝟬𝟬𝗩𝗡𝗗 / 𝟭 𝘁𝗵𝗮́𝗻𝗴 ( Hỗ trợ thêm quyền Admin )
[🐦] 𝗕𝗼𝘁 𝗣𝗿𝗲𝗺𝗶𝘂𝗺: 𝟰𝟱.𝟬𝟬𝟬𝗩𝗡𝗗 / 𝟭 𝘁𝗵𝗮́𝗻𝗴 ( Hỗ trợ thêm quyền Admin )
▭▭▭▭▭▭▭▭▭▭▭▭
[💓] 𝗡𝗲𝘄𝗯𝗶𝗲𝗔𝗱𝗺𝗶𝗻: 𝟮𝟬.𝟬𝟬𝟬𝗩𝗡𝗗 / 𝟯𝟬 𝗻𝗴𝗮̀𝘆 𝗾𝘂𝘆𝗲̂̀𝗻 𝗔𝗱𝗺𝗶𝗻
[🌸] 𝗡𝗼𝗿𝗺𝗮𝗹𝗔𝗱𝗺𝗶𝗻: 𝟱𝟬.𝟬𝟬𝟬𝗩𝗡𝗗 / 𝟯𝟬 𝗻𝗴𝗮̀𝘆 𝗾𝘂𝘆𝗲̂̀𝗻 𝗔𝗱𝗺𝗶𝗻
[🎀] 𝗞𝗶𝗻𝗴 - 𝗖𝗼𝗻𝗳𝗶𝗴𝗔𝗱𝗺𝗶𝗻: 𝟴𝟱.𝟬𝟬𝟬𝗩𝗡𝗗 / 𝟰𝟬 𝗻𝗴𝗮̀𝘆 𝗾𝘂𝘆𝗲̂̀𝗻 𝗔𝗱𝗺𝗶𝗻
▭▭▭▭▭▭▭▭▭▭▭▭
𝗙𝗶𝗹𝗲 𝗯𝗼𝘁 𝗰𝗵𝗼 𝗡𝗲𝘄𝗯𝗶𝗲 𝘁𝗮̣̂𝗽 𝗰𝗵𝗮̣𝘆 𝗯𝗼𝘁: 𝟭𝟯𝟬.𝟬𝟬𝟬𝗩𝗡𝗗 ( 𝗖𝗼́ 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝗰𝗵𝗮̣𝘆 )
𝗙𝗶𝗹𝗲 𝗯𝗼𝘁 𝗰𝗵𝗼 𝗱𝗮̂𝗻 đ𝗮̃ 𝗰𝗼́ 𝗸𝗶𝗲̂́𝗻 𝘁𝗵𝘂̛́𝗰 𝗰𝗵𝗮̣𝘆 𝗯𝗼𝘁: 𝟭𝟴𝟬.𝟬𝟬𝟬𝗩𝗡𝗗
𝗙𝗶𝗹𝗲 𝘅𝗶̣𝗻, 𝗯𝗮𝗼 𝘁𝗲𝘀𝘁 𝗯𝗮𝗼 𝗻𝗴𝗼𝗻: 𝟮𝟳𝟬.𝟬𝟬𝟬𝗩𝗡𝗗
▭▭▭▭▭▭▭▭▭▭▭▭
⎔ 𝐓𝐡𝐨̂𝐧𝐠 𝐓𝐢𝐧 𝐋𝐢𝐞̂𝐧 𝐇𝐞̣̂ 🌪️
⋄ 𝐅𝐁:
https://www.facebook.com/User.daokieuanh.FAQ
⋄ 𝐙𝐋: 0366666812
━━━━━━━━━━━━━━━━━━`,
                attachment: fs.createReadStream(__dirname + `/noprefix/infoauto.mp4`)
            }
    if (event.body.toLowerCase() == "Admin đâu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "infobot"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "menu"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "info"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
          }