import express, { Express } from "express";
import { userRouter } from "./auth/auth";
import { roomRouter } from "./room/room";
import { profileRouter } from "./profile/profile";
import cors from "cors";

export const app: Express = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/auth", userRouter);
app.use("/room", roomRouter);
app.use("/profile", profileRouter);
