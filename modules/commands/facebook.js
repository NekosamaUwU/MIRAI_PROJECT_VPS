const fs = require("fs-extra");
const axios = require("axios");
const request = require("request");
const pathVideo = __dirname + "/cache/videofb.mp4";
const pathMusic = __dirname + "/cache/musicfb.mp3";
const prefix = global.config.PREFIX;
module.exports.config = {
  name: "facebook",
  version: "1.1.12",
  hasPermssion: 0,
  credits: "",
  description: "",
  commandCategory: "Tiện ích",
  usages: "Là lệnh về App Facebook",
  cooldowns: 5,
  dependencies: { "axios": "" }
};
module.exports.onLoad = () => {
  const dirMaterial = __dirname + `/cache/`;
  if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "facebook.jpg")) request("https://imgur.com/AKrWm2g.jpg").pipe(fs.createWriteStream(dirMaterial + "facebook.jpg"));
}
module.exports.run = async function({ event, api, args }) {
  if (!args[0]) {
    return api.sendMessage({
      body: `====[ Facebook ]====\nBạn có thể dùng:\n🖥️ ${prefix}video [Url].\n 🗣️${prefix}music [Url].`,
      attachment: fs.createReadStream(__dirname + '/cache/facebook.jpg'),
    }, event.threadID, event.messageID);
  }
  const res = await axios.get(`https://app-api-tik.2711bao.repl.co?url=${args[1]}`);
  const { url_video: url, title, view, comment } = res.data.video;
  const author = res.data.author.name;
  const { Like, Haha, Sad, Love, Wow, Care, Angry } = res.data.video.reaction;
  const message = `
        Tiêu đề: ${title}
        Like: ${Like} lượt
        Tim: ${Love} lượt
        Haha: ${Haha} lượt
        Wow: ${Wow} lượt
        Thương Thương: ${Care} lượt
        Buồn: ${Sad} lượt
        Phẫn Nộ: ${Angry} lượt
        Comment: ${comment} lượt
        View: ${view} lượt
        Author: ${author}`

  switch (args[0].toLowerCase()) {
    case 'video':
      try {
        if (!url) {
          return api.sendMessage('Vui lòng nhập url video công khai', event.threadID, event.messageID);
        }
        await global.utils.downloadFile(url, pathVideo);

        const callback = () => {
          api.sendMessage({
            body: message,
            attachment: fs.createReadStream(pathVideo),
          }, event.threadID, () => {
            fs.unlinkSync(pathMusic);
          }, event.messageID);
        };

        callback();
      } catch (err) {
        console.log(err);
        api.sendMessage(`Đã xảy ra lỗi`, event.threadID);
        api.sendMessage(err, event.threadID);
      }
      break;

    case 'music':
      try {
        const { data } = await axios.get(url, { method: 'GET', responseType: 'arraybuffer' });
        const callback = () => {
          api.sendMessage({
            body: message,
            attachment: fs.createReadStream(pathMusic),
          }, event.threadID, () => {
            fs.unlinkSync(pathMusic);
          }, event.messageID);
        };

        request(encodeURI(url)).pipe(fs.createWriteStream(pathMusic)).on('close', callback);
      } catch (err) {
        console.log(err);
        api.sendMessage('Đã xảy ra lỗi', event.threadID);
      }
      break;

    default:
      break;
  }
};
