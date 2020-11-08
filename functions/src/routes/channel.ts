import * as express from "express";
import * as controller from "../controllers/channel";

const router = express.Router();
router.get("/set", controller.setChannel);

export default router;
