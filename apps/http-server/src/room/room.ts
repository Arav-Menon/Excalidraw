import express, { Router } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { middleware } from "../middleware";
import { RoomValidation } from "@repo/common/authValidation";
import { prisma } from "@repo/db/prisma";
import { parse } from "dotenv";
export const roomRouter: Router = express.Router();

//@ts-ignore
roomRouter.post("/room", middleware, async (req, res) => {
    const parsedData = RoomValidation.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    const userId = req.id;
    console.log(userId)

    try {
        const room = await prisma.room.create({
            data: {
                slug: parsedData.data.name,
                adminId: userId as number
            }
        })

        console.log(room)

        res.json({
            roomId: room.id
        })
    } catch(e) {
        console.log(e)
        res.status(411).json({
            message: "Room already exists with this name"
        })
    }
})

roomRouter.get("/chats/:roomId", (req, res) => {
    const roomId = Number(req.params.roomId);
})