import * as express from "express";
import * as controller from "../controllers/channel";

const router = express.Router();
router.get("/set", controller.setChannel);
router.get("/delete", controller.deleteChannel);
router.get("/sendMessage", controller.sendMessage);

export default router;
