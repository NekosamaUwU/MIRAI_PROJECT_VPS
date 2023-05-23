module.exports.config = {
    name: "joinNoti",
    eventType: ['log:subscribe'],
    version: "1.0.0",
    credits: "Mirai-Team",//md thêm by tpk
    description: "GROUP UPDATE NOTIFICATION"
};
module.exports.run = async function({ api, event, Users }) {
  const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require('fs-extra')
   var fullYear = global.client.getTime("fullYear");
    var getHours = await global.client.getTime("hours");
      var session = `${getHours < 3 ? "đêm khuya" : getHours < 8 ? "buổi sáng sớm" : getHours < 12 ? "buổi trưa" : getHours < 17 ? "buổi chiều" : getHours < 23 ? "buổi tối" : "đêm khuya"}`
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "𝑺𝑬𝑵𝑷𝑨𝑰 𝑩𝑶𝑻𓃲" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`► 𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̀𝗡𝗛 𝗖𝗢̂𝗡𝗚 ◄\n━━━━━━━━━━━━━━━━━━\n→ [🐧] 𝗛𝗶 𝗠𝗼̣𝗶 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗠𝗶̀𝗻𝗵 𝗟𝗮̀ 𝗕𝗼𝘁 𝗖𝘂̉𝗮 𝑻𝒓𝒂̂̀𝒏 𝑻𝒉𝒂𝒏𝒉 𝑻𝒖́ \n→ [🎀] 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗞𝗵𝗼̂𝗻𝗴 𝗦𝗽𝗮𝗺 , 𝗖𝗵𝘂̛̉𝗶 𝗕𝗼𝘁\n→ [🎊] 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 /𝗵𝗲𝗹𝗽 , /𝗺𝗲𝗻𝘂 Đ𝗲̂̉ 𝗫𝗲𝗺 𝗖𝗵𝗶 𝗧𝗶𝗲̂́𝘁 𝗟𝗲̣̂𝗻𝗵 𝗖𝗼́ 𝗧𝗿𝗼𝗻𝗴 𝗕𝗼𝘁\n→ [🌸] 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 !𝗱𝘂𝘆𝗲𝘁𝗯𝗼𝘅 Đ𝗲̂̉ Đ𝘂̛𝗼̛̣𝗰 𝗔𝗱𝗺𝗶𝗻 𝗗𝘂𝘆𝗲̣̂𝘁\n→ [💓] 𝗖𝗵𝘂́𝗰 𝗖𝗮́𝗰 𝗕𝗮̣𝗻 𝗦𝗮̀𝗶 𝗕𝗼𝘁 𝗩𝘂𝗶 𝗩𝗲̉\n━━━━━━━━━━━━━━━━━━\n→ [🌐] 𝗡𝗲̂́𝘂 𝗠𝘂𝗼̂́𝗻 𝗠𝘂̛𝗼̛̣𝗻 𝗕𝗼𝘁 𝗖𝗵𝗼 𝗖𝗮́𝗰 𝗕𝗼𝘅 𝗞𝗵𝗮́𝗰 𝗧𝗵𝗶̀ 𝗟𝗶𝗲̂𝗻 𝗛𝗲̣̂ 𝗖𝗵𝗼 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁: m.me/100000287637041\n━━━━━━━━━━━━━━━━━━\n→ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝘇𝗶𝗻'𝘀 𝗯𝗼𝘁 💓`, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/hello.gif")} ,threadID));
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "joinGif");
      const pathGif = join(path, `hi.jpg`);
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
      var abx = [];
      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      const axios = require('axios')
     // console.log(event.logMessageData.addedParticipants)
      var id = [];
      for(o = 0; o < event.logMessageData.addedParticipants.length; o++){
        let path = __dirname + `/cache/${o}.jpg`;
        id.push(event.logMessageData.addedParticipants[o].userFbId)
        var baseUrl = `https://s-2.hanakuhshsjsjshejsna.repl.co/canvas/joinnoti?id=${event.logMessageData.addedParticipants[o].userFbId}&name=${event.logMessageData.addedParticipants[o].fullName}&boxname=${threadName}&memberst=${participantIDs.length - o}`
        var resDL = (await axios.get( encodeURI(baseUrl),
             {responseType: "arraybuffer"}
          )).data
        fs.writeFileSync(path, Buffer.from(resDL, 'utf-8'));
        abx.push(fs.createReadStream(__dirname + `/cache/${o}.jpg`))
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = "======『 𝗪𝗘𝗖𝗢𝗠𝗘 』======\n━━━━━━━━━━━━━━━━━━\n[👤] → 𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼「{name}」𝘁𝗼̛́𝗶 𝘃𝗼̛́𝗶 𝗻𝗵𝗼́𝗺 {threadName}\n[🔰] → 𝗟𝗶𝗻𝗸 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/profile.php?id={iduser}\n[🍄] → 𝗕𝗮̣𝗻 𝗹𝗮̀ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗵𝘂̛́ {soThanhVien} 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺\n[🧸] → 𝗕𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝗲̂𝗺 𝗯𝗼̛̉𝗶: {author}\n[🌐] → 𝗟𝗶𝗻𝗸 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/profile.php?id={uidAuthor}\n━━━━━━━━━━━━━━━━━━\n[⏰] → 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: {time}" : msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
       var nameAuthor = typeof getData.name == "undefined" ? "link join" : getData.name
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'Bạn' : 'BẠn')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{author}/g, nameAuthor)
        .replace(/\{threadName}/g, threadName)
         .replace(/\{buoi}/g, session)
         .replace(/\{uidAuthor}/g, event.author)
        .replace(/\{time}/g, time);

      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinGif"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: abx, mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: abx, mentions }
      }
      else formPush = { body: msg, mentions }
for (let ii = 0; ii < parseInt(id.length); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
      return api.sendMessage(formPush, threadID);
    } catch (e) { return console.log(e) };
  }
                           }