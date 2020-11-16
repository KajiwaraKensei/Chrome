"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const express = require("express");
const cors = require("cors");
const channel_1 = require("./routes/channel");
const app = express();
app.use(cors({ origin: true }));
app.use("/channel", channel_1.default);
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map