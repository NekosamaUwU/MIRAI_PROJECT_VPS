module.exports.config = {
	name: "setmoney",
	version: "0.0.1",
	hasPermssion: 2,
	credits: "loi",
	description: "thay đổi số tiền của bản thân hoặc người được tag",
	commandCategory: "Tiện ích",
	usages: "setmoney [Tag]",
	cooldowns: 5,
	info: [
		{
			key: 'Tag',
			prompt: 'Để trống hoặc tag một người nào đó, có thể tag nhiều người',
			type: 'Văn Bản',
			example: '@Mirai-chan'
		}
	]
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users}) {
var mention = Object.keys(event.mentions)[0];
    var prefix = ";"
    var {body} = event;
    			var content = body.slice(prefix.length + 9, body.length);
			var sender = content.slice(0, content.lastIndexOf(" "));
			var moneySet = content.substring(content.lastIndexOf(" ") + 1);

  const permission = ["100000287637041"];
	if (!permission.includes(event.senderID)) return api.sendMessage("NewbieAdmin không có quyền hạn thực thi lệnh này, vui lòng nâng cấp lên gói cao hơn!\n\nLiên hệ m.me/tho.kieuanhhihi để nâng cấp!", event.threadID, event.messageID);

  
    			if (args[0]=='me'){
    			 return api.sendMessage(`Đã thay đổi số dư của bạn thành ${moneySet} đô`, event.threadID, () => Currencies.increaseMoney(event.senderID, parseInt(moneySet)), event.messageID)	
			}
			else if(args[0]=="del"){
if (args[1] == 'me'){
			var s = event.senderID;
			const moneyme =(await Currencies.getData(event.senderID)).money;
			api.sendMessage(`✅Đã xoá toàn bộ số tiền của bạn\n💸Số tiền xoá là ${moneyme}.`, event.threadID, async () => await Currencies.decreaseMoney(event.senderID, parseInt(moneyme)));
		}	
		else if (Object.keys(event.mentions).length == 1) {
var mention = Object.keys(event.mentions)[0];
		const moneydel = (await Currencies.getData(mention)).money;
		api.sendMessage(`✅Đã xoá toàn bộ số tiền của ${event.mentions[mention].replace("@", "")}\n💸Số tiền xoá là ${moneydel}.`, event.threadID, async () => await Currencies.decreaseMoney(mention, parseInt(moneydel)));
		}
		
		else return	api.sendMessage("sai cú pháp", event.threadID, event.messageID);
		}
			else if (Object.keys(event.mentions).length == 1) {
			return api.sendMessage({
				body: (`𝐃𝐚̃ 𝐭𝐡𝐚𝐲 𝐝𝐨̂̉𝐢 𝐬𝐨̂́ 𝐝𝐮̛ 𝐜𝐮̉𝐚 ${event.mentions[mention].replace("@", "")} 𝐓𝐡𝐚̀𝐧𝐡 ${moneySet} 𝐃𝐨̂`),
				mentions: [{
					tag: event.mentions[mention].replace("@", ""),
					id: mention
				}]
			}, event.threadID, async () => Currencies.increaseMoney(mention, parseInt(moneySet)), event.messageID)
		}
		else if(args[0]=="UID"){
		var id = args[1];
		var cut = args[2];
		let nameeee = (await Users.getData(id)).name
		   return api.sendMessage(`𝐃𝐚̃ 𝐭𝐡𝐚𝐲 𝐝𝐨̂̉𝐢 𝐬𝐨̂́ 𝐝𝐮̛ 𝐜𝐮̉𝐚 ${nameeee} 𝐓𝐡𝐚̀𝐧𝐡 ${cut} 𝐃𝐨̂`, event.threadID, () => Currencies.increaseMoney(id, parseInt(cut)), event.messageID)	

		}
else {
	api.sendMessage("sai cú pháp", event.threadID, event.messageID)
	}
        }