import express, {Express} from "express";
import { userRouter } from "./auth/auth";
import { roomRouter } from "./room/room";
import { profileRouter } from "./profile/profile";


export const app : Express  = express();
app.use(express.json())

app.use('/auth', userRouter)
app.use('/room', roomRouter )
app.use('/profile', profileRouter)
