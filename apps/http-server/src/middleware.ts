import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.header("authorization") ?? "";

  const decoded = jwt.verify(token, process.env.JWT_ROOM_TOKEN ?? "");

  if (decoded) {
    req.userId = (decoded as JwtPayload).userId
  } else {
    res.status(403).json({ message: "Not Authorized" });
  }
}
