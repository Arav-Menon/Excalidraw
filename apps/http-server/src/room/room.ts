import express, { Router } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config';
import { middleware } from '../middleware';

export const roomRouter:Router = express.Router()

roomRouter.post('/user/room', middleware, (req, res) => {

    res.json({
        room : "123d"
    })

} )