import express from "express";
import { userRouter } from "./auth/auth";
import { roomRouter } from "./room/room";
import { profileRouter } from "./profile/profile";

const app = express();
app.use(express.json())

app.use('/auth', userRouter)
app.use('/room', roomRouter )
app.use('/profile', profileRouter)

app.listen(3001, () => {  
  console.log('Server is started')
})