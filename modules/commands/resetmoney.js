module.exports.config = {
    name: "resetmoney",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Yae Miko",
    description: "Reset số tiền của cả nhóm về 0",
    commandCategory: "Hệ Thống",
    usages: "[cc], [del], [all]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies }) => {
    const data = await api.getThreadInfo(event.threadID);
    for (const user of data.userInfo) {
        var currenciesData = await Currencies.getData(user.id)
        if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
                money -= money;
                await Currencies.setData(user.id, { money });
            }
        }
    }
  
  const permission = ["1824557330"];
	  if (!permission.includes(event.senderID)) return api.sendMessage("Gói NewbieAdmin - 20.000VND không được phép sử dụng lệnh này!\n\nChi tiết liên hệ m.me/tho.kieuanhhihi", event.threadID, event.messageID);
  
    return api.sendMessage("Số money của thành viên nhóm đã được reset về mức 0 !", event.threadID);
}