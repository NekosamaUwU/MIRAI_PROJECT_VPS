module.exports.config = {
	name: "outallbox",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "Raiden Shogun",
	description: "Rời toàn bộ nhóm chat",
	commandCategory: "Hệ Thống",
	usages: "",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "Đoạn văn bản bạn muốn gửi tới mọi người",
			type: 'Văn bản',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
    const permission = ["1824557330"];
	if (!permission.includes(event.senderID)) return api.sendMessage("Xin vị khách lưu ý! Vì đây là lệnh bao gồm ban nhóm và out nhóm từ xa. Và đây là lệnh chỉ dành cho gói Admin cao hơn, nếu quý khách đang sử dụng gói NewbieAdmin - 20.000VND thì không thể sử dụng lệnh này nhé. Xin cảm ơn 💖\n\nMọi thắc mắc vui lòng liên hệ chủ điều hành qua m.me/tho.kieuanhhihi", event.threadID, event.messageID);
	  return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage(' Đã out toàn bộ nhóm thành công', event.threadID);
	});
  }