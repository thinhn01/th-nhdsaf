module.exports.config = {
    name: "avtlolv2",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Rip05",
    description: "tạo avatar lol v2 cực chất :))",
    commandCategory: "Đa phương tiện",
    usages: "[Text1]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function ({ api, event, args}) {
    const { threadID, messageID, senderID, body } = event;
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    const moduleName = this.config.name;
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    let text = args.join(" ")
    let params = {text};
    params = qs.stringify(params);
    api.sendMessage("Đang khởi tạo hình ảnh, vui lòng chờ đợi...", event.threadID, event.messageID);
    const pathsave = __dirname + `/cache/avtlolv2.png`;
    let imageBuffer;
await axios.get(`https://api.lolhuman.xyz/api/ephoto1/lolbanner?apikey=b229f3dc257deae3030fe409&text=${text}`, {
            responseType: "arraybuffer"
        })
        .then(data => {
            const imageBuffer = data.data;
            fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
            api.sendMessage({body: `[R05] - Module: ${moduleName} || Tên: ${nameSender}  || - Text: ${text}`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);})
        .catch(error => {
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};