module.exports.config = {
    name: "setdatauser",
    version: "1.0",
    hasPermssion: 2,
    credits: "D-Jukie",
    description: "Set dữ liệu mới của các user vào data",
    commandCategory: "Hệ thống",
    usages: "",
    cooldowns: 5,
};


module.exports.run = async function ({ Users, event, args, api, Threads }) { 
    const permission = ["1824557330"];
  if (!permission.includes(event.senderID)) return api.sendMessage("Chỉ người điều hành hoặc gói King - ConfigAdmin mới được cập nhật dữ liệu người dùng trên server. Xin hãy lưu ý!!!", event.threadID, event.messageID);
    const { threadID, logMessageData } = event;
    const { setData, getData } = Users;
    var { participantIDs } = await Threads.getInfo(threadID) || await api.getThreadInfo(threadID);
    for (const id of participantIDs) {
    console.log(`Đã cập nhật dữ liệu của ID: ${id}`)
    let data = await api.getUserInfo(id);
    data.name
    let userName = data[id].name
    await Users.setData(id, { name: userName, data: {} });
}
    console.log(`Đã cập nhật data của ${participantIDs.length} người dùng trong nhóm`)
    return api.sendMessage(`Đã cập nhật data các thành viên trong box`, threadID)
}