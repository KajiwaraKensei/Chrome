import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

import * as express from "express";
import * as cors from "cors";
import channel from "./routes/channel";
const app = express();
app.use(cors({ origin: true }));
app.use("/channel", channel);
exports.api = functions.https.onRequest(app);
