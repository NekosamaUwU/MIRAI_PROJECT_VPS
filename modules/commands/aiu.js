module.exports.config = {
  name: "aiu",
  version: "1.2.0",
  hasPermssion: 0,
  credits: "Lmao tủn tủn",
  description: "nhắc bot cái ầu uồi:)))",
  commandCategory: "Tình yêu",
  usages: "[trống]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ api, event, Users }) => {
  const cc = [
    "Nhớ em yêu quá <3", 
    "Ơi anh nghe nè <3", 
    "em hết thương anh rùi🥺", 
    "Trái đất quay quanh mặt trời còn em quay quanh tâm trí của anh á", 
    "Ai anh yêu mày, bị ảo à :)?",
    "Nhớ anh quá đúng không",
    "Anh yêu em =))"
  ];
  let name = await Users.getNameUser(event.senderID)
  if (event.body.toLowerCase() == "aiu"){ 
    return api.sendMessage(
      name + ` ${cc[Math.floor(Math.random() * cc.length)]}`
      , event.threadID, event.messageID)
  }
  
}

module.exports.run = async ({ api, event, Users }) => {
  let name = await Users.getNameUser(event.senderID)
  return api.sendMessage(name + ' biết xài không hả', event.threadID, event.messageID)
}
