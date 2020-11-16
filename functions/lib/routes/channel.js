"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controller = require("../controllers/channel");
const router = express.Router();
router.get("/set", controller.setChannel);
router.get("/delete", controller.deleteChannel);
router.get("/sendMessage", controller.sendMessage);
exports.default = router;
//# sourceMappingURL=channel.js.map