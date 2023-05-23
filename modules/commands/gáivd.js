 /**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "gáivd",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "video gái đẹp",
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
"https://i.imgur.com/4I2PBEH.mp4",
"https://i.imgur.com/VF2ousj.mp4",
"https://i.imgur.com/szyp9HD.mp4",
"https://i.imgur.com/xsGlRts.mp4",
"https://i.imgur.com/fZFEUkI.mp4",
"https://i.imgur.com/oOmyNIT.mp4",
"https://i.imgur.com/0UExgsA.mp4",
"https://i.imgur.com/BoqcvhQ.mp4",
"https://i.imgur.com/hICO8Wm.mp4",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 10) api.sendMessage("Bạn cần 10 đô để xem video😏",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 10})
   var callback = () => api.sendMessage({body:`=DO BẠN MÊ GÁI QUÁ=\n=NÊN BỊ MẤT 10 ĐÔ😏=\n❤━━━━━━━━━━━━━━❤  \n-> Mấy con nhỏ này chảnh lắm không tán được đâu mà xem🙄 \nĐừng xem nữa ${name}, mày không tán được nó đâu mà xem😪 `,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"));
let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })            
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   }
};