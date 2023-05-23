module.exports.config = {
	name: "uidv2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy ID người dùng.",
	commandCategory: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async function({ api, event, args, Users }) {
const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
    if(event.type == "message_reply") { 
	uid = event.messageReply.senderID
	var callback = () =>   api.sendMessage({body:`=== [ 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 ] ===\n━━━━━━━━━━━━━━━━━━\n𝐈𝐝 𝐅𝐛 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 Đ𝐚̂𝐲: ${uid}\n𝐋𝐢𝐧𝐤 𝐅𝐛: m.me/${uid}\n𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐨̣̂𝐭 𝐧𝐠𝐚̀𝐲 𝐦𝐨̛́𝐢 𝐭𝐨̂́𝐭 𝐥𝐚̀𝐧𝐡 💌`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    if (!args[0]) {
        var callback = () =>  api.sendMessage({body:`=== [ 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 ] ===\n━━━━━━━━━━━━━━━━━━\n[☕️] 𝐈𝐝 𝐅𝐛 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 Đ𝐚̂𝐲: ${event.senderID}\n[🍎] 𝐋𝐢𝐧𝐤 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐜𝐮̉𝐚 𝐦𝐢̀𝐧𝐡 đ𝐚̂𝐲: www.facebook.com/profile.php?id=${event.senderID}\n[🕊] 𝐀𝐢 𝐦𝐮𝐨̂́𝐧 𝐢𝐧𝐛𝐨𝐱 𝐜𝐡𝐨 𝐦𝐢̀𝐧𝐡 𝐭𝐡𝐢̀ 𝐮̛́𝐧𝐠 𝐯𝐚̀𝐨 đ𝐚̂𝐲 𝐧𝐡𝐚́: m.me/${event.senderID}\n[💌] 𝐂𝐡𝐮́𝐜 𝐛𝐚̣𝐧 𝐦𝐨̣̂𝐭 𝐧𝐠𝐚̀𝐲 𝐦𝐨̛́𝐢 𝐭𝐨̂́𝐭 𝐥𝐚̀𝐧𝐡\n\n━━━━━━━━━━━━━━━━━━`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${event.senderID}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
    }
    else {
	if (args[0].indexOf(".com/")!==-1) {
    const res_ID = await api.getUID(args[0]);
    var data = await api.getUserInfoV2(res_ID);
    var name = data.first_name
    var link = data.link
    var callback = () => api.sendMessage({body:`=== [ 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 ] ===\n━━━━━━━━━━━━━━━━━━\n𝐍𝐚𝐦𝐞: ${name}\n𝐈𝐝 𝐅𝐛: ${res_ID}\n𝐋𝐢𝐧𝐤 𝐌𝐞𝐬𝐬: m.me/${res_ID}\n𝐋𝐢𝐧𝐤 𝐅𝐛: ${link}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${res_ID}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); }
	else {
		if (args.join().indexOf('@') !== -1) var uid = Object.keys(event.mentions) 
      var callback = () => 
api.sendMessage({body:`=== [ 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 ] ===\n━━━━━━━━━━━━━━━━━━\n𝐈𝐝 𝐅𝐛 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 Đ𝐚̂𝐲: ${uid}\n𝐋𝐢𝐧𝐤 𝐌𝐞𝐬𝐬: m.me/${uid}\n𝐋𝐢𝐧𝐤 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 đ𝐚̂𝐲: www.facebook.com/profile.php?id=${uid}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback()); 
               
	}
}
}
