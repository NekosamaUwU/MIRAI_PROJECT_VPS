 /**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "buồn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "Video nhạc",
  commandCategory: "Hình ảnh",
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
"https://i.imgur.com/EQ2BJOq.mp4", 
"https://i.imgur.com/HeZklaD.mp4",
"https://i.imgur.com/e8xnkGP.mp4",
"https://i.imgur.com/JVCBCPw.mp4",
"https://i.imgur.com/964TBf2.mp4",
"https://i.imgur.com/Bcs457Y.mp4",
"https://i.imgur.com/Zz4Clog.mp4",
"https://i.imgur.com/5AkEWL7.mp4",
"https://i.imgur.com/qna7u0f.mp4",
"https://i.imgur.com/Go6UiIk.mp4",
"https://i.imgur.com/5WZvVAT.mp4",
"https://i.imgur.com/sgujKjs.mp4",
"https://i.imgur.com/R9K7SHf.mp4",
"https://i.imgur.com/U0d9QLY.mp4",
"https://i.imgur.com/HNf37tk.mp4",
"https://i.imgur.com/5WcyZav.mp4",
"https://i.imgur.com/EVVMxZL.mp4",
"https://i.imgur.com/JGZtJXZ.mp4",
"https://i.imgur.com/DNlv5AY.mp4",
"https://i.imgur.com/5DlYBn7.mp4", 
"https://i.imgur.com/RTL7xbI.mp4",
"https://i.imgur.com/NkOhO7u.mp4",
"https://i.imgur.com/xjoutvc.mp4",
"https://i.imgur.com/f1NnlTo.mp4",
"https://i.imgur.com/2cB5bv3.mp4",
"https://i.imgur.com/YdNjX4C.mp4",
"https://i.imgur.com/Bc7csE2.mp4",
"https://i.imgur.com/1PESGXL.mp4",
"https://i.imgur.com/eDTPlSH.mp4",
"https://i.imgur.com/ATEJcwt.mp4",
"https://i.imgur.com/twqISpH.mp4",
"https://i.imgur.com/0JeRFCP.mp4",
"https://i.imgur.com/0doC2Oo.mp4",
"https://i.imgur.com/0fthfKk.mp4",
"https://i.imgur.com/bVoyntw.mp4",
"https://i.imgur.com/CfKc79R.mp4",
"https://i.imgur.com/iFac93z.mp4",
"https://i.imgur.com/9GePJTH.mp4",
"https://i.imgur.com/4XYhDLw.mp4",
"https://i.imgur.com/BjAUlsx.mp4",
"https://i.imgur.com/upcdaUS.mp4",
"https://i.imgur.com/No7JxtI.mp4",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("Bạn cần 0 đô để xem video",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`「 ❤️Đừng buồn nữa❤️」\n     Về đây bot thương😘 \n━━━━━━━━━━━━━━━━━\n   Chó ${name} buồn cái cc, vui lên không vui tao đạp dính vô tường giờoooo🙂`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"));
let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })            
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   }
};