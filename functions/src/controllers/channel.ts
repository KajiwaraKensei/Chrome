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
        userRef.set({ contacts: [token] });
        Success(res);
        return;
      }
      const next = [
        ...new Set(data.contacts ? [...data.contacts, token] : [token]),
      ];
      userRef.update({ contacts: next });
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

      if (!data || !data.contacts) {
        throw new Error("channel not found");
      }
      const next = data.contacts.filter((n: string[]) => n !== token);
      userRef.update({ contacts: next });
      Success(res, { message: "削除しました" });
    })
    .catch((err) => {
      console.log("err", err);

      Fail(res, 500, err);
    });
};
