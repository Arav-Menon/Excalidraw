import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.header("authorization") ?? "";
  const token = authHeader.startsWith("Bearer") ? authHeader.split(" ")[1] : "";

  if (!token) {
    return res.status(404).json({
      message: "Token not provided",
    });
  }

  try {
    const decode = jwt.verify(
      token,
      process.env.JWT_ROOM_TOKEN ?? ""
    ) as JwtPayload;

    console.log(decode);

    (req as any).userId = Number(decode.userId);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
}
