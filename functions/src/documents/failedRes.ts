import * as Express from "express";

export default (
  res: Express.Response,
  status: number = 500,
  errorMessage: string = ""
) => {
  res.status(status).json({ success: false, errorMessage });
};
