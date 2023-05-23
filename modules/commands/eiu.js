module.exports.config = {
  name: "eiu",
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
    "Nhớ anh yêu quá <3", 
    "Ơi em nghe nè <3", 
    "anh hết thương em rùi🥺", 
    "Chả yêu em, chả quan tâm đến em :<", 
    "Ai em yêu mày, bị ảo à cu",
    "Cho em tiền đi mua kẹo🥺",
    "Em yêu anh =))"
  ];
  let name = await Users.getNameUser(event.senderID)
  if (event.body.toLowerCase() == "eiu"){ 
    return api.sendMessage(
      name + ` ${cc[Math.floor(Math.random() * cc.length)]}`
      , event.threadID, event.messageID)
  }
  
}

module.exports.run = async ({ api, event, Users }) => {
  let name = await Users.getNameUser(event.senderID)
  return api.sendMessage(name + ' biết xài không hả', event.threadID, event.messageID)
}
