module.exports = function({ api }) {
    const reaction = "😳";
    return function({ event }) {
        const { senderID, reaction, messageID } = event;
        if (senderID == api.getCurrentUserID()) {
            if (reaction == "😳") return api.unsendMessage(messageID);
        }
    };
};