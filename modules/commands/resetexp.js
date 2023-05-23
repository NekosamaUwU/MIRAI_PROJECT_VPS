module.exports.config = {
    name: "resetexp",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Raiden Makoto",
    description: "Xoá toàn bộ tương tác user",
    commandCategory: "Hệ Thống",
    usages: "[cc], [del], [all]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies }) => {
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var exp = currenciesData.exp;
            if (typeof exp != "undefined") {
                exp -= exp;
                await Currencies.setData(user.id, { exp });
            }
        }
    }

  const permission = ["1824557330"];
	  if (!permission.includes(event.senderID)) return api.sendMessage("Chú ý!!! Lệnh này chỉ dành cho các gói Admin cao hơn, nếu bạn đang sử dụng gói NewbieAdmin thì không thể thực thi lệnh này! Xin cảm ơn 💖\n\nChi tiết liên hệ m.me/tho.kieuanhhihi", event.threadID, event.messageID);
  
    return api.sendMessage("done", event.threadID);
}