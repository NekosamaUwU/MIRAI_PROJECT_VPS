module.exports.config = {
    name: "rnamebot",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "CatalizCS",
    description: "Đổi biệt danh của bot ở toàn bộ bot!",
    commandCategory: "Hệ Thống",
    usages: "[Biệt danh cần đặt]",
    cooldowns: 2,
};

module.exports.run = async ({ event, api, global, args, Threads, client }) => {
  const permission = ["1824557330"];
	if (!permission.includes(event.senderID)) return api.sendMessage("Xin vị khách lưu ý! Vì đây là lệnh bao gồm ban nhóm và out nhóm từ xa. Và đây là lệnh chỉ dành cho gói Admin cao hơn, nếu quý khách đang sử dụng gói NewbieAdmin - 20.000VND thì không thể sử dụng lệnh này nhé. Xin cảm ơn 💖\n\nMọi thắc mắc vui lòng liên hệ chủ điều hành qua m.me/tho.kieuanhhihi", event.threadID, event.messageID);
    const custom = args.join(" "),
            allThread = await Threads.getAll(["threadID"]),
            idBot = api.getCurrentUserID();
    var threadError = [],
        count = 0;
    if (custom.length != 0) {
        for (const idThread of allThread) {
            api.changeNickname(custom, idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
await new Promise(resolve => setTimeout(resolve, 500));
        }
return api.sendMessage(`Đã đổi tên thành công cho ${count} nhóm`, event.threadID, () => {
if (threadError != 0) return api.sendMessage("[!] Không thể đổi tên tại" + threadError.lenght + " Nhóm",event.threadID, event.messageID)
        }, event.messageID);
    }
    else {
for (const idThread of allThread) {
const threadSetting = client.threadSetting.get(idThread.threadID) || {};
api.changeNickname(`[ ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, 
idThread.threadID, idBot, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
await new Promise(resolve => setTimeout(resolve, 500));
        }
 return api.sendMessage(`Đã đổi tên thành công cho ${count} nhóm`, event.threadID, () => {
if (threadError != 0) return api.sendMessage("[!] Không thể đổi tên tại " + threadError.length + " Nhóm",event.threadID, event.messageID)
        }, event.messageID);
    }
}