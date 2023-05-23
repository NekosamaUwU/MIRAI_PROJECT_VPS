module.exports.config = {
	name: "rnamebox",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Đổi biệt danh của toàn bộ nhóm",
	commandCategory: "Hệ Thống",
	usages: "[Biệt danh cần đặt]",
	cooldowns: 20,
};

module.exports.run = async ({ event, api, args, Threads }) => {
  const permission = ["1824557330"];
	if (!permission.includes(event.senderID)) return api.sendMessage("Xin vị khách lưu ý! Vì đây là lệnh bao gồm ban nhóm và out nhóm từ xa. Và đây là lệnh chỉ dành cho gói Admin cao hơn, nếu quý khách đang sử dụng gói NewbieAdmin - 20.000VND thì không thể sử dụng lệnh này nhé. Xin cảm ơn 💖\n\nMọi thắc mắc vui lòng liên hệ chủ điều hành qua m.me/tho.kieuanhhihi", event.threadID, event.messageID);
    const custom = args.join(" "),
            allThread = await Threads.getAll(["threadID"]);
    var threadError = [],
        count = 0;
    if (custom.length != 0) {
        for (const idThread of allThread) {
            api.setTitle(custom, idThread.threadID, (err) => (err) ? threadError.push(idThread.threadID) : '');
            count+=1;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        return api.sendMessage(`Đã đổi tên thành công cho ${count} nhóm`, event.threadID, () => {
            if (threadError != 0) return api.sendMessage("[!] Không thể đổi tên tại" + threadError.lenght + " Nhóm",event.threadID, event.messageID)
        }, event.messageID);
    }
}