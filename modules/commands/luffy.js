 /**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "luffy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "Lệnh ảnh Fully chuyển động",
  commandCategory: "Tạo ảnh",
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
"https://i.imgur.com/JR1EkrA.gif",
"https://i.imgur.com/Ul7ekYD.mp4", 
"https://i.imgur.com/ipfkGCR.gif", 
"https://i.imgur.com/hz6cGGI.gif", 
"https://i.imgur.com/0ki4iYK.gif", 
"https://i.imgur.com/k1BfGR0.gif", 
"https://i.imgur.com/sl3eCIJ.mp4", 
"https://i.imgur.com/mexZICf.gif", 
"https://i.imgur.com/Ujyt56y.gif", 
"https://i.imgur.com/ofObjr6.gif", 
"https://i.imgur.com/6SSqYAJ.gif", 
"https://i.imgur.com/1mOgPWV.jpg", 
"https://i.imgur.com/RMEJLBj.gif", 
"https://i.imgur.com/bZzQKGO.gif", 
"https://i.imgur.com/6GYnqVl.gif",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 10) api.sendMessage("Bạn cần 10 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 10})
   var callback = () => api.sendMessage({body:`===BẠN ĐÃ ĐỦ 10 ĐÔ===\n===NÊN CÓ THỂ XEM===\n━━━━━━━━━━━━━━━━━  \n-> Ảnh chuyển động của Lù ngáo chos giống như thằng ${name}🤣🤣🤣  `,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));
let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })            
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};