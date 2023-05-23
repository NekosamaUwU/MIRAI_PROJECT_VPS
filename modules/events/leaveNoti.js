module.exports.config = {
	name: "leaveNoti",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "",
	description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
const checkttPath = __dirname + '/../commands/checktuongtac/'

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
	const path = join(__dirname, "cache", "leaveGif", "randomgif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
   var fullYear = global.client.getTime("fullYear");
  	var getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "đ𝐞̂𝐦 𝐤𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐛𝐮𝐨̂̉𝐢 𝐬𝐚́𝐧𝐠 𝐬𝐨̛́𝐦" : getHours < 12 ? "𝐛𝐮𝐨̂̉𝐢 𝐭𝐫𝐮̛𝐚" : getHours < 17 ? "𝐛𝐮𝐨̂̉𝐢 𝐜𝐡𝐢𝐞̂̀𝐮" : getHours < 23 ? "𝐛𝐮𝐨̂̉𝐢 𝐭𝐨̂́𝐢" : "đ𝐞̂𝐦 𝐤𝐡𝐮𝐲𝐚"}`
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝟐'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝟑'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝟒'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝟓'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝟔'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝟕'
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const uid = (event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝐋𝐚̀ 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧 𝐎𝐮𝐭\n━━━━━━━━━━━━\n𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝗰𝗼̂́ 𝗴𝗮̆́𝗻𝗴 𝗴𝗶𝗮̉𝗶 𝗻𝗴𝗵𝗶𝗲̣̂𝗽.\n𝗦𝗮𝘆 𝗴𝗼𝗼𝗱𝗯𝘆𝗲 𝘃𝗮̀ 𝗸𝗵𝗼̂𝗻𝗴 𝗵𝗲̣𝗻 𝗻𝗴𝗮̀𝘆 𝗴𝗮̣̆𝗽 𝗹𝗮̣𝗶 🍑  ━━━━━━━━━━━━\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/profile.php?id={uid}\n━━━━━━━━━━━━━━━━━━\n→ [⏰] 𝘃𝗮̀𝗼 {buoi} {thu} {gio}\n[👋🏻]𝘅𝗶𝗻 𝗰𝗵𝗮̀𝗼 𝘃𝗮̀ 𝗠𝗼𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝗴𝗮̣̆𝗽 𝗹𝗮̣𝗶 𝗯𝗮̣𝗻...\n[🌹]𝗧𝗵𝗮̉ 𝘁𝗶𝗺 𝗰𝗵𝗼 𝗯𝗮̣𝗻 𝗻𝗲 𝗺𝗼𝗮𝘇𝘇 💓" : "𝘃𝗶̀ 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗻𝗲̂𝗻 đ𝗮̃ 𝗯𝗶̣ {author} 𝗸𝗶𝗰𝗸 𝗸𝗵𝗼̉𝗶 𝗻𝗵𝗼́𝗺\n━━━━━━━━━━━━━━━━━\n[⏰] 𝘃𝗮̀𝗼 {buoi} {thu} {gio}\n[🌐]𝗙𝗯 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗸𝗶𝗰𝗸:  \nhttps://www.facebook.com/profile.php?id={uidAuthor}\n[👇]𝗟𝗶𝗻𝗸 𝗙𝗯 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗕𝗶̣ 𝗞𝗶𝗰𝗸:\nhttps://www.facebook.com/profile.php?id={uid}\n━━━━━━━━━━━━━━━"; 
	const path = join(__dirname, "cache", "leaveGif", "randomgif");
	const gifPath = join(path, `${threadID}.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "{name} {type}" : msg = data.customLeave;
   var nameAuthor = await Users.getNameUser(event.author)
	msg = msg.replace(/\{name}/g, name) .replace(/\{type}/g, type).replace(/\{buoi}/g, session).replace(/\{thu}/g, thu).replace(/\{gio}/g, gio).replace(/\{author}/g, nameAuthor).replace(/\{uidAuthor}/g, event.author).replace(/\{uid}/g, uid);

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else if (randomPath.lenth != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
    }