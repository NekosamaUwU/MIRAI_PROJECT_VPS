module.exports.config = {
	name: "ngủ",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "ManhG",
	description: "",
	commandCategory: "Other",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};

module.exports.handleEvent = async ({
	event,
	api,
	Users
}) => {
	const fs = global.nodemodule["fs-extra"];
	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
  const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:s");
const getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "khuya rồi ngủ thật ngon nhé😘" : getHours < 8 ? "sáng rồi ngủ ngủ hoài😡" : getHours < 12 ? "chúc bạn ngủ trưa ngon giấc🤗" : getHours < 17 ? "chiều chắc mệt lắm nhỉ ngủ tí đi😝" : getHours < 23 ? "chúc bạn buổi tối ngủ ngon🤧" : "khuya rồi ngủ thật ngon nhé🤤"}` 
	if (typeof thread["ngủ"] !== "undefined" && thread["ngủ"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `💘bái bai cậu ${name}💖\nBây giờ là ${gio}\n${session}`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://hutao.feedheavens.repl.co')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["ngủ", "bái bai", "bai", "tạm biệt", "bye", "goodbye", "hẹn gặp lại", "ngủ ngon", "đi ngủ"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "ngủ thành công",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "ngủ success!",
	}
}

module.exports.run = async function({
	api,
	event,
	Threads,
	getText
}) {
	const {
		threadID,
		messageID
	} = event;
	let data = (await Threads.getData(threadID)).data;

	if (typeof data["ngủ"] == "undefined" || data["ngủ"] == true) data["ngủ"] = false;
	else data["ngủ"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["ngủ"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
      }