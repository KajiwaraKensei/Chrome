import * as Express from "express";

export default (res: Express.Response, send: object = { success: true }) => {
  res.status(200).json({ success: true, ...send });
};
