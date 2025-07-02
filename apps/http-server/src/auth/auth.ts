import express, { Router } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
// import { prisma } from "@repo/db/prisma"
// import { JWT_SECRET } from '@repo/backend-common/confing'    
// import { inputValidation } from "@repo/common/authValidation"

export const userRouter:Router = express.Router()

userRouter.post('/user/signup', (req, res) => {

    const userId = 1
      const token = jwt.sign({
        userId
    }, process.env.JWT_ROOM_TOKEN ?? "")

    res.json({
        token
    })

})


userRouter.post('/user/signin', (req, res) => {
})
