import { RequestHandler } from "express";

import { getUserAuthStatus } from "./utils";

const status: RequestHandler = async (req, res) => {
  const authStatus = await getUserAuthStatus(req);
  res.json(authStatus);
};

export default status;
