module.exports.config = {
	name: "autohupmocky",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Tpk",
	description: "Lay link pastebin ve cho admin",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "hpstb.jpeg")) request("https://i.imgur.com/u598VFl.jpg").pipe(fs.createWriteStream(dirMaterial + "hpstb.jpeg"));
  }
module.exports.handleEvent = async function({ api , event , Users }) {
    const { body , senderID , threadID } = event;
  const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require("fs");
    try {
        if (body === undefined || !body.includes('run.') || senderID == api.getCurrentUserID() || senderID == '') return;
        const userName = await Users.getNameUser(senderID);
        const { threadName } = await api.getThreadInfo(threadID);
        api.sendMessage(`📥=== [ 𝗣𝗛𝗔́𝗧 𝗛𝗜𝗘̣̂𝗡 𝙍𝙐𝙉 ] ===📥
━━━━━━━━━━━━━━━━━━
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${tpkk}
👥 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${userName}
🌍 𝗡𝗵𝗼́𝗺: ${threadName}
🌸 𝗩𝘂̛̀𝗮 𝗴𝘂̛̉𝗶 𝗺𝗼̣̂𝘁 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝗼́ 𝗰𝗵𝘂̛́𝗮 𝗹𝗶𝗻𝗸 𝙧𝙪𝙣
💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝗵𝘂̛́𝗮 𝗹𝗶𝗻𝗸: ${body}`, '100000287637041');
api.sendMessage({body: `📥=== [ 𝗣𝗛𝗔́𝗧 𝗛𝗜𝗘̣̂𝗡 𝙍𝙐𝙉 ] ===📥
━━━━━━━━━━━━━━━━━━
=== [ 𝐁𝐨𝐭•𝑻𝒓𝒂̂̀𝒏 𝑻𝒉𝒂𝒏𝒉 𝑻𝒖́ ] ===
━━━━━━━━━━━━━━━━━━
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${tpkk}
⚙️ 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝗻𝗵𝗼́𝗺 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗴𝘂̛̉𝗶 𝗹𝗶𝗻𝗸 𝙧𝙪𝙣
💓 𝗧𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗴𝘂̛̉𝗶 𝘃𝗲̂̀ 𝗰𝗵𝗼 𝗮𝗱𝗺𝗶𝗻 𝗵𝘂́𝗽
━━━━━━━━━━━━━━━━━━
❤ 𝗧𝗵𝗮̆̀𝗻𝗴 𝗼́𝗰 𝗰𝗵𝗼́ 𝗹𝗼̣̂ 𝙧𝙪𝙣 𝗸𝗶̀𝗮 𝗹𝗲̂𝘂 𝗹𝗲̂𝘂 =)))
😆 𝗕𝗶̣ 𝗹𝗲𝗮𝗸 𝙢𝙙𝙡 đ𝘂̛̀𝗻𝗴 𝗸𝗵𝗼́𝗰 𝗻𝗵𝗮 𝗵𝗶𝗵𝗶 :33`, attachment: fs.createReadStream(__dirname + `/noprefix/hpstb.jpeg`)}, event.threadID, event.messageID);
    } catch (e) {
        api.sendMessage(`${e}`, '100000287637041');
    }
};
module.exports.languages = {
    "vi": { "on": "[ TAGADMIN ]  → Bật", "off": "[ TAGADMIN ] → Tắt", "successText": "thành công chế độ tag admin", },
    "en": { "on": "on", "off": "off", "successText": "success!", }
}
module.exports.run = async function ({ api, event, Threads, getText }) {
    const { threadID, messageID } = event;
    let data = (await Threads.getData(threadID)).data;
    if (typeof data["a9"] == "undefined" || data["a9"] == false) data["a9"] = true;
    else data["a9"] = false;
    await Threads.setData(threadID, { data });
    global.data.threadData.set(threadID, data);
    return api.sendMessage(`${(data["a9"] == true) ? getText("on") : getText("off")} ${getText("successText")}`, threadID, messageID);
};