//**đừng thay credit của sơn nhá =(())
module.exports.config = {
  name: "vdanime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sơnkb",
  description: "Ảnh video anime",
  commandCategory: "game",
  usages: "anime",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var thơ = (await axios.get("https://API-VD.miraiprofile2005.repl.co/tn/tantrai")).data.data;
axios.get('https://nguyentantairandom.tan-taitai10.repl.co/getlink1').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `=======𝐕𝐃𝐀𝐍𝐈𝐌𝐄=======\nSố video hiện có: ${res.data.count}\n\nLink: ${res.data.data}\n\n𝐓𝐇Í𝐍𝐇 ${thơ}`,
            attachment: fs.createReadStream(__dirname + `/cache/dạ.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dạ.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/dạ.${ext}`)).on("close", callback);
      })
}