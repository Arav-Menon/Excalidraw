import express, { Response, Request, Router } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import {
  SignupValidations,
  SigninValidations,
} from "@repo/common/authValidation";
import bcrypt from "bcrypt";
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
  try {
    const { userName, email, password } = req.body;

    // const findUser = await prisma.user.findMany({
    //   where: {
    //     email,
    //   },
    // });

    // if (findUser) {
    //   res.status(409).json({
    //     error: "User already exist",
    //     findUser,
    //   });
    // }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = await prisma.user.create({
      data: {
        userName,
        email,
        //@ts-ignore
        password: hashedPassword,
      },
    });

    console.log(newUser);

    const token = jwt.sign(
      {
        id: newUser.id,
      },
      "process.env.JWT_ROOM_TOKEN"
    );
    res.status(200).json({
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
});

//@ts-ignore
userRouter.post("/user/signin", async (req, res) => {
  try {
    const result = SigninValidations.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: result.error.flatten().fieldErrors,
      });
    }

    const { email, password } = req.body;

    const existUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (existUser && (await bcrypt.compare(password, existUser.password))) {
      const token = jwt.sign(
        {
          id: existUser.id,
        },
        "process.env.JWT_ROOM_TOKEN"
      );

      res.status(200).json({
        message: "You're logged in",
        token,
      });
    }

    if (!existUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      error: error,
    });
  }
});
