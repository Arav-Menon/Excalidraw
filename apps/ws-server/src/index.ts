import { WebSocketServer } from 'ws'
import jwt, { JwtPayload } from 'jsonwebtoken'
import 'dotenv/config'

const wss = new WebSocketServer( { port : 8080 })

wss.on('connection', (socket, request) => {

    const url = request.url

    if(!url) {
        return;
    }

    const queryParams = new URLSearchParams(url.split('?') [1])
    const token = queryParams.get('token') ?? ""

    const decoded = jwt.verify(token, "process.env.JWT_ROOM_TOKEN")

    if(!decoded || !(decoded as JwtPayload ).userId) {
        wss.close()
        return
    }   
    socket.on('message', (mssg) => {
        console.log(`Recieve data from client ${mssg}`)
    })

    socket.send('Something')

})