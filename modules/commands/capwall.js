 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "capwall",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
}
module.exports.handleEvent = async ({ api, event, Threads, args, Users }) => {
  try{
  if(event.body.toLowerCase() == "cap"){
    const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`💓 === [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗖𝗔𝗣𝗪𝗔𝗟𝗟 𝑺𝑬𝑵𝑷𝑨𝑰 𝑩𝑶𝑻 ] === 💓\n------------------------------------\n→ Đ𝗼̛̣𝗶 𝗰𝗵𝘂́𝘁 đ𝗲̂̉ 𝘀𝗲𝗿𝘃𝗲𝗿 𝘀𝘂̛̉ 𝗹𝘆́ 𝗻𝗵𝗲́ ${name}\n→ 𝗡𝗲̂́𝘂 𝘅𝗮̉𝘆 𝗿𝗮 𝗹𝗼̂̃𝗶 𝗵𝗮̃𝘆 𝗯𝗮́𝗼 𝘃𝗲̂̀ 𝗮𝗱𝗺𝗶𝗻`, event.threadID, event.messageID);
    if (event.type == "message_reply") {
      var uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `sb=5NWxY3CmsY7cQ3BwVvcbHAHm;datr=TX-9Y-tXh-bkyEtNFVkIkn0v;vpd=v1%3B800x424x1.7000000476837158;locale=vi_VN;fr=0xmxbEoEoTNsnw31t.AWUaz1CCKaYZuxCJBspUeHrLpdw.BjuwP7.0F.AAA.0.0.Bj8faa.AWX0oasMEMQ;c_user=100078243196302;xs=19%3Aup3n4o4i1D7Wvg%3A2%3A1676801690%3A-1%3A6299;m_page_voice=100078243196302;m_pixel_ratio=1.2062500715255737;wd=598x1197;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=5NWxY3CmsY7cQ3BwVvcbHAHm;datr=TX-9Y-tXh-bkyEtNFVkIkn0v;vpd=v1%3B800x424x1.7000000476837158;locale=vi_VN;fr=0xmxbEoEoTNsnw31t.AWUaz1CCKaYZuxCJBspUeHrLpdw.BjuwP7.0F.AAA.0.0.Bj8faa.AWX0oasMEMQ;c_user=100078243196302;xs=19%3Aup3n4o4i1D7Wvg%3A2%3A1676801690%3A-1%3A6299;m_page_voice=100078243196302;m_pixel_ratio=1.2062500715255737;wd=598x1197;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=af9dee&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `💓 === [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗖𝗔𝗣𝗪𝗔𝗟𝗟 𝑺𝑬𝑵𝑷𝑨𝑰 𝑩𝑶𝑻 ] === 💓\n-----------------------------\n𝗫𝘂̛̉ 𝗹𝘆́ 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name}\n𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 !𝗰𝗮𝗽 <𝘁𝗮𝗴 𝘁𝗲̂𝗻> đ𝗲̂̉ 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗻𝗴𝘂̛𝗼̛̀𝗶 đ𝗼́\n𝗛𝗼𝗮̣̆𝗰 !𝗰𝗮𝗽 <𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻> đ𝗲̂̉ 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }
} catch(e){
    console.log(e)
}}
module.exports.run = async function ({ api,Users,event, args }) {
  const name = await Users.getNameUser(event.senderID)
    api.sendMessage(`💓 === [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗖𝗔𝗣𝗪𝗔𝗟𝗟 𝑺𝑬𝑵𝑷𝑨𝑰 𝑩𝑶𝑻 ] === 💓\n------------------------------------\n→ Đ𝗼̛̣𝗶 𝗰𝗵𝘂́𝘁 đ𝗲̂̉ 𝘀𝗲𝗿𝘃𝗲𝗿 𝘀𝘂̛̉ 𝗹𝘆́ 𝗻𝗵𝗲́ ${name}\n→ 𝗡𝗲̂́𝘂 𝘅𝗮̉𝘆 𝗿𝗮 𝗹𝗼̂̃𝗶 𝗵𝗮̃𝘆 𝗯𝗮́𝗼 𝘃𝗲̂̀ 𝗮𝗱𝗺𝗶𝗻`, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `sb=5NWxY3CmsY7cQ3BwVvcbHAHm;datr=TX-9Y-tXh-bkyEtNFVkIkn0v;vpd=v1%3B800x424x1.7000000476837158;locale=vi_VN;fr=0xmxbEoEoTNsnw31t.AWUaz1CCKaYZuxCJBspUeHrLpdw.BjuwP7.0F.AAA.0.0.Bj8faa.AWX0oasMEMQ;c_user=100078243196302;xs=19%3Aup3n4o4i1D7Wvg%3A2%3A1676801690%3A-1%3A6299;m_page_voice=100078243196302;m_pixel_ratio=1.2062500715255737;wd=598x1197;`,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `sb=5NWxY3CmsY7cQ3BwVvcbHAHm;datr=TX-9Y-tXh-bkyEtNFVkIkn0v;vpd=v1%3B800x424x1.7000000476837158;locale=vi_VN;fr=0xmxbEoEoTNsnw31t.AWUaz1CCKaYZuxCJBspUeHrLpdw.BjuwP7.0F.AAA.0.0.Bj8faa.AWX0oasMEMQ;c_user=100078243196302;xs=19%3Aup3n4o4i1D7Wvg%3A2%3A1676801690%3A-1%3A6299;m_page_voice=100078243196302;m_pixel_ratio=1.2062500715255737;wd=598x1197;`;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=af9dee&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({ 	body: `💓 === [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗖𝗔𝗣𝗪𝗔𝗟𝗟 𝑺𝑬𝑵𝑷𝑨𝑰 𝑩𝑶𝑻 ] === 💓\n-------------------------------\n𝗫𝘂̛̉ 𝗹𝘆́ 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name}\n𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 !𝗰𝗮𝗽 <𝘁𝗮𝗴 𝘁𝗲̂𝗻> đ𝗲̂̉ 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗻𝗴𝘂̛𝗼̛̀𝗶 đ𝗼́\n𝗛𝗼𝗮̣̆𝗰 !𝗰𝗮𝗽 <𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻> đ𝗲̂̉ 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻`,
                         attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
        }