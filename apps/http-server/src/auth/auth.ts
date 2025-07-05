import express, { Response, Request, Router } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { SignupValidations } from "@repo/common/authValidation";
import bcrypt from "bcrypt";
import { JWT_SECRET } from "@repo/backend-common/confing";
import { prisma } from "@repo/db/prisma";

export const userRouter: Router = express.Router();

//@ts-ignore
userRouter.post("/user/signup", async (req: Request, res: Response) => {
  const result = SignupValidations.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: result.error.flatten().fieldErrors,
    });
  }

  const { userName, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = await prisma.user.create({
    data: {
      userName,
      email,
      //@ts-ignore
      password : hashedPassword
    },
  });

  const token = jwt.sign(
    {
      id: newUser.id,
    },
    process.env.JWT_ROOM_TOKEN ?? ""
  );
  res.status(200).json({
    message : "Your account has been created",
    token,
  });
});

userRouter.post("/user/signin", (req, res) => {});
