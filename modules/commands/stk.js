module.exports.config = {
  name: "stk",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "Donate cho admin",
  commandCategory: "Admin",
  usages: "stk",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/CygJIqC.gif",
"https://i.imgur.com/l6wrLGT.gif",
"https://i.imgur.com/x5B3NPs.gif",
"https://i.imgur.com/CKRxNP0.gif",
  ];
	  var callback = () => api.sendMessage({body:`=== 🌸 [ 𝐃𝐎𝐍𝐀𝐓𝐄 ] 🌸 ===\n
💕💕 𝗦𝗧𝗞 𝗠𝗕𝗕𝗔𝗡𝗞 💕💕\n𝗦𝗧𝗞: 𝟬𝟯𝟯𝟮𝟱𝟭𝟬𝟭𝟳𝟓\n𝗗𝗮𝗼 𝗞𝗶𝗲𝘂 𝗔𝗻𝗵\n\n💓 𝗦𝗧𝗞 𝗩𝗜𝗘𝗧𝗖𝗢𝗠𝗕𝗔𝗡𝗞 💓\n𝗦𝗧𝗞: 𝟯𝟱𝟮𝟮𝟳𝟱𝟴𝟳𝟭\n𝗗𝗮𝗼 𝗞𝗶𝗲𝘂 𝗔𝗻𝗵\n\n𝐓𝐨̛́ 𝐜𝐡𝐨 𝐭𝐡𝐮𝐞̂ 𝐛𝐨𝐭 𝐭𝐢𝐞̂̀𝐧 𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̉ 𝐚̆𝐧, 𝐛𝐚̣𝐧 𝐧𝐚̀𝐨 𝐜𝐨́ 𝐥𝐨̀𝐧𝐠 𝐭𝐡𝐮̛𝐨̛𝐧𝐠 𝐛𝐚𝐧𝐤 𝐭𝐚̣̆𝐧𝐠 𝐭𝐨̛́ 𝐢́𝐭 𝐜𝐮̃𝐧𝐠 đ𝐮̛𝐨̛̣𝐜, 𝐭𝐨̛́ 𝐧𝐡𝐚̣̂𝐧 𝐡𝐞̂́𝐭. 𝐂𝐚̉𝐦 𝐨̛𝐧 𝐜𝐚́𝐜 𝐛𝐚̣𝐧 ^^`,attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
   };