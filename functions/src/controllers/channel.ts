import * as admin from "firebase-admin";
import * as Express from "express";
import Success from "../documents/successRes";
import Fail from "../documents/failedRes";
const CHANNEL = "channel";
export const setChannel = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const channelID: unknown = req.query.channelID;
    const token: unknown = req.query.token;
    const db = admin.firestore();
    const userRef = db
      .collection(CHANNEL)
      .doc(typeof channelID === "string" ? channelID : "another999");
    userRef.get().then((doc) => {
      const data = doc.data();

      if (!data) {
        userRef.set({ tokens: [token] });
        Success(res);
        return;
      }
      const next = [
        ...new Set(data.tokens ? [...data.tokens, token] : [token]),
      ];
      userRef.update({ tokens: next });
      Success(res);
    });
  } catch (err) {
    console.log("err", err);

    Fail(res, 500, err);
  }
};

export const deleteChannel = async (
  req: Express.Request,
  res: Express.Response
) => {
  const channelID: unknown = req.query.channelID;
  const token: unknown = req.query.token;
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
      const next = data.tokens.filter((n: string[]) => n !== token);
      userRef.update({ tokens: next });
      Success(res, { message: "削除しました" });
    })
    .catch((err) => {
      console.log("err", err);
      Fail(res, 500, err);
    });
};

export const sendMessage = async (
  req: Express.Request,
  res: Express.Response
) => {
  const channelID: unknown = req.query.channelID;
  const token: unknown = req.query.token;
  const db = admin.firestore();
  const sendMessage: string = req.query.message + "";
  const to = (req.query.to as string) || "guest";
  const userRef = db
    .collection(CHANNEL)
    .doc(typeof channelID === "string" ? channelID : "another999");

  userRef
    .get()
    .then((doc) => {
      const data = doc.data();
      const tokens: string[] = (data
        ? data.tokens
          ? data.tokens
          : []
        : []
      ).filter((t: string) => t !== token);
      const message = {
        data: { message: sendMessage, to },
        tokens,
      };

      let errors: string[] = [];
      admin
        .messaging()
        .sendMulticast(message)
        .then((response) => {
          response.responses.forEach((element, index) => {
            element.error && errors.push(tokens[index]);
          });

          Success(res, { message: response.successCount });
        });
    })
    .catch((err) => {
      Fail(res, 500, err);
    });
};
