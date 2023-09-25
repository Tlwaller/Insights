import { RequestHandler } from "express";

export default (fileName: string, options: object): RequestHandler =>
  (req, res, next) => {
    if (
      (req.method === "GET" || req.method === "HEAD") &&
      req.accepts("html")
    ) {
      res.sendFile(fileName, options, (err: Error) => err && next());
    } else next();
  };
  