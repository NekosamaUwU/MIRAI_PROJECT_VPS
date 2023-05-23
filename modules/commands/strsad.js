const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "strsad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "huy hoàng và hoàng ",
  description: "Ảnh Gái Xinh",
  commandCategory: "Hình Ảnh",
  usages: "capdoi",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs":"",
    "axios":""
  }, 
  
   };

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
 var link = [
"https://i.imgur.com/4unVQF5.mp4",
"https://i.imgur.com/FAW8NOB.mp4",
"https://i.imgur.com/3wRG1bK.mp4",
"https://i.imgur.com/F5cYKZb.mp4",
"https://i.imgur.com/K1Xnlxr.mp4",
"https://i.imgur.com/CbGE7Kc.mp4",
"https://i.imgur.com/5wSVtLs.mp4",
"https://i.imgur.com/CaPLS6N.mp4",
"https://i.imgur.com/j9EBsyi.mp4",
"https://i.imgur.com/6uCKn5O.mp4",
    ];
   var callback = () => api.sendMessage({body:`𝗦𝘁𝗼𝗿𝘆 𝗦𝗮𝗱\n𝐕𝐢𝐝𝐞𝐨 𝐃𝐜 𝐔𝐩 𝐁𝐨̛̉𝐢 𝐍𝐠𝐨̂ 𝐐𝐮𝐚̂𝐧 \n𝗦𝗼̂́ 𝗩𝗶𝗱𝗲𝗼: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/videok.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/videok.mp4"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/videok.mp4")).on("close",() => callback());
    };