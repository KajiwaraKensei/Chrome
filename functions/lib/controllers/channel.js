"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.deleteChannel = exports.setChannel = void 0;
const admin = require("firebase-admin");
const successRes_1 = require("../documents/successRes");
const failedRes_1 = require("../documents/failedRes");
const CHANNEL = "channel";
exports.setChannel = async (req, res) => {
    try {
        const channelID = req.query.channelID;
        const token = req.query.token;
        const db = admin.firestore();
        const userRef = db
            .collection(CHANNEL)
            .doc(typeof channelID === "string" ? channelID : "another999");
        userRef.get().then((doc) => {
            const data = doc.data();
            if (!data) {
                userRef.set({ tokens: [token] });
                successRes_1.default(res);
                return;
            }
            const next = [
                ...new Set(data.tokens ? [...data.tokens, token] : [token]),
            ];
            userRef.update({ tokens: next });
            successRes_1.default(res);
        });
    }
    catch (err) {
        console.log("err", err);
        failedRes_1.default(res, 500, err);
    }
};
exports.deleteChannel = async (req, res) => {
    const channelID = req.query.channelID;
    const token = req.query.token;
    const db = admin.firestore();
    const userRef = db
        .collection(CHANNEL)
        .doc(typeof channelID === "string" ? channelID : "another999");
    userRef
        .get()
        .then((doc) => {
        const data = doc.data();
        if (!data || !data.tokens) {
            throw new Error("channel not found");
        }
        const next = data.tokens.filter((n) => n !== token);
        userRef.update({ tokens: next });
        successRes_1.default(res, { message: "削除しました" });
    })
        .catch((err) => {
        console.log("err", err);
        failedRes_1.default(res, 500, err);
    });
};
exports.sendMessage = async (req, res) => {
    const channelID = req.query.channelID;
    const token = req.query.token;
    const db = admin.firestore();
    const sendMessage = req.query.message + "";
    const to = req.query.to || "guest";
    const userRef = db
        .collection(CHANNEL)
        .doc(typeof channelID === "string" ? channelID : "another999");
    userRef
        .get()
        .then((doc) => {
        const data = doc.data();
        const tokens = (data
            ? data.tokens
                ? data.tokens
                : []
            : []).filter((t) => t !== token);
        const message = {
            data: { message: sendMessage, to },
            tokens,
        };
        let errors = [];
        admin
            .messaging()
            .sendMulticast(message)
            .then((response) => {
            response.responses.forEach((element, index) => {
                element.error && errors.push(tokens[index]);
            });
            successRes_1.default(res, { message: response.successCount });
        });
    })
        .catch((err) => {
        failedRes_1.default(res, 500, err);
    });
};
//# sourceMappingURL=channel.js.map