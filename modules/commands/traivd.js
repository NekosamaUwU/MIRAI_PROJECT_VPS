 /**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "traivd",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "video trai đẹp",
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
"https://i.imgur.com/ySKep4Z.mp4",
"https://i.imgur.com/HTYSXs9.mp4",
"https://i.imgur.com/2nJFowa.mp4",
"https://i.imgur.com/PzZB42s.mp4",
"https://i.imgur.com/7ysTdVa.mp4",
"https://i.imgur.com/TIPdNmd.mp4",
"https://i.imgur.com/OeMMap5.mp4",
"https://i.imgur.com/lIESieu.mp4",
"https://i.imgur.com/f3b0AbF.mp4",
"https://i.imgur.com/qoe9T5S.mp4",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 10) api.sendMessage("Bạn cần 10 đô để xem video😏",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 10})
   var callback = () => api.sendMessage({body:`=DO BẠN MÊ TRAI QUÁ=\n=NÊN BỊ MẤT 10 ĐÔ😏=\n❤━━━━━━━━━━━━━━❤  \n-> Ở đời mê trai là chết rồi, bới mê trai lại đi mấy má🙂 \nNhất là con nhỏ ${name}😪 `,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"));
let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })            
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   }
};