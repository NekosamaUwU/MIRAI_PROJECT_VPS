module.exports.config = {
	name: "ad",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Sawen DEV",
	description: "Thông tin chủ bot",
	commandCategory: "Tiện ích",
	usages: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const icon = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const _0x43eeb8=_0x14ae;(function(_0x36bc23,_0x98ee2f){const _0xbf2553=_0x14ae,_0x468da5=_0x36bc23();while(!![]){try{const _0x5079d8=-parseInt(_0xbf2553(0x93))/0x1*(-parseInt(_0xbf2553(0x9e))/0x2)+parseInt(_0xbf2553(0x9b))/0x3*(parseInt(_0xbf2553(0xa1))/0x4)+parseInt(_0xbf2553(0x90))/0x5*(parseInt(_0xbf2553(0xa4))/0x6)+parseInt(_0xbf2553(0x91))/0x7*(-parseInt(_0xbf2553(0x92))/0x8)+parseInt(_0xbf2553(0x9a))/0x9+-parseInt(_0xbf2553(0xa3))/0xa+parseInt(_0xbf2553(0x9d))/0xb*(parseInt(_0xbf2553(0x99))/0xc);if(_0x5079d8===_0x98ee2f)break;else _0x468da5['push'](_0x468da5['shift']());}catch(_0x396e9d){_0x468da5['push'](_0x468da5['shift']());}}}(_0x362c,0xddb75));function _0x14ae(_0x1a1353,_0x443db2){const _0x362c8c=_0x362c();return _0x14ae=function(_0x14ae3d,_0x1736fa){_0x14ae3d=_0x14ae3d-0x90;let _0x3778f9=_0x362c8c[_0x14ae3d];return _0x3778f9;},_0x14ae(_0x1a1353,_0x443db2);}function _0x8eb9(_0xb66a78,_0x29e2c4){const _0x184a31=_0x409e();return _0x8eb9=function(_0x4cce7e,_0x43c146){_0x4cce7e=_0x4cce7e-0x1d9;let _0x537eab=_0x184a31[_0x4cce7e];return _0x537eab;},_0x8eb9(_0xb66a78,_0x29e2c4);}const _0x50c1a2=_0x8eb9;function _0x409e(){const _0x44657d=_0x14ae,_0x224e0b=['3174920fmrPRu',_0x44657d(0xa0),_0x44657d(0xa5),'417224CEdZQM','4773804KHMFgM',_0x44657d(0x9f),_0x44657d(0x96),'https://TPKTAO.last-namename.repl.co/cadao',_0x44657d(0x95),_0x44657d(0x97)];return _0x409e=function(){return _0x224e0b;},_0x409e();}(function(_0x59939f,_0x5900a3){const _0x3fcc81=_0x14ae,_0x45df09=_0x8eb9,_0x3b462c=_0x59939f();while(!![]){try{const _0x4bb81b=-parseInt(_0x45df09(0x1db))/0x1+parseInt(_0x45df09(0x1da))/0x2+-parseInt(_0x45df09(0x1e0))/0x3*(parseInt(_0x45df09(0x1dd))/0x4)+parseInt(_0x45df09(0x1e2))/0x5+-parseInt(_0x45df09(0x1de))/0x6+parseInt(_0x45df09(0x1df))/0x7+parseInt(_0x45df09(0x1dc))/0x8;if(_0x4bb81b===_0x5900a3)break;else _0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}catch(_0x76aeb3){_0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}}}(_0x409e,0xc9569));function _0x362c(){const _0x26d429=['24mrIzdD','get','url','5988WISHbU','7020828SteAtj','4669332NJHTIu','data','3872vcyusJ','18Sikdob','7017283VcXxhC','540482UqFHIb','4LbyLwa','shift','15900870cBCcPo','258sWvlEe','1584120xDgqqT','108870rcoJkx','7HtMjaH','8674856YpXsOW','14903JQuzev','push','1036505JrCLuP'];_0x362c=function(){return _0x26d429;};return _0x362c();}const res=await axios[_0x50c1a2(0x1d9)](_0x50c1a2(0x1e1));var tho=res[_0x43eeb8(0x9c)][_0x43eeb8(0x98)];
					api.sendMessage({
                                                body: `𝐓𝐢𝐦𝐞: ${timeNow}\n𝐓𝐚́𝐨: 𝐇𝐨̂𝐦 𝐧𝐚𝐲 𝐥𝐚̀ ${thu} 💓 \n◆━━━━━━◆『 ${icon} 』◆━━━━━━◆ \n${tho}\n\n😻 𝐓𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 "👍" 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐜𝐮̉𝐚 𝐛𝐨𝐭 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐜𝐡𝐮̉ 𝑺𝑬𝑵𝑷𝑨𝑰 𝑩𝑶𝑻 `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/gainhat')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `=== [ 𝗠𝗘𝗡𝗨 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 ] ===\n━━━━━━━━━━━━━━━━━━\n𝟭. 𝗫𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗻𝗵𝗮̀ 𝘀𝗮́𝗻𝗴 𝗹𝗮̣̂𝗽 𝑺𝑬𝑵𝑷𝑨𝑰 𝑩𝑶𝑻 🧸\n𝟮. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝑺𝑬𝑵𝑷𝑨𝑰 𝑩𝑶𝑻 ☎️\n𝟯. 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘄𝗲𝗯 𝗮𝗽𝗶 𝗰𝘂̉𝗮 𝑺𝑬𝑵𝑷𝑨𝑰 𝑩𝑶𝑻 🖨️\n𝟰. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗽𝗿𝗼𝗷𝗲𝗰𝘁 𝗰𝘂̉𝗮 𝑺𝑬𝑵𝑷𝑨𝑰 𝑩𝑶𝑻 💻\n\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/congchua')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`vui lòng chờ 1 xíu`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `         🌸 𝐀𝐃𝐌𝐈𝐍 𝐁𝐎𝐓 🌸\n
👀 𝐓𝐞̂𝐧: 𝑻𝒓𝒂̂̀𝒏 𝑻𝒉𝒂𝒏𝒉 𝑻𝒖́
❎ 𝐓𝐮𝐨̂̉𝐢: 𝟑 𝑻𝒖𝒐̂̉𝒊
👤 𝐆𝐢𝐨̛́𝐢 𝐓𝐢́𝐧𝐡: 𝗡𝗮𝗺
💫 𝐂𝐡𝐢𝐞̂̀𝐮 𝐜𝐚𝐨 𝐜𝐚̂𝐧 𝐧𝐚̣̆𝐧𝐠: 𝟏𝒎𝟕𝟗 𝒙 𝟔𝟑𝑲𝑮
💘 𝐌𝐨̂́𝐢 𝐪𝐮𝐚𝐧 𝐡𝐞̣̂: 𝐅.𝐀 =)))
🌎 𝐐𝐮𝐞̂ 𝐪𝐮𝐚́𝐧: 𝑻𝒉𝒂̀𝒏𝒉 𝑷𝒉𝒐̂́ 𝑯𝒐̂̀ 𝑪𝒉𝒊́ 𝑴𝒊𝒏𝒉
👫 𝐆𝐮: 𝑲𝒉𝒐̂𝒏𝒈 𝒒𝒖𝒂𝒏 𝒕𝒓𝒐̣𝒏𝒈 
🌸 𝐓𝐢́𝐧𝐡 𝐜𝐚́𝐜𝐡: 𝑻𝒉𝒊́𝒄𝒉 Đ𝒐̣𝒄 𝑻𝒓𝒖𝒚𝒆̣̂𝒏 𝑻𝒓𝒂𝒏𝒉, 𝑨𝒏𝒊𝒎𝒆.........
🌀 𝐒𝐨̛̉ 𝐭𝐡𝐢́𝐜𝐡: 𝗖𝗵𝗼̛𝗶 𝗴𝗮𝗺𝗲, 𝗯𝗹𝗮𝗯𝗹𝗮, 𝗮̆𝗻, 𝗻𝗴𝘂̉
💻𝐂𝐨𝐧𝐭𝐚𝐜𝐭💻
☎ 𝗦𝗗𝗧 & 𝗭𝗮𝗹𝗼: 𝟎94.2606.875
🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤:  https://www.facebook.com/ThanhTu.DeveloperFB
----------------------- 
- Cảm ơn các bạn đã tin tưởng sử dụng bot của Trần Thanh Tú
- Trong quá trình sử dụng nếu bot gặp lỗi xin liên hệ đến thông tin liên lạc ở trên 
- Đừng report bot, hãy tôn trọng tôi ! 
- Mọi hành vi chửi bot, spam bot. Tuỳ theo mức nặng sẽ có phương thức xử phạt khác nhau 
- Thuê bot, thuê admin, mua file hãy liên hệ mình nhé ^^
- Bản quyền file, bản quyền module thuộc về Trần Thanh Tú ( Sera Senpai )
- Nghiêm cấm hành vi sao chép bản quyền, leak module + file, thay đổi kết cấu source code
----------------------- 
𝗕𝗼𝘁 đ𝘂̛𝗼̛̣𝗰 𝗸𝗵𝗼̛̉𝗶 𝗰𝗵𝗮̣𝘆 𝗯𝗼̛̉𝗶 𝑻𝒓𝒂̂̀𝒏 𝑻𝒉𝒂𝒏𝒉 𝑻𝒖́ `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/congchua')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `💓 == [ 𝑺𝑬𝑵𝑷𝑨𝑰 𝑩𝑶𝑻 ] == 💓
----------------------------------------------

---------------------------------------------
MKSC Studio & Entertainment - Chiến thắng, Thành công !!! `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://vnhhoang206-16.vnhoang06.repl.co/api/gif/gifchill')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `🖥 𝗔𝗽𝗶 𝗰𝘂̉𝗮 𝗦𝗮𝘄𝗲𝗻 𝗣𝗿𝗼𝗷𝗲𝗰𝘁 📣\nWeb 1: api.sawenproject.me\nWeb 2: sawenhitomi.dev/api\nWeb 3: api.daokieuanh.me\nWeb 4: daokieuanh.dev/docs `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://vnhhoang206-16.vnhoang06.repl.co/api/gif/gifchill')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "4": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const PREFIX = config.PREFIX
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `⚜ 𝗧𝗮̂́𝘁 𝗰𝗮̉ 𝗣𝗿𝗼𝗷𝗲𝗰𝘁 𝗱𝗼 𝗦𝗮𝘄𝗲𝗻 𝗛𝗶𝘁𝗼𝗺𝗶 𝗾𝘂𝗮̉𝗻 𝗹𝘆́ ⚜
-------------------------------------------
Project 1: Source Bot Discord - Sawen Discord 
Project 2: Bot Telegram - Auto Bot
Project 3: Sawen Project v3 - Version 1.4.12
Project 4: Web Profile - Giới thiệu bản thân
Project 5: 4 web api do Sawen Hitomi lập trình
❤ === [ 𝐁𝐨𝐭 𝐒𝐚𝐰𝐞𝐧 𝐇𝐢𝐭𝐨𝐦𝐢 ✨ ] === ❤ `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/robot')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 4 || choose < 1) return api.sendMessage("→ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
}
}