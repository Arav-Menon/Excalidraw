import express, { Router } from "express";
import { middleware } from "../middleware";
import { prisma } from "@repo/db/prisma";
import { SignupValidations } from "@repo/common/authValidation";
import bcrypt from "bcrypt";

export const profileRouter: Router = express.Router();

// profileRouter.get("/user/profile", middleware, async (req, res) => {
//   const getUser = await prisma.user.findMany();

//   console.log(getUser);

//   res.send({
//     getUser,
//   });
// });

//@ts-ignore
profileRouter.get("/user/profile", middleware, async (req, res) => {

  const userId = (req as any).userId;

  try {
    const getUser = await prisma.user.findUnique({
      where: {
        id: userId as number
      },
      select: {
        id: true,
        userName: true,
        email: true,
        createdAt: true,
        password: false,
      },
    });

    if (!getUser) {  
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user: getUser });
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

//@ts-ignore
profileRouter.post("/user/profile/edit", middleware, async (req, res) => {
  const result = SignupValidations.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: result.error.flatten().fieldErrors,
    });
  }

  const { userName, email } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: {
        email,
      },
      data: {
        userName,
        email,
      },
    });

    return res.status(200).json({
      message: "Your profile has been updated",
      updatedUser,
    });
  } catch (err) {
    console.error("Profile update error:", err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

// profileRouter.delete("/user/profile/delete", middleware, async (req, res) => {

//   const removeUser = await prisma.user.de

// });
