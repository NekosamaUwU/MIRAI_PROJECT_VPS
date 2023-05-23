 /**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "chill",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "video Nhạc",
  commandCategory: "Nhạc",
  usages: "girlnude",
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
"https://i.imgur.com/TRl17f7.mp4",
"https://i.imgur.com/yp9z5QN.mp4",
"https://i.imgur.com/qeIxxvn.mp4",
"https://i.imgur.com/LhINDGL.mp4",
"https://i.imgur.com/ygEYdzr.mp4",
"https://i.imgur.com/9thHnST.mp4",
"https://i.imgur.com/AMi9NiT.mp4",
"https://i.imgur.com/l8UisUZ.mp4",
"https://i.imgur.com/BZXJerW.mp4",
"https://i.imgur.com/xJpuVLs.mp4",
"https://i.imgur.com/MOQDCjg.mp4",
"https://i.imgur.com/kz7S5JO.mp4",
"https://i.imgur.com/K4pnAw0.mp4",
"https://i.imgur.com/WrPhJrH.mp4",
"https://i.imgur.com/fsol3MG.mp4",
"https://i.imgur.com/XT0d0a2.mp4",
"https://i.imgur.com/voxsCFv.mp4",
"https://i.imgur.com/QzyFnVK.mp4",
"https://i.imgur.com/BlI7Jbh.mp4",
"https://i.imgur.com/mK44Aod.mp4",
"https://i.imgur.com/UM95eCs.mp4",
"https://i.imgur.com/jDOLZYQ.mp4",
"https://i.imgur.com/xDfgeeD.mp4",
"https://i.imgur.com/iTUuWjl.mp4",
"https://i.imgur.com/WpnFSm5.mp4",
"https://i.imgur.com/nTw4lOF.mp4",
"https://i.imgur.com/5lrWddV.mp4",
"https://i.imgur.com/QRd4BCs.mp4",
"https://i.imgur.com/26ckWFR.mp4",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Bạn cần 100000 đô để xem video:V",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:`==Những bản nhạc chill==\n==Nhạc chill thư giãn😚==\n━━━━━━━━━━━━━━━━\n「 Nghe nhạc đi ${name} 」\n\n Chúc ${name} nghe nhạc vui vẻ, chúc fen 1 ngày hạnh phúccc😘 `,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"));
let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })            
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   }
};